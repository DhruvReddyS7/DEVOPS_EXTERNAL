# Set 24: Web calculator app + Selenium testing
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Develop web calculator, write test cases for any operation, and test using Selenium.
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
2. Create these file(s) exactly with the same names: index.html, calculator.js, testCalculator.js.
3. Copy the source code shown below into the matching file names.
4. Create calculator page.
5. Install Selenium.
6. Run test case for addition.
7. Verify expected result.
8. Run the command block in the same order from top to bottom.
9. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

## Q4 Practical Files and Commands

Aim: Develop a web calculator, write test cases for an operation, and test using Selenium.

Files required: index.html, calculator.js, testCalculator.js

### index.html
```html
<!doctype html>
<html>
  <body>
    <input id="a" value="12">
    <input id="b" value="8">
    <button id="add">Add</button>
    <p id="result"></p>
    <script src="calculator.js"></script>
  </body>
</html>
```

### calculator.js
```javascript
document.getElementById("add").onclick = () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = String(a + b);
};
```

### testCalculator.js
```javascript
const { Builder, By } = require("selenium-webdriver");
const path = require("path");

(async function testCalculator() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("file://" + path.resolve("index.html"));
    await driver.findElement(By.id("add")).click();
    const result = await driver.findElement(By.id("result")).getText();
    console.log(result === "20" ? "Test passed" : "Test failed");
  } finally {
    await driver.quit();
  }
})();
```

### Run commands
```bash
npm init -y
npm install selenium-webdriver
node testCalculator.js
```

### Expected Output
Test passed
