# Notification Service Run Script

# Check if Docker is installed and running
$dockerRunning = Get-Process -Name "Docker Desktop" -ErrorAction SilentlyContinue
if (-not $dockerRunning) {
    Write-Host "Docker Desktop is not running. Please start Docker Desktop and try again." -ForegroundColor Red
    exit 1
}

# Check if the Docker image exists
$imageExists = docker images -q notification-service:latest
if (-not $imageExists) {
    # Try to load the image if it doesn't exist
    if (Test-Path "docker-image/notification-service.tar") {
        Write-Host "Loading Notification Service Docker image..." -ForegroundColor Yellow
        docker load -i docker-image/notification-service.tar
    } else {
        # Build the image if the TAR file doesn't exist
        Write-Host "Building Notification Service Docker image..." -ForegroundColor Yellow
        docker-compose build
    }
}

# Start the service
Write-Host "Starting Notification Service..." -ForegroundColor Green
docker-compose up -d

Write-Host "Notification Service is running on http://localhost:4002" -ForegroundColor Green