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

**Aim:** Kubernetes - Create an node deployment and run some kubectl commands

**Files:**
- node-deployment.yaml

**Execution Steps:**
1. Start Minikube.
2. Create the YAML file.
3. Apply the YAML manifest.
4. Check deployments, pods, and services.
5. Open service using Minikube URL.

**Source Files:**

#### node-deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node
spec:
  replicas: 2
  selector:
    matchLabels:
      app: node
  template:
    metadata:
      labels:
        app: node
    spec:
      containers:
        - name: node
          image: node:20-alpine
          command: ["node"]
          args: ["-e", "require('http').createServer((req,res)=>res.end('Node app running')).listen(3000, '0.0.0.0')"]
          ports:
            - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: node-service
spec:
  type: NodePort
  selector:
    app: node
  ports:
    - port: 3000
      targetPort: 3000
      nodePort: 30080
```

**Commands:**

#### kubectl commands

```bash
minikube start
kubectl apply -f node-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service node-service --url
```

**Expected Output:** node pods show Running and service URL opens successfully.

**Quick Fixes:**
- If pods are Pending, run `kubectl describe pod <pod-name>`.
- If service URL fails, verify Minikube is running.

### Q5 Practical Answer

**Aim:** Write a JavaScript program to open Google / College website in the browser using Selenium

**Files:**
- openWebsite.js
- package.json

**Execution Steps:**
1. Install Node.js and Google Chrome.
2. Install Selenium dependency.
3. Run the script.
4. Confirm Chrome opens and title prints.

**Source Files:**

#### openWebsite.js

```javascript
const { Builder } = require("selenium-webdriver");

(async function openWebsite() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.google.com");
    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();
```

#### package.json

```json
{"scripts":{"test":"node openWebsite.js"},"dependencies":{"selenium-webdriver":"latest"}}
```

**Commands:**

#### Selenium commands

```bash
npm init -y
npm install selenium-webdriver
node openWebsite.js
```

**Expected Output:** Chrome opens Google and terminal prints page title.

**Quick Fixes:**
- Do not close Chrome manually while test is running.
- Update Google Chrome if Selenium cannot create session.
