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

**Aim:** Give Docker commands to Run an Hello-World image in Docker.

**Files:**
- No source file required

**Execution Steps:**
1. Open terminal.
2. Start Docker service on Ubuntu.
3. Pull the hello-world image.
4. List Docker images.
5. Run the hello-world image.
6. Read the success message in terminal.

**Commands:**

#### Start Docker

```bash
sudo systemctl start docker
```

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
1. Start Jenkins service on Ubuntu.
2. Open Jenkins Dashboard.
3. Click New Item.
4. Enter job name `PeriodicShellJob`.
5. Select Freestyle Project and click OK.
6. In Build Triggers select `Build periodically`.
7. Schedule: `* * * * *`.
8. Add Build Step -> Execute Shell.
9. Paste `echo "Hello World"`.
10. Click Apply and Save.
11. Click Build Now.
12. Open Console Output to verify.

**Commands:**

#### Start Jenkins

```bash
sudo su
systemctl enable jenkins
systemctl start jenkins
```

#### Build periodically schedule

```text
* * * * *
```

#### Execute Shell

```bash
echo "Hello World"
```

**Expected Output:** Console Output shows `Hello World` and `Finished: SUCCESS`.

**Quick Fixes:**
- Schedule must be valid cron syntax.
- Check Jenkins system time if trigger seems late.
