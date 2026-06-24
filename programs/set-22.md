# Set 22: JavaScript login validation + Selenium
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write JavaScript login validation application and test it using Selenium.
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

Aim: Create a JavaScript login validation app and test it using Selenium.

Files required: index.html, app.js, testLogin.js, package.json

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: index.html, app.js, testLogin.js, package.json.
3. Copy the source code shown below into the matching file names.
4. Create HTML and JS files.
5. Install selenium-webdriver.
6. Run Selenium test.
7. Check printed result.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

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
