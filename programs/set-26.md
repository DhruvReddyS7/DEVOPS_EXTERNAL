# Set 26: Jenkins Python calculator Git job SCM polling

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create a Jenkins Job for executing Python program (Calculator) in GIT – Using Trigger, execute the job through SCM polling. (automatically execute when code is changed in GITHub).

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

**Aim:** Create a Jenkins Job for executing Python program (Calculator) in GIT – Using Trigger, execute the job through SCM polling. (automatically execute when code is changed in GITHub).

**Files:**
- calculator.py

**Execution Steps:**
1. Create folder: `mkdir CalculatorProject && cd CalculatorProject`.
2. Create file: `vi calculator.py`.
3. Push the project to GitHub.
4. Start Jenkins service on Ubuntu.
5. Open Jenkins at http://localhost:8080.
6. Create New Item -> Freestyle project.
7. Under Source Code Management choose Git and paste the repository URL.
8. Under Build Steps choose Execute shell and paste the shell commands.
9. Save and click Build Now.
10. Use job name `Calculator-SCM-Polling`.
11. Repository URL: `https://github.com/username/CalculatorProject.git`.
12. Enable Build Triggers -> Poll SCM.
13. Schedule: `* * * * *`.
14. To test, change `calculator.py`, commit with `Updated Calculator Program`, and push to GitHub.

**Source Files:**

#### calculator.py

```python
print("Calculator Program")

a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
```

**Commands:**

#### Start Jenkins

```bash
sudo su
systemctl enable jenkins
systemctl start jenkins
```

#### GitHub push commands

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin https://github.com/username/CalculatorProject.git
git push -u origin main
```

#### Jenkins Execute shell

```bash
ls
git log
```

**Expected Output:** Jenkins polls GitHub every minute and automatically triggers a build when code changes.

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
