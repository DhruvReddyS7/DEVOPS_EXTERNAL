# Set 16: Node Docker image commands + Kubernetes Python deployment

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Give Docker commands to run a node image and execute some commands.
5. Kubernetes - Create an python deployment and run some kubectl commands

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

**Aim:** Give Docker commands to run a node image and execute some commands.

**Files:**
- No source file required

**Execution Steps:**
1. Pull the Node latest image.
2. Run Node container named nodecontainer.
3. Inside Node, execute JavaScript commands.
4. Exit Node.
5. Stop the container after completion.
6. If name already exists, remove old container and run again.

**Commands:**

#### Pull Node image

```bash
docker pull node:latest
```

#### Run Node container

```bash
docker run -it --name nodecontainer node
```

#### Inside Node

```javascript
console.log("Hello Node");
2 + 5
.exit
```

#### Stop container

```bash
docker stop nodecontainer
```

#### Remove container if name exists

```bash
docker rm nodecontainer
```

**Expected Output:** Node container opens, prints `Hello Node`, and evaluates `2 + 5`.

**Quick Fixes:**
- If container name exists, run `docker rm nodecontainer`.
- Use `.exit` to leave Node.

### Q5 Practical Answer

**Aim:** Kubernetes - Create an python deployment and run some kubectl commands

**Files:**
- python-deployment.yaml

**Execution Steps:**
1. Start Minikube.
2. Create the YAML file.
3. Apply the YAML manifest.
4. Check deployments, pods, and services.
5. Open service using Minikube URL.

**Source Files:**

#### python-deployment.yaml

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

**Commands:**

#### kubectl commands

```bash
minikube start
kubectl apply -f python-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service python-service --url
```

**Expected Output:** python pods show Running and service URL opens successfully.

**Quick Fixes:**
- If pods are Pending, run `kubectl describe pod <pod-name>`.
- If service URL fails, verify Minikube is running.
