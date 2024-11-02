# Use the official NGINX image
FROM nginx:alpine

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create the .htpasswd file for basic auth
RUN apk add --no-cache apache2-utils && \
    htpasswd -cb /etc/nginx/.htpasswd user password

EXPOSE 80
