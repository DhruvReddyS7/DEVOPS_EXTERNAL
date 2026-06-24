# Set 12: Jenkins pipeline using Jenkinsfile from SCM Git
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create Jenkins pipeline job using Jenkinsfile from SCM Git.
## Q1 Git Commands

1. git init
Usage: Creates a new Git repository in the current folder.
```bash
git init
```

2. git status
Usage: Shows changed, staged, and untracked files.
```bash
git status
```

3. git add .
Usage: Stages all project files for commit.
```bash
git add .
```

4. git commit -m "initial commit"
Usage: Saves staged changes with a message.
```bash
git commit -m "initial commit"
```

5. git push origin main
Usage: Uploads local commits to GitHub.
```bash
git push -u origin main
```
## Q2 Docker Commands

1. docker --version
Usage: Checks whether Docker is installed.
```bash
docker --version
```

2. docker build -t myapp .
Usage: Builds a Docker image from a Dockerfile.
```bash
docker build -t myapp .
```

3. docker run --name mycontainer myapp
Usage: Runs a container from an image.
```bash
docker run myapp
```

4. docker ps -a
Usage: Lists running and stopped containers.
```bash
docker ps -a
```

5. docker push username/myapp:latest
Usage: Pushes an image to DockerHub.
```bash
docker push username/myapp:latest
```
## Q3 Kubernetes Commands

1. kubectl version --client
Usage: Checks the installed kubectl client version.
```bash
kubectl version --client
```

2. kubectl create deployment web --image=nginx
Usage: Creates a deployment from an image.
```bash
kubectl create deployment web --image=nginx
```

3. kubectl get pods
Usage: Lists pods in the current namespace.
```bash
kubectl get pods
```

4. kubectl expose deployment web --type=NodePort --port=80
Usage: Creates a service to access the deployment.
```bash
kubectl expose deployment web --type=NodePort --port=80
```

5. kubectl apply -f deployment.yaml
Usage: Creates or updates Kubernetes objects from YAML.
```bash
kubectl apply -f deployment.yaml
```
## Q4 Practical

Aim: Create a Jenkins pipeline job using Jenkinsfile from SCM Git.

Files required: Jenkinsfile

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: Jenkinsfile.
3. Copy the source code shown below into the matching file names.
4. Add Jenkinsfile to GitHub repository.
5. Create Jenkins Pipeline item.
6. Choose Pipeline script from SCM.
7. Select Git and paste repository URL.
8. Set branch as `*/main`.
9. Script Path: `Jenkinsfile`.
10. Save and Build Now.
11. Run the command block in the same order from top to bottom.
12. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Jenkinsfile
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
Jenkins pipeline shows Checkout, Build, Test, and Deploy stages as successful.
