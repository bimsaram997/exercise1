FROM nginx:alpine


# Copy static HTML page into Nginx's HTML directory
COPY index.html /etc/nginx/index.html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the .htpasswd file for basic authentication
COPY .htpasswd /etc/nginx/.htpasswd

# Expose port 8198 (outside port for NGINX)
EXPOSE 80
