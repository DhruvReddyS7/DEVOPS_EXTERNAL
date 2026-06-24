# Set 10: Docker hello-world + Jenkins periodic shell job
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Run hello-world image and create Jenkins periodic shell job.
5. Create a Jenkins job for executing shell commands using periodic build trigger.
## Q1 Git Commands

| No. | Command | Usage |
|---:|---|---|
| 1 | `git init` | Creates a new Git repository in the current folder. |
| 2 | `git status` | Shows changed, staged, and untracked files. |
| 3 | `git add .` | Stages all project files for commit. |
| 4 | `git commit -m "initial commit"` | Saves staged changes with a message. |
| 5 | `git push origin main` | Uploads local commits to GitHub. |
## Q2 Docker Commands

| No. | Command | Usage |
|---:|---|---|
| 1 | `docker --version` | Checks whether Docker is installed. |
| 2 | `docker build -t myapp .` | Builds a Docker image from a Dockerfile. |
| 3 | `docker run --name mycontainer myapp` | Runs a container from an image. |
| 4 | `docker ps -a` | Lists running and stopped containers. |
| 5 | `docker push username/myapp:latest` | Pushes an image to DockerHub. |
## Q3 Kubernetes Commands

| No. | Command | Usage |
|---:|---|---|
| 1 | `kubectl version --client` | Checks the installed kubectl client version. |
| 2 | `kubectl create deployment web --image=nginx` | Creates a deployment from an image. |
| 3 | `kubectl get pods` | Lists pods in the current namespace. |
| 4 | `kubectl expose deployment web --type=NodePort --port=80` | Creates a service to access the deployment. |
| 5 | `kubectl apply -f deployment.yaml` | Creates or updates Kubernetes objects from YAML. |
## Q4 Practical

Aim: Run Docker hello-world image and create a Jenkins periodic shell job.

Files required: No source file required

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. No program file is required for this task.
3. Copy the command block shown below directly into terminal/Jenkins as required.
4. Run Docker hello-world locally.
5. In Jenkins create Freestyle project.
6. Enable Build Triggers -> Build periodically.
7. Use schedule `H/5 * * * *` for every 5 minutes.
8. Add Execute shell commands and save.
9. Run the command block in the same order from top to bottom.
10. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Docker hello-world
```bash
docker pull hello-world
docker run hello-world
```

### Jenkins shell
```bash
date
echo "Periodic DevOps lab job running"
docker run hello-world
```

### Expected Output
Docker prints the hello-world success message. Jenkins console shows periodic execution.

## Q5 Practical

Aim: Create a Jenkins periodic shell job.

Files required: No source file required

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. No program file is required for this task.
3. Copy the command block shown below directly into terminal/Jenkins as required.
4. Create Freestyle project.
5. Enable Build periodically.
6. Use `H/5 * * * *`.
7. Add Execute shell commands.
8. Save and Build Now.
9. Run the command block in the same order from top to bottom.
10. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Jenkins shell
```bash
date
echo "Periodic shell job executed"
```

### Expected Output
Jenkins runs the shell job periodically.
