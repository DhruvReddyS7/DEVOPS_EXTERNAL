# Set 16: Node Docker image commands + Kubernetes Python deployment
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Run Node Docker image and execute commands.
5. Create Python deployment in Kubernetes and run kubectl commands.
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

Aim: Run a node Docker image and execute basic commands.

Files required: No source file required

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. No program file is required for this task.
3. Copy the command block shown below directly into terminal/Jenkins as required.
4. Pull the Docker image.
5. Run the container.
6. Execute the shown command inside the container.
7. Check the terminal output.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Docker image commands
```bash
docker pull node:20-alpine
docker run -it --name nodecon node:20-alpine node
console.log('Hello from Node container')
.exit
```

### Expected Output
node container runs and prints command output.

## Q5 Practical

Aim: Create a Kubernetes python deployment and run kubectl commands.

Files required: python-deployment.yaml

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: python-deployment.yaml.
3. Copy the source code shown below into the matching file names.
4. Start Minikube.
5. Create the YAML file.
6. Apply the YAML manifest.
7. Check deployments, pods, and services.
8. Open service using Minikube URL.
9. Run the command block in the same order from top to bottom.
10. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### python-deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python
spec:
  replicas: 2
  selector:
    matchLabels:
      app: python
  template:
    metadata:
      labels:
        app: python
    spec:
      containers:
        - name: python
          image: python:3.12-slim
          command: ["python"]
          args: ["-m", "http.server", "8000"]
          ports:
            - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: python-service
spec:
  type: NodePort
  selector:
    app: python
  ports:
    - port: 8000
      targetPort: 8000
      nodePort: 30080
```

### kubectl commands
```bash
minikube start
kubectl apply -f python-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service python-service --url
```

### Expected Output
python pods show Running and service URL opens successfully.
