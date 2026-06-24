# Set 19: Docker Compose busybox ping task

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Using Docker compose - Create two instances of busybox images in two containers named bbConA and bbConB and ping bbConB from bbConA.

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

**Aim:** Using Docker compose - Create two instances of busybox images in two containers named bbConA and bbConB and ping bbConB from bbConA.

**Files:**
- docker-compose.yml

**Execution Steps:**
1. Create docker-compose.yml.
2. Start both containers.
3. Ping bbConB from bbConA.
4. Stop containers after verification.

**Source Files:**

#### docker-compose.yml

```yaml
services:
  bbConA:
    image: busybox
    container_name: bbConA
    command: sleep 3600
  bbConB:
    image: busybox
    container_name: bbConB
    command: sleep 3600
```

**Commands:**

#### Docker Compose commands

```bash
docker compose up -d
docker exec bbConA ping -c 4 bbConB
```

**Expected Output:** Ping replies from bbConB are displayed inside bbConA.

**Quick Fixes:**
- Use `docker compose`, not old `docker-compose`, on recent Docker.
- Both containers must be on the same compose network.
