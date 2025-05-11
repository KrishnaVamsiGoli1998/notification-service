# Notification Service

Notification handling microservice for the Scalable Microservices Application.

## Features

- Send notifications for task updates
- Notification history and tracking
- Multiple notification channels support

## Prerequisites

- Docker Desktop
- Node.js (for development)
- Kubernetes (optional, for k8s deployment)

## Quick Start

### Using Pre-built Docker Image

1. Import the Docker image:

   ```
   cd docker-image
   .\import.ps1
   ```

2. Start the service:
   ```
   cd ..
   docker-compose up -d
   ```

### Building from Source

1. Build and start the service:
   ```
   docker-compose up -d --build
   ```

### Kubernetes Deployment

1. Apply the Kubernetes configuration:

   ```
   kubectl apply -f k8s-deployment.yaml
   ```

2. Check the deployment status:
   ```
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

## API Endpoints

- `GET /notifications` - Get all notifications
- `GET /notifications/:id` - Get a specific notification
- `POST /notifications` - Create a new notification
- `PUT /notifications/:id` - Update a notification
- `DELETE /notifications/:id` - Delete a notification

## Environment Variables

Create a `.env` file with the following variables:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_NAME=your_db_name
PORT=4002
```

## Development

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

## Docker Commands

- Build the image:

  ```
  docker build -t notification-service .
  ```

- Run the container:

  ```
  docker run -p 4002:4002 --env-file .env notification-service
  ```

- Save the image:

  ```
  docker save notification-service:latest -o notification-service.tar
  ```

- Load the image:
  ```
  docker load -i notification-service.tar
  ```
