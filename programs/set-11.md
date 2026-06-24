# Set 11: HTML registration form + GitHub + Jenkins publish job
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create HTML registration form, push to GitHub, create Jenkins job for publishing HTML page.
## Q1 Git Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `git init` | Creates a new Git repository in the current folder. | `git init` |
| 2 | `git status` | Shows changed, staged, and untracked files. | `git status` |
| 3 | `git add .` | Stages all project files for commit. | `git add .` |
| 4 | `git commit -m "initial commit"` | Saves staged changes with a message. | `git commit -m "initial commit"` |
| 5 | `git push origin main` | Uploads local commits to GitHub. | `git push -u origin main` |
## Q2 Docker Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `docker --version` | Checks whether Docker is installed. | `docker --version` |
| 2 | `docker build -t myapp .` | Builds a Docker image from a Dockerfile. | `docker build -t myapp .` |
| 3 | `docker run --name mycontainer myapp` | Runs a container from an image. | `docker run myapp` |
| 4 | `docker ps -a` | Lists running and stopped containers. | `docker ps -a` |
| 5 | `docker push username/myapp:latest` | Pushes an image to DockerHub. | `docker push username/myapp:latest` |
## Q3 Kubernetes Commands

| No. | Command | Usage | Example |
|---:|---|---|---|
| 1 | `kubectl version --client` | Checks the installed kubectl client version. | `kubectl version --client` |
| 2 | `kubectl create deployment web --image=nginx` | Creates a deployment from an image. | `kubectl create deployment web --image=nginx` |
| 3 | `kubectl get pods` | Lists pods in the current namespace. | `kubectl get pods` |
| 4 | `kubectl expose deployment web --type=NodePort --port=80` | Creates a service to access the deployment. | `kubectl expose deployment web --type=NodePort --port=80` |
| 5 | `kubectl apply -f deployment.yaml` | Creates or updates Kubernetes objects from YAML. | `kubectl apply -f deployment.yaml` |
## Q4 Practical Execution Steps

1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: index.html.
3. Copy the source code shown below into the matching file names.
4. Create project folder and add the source files.
5. Run the program locally using Ubuntu commands.
6. Push the project to GitHub.
7. Open Jenkins at http://localhost:8080.
8. Create New Item -> Freestyle project.
9. Under Source Code Management choose Git and paste the repository URL.
10. Under Build Steps choose Execute shell and paste the shell commands.
11. Save and click Build Now.
12. Run the command block in the same order from top to bottom.
13. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q4 Practical Files and Commands

Aim: Create an HTML registration form, push to GitHub, and publish it using Jenkins.

Files required: index.html

### index.html
```html
<!doctype html>
<html>
  <body>
    <h2>Registration Form</h2>
    <form>
      <input placeholder="Name" required>
      <input placeholder="Email" type="email" required>
      <input placeholder="Password" type="password" required>
      <button>Register</button>
    </form>
  </body>
</html>
```

### Ubuntu commands
```bash
mkdir -p public
cp index.html public/index.html
echo "Published HTML page"
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

### Jenkins Execute shell
```bash
mkdir -p public
cp index.html public/index.html
echo "Published HTML page"
```

### Expected Output
Jenkins workspace contains public/index.html. Open it from workspace or configured web directory.
