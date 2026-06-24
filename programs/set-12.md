# Set 12: Jenkins pipeline using Jenkinsfile from SCM Git

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create a Jenkins pipeline Job using pipeline script using Jenkinsfile (SCM - GIT)

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

**Aim:** Create a Jenkins pipeline Job using pipeline script using Jenkinsfile (SCM - GIT)

**Files:**
- Jenkinsfile

**Execution Steps:**
1. Add Jenkinsfile to GitHub repository.
2. Create Jenkins Pipeline item.
3. Choose Pipeline script from SCM.
4. Select Git and paste repository URL.
5. Set branch as `*/main`.
6. Script Path: `Jenkinsfile`.
7. Save and Build Now.

**Source Files:**

#### Jenkinsfile

```groovy
pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Build') { steps { sh 'echo Building DevOps project' } }
    stage('Test') { steps { sh 'echo Tests passed' } }
    stage('Deploy') { steps { sh 'echo Deployment completed' } }
  }
}
```

**Commands:**

#### GitHub push commands

```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

**Expected Output:** Jenkins pipeline shows Checkout, Build, Test, and Deploy stages as successful.

**Quick Fixes:**
- Keep filename exactly `Jenkinsfile`.
- Install Pipeline and Git plugins if SCM option is missing.
