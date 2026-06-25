# Set 6: Flask Python + Docker + GitHub + DockerHub

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program using FLASK in python, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub.

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

**Aim:** Write a simple program using FLASK in python, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub.

**Files:**
- app.py
- requirements.txt
- Dockerfile

**Execution Steps:**
1. Create the listed source files in one folder.
2. Open terminal in that folder.
3. Run the Build & Run commands.
4. Check output in terminal or browser.
5. Run the DockerHub commands to push the image.
6. Run the GitHub commands to push the code.

**Source Files:**

#### app.py

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello Flask Docker Application"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

#### requirements.txt

```text
Flask
```

#### Dockerfile

```dockerfile
FROM python:3.12
WORKDIR /app
COPY app.py .
COPY requirements.txt .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python","app.py"]
```

**Commands:**

#### Build & Run

```bash
docker build -t flask-app .
docker run -p 5000:5000 flask-app
```

#### DockerHub

```bash
docker login -u 245123751006
docker tag flask-app 245123751006/flask-app
docker push 245123751006/flask-app
```

#### GitHub

```bash
git init
git add .
git commit -m "Flask Docker App"
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git branch -M main
git push -u origin main
```

**Expected Output:** Hello Flask Docker Application

**Quick Fixes:**
- If Docker build fails, confirm file names match Dockerfile COPY commands.
- If port is busy, change the left side of `-p`, for example `-p 9090:80`.
- If DockerHub push fails, run `docker login` and verify repository name.
