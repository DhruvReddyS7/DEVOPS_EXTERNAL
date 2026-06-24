# Set 15: Python Docker image commands + Kubernetes nginx deployment

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Give Docker commands to run a Python image and execute some commands.
5. Kubernetes - Create an nginx deployment and run some kubectl commands

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

**Aim:** Give Docker commands to run a Python image and execute some commands.

**Files:**
- No source file required

**Execution Steps:**
1. Pull the Python latest image.
2. Run Python container named pycontainer.
3. Inside Python, execute basic commands.
4. Exit Python.
5. Stop the container after completion.
6. If name already exists, remove old container and run again.

**Commands:**

#### Pull Python image

```bash
docker pull python:latest
```

#### Run Python container

```bash
docker run -it --name pycontainer python
```

#### Inside Python

```python
x = 5
print(x)
print(4 + 3)
exit()
```

#### Stop container

```bash
docker stop pycontainer
```

#### Remove container if name exists

```bash
docker rm pycontainer
```

**Expected Output:** Python container opens and prints `5` and `7`.

**Quick Fixes:**
- If container name exists, run `docker rm pycontainer`.
- Use `exit()` to leave Python.

### Q5 Practical Answer

**Aim:** Kubernetes - Create an nginx deployment and run some kubectl commands

**Files:**
- nginx-deployment.yaml

**Execution Steps:**
1. Start Minikube.
2. Create the YAML file.
3. Apply the YAML manifest.
4. Check deployments, pods, and services.
5. Open service using Minikube URL.

**Source Files:**

#### nginx-deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx

          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080
```

**Commands:**

#### kubectl commands

```bash
minikube start
kubectl apply -f nginx-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service nginx-service --url
```

**Expected Output:** nginx pods show Running and service URL opens successfully.

**Quick Fixes:**
- If pods are Pending, run `kubectl describe pod <pod-name>`.
- If service URL fails, verify Minikube is running.
