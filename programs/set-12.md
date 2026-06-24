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
1. Create project folder `JenkinsPipelineDemo`.
2. Create `Jenkinsfile` and paste the pipeline script.
3. Push the Jenkinsfile to GitHub.
4. Open Jenkins and create a Pipeline job named `PipelineDemo`.
5. In Pipeline definition choose `Pipeline script from SCM`.
6. SCM: Git.
7. Repository URL: `https://github.com/username/JenkinsPipelineDemo.git`.
8. Branch Specifier: `*/main`.
9. Script Path: `Jenkinsfile`.
10. Save and Build Now.
11. Open Console Output and verify success.

**Source Files:**

#### Jenkinsfile

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Hello from Jenkins Pipeline'
            }
        }
    }
}
```

**Commands:**

#### Git Commands

```bash
git init
git add .
git commit -m "Added Jenkinsfile"
git remote add origin https://github.com/username/JenkinsPipelineDemo.git
git branch -M main
git push -u origin main
```

**Expected Output:** Console Output shows `Hello from Jenkins Pipeline` and `Finished: SUCCESS`.

**Quick Fixes:**
- Keep filename exactly `Jenkinsfile`.
- Install Pipeline and Git plugins if SCM option is missing.
