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

**Aim:** Give Docker commands to run a nginx image and execute some commands.

**Files:**
- No source file required

**Execution Steps:**
1. Start Docker service on Ubuntu.
2. Pull the Nginx latest image.
3. Run Nginx container named nginxcontainer on port 8080.
4. Check running containers.
5. Open the browser URL.
6. Enter the Nginx container.
7. Run basic commands inside it.
8. Exit and stop the container.
9. If name already exists, remove old container and run again.

**Commands:**

#### Start Docker

```bash
sudo systemctl start docker
```

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
1. Start Minikube using force mode.
2. Create mongo deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe mongo deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### mongo kubectl commands

```bash
minikube start --force
kubectl create deployment mongo-deployment --image=mongo
kubectl get deployments
kubectl get pods
kubectl describe deployment mongo-deployment
kubectl get all
kubectl delete deployment mongo-deployment
```

**Expected Output:** mongo deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start --force`.
- If deployment already exists, delete it first using the delete command.
