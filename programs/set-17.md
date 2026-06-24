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
- No YAML file required

**Execution Steps:**
1. Start Minikube or make sure Kubernetes is running.
2. Create mongo deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe mongo deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### Create mongo deployment

```bash
kubectl create deployment mongo-deployment --image=mongo
```

#### Get deployments

```bash
kubectl get deployments
```

#### Get pods

```bash
kubectl get pods
```

#### Describe mongo deployment

```bash
kubectl describe deployment mongo-deployment
```

#### Get all resources

```bash
kubectl get all
```

#### Delete mongo deployment

```bash
kubectl delete deployment mongo-deployment
```

**Expected Output:** mongo deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start`.
- If deployment already exists, delete it first using the delete command.
