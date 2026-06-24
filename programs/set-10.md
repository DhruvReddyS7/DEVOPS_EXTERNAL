# Set 10: Docker hello-world + Jenkins periodic shell job
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Run hello-world image and create Jenkins periodic shell job.
5. Create a Jenkins job for executing shell commands using periodic build trigger.
## Q1 Git Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `git init` | Creates a new Git repository in the current folder. | `git init` |
| 2 | `git status` | Shows changed, staged, and untracked files. | `git status` |
| 3 | `git add .` | Stages all project files for commit. | `git add .` |
| 4 | `git commit -m "initial commit"` | Saves staged changes with a message. | `git commit -m "initial commit"` |
| 5 | `git push origin main` | Uploads local commits to GitHub. | `git push -u origin main` |
## Q2 Docker Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `docker --version` | Checks whether Docker is installed. | `docker --version` |
| 2 | `docker build -t myapp .` | Builds a Docker image from a Dockerfile. | `docker build -t myapp .` |
| 3 | `docker run --name mycontainer myapp` | Runs a container from an image. | `docker run myapp` |
| 4 | `docker ps -a` | Lists running and stopped containers. | `docker ps -a` |
| 5 | `docker push username/myapp:latest` | Pushes an image to DockerHub. | `docker push username/myapp:latest` |
## Q3 Kubernetes Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `kubectl version --client` | Checks the installed kubectl client version. | `kubectl version --client` |
| 2 | `kubectl create deployment web --image=nginx` | Creates a deployment from an image. | `kubectl create deployment web --image=nginx` |
| 3 | `kubectl get pods` | Lists pods in the current namespace. | `kubectl get pods` |
| 4 | `kubectl expose deployment web --type=NodePort --port=80` | Creates a service to access the deployment. | `kubectl expose deployment web --type=NodePort --port=80` |
| 5 | `kubectl apply -f deployment.yaml` | Creates or updates Kubernetes objects from YAML. | `kubectl apply -f deployment.yaml` |
## Q4 Practical Execution Steps

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

## Q4 Practical Files and Commands

Aim: Run Docker hello-world image and create a Jenkins periodic shell job.

Files required: No source file required

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

## Q5 Practical Execution Steps

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

## Q5 Practical Files and Commands

Aim: Create a Jenkins periodic shell job.

Files required: No source file required

### Jenkins shell
```bash
date
echo "Periodic shell job executed"
```

### Expected Output
Jenkins runs the shell job periodically.
