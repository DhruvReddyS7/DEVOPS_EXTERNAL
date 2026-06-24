# Set 23: JavaScript Selenium exam result checker

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a JavaScript program for checking exam results on college website (https://matrusri.skolo.in/) and test it using Selenium.

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

**Aim:** Write a JavaScript program for checking exam results on college website (https://matrusri.skolo.in/) and test it using Selenium.

**Files:**
- checkResult.js
- package.json

**Execution Steps:**
1. Create a project directory.
2. Initialize Node.js project.
3. Install Selenium WebDriver.
4. Create `checkResult.js`.
5. Paste the exam-result website Selenium code.
6. Run the script.
7. Verify that the page title and success message print in terminal.

**Source Files:**

#### checkResult.js

```javascript
const { Builder, By, until } = require("selenium-webdriver");

(async function checkResultSite() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://matrusri.skolo.in/");
    await driver.wait(until.titleIs(await driver.getTitle()), 5000);
    console.log("Opened:", await driver.getTitle());
    console.log("Result site loaded successfully");
  } finally {
    await driver.quit();
  }
})();
```

**Commands:**

#### Create project

```bash
mkdir result-checker
cd result-checker
```

#### Initialize and install Selenium

```bash
npm init -y
npm install selenium-webdriver
```

#### Create file

```bash
nano checkResult.js
```

#### Run program

```bash
node checkResult.js
```

**Expected Output:** Terminal prints page title and Result site loaded successfully.

**Quick Fixes:**
- Install Google Chrome before running Selenium.
- If Chrome session fails, update Chrome and Selenium WebDriver.
