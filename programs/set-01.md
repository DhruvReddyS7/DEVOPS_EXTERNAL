# Set 1: Java + Docker + GitHub + DockerHub
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Java, build and run Docker image, push code to GitHub and image to DockerHub.
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
2. Create these file(s) exactly with the same names: HelloDevOps.java, Dockerfile.
3. Copy the source code shown below into the matching file names.
4. javac HelloDevOps.java
5. java HelloDevOps
6. docker build -t java-devops-lab .
7. docker run java-devops-lab
8. Check output in terminal or browser.
9. Push code to GitHub.
10. Push Docker image to DockerHub.
11. Run the command block in the same order from top to bottom.
12. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q4 Practical Files and Commands

Aim: Write a simple Java program, build and run it in Docker, push code to GitHub, and push image to DockerHub.

Files required: HelloDevOps.java, Dockerfile

### HelloDevOps.java
```java
public class HelloDevOps {
  public static void main(String[] args) {
    System.out.println("Hello from Java DevOps Lab");
  }
}
```

### Dockerfile
```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY HelloDevOps.java .
RUN javac HelloDevOps.java
CMD ["java", "HelloDevOps"]
```

### Ubuntu commands
```bash
javac HelloDevOps.java
java HelloDevOps
docker build -t java-devops-lab .
docker run java-devops-lab
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
docker tag java-devops-lab:latest YOUR_DOCKERHUB_USERNAME/java-devops-lab:latest
docker push YOUR_DOCKERHUB_USERNAME/java-devops-lab:latest
```

### Expected Output
Hello from Java DevOps Lab
