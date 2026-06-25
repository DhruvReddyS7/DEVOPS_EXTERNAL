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
| 1 | `docker pull <image>` | Downloads an image from Docker Hub. |
| 2 | `docker run <image>` | Creates and starts a container from an image. |
| 3 | `docker build -t <image> .` | Builds a Docker image from a Dockerfile. |
| 4 | `docker tag <image> <username>/<image>` | Tags an image with a new name for a registry. |
| 5 | `docker push <username>/<image>` | Uploads the image to Docker Hub. |

### Q3 Kubernetes Commands

| No. | Command | Usage |
| --- | --- | --- |
| 1 | `kubectl create deployment <name> --image=<image>` | Creates a deployment using the specified image. |
| 2 | `kubectl get deployments` | Lists all deployments. |
| 3 | `kubectl get pods` | Lists all pods. |
| 4 | `kubectl describe deployment <name>` | Shows detailed information about a deployment. |
| 5 | `kubectl delete deployment <name>` | Deletes the specified deployment. |

### Q4 Practical Answer

**Aim:** Give Docker commands to run a Python image and execute some commands.

**Files:**
- No source file required

**Execution Steps:**
1. Start Docker service on Ubuntu.
2. Pull the Python latest image.
3. Run Python container named pycontainer.
4. Inside Python, execute basic commands.
5. Exit Python.
6. Stop the container after completion.
7. If name already exists, remove old container and run again.

**Commands:**

#### Start Docker

```bash
sudo systemctl start docker
```

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
1. Start Minikube using force mode.
2. Create nginx deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe nginx deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### nginx kubectl commands

```bash
minikube start --force
kubectl create deployment nginx-deployment --image=nginx
kubectl get deployments
kubectl get pods
kubectl describe deployment nginx-deployment
kubectl get all
kubectl delete deployment nginx-deployment
```

**Expected Output:** nginx deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start --force`.
- If deployment already exists, delete it first using the delete command.
