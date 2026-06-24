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
- No YAML file required

**Execution Steps:**
1. Start Minikube or make sure Kubernetes is running.
2. Create python deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe python deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### Create python deployment

```bash
kubectl create deployment python-deployment --image=python
```

#### Get deployments

```bash
kubectl get deployments
```

#### Get pods

```bash
kubectl get pods
```

#### Describe python deployment

```bash
kubectl describe deployment python-deployment
```

#### Get all resources

```bash
kubectl get all
```

#### Delete python deployment

```bash
kubectl delete deployment python-deployment
```

**Expected Output:** python deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start`.
- If deployment already exists, delete it first using the delete command.
