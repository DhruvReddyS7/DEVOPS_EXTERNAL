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

**Aim:** Using Docker compose - Create two instances of busybox images in two containers named bbConA and bbConB and ping bbConB from bbConA.

**Files:**
- docker-compose.yml

**Execution Steps:**
1. Create docker-compose.yml.
2. Start both containers.
3. Check containers are running.
4. Enter bbConA shell.
5. Ping bbConB from bbConA.
6. Stop containers after verification.

**Source Files:**

#### docker-compose.yml

```yaml
version: "3"
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

#### Docker Compose BusyBox commands

```bash
docker compose up -d
docker ps
docker exec -it bbConA sh
ping bbConB
docker compose down
```

**Expected Output:** Ping replies from bbConB are displayed inside bbConA.

**Quick Fixes:**
- Use `docker compose`, not old `docker-compose`, on recent Docker.
- Both containers must be on the same compose network.
