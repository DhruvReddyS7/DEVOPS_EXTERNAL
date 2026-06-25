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

**Aim:** Create a Jenkins pipeline Job using pipeline script using Jenkinsfile (SCM - GIT)

**Files:**
- Jenkinsfile

**Execution Steps:**
1. Create project folder `JenkinsPipelineDemo`.
2. Create `Jenkinsfile` and paste the pipeline script.
3. Push the Jenkinsfile to GitHub.
4. Start Jenkins service on Ubuntu.
5. Open Jenkins and create a Pipeline job named `PipelineDemo`.
6. In Pipeline definition choose `Pipeline script from SCM`.
7. SCM: Git.
8. Repository URL: `https://github.com/username/JenkinsPipelineDemo.git`.
9. Branch Specifier: `*/main`.
10. Script Path: `Jenkinsfile`.
11. Save and Build Now.
12. Open Console Output and verify success.

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

#### Start Jenkins

```bash
sudo su
systemctl enable jenkins
systemctl start jenkins
```

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
