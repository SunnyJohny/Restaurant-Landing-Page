A simple landing page - first designed in figma and then coded in React. Hope you like it.


Dockerizing landing page WebSite
This README provides instructions on how to build and run an application using Docker. Docker is a platform that enables developers to build, package, and deploy applications in a containerized environment. Containerization allows for greater flexibility and portability, as applications can be deployed consistently across different environments without the need for extensive configuration.

Prerequisites
Before you begin, ensure that you have the following prerequisites:

Docker installed on your local machine or server
The source code for the application you wish to containerize
Building the Docker Image
To build a Docker image for your application, follow these steps:

Navigate to the root directory of your application's source code.
Create a Dockerfile in this directory. The Dockerfile is a set of instructions that tells Docker how to build the container image. Here is an example Dockerfile for a simple Node.js application:
bash
Copy code
# Use an official Node.js runtime as a parent image
FROM node:10

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run the command to start the server
CMD ["npm", "start"]
In the same directory as the Dockerfile, run the following command to build the Docker image:
Copy code
docker build -t myapp .
This command builds an image from the Dockerfile in the current directory and names it myapp. The . at the end of the command specifies that the build context is the current directory.

Running the Docker Container
Once you have built your Docker image, you can run a container from it using the following command:

arduino
Copy code
docker run -p 80:80 myapp
This command runs a container from the myapp image and maps port 80 in the container to port 80 on the host. This allows you to access the application via your web browser at http://localhost:80.

Conclusion
In this README, we provided instructions on how to build and run an application using Docker. By containerizing your application, you can ensure consistent deployment across different environments, making it easier to manage and maintain your application.