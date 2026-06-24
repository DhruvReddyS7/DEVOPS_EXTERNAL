# Set 10: Docker hello-world + Jenkins periodic shell job

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Give Docker commands to Run an Hello-World image in Docker.
5. Create a Jenkins Job for executing shell commands and Using Build Trigger- build the job periodically.

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

**Aim:** Give Docker commands to Run an Hello-World image in Docker.

**Files:**
- No source file required

**Execution Steps:**
1. Open terminal.
2. Pull the hello-world image.
3. List Docker images.
4. Run the hello-world image.
5. Read the success message in terminal.

**Commands:**

#### Run Hello-World image in Docker

```bash
docker pull hello-world
docker images
docker run hello-world
```

**Expected Output:** Docker prints the hello-world success message.

**Quick Fixes:**
- If Docker is not running, start Docker Desktop or Docker service.
- If image pull fails, check internet connection.

### Q5 Practical Answer

**Aim:** Create a Jenkins Job for executing shell commands and Using Build Trigger- build the job periodically.

**Files:**
- No source file required

**Execution Steps:**
1. Create Freestyle project.
2. Enable Build periodically.
3. Use `H/5 * * * *`.
4. Add Execute shell commands.
5. Save and Build Now.

**Commands:**

#### Jenkins shell

```bash
date
echo "Periodic shell job executed"
```

**Expected Output:** Jenkins runs the shell job periodically.

**Quick Fixes:**
- Schedule must be valid cron syntax.
- Check Jenkins system time if trigger seems late.
