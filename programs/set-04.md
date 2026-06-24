# Set 4: Python + Docker + GitHub + DockerHub
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in PYTHON, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub.
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

Aim: Write a simple Python program, build and run it in Docker, push code to GitHub, and push image to DockerHub.

Files required: app.py, Dockerfile

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: app.py, Dockerfile.
3. Copy the source code shown below into the matching file names.
4. python3 app.py
5. docker build -t python-devops-lab .
6. docker run python-devops-lab
7. Check output in terminal or browser.
8. Push code to GitHub.
9. Push Docker image to DockerHub.
10. Run the command block in the same order from top to bottom.
11. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### app.py
```python
print("Hello from Python DevOps Lab")
```

### Dockerfile
```dockerfile
FROM python:latest
WORKDIR /app
COPY app.py .
CMD ["python", "app.py"]
```

### Ubuntu commands
```bash
python3 app.py
docker build -t python-devops-lab .
docker run python-devops-lab
```

### GitHub push commands
```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

### DockerHub push commands
```bash
docker login
docker tag python-devops-lab:latest YOUR_DOCKERHUB_USERNAME/python-devops-lab:latest
docker push YOUR_DOCKERHUB_USERNAME/python-devops-lab:latest
```

### Expected Output
Hello from Python DevOps Lab
