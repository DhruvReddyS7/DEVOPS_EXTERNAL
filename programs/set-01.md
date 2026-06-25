# Set 1: Java + Docker + GitHub + DockerHub

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Java, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub.

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

**Aim:** Write a simple program in Java, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub.

**Files:**
- HelloWorld.java
- Dockerfile

**Execution Steps:**
1. Create the listed source files in one folder.
2. Open terminal in that folder.
3. Run the Build & Run commands.
4. Check output in terminal or browser.
5. Run the DockerHub commands to push the image.
6. Run the GitHub commands to push the code.

**Source Files:**

#### HelloWorld.java

```java
public class HelloWorld{
public static void main(String args[]){
System.out.println("Hello from Java Docker Application");
}
}
```

#### Dockerfile

```dockerfile
FROM eclipse-temurin:17
WORKDIR /app
COPY HelloWorld.java .
RUN javac HelloWorld.java
CMD ["java","HelloWorld"]
```

**Commands:**

#### Build & Run

```bash
docker build -t java-app .
docker run java-app
```

#### DockerHub

```bash
docker login -u 245123751006
docker tag java-app 245123751006/java-app
docker push 245123751006/java-app
```

#### GitHub

```bash
git init
git add .
git commit -m "Java Docker App"
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git branch -M main
git push -u origin main
```

**Expected Output:** Hello from Java Docker Application

**Quick Fixes:**
- If Docker build fails, confirm file names match Dockerfile COPY commands.
- If port is busy, change the left side of `-p`, for example `-p 9090:80`.
- If DockerHub push fails, run `docker login` and verify repository name.
