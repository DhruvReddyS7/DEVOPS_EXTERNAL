# Set 18: Containerized HTML registration form

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Develop a simple containerized HTML application (Registration form) using Docker and push the image to dockerhub and code to GIT

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

**Aim:** Develop a simple containerized HTML application (Registration form) using Docker and push the image to dockerhub and code to GIT

**Files:**
- index.html
- Dockerfile

**Execution Steps:**
1. Create the listed source files in one folder.
2. Open terminal in that folder.
3. Start Docker service on Ubuntu.
4. Run the Build & Run commands.
5. Check output in terminal or browser.
6. Run the DockerHub commands to push the image.
7. Run the GitHub commands to push the code.

**Source Files:**

#### index.html

```html
<html>
<body>
<h2>Registration Form</h2>
<form>
Name:<input type="text"><br>
Email:<input type="email"><br>
Password:<input type="password"><br>
<input type="submit" value="Register">
</form>
</body>
</html>
```

#### Dockerfile

```dockerfile
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
```

**Commands:**

#### Start Docker

```bash
sudo systemctl start docker
```

#### Build & Run

```bash
docker build -t registration-app .
docker run -d -p 8080:80 registration-app
```

#### DockerHub

```bash
docker login
docker tag registration-app 245123751006/registration-app
docker push 245123751006/registration-app
```

#### GitHub

```bash
git init
git add .
git commit -m "HTML Registration Docker App"
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git branch -M main
git push -u origin main
```

**Expected Output:** Browser shows the Registration Form page.

**Quick Fixes:**
- If Docker build fails, confirm file names match Dockerfile COPY commands.
- If port is busy, change the left side of `-p`, for example `-p 9090:80`.
- If DockerHub push fails, run `docker login` and verify repository name.
