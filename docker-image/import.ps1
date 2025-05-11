# Import script for Notification Service
Write-Host "Importing Notification Service Docker image..."
docker load -i notification-service.tar
Write-Host "Notification Service image imported successfully!"