FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm build


ARG nginx-config-file
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as serve
ENV NODE_ENV production
# Copy built assets from builder
# /usr/share/nginx/html is static assets destination
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY ${nginx-config-file} /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]