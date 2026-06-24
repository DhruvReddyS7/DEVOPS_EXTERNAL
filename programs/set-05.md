# Set 5: Node.js + Docker + GitHub + DockerHub
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Node.js, build and run Docker image, push code to GitHub and image to DockerHub.
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

Aim: Write a simple Node.js program, build and run it in Docker, push code to GitHub, and push image to DockerHub.

Files required: app.js, package.json, Dockerfile

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: app.js, package.json, Dockerfile.
3. Copy the source code shown below into the matching file names.
4. node app.js
5. docker build -t node-devops-lab .
6. docker run node-devops-lab
7. Check output in terminal or browser.
8. Push code to GitHub.
9. Push Docker image to DockerHub.
10. Run the command block in the same order from top to bottom.
11. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### app.js
```javascript
console.log("Hello from Node.js DevOps Lab");
```

### package.json
```json
{"scripts":{"start":"node app.js"},"dependencies":{}}
```

### Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json app.js ./
CMD ["npm", "start"]
```

### Ubuntu commands
```bash
node app.js
docker build -t node-devops-lab .
docker run node-devops-lab
```

### GitHub push commands
```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

### DockerHub push commands
```bash
docker login
docker tag node-devops-lab:latest YOUR_DOCKERHUB_USERNAME/node-devops-lab:latest
docker push YOUR_DOCKERHUB_USERNAME/node-devops-lab:latest
```

### Expected Output
Hello from Node.js DevOps Lab
