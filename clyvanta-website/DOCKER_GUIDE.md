# Docker Development Guide

## Quick Commands

### Start Development
```bash
# Build image (first time or after Dockerfile changes)
docker build -t clyvanta-web .

# Run container
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web

# Open http://localhost:3000
```

### Daily Development
```bash
# Start (if stopped)
docker start clyvanta-dev

# Stop
docker stop clyvanta-dev

# View logs
docker logs clyvanta-dev

# Follow logs in real-time
docker logs -f clyvanta-dev
```

### After Code Changes
```bash
# Stop and remove old container
docker stop clyvanta-dev && docker rm clyvanta-dev

# Rebuild image
docker build -t clyvanta-web .

# Start new container
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
```

### Troubleshooting
```bash
# List running containers
docker ps

# List all containers
docker ps -a

# Remove container
docker rm clyvanta-dev

# Remove image
docker rmi clyvanta-web

# Clean up everything (careful!)
docker system prune -a
```

### Using Different Port
```bash
# If port 3000 is busy, use 3001
docker run -d -p 3001:3000 --name clyvanta-dev clyvanta-web

# Access at http://localhost:3001
```

## Why Docker?

Node 24 on macOS has known npm installation issues. Docker provides:
- ✅ Consistent Node 20 environment
- ✅ Isolated dependencies
- ✅ No local Node.js conflicts
- ✅ Works on any machine with Docker

## Files

- `Dockerfile` - Docker image configuration
- `.dockerignore` - Files excluded from Docker build
