# Set 24: Web calculator app + Selenium testing

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Develop a Web-Application for Calculator, Write test cases for any operation and test it using Selenium.

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

**Aim:** Develop a Web-Application for Calculator, Write test cases for any operation and test it using Selenium.

**Files:**
- index.html
- calculator.js
- testCalculator.js

**Execution Steps:**
1. Create calculator page.
2. Install Selenium.
3. Run test case for addition.
4. Verify expected result.

**Source Files:**

#### index.html

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

#### calculator.js

```javascript
document.getElementById("add").onclick = () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = String(a + b);
};
```

#### testCalculator.js

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

**Commands:**

#### Run commands

```bash
npm init -y
npm install selenium-webdriver
node testCalculator.js
```

**Expected Output:** Test passed

**Quick Fixes:**
- Convert input values using Number().
- Check expected result exactly in Selenium.
