# Set 17: nginx Docker image commands + Kubernetes Mongo deployment
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Run nginx Docker image and execute commands.
5. Create Mongo deployment in Kubernetes and run kubectl commands.
## Q1 Git Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `git init` | Creates a new Git repository in the current folder. | `git init` |
| 2 | `git status` | Shows changed, staged, and untracked files. | `git status` |
| 3 | `git add .` | Stages all project files for commit. | `git add .` |
| 4 | `git commit -m "initial commit"` | Saves staged changes with a message. | `git commit -m "initial commit"` |
| 5 | `git push origin main` | Uploads local commits to GitHub. | `git push -u origin main` |
## Q2 Docker Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `docker --version` | Checks whether Docker is installed. | `docker --version` |
| 2 | `docker build -t myapp .` | Builds a Docker image from a Dockerfile. | `docker build -t myapp .` |
| 3 | `docker run --name mycontainer myapp` | Runs a container from an image. | `docker run myapp` |
| 4 | `docker ps -a` | Lists running and stopped containers. | `docker ps -a` |
| 5 | `docker push username/myapp:latest` | Pushes an image to DockerHub. | `docker push username/myapp:latest` |
## Q3 Kubernetes Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `kubectl version --client` | Checks the installed kubectl client version. | `kubectl version --client` |
| 2 | `kubectl create deployment web --image=nginx` | Creates a deployment from an image. | `kubectl create deployment web --image=nginx` |
| 3 | `kubectl get pods` | Lists pods in the current namespace. | `kubectl get pods` |
| 4 | `kubectl expose deployment web --type=NodePort --port=80` | Creates a service to access the deployment. | `kubectl expose deployment web --type=NodePort --port=80` |
| 5 | `kubectl apply -f deployment.yaml` | Creates or updates Kubernetes objects from YAML. | `kubectl apply -f deployment.yaml` |
## Q4 Practical Execution Steps

1. Open Ubuntu terminal and create a fresh folder for this program.
2. No program file is required for this task.
3. Copy the command block shown below directly into terminal/Jenkins as required.
4. Pull the Docker image.
5. Run the container.
6. Execute the shown command inside the container.
7. Check the terminal output.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q4 Practical Files and Commands

Aim: Run a nginx Docker image and execute basic commands.

Files required: No source file required

### Docker image commands
```bash
docker pull nginx
docker run -d --name nginxcon -p 8080:80 nginx
curl http://localhost:8080
docker exec nginxcon ls /usr/share/nginx/html
```

### Expected Output
nginx container runs and prints command output.

## Q5 Practical Execution Steps

1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: mongo-deployment.yaml.
3. Copy the source code shown below into the matching file names.
4. Start Minikube.
5. Create the YAML file.
6. Apply the YAML manifest.
7. Check deployments, pods, and services.
8. Open service using Minikube URL.
9. Run the command block in the same order from top to bottom.
10. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q5 Practical Files and Commands

Aim: Create a Kubernetes mongo deployment and run kubectl commands.

Files required: mongo-deployment.yaml

### mongo-deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo
spec:
  replicas: 2
  selector:
    matchLabels:
      app: mongo
  template:
    metadata:
      labels:
        app: mongo
    spec:
      containers:
        - name: mongo
          image: mongo:7

          ports:
            - containerPort: 27017
---
apiVersion: v1
kind: Service
metadata:
  name: mongo-service
spec:
  type: NodePort
  selector:
    app: mongo
  ports:
    - port: 27017
      targetPort: 27017
      nodePort: 30080
```

### kubectl commands
```bash
minikube start
kubectl apply -f mongo-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service mongo-service --url
```

### Expected Output
mongo pods show Running and service URL opens successfully.
