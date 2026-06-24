# Set 19: Docker Compose busybox ping task
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Using Docker Compose create busybox containers bbConA and bbConB and ping bbConB from bbConA.
## Q1 Git Commands

1. git init
Usage: Creates a new Git repository in the current folder.
```bash
git init
```

2. git status
Usage: Shows changed, staged, and untracked files.
```bash
git status
```

3. git add .
Usage: Stages all project files for commit.
```bash
git add .
```

4. git commit -m "initial commit"
Usage: Saves staged changes with a message.
```bash
git commit -m "initial commit"
```

5. git push origin main
Usage: Uploads local commits to GitHub.
```bash
git push -u origin main
```
## Q2 Docker Commands

1. docker --version
Usage: Checks whether Docker is installed.
```bash
docker --version
```

2. docker build -t myapp .
Usage: Builds a Docker image from a Dockerfile.
```bash
docker build -t myapp .
```

3. docker run --name mycontainer myapp
Usage: Runs a container from an image.
```bash
docker run myapp
```

4. docker ps -a
Usage: Lists running and stopped containers.
```bash
docker ps -a
```

5. docker push username/myapp:latest
Usage: Pushes an image to DockerHub.
```bash
docker push username/myapp:latest
```
## Q3 Kubernetes Commands

1. kubectl version --client
Usage: Checks the installed kubectl client version.
```bash
kubectl version --client
```

2. kubectl create deployment web --image=nginx
Usage: Creates a deployment from an image.
```bash
kubectl create deployment web --image=nginx
```

3. kubectl get pods
Usage: Lists pods in the current namespace.
```bash
kubectl get pods
```

4. kubectl expose deployment web --type=NodePort --port=80
Usage: Creates a service to access the deployment.
```bash
kubectl expose deployment web --type=NodePort --port=80
```

5. kubectl apply -f deployment.yaml
Usage: Creates or updates Kubernetes objects from YAML.
```bash
kubectl apply -f deployment.yaml
```
## Q4 Practical

Aim: Use Docker Compose to create busybox containers bbConA and bbConB and ping bbConB from bbConA.

Files required: docker-compose.yml

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: docker-compose.yml.
3. Copy the source code shown below into the matching file names.
4. Create docker-compose.yml.
5. Start both containers.
6. Ping bbConB from bbConA.
7. Stop containers after verification.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### docker-compose.yml
```yaml
services:
  bbConA:
    image: busybox
    container_name: bbConA
    command: sleep 3600
  bbConB:
    image: busybox
    container_name: bbConB
    command: sleep 3600
```

### Docker Compose commands
```bash
docker compose up -d
docker exec bbConA ping -c 4 bbConB
```

### Expected Output
Ping replies from bbConB are displayed inside bbConA.
