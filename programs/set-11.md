# Set 11: HTML registration form + GitHub + Jenkins publish job

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create a simple HTML page - Registration form and push the code to GITHUB. Create a Jenkins Job for publishing the HTML Page.

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

**Aim:** Create a simple HTML page - Registration form and push the code to GITHUB. Create a Jenkins Job for publishing the HTML Page.

**Files:**
- index.html

**Execution Steps:**
1. Create folder: `mkdir RegistrationForm && cd RegistrationForm`.
2. Create file: `vi index.html`.
3. Create the listed source files with the exact file names.
4. Run the program locally using the run commands.
5. Push the project to GitHub.
6. Open Jenkins at http://localhost:8080.
7. Create New Item -> Freestyle project.
8. Under Source Code Management choose Git and paste the repository URL.
9. Under Build Steps choose Execute shell and paste the shell commands.
10. Save and click Build Now.
11. Install HTML Publisher Plugin from Manage Jenkins -> Plugins.
12. Use job name `RegistrationForm`.
13. Post-build Action: Publish HTML Reports.
14. HTML Directory to Archive: `.`
15. Index Page(s): `index.html`
16. Report Title: `Registration Form Report`.

**Source Files:**

#### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>

<h2>Student Registration Form</h2>

<form>
    Name:<br>
    <input type="text" name="name"><br><br>

    Email:<br>
    <input type="email" name="email"><br><br>

    Mobile:<br>
    <input type="text" name="mobile"><br><br>

    Password:<br>
    <input type="password" name="password"><br><br>

    <input type="submit" value="Register">
</form>

</body>
</html>
```

**Commands:**

#### Run commands

```bash
echo "Publish HTML with HTML Publisher Plugin"
echo "HTML Directory to Archive: ."
echo "Index Page: index.html"
echo "Report Title: Registration Form Report"
```

#### GitHub push commands

```bash
git init
git add .
git commit -m "Added Registration Form"
git remote add origin https://github.com/username/RegistrationForm.git
git branch -M main
git push -u origin main
```

#### Jenkins Execute shell

```bash
echo "Publish HTML with HTML Publisher Plugin"
echo "HTML Directory to Archive: ."
echo "Index Page: index.html"
echo "Report Title: Registration Form Report"
```

**Expected Output:** Open Registration Form Report in Jenkins to view the HTML page.

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
