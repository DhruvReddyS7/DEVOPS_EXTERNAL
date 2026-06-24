# Set 14: Ubuntu Docker container named MyContainer + Jenkins pipeline
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Run Ubuntu image in Docker container named MyContainer and execute shell commands.
5. Create a Jenkins pipeline job with 5 stages.
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

Aim: Run Ubuntu container named MyContainer and create a Jenkins pipeline with 5 stages.

Files required: Jenkinsfile

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: Jenkinsfile.
3. Copy the source code shown below into the matching file names.
4. Pull Ubuntu image.
5. Create container named MyContainer.
6. Execute shell commands inside it.
7. Create Jenkins Pipeline job and paste the 5-stage script.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Jenkinsfile
```groovy
pipeline {
  agent any
  stages {
    stage('Start') { steps { sh 'echo start' } }
    stage('Build') { steps { sh 'echo build' } }
    stage('Test') { steps { sh 'echo test' } }
    stage('Package') { steps { sh 'echo package' } }
    stage('Deploy') { steps { sh 'echo deploy' } }
  }
}
```

### Docker commands
```bash
docker pull ubuntu
docker run -dit --name MyContainer ubuntu bash
docker exec MyContainer pwd
docker exec MyContainer ls
docker exec MyContainer echo "Hello from Ubuntu container"
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

### Expected Output
Container MyContainer runs and Jenkins displays 5 successful stages.

## Q5 Practical

Aim: Create a Jenkins pipeline job with 5 stages.

Files required: Jenkinsfile

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: Jenkinsfile.
3. Copy the source code shown below into the matching file names.
4. Open Jenkins.
5. Create a Pipeline job.
6. Paste the Jenkinsfile script.
7. Save the job.
8. Click Build Now and check all 5 stages.
9. Run the command block in the same order from top to bottom.
10. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Jenkinsfile
```groovy
pipeline {
  agent any
  stages {
    stage('Start') { steps { sh 'echo start' } }
    stage('Build') { steps { sh 'echo build' } }
    stage('Test') { steps { sh 'echo test' } }
    stage('Package') { steps { sh 'echo package' } }
    stage('Deploy') { steps { sh 'echo deploy' } }
  }
}
```

### Jenkinsfile
```groovy
pipeline {
  agent any
  stages {
    stage('Start') { steps { sh 'echo start' } }
    stage('Build') { steps { sh 'echo build' } }
    stage('Test') { steps { sh 'echo test' } }
    stage('Package') { steps { sh 'echo package' } }
    stage('Deploy') { steps { sh 'echo deploy' } }
  }
}
```

### Expected Output
Container MyContainer runs and Jenkins displays 5 successful stages.
