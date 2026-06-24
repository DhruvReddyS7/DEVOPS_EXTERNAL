# Set 22: JavaScript login validation + Selenium
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write JavaScript login validation application and test it using Selenium.
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
2. Create these file(s) exactly with the same names: index.html, app.js, testLogin.js, package.json.
3. Copy the source code shown below into the matching file names.
4. Create HTML and JS files.
5. Install selenium-webdriver.
6. Run Selenium test.
7. Check printed result.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q4 Practical Files and Commands

Aim: Create a JavaScript login validation app and test it using Selenium.

Files required: index.html, app.js, testLogin.js, package.json

### index.html
```html
<!doctype html>
<html>
  <body>
    <input id="username" placeholder="Username">
    <input id="password" placeholder="Password" type="password">
    <button id="login">Login</button>
    <p id="message"></p>
    <script src="app.js"></script>
  </body>
</html>
```

### app.js
```javascript
document.getElementById("login").onclick = () => {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  document.getElementById("message").textContent =
    u === "admin" && p === "1234" ? "Login successful" : "Invalid login";
};
```

### testLogin.js
```javascript
const { Builder, By } = require("selenium-webdriver");
const path = require("path");

(async function testLogin() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("file://" + path.resolve("index.html"));
    await driver.findElement(By.id("username")).sendKeys("admin");
    await driver.findElement(By.id("password")).sendKeys("1234");
    await driver.findElement(By.id("login")).click();
    const text = await driver.findElement(By.id("message")).getText();
    console.log(text);
  } finally {
    await driver.quit();
  }
})();
```

### Run commands
```bash
npm init -y
npm install selenium-webdriver
node testLogin.js
```

### Expected Output
Login successful
