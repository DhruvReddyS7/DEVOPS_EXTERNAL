# Set 25: Jenkins Java Git job remote trigger

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create a Jenkins Job for executing Java program in GIT – Using Trigger, Build the Job remotely.

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

**Aim:** Create a Jenkins Job for executing Java program in GIT – Using Trigger, Build the Job remotely.

**Files:**
- HelloDevOps.java

**Execution Steps:**
1. Create project folder and add the source files.
2. Run the program locally using Ubuntu commands.
3. Push the project to GitHub.
4. Open Jenkins at http://localhost:8080.
5. Create New Item -> Freestyle project.
6. Under Source Code Management choose Git and paste the repository URL.
7. Under Build Steps choose Execute shell and paste the shell commands.
8. Save and click Build Now.
9. Enable Build Triggers -> Trigger builds remotely.
10. Set token as `devops123`.
11. Trigger using: `curl http://localhost:8080/job/JOB_NAME/build?token=devops123`.

**Source Files:**

#### HelloDevOps.java

```java
public class HelloDevOps {
  public static void main(String[] args) {
    System.out.println("Hello from Java DevOps Lab");
  }
}
```

**Commands:**

#### Ubuntu commands

```bash
javac HelloDevOps.java
java HelloDevOps
```

#### GitHub push commands

```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

#### Jenkins Execute shell

```bash
javac HelloDevOps.java
java HelloDevOps
```

**Expected Output:** Remote trigger starts build and Java output appears in console.

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
