# Set 21: Kubernetes node deployment + Selenium website opener

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Kubernetes - Create an node deployment and run some kubectl commands
5. Write a JavaScript program to open Google / College website in the browser using Selenium

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

**Aim:** Kubernetes - Create an node deployment and run some kubectl commands

**Files:**
- No YAML file required

**Execution Steps:**
1. Start Minikube or make sure Kubernetes is running.
2. Create node deployment using kubectl.
3. Check deployments.
4. Check pods.
5. Describe node deployment.
6. List all Kubernetes resources.
7. Delete the deployment after verification.

**Commands:**

#### node kubectl commands

```bash
kubectl create deployment node-deployment --image=node
kubectl get deployments
kubectl get pods
kubectl describe deployment node-deployment
kubectl get all
kubectl delete deployment node-deployment
```

**Expected Output:** node deployment is created, shown in kubectl output, described, and deleted successfully.

**Quick Fixes:**
- If kubectl cannot connect, run `minikube start`.
- If deployment already exists, delete it first using the delete command.

### Q5 Practical Answer

**Aim:** Write a JavaScript program to open Google / College website in the browser using Selenium

**Files:**
- google.js

**Execution Steps:**
1. Install Node.js and npm.
2. Create a project directory and move into it.
3. Initialize the Node.js project.
4. Install Selenium WebDriver.
5. Create `google.js`.
6. Add the Selenium code.
7. Run the program.
8. To open college website, replace the Google URL and run again.

**Source Files:**

#### google.js

```javascript
const { Builder } = require('selenium-webdriver');

async function openGoogle() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');
}

openGoogle();
```

**Commands:**

#### Install Node.js and npm

```bash
sudo apt update
sudo apt install nodejs npm -y
```

#### Create project directory

```bash
mkdir selenium-demo
cd selenium-demo
```

#### Initialize Node project

```bash
npm init -y
```

#### Install Selenium WebDriver

```bash
npm install selenium-webdriver
```

#### Create file

```bash
nano google.js
```

#### Run program

```bash
node google.js
```

#### Replace with college website

```javascript
await driver.get('https://www.google.com');

// replace with
await driver.get('https://www.yourcollegewebsite.com');
```

**Expected Output:** Chrome browser opens automatically and loads the Google website.

**Quick Fixes:**
- Install Google Chrome before running Selenium.
- If Chrome session fails, update Chrome and Selenium WebDriver.
