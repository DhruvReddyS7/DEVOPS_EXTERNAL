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

**Aim:** Create a simple HTML page - Registration form and push the code to GITHUB. Create a Jenkins Job for publishing the HTML Page.

**Files:**
- index.html

**Execution Steps:**
1. Install HTML Publisher Plugin from Manage Jenkins -> Plugins.
2. Create folder: `mkdir RegistrationForm && cd RegistrationForm`.
3. Create file: `vi index.html`.
4. Paste the registration form code and save.
5. Push the project to GitHub.
6. Open Jenkins at http://localhost:8080.
7. Create New Item -> Freestyle Project.
8. Use job name `RegistrationForm`.
9. Under Source Code Management choose Git and paste `https://github.com/username/RegistrationForm.git`.
10. Branch Specifier: `*/main`.
11. Go to Post-build Actions.
12. Select Publish HTML Reports.
13. HTML Directory to Archive: `.`
14. Index Page(s): `index.html`.
15. Report Title: `Registration Form Report`.
16. Click Apply and Save.
17. Click Build Now.
18. Open `Registration Form Report` from the build page.

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

#### GitHub push commands

```bash
git init
git add .
git commit -m "Added Registration Form"
git remote add origin https://github.com/username/RegistrationForm.git
git branch -M main
git push -u origin main
```

#### HTML Publisher settings

```text
HTML Directory to Archive: .
Index Page(s): index.html
Report Title: Registration Form Report
Report Files: index.html
```

**Expected Output:** Open Registration Form Report in Jenkins to view the HTML page.

**Quick Fixes:**
- Install HTML Publisher Plugin if Publish HTML Reports is missing.
- Keep `index.html` in the repository root.
- Use `.` as the HTML directory.
