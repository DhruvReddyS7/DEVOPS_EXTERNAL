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
- No YAML file required

**Execution Steps:**
1. Start Minikube or make sure Kubernetes is running.
2. Create nginx deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe nginx deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### Create nginx deployment

```bash
kubectl create deployment nginx-deployment --image=nginx
```

#### Get deployments

```bash
kubectl get deployments
```

#### Get pods

```bash
kubectl get pods
```

#### Describe nginx deployment

```bash
kubectl describe deployment nginx-deployment
```

#### Get all resources

```bash
kubectl get all
```

#### Delete nginx deployment

```bash
kubectl delete deployment nginx-deployment
```

**Expected Output:** nginx deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start`.
- If deployment already exists, delete it first using the delete command.
