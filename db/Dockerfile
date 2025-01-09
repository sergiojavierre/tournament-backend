FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=tournament
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Expose the default MySQL port
EXPOSE 3306

# Copy the initialization script to the Docker container
COPY ./schema.sql /docker-entrypoint-initdb.d/

# Set the default command to run when starting the container
CMD ["mysqld"]