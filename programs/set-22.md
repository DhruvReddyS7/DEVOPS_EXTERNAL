# Set 22: JavaScript login validation + Selenium

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a JavaScript program for login validation application and test it using Selenium.

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

**Aim:** Write a JavaScript program for login validation application and test it using Selenium.

**Files:**
- index.html
- app.js
- testLogin.js
- package.json

**Execution Steps:**
1. Create HTML and JS files.
2. Install selenium-webdriver.
3. Run Selenium test.
4. Check printed result.

**Source Files:**

#### index.html

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

#### app.js

```javascript
document.getElementById("login").onclick = () => {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  document.getElementById("message").textContent =
    u === "admin" && p === "1234" ? "Login successful" : "Invalid login";
};
```

#### testLogin.js

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

**Commands:**

#### Run commands

```bash
npm init -y
npm install selenium-webdriver
node testLogin.js
```

**Expected Output:** Login successful

**Quick Fixes:**
- IDs in Selenium must match HTML IDs.
- Use file URL or serve page with `npx http-server`.
