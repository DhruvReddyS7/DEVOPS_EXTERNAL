# Set 17: nginx Docker image commands + Kubernetes Mongo deployment

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Give Docker commands to run a nginx image and execute some commands.
5. Kubernetes - Create an Mongo deployment and run some kubectl commands

### Q1 Git Commands

| No. | Command | Usage |
| --- | --- | --- |
| 1 | `git init` | Creates a new Git repository in the current folder. |
| 2 | `git status` | Shows changed, staged, and untracked files. |
| 3 | `git add .` | Stages all project files for commit. |
| 4 | `git commit -m "initial commit"` | Saves staged changes with a message. |
| 5 | `git push origin main` | Uploads local commits to GitHub. |

### Q2 Docker Commands

| No. | Command | Usage |
| --- | --- | --- |
| 1 | `docker --version` | Checks whether Docker is installed. |
| 2 | `docker build -t myapp .` | Builds a Docker image from a Dockerfile. |
| 3 | `docker run --name mycontainer myapp` | Runs a container from an image. |
| 4 | `docker ps -a` | Lists running and stopped containers. |
| 5 | `docker push username/myapp:latest` | Pushes an image to DockerHub. |

### Q3 Kubernetes Commands

| No. | Command | Usage |
| --- | --- | --- |
| 1 | `kubectl version --client` | Checks the installed kubectl client version. |
| 2 | `kubectl create deployment web --image=nginx` | Creates a deployment from an image. |
| 3 | `kubectl get pods` | Lists pods in the current namespace. |
| 4 | `kubectl expose deployment web --type=NodePort --port=80` | Creates a service to access the deployment. |
| 5 | `kubectl apply -f deployment.yaml` | Creates or updates Kubernetes objects from YAML. |

### Q4 Practical Answer

**Aim:** Give Docker commands to run a nginx image and execute some commands.

**Files:**
- No source file required

**Execution Steps:**
1. Pull the Nginx latest image.
2. Run Nginx container named nginxcontainer on port 8080.
3. Check running containers.
4. Open the browser URL.
5. Enter the Nginx container.
6. Run basic commands inside it.
7. Exit and stop the container.
8. If name already exists, remove old container and run again.

**Commands:**

#### Pull Nginx image

```bash
docker pull nginx:latest
```

#### Run Nginx container

```bash
docker run -d --name nginxcontainer -p 8080:80 nginx
```

#### Check running container

```bash
docker ps
```

#### Open browser

```text
http://localhost:8080
```

#### Enter Nginx container

```bash
docker exec -it nginxcontainer sh
```

#### Inside Nginx container

```bash
nginx -v
pwd
ls
exit
```

#### Stop container

```bash
docker stop nginxcontainer
```

#### Remove container if name exists

```bash
docker rm nginxcontainer
```

**Expected Output:** Nginx runs on http://localhost:8080 and container commands print version/path/files.

**Quick Fixes:**
- If container name exists, run `docker rm nginxcontainer`.
- If port 8080 is busy, change the left side, for example `-p 9090:80`.

### Q5 Practical Answer

**Aim:** Kubernetes - Create an Mongo deployment and run some kubectl commands

**Files:**
- mongo-deployment.yaml

**Execution Steps:**
1. Start Minikube.
2. Create the YAML file.
3. Apply the YAML manifest.
4. Check deployments, pods, and services.
5. Open service using Minikube URL.

**Source Files:**

#### mongo-deployment.yaml

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

**Commands:**

#### kubectl commands

```bash
minikube start
kubectl apply -f mongo-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service mongo-service --url
```

**Expected Output:** mongo pods show Running and service URL opens successfully.

**Quick Fixes:**
- If pods are Pending, run `kubectl describe pod <pod-name>`.
- If service URL fails, verify Minikube is running.
