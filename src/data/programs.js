import { dockerCommands, gitCommands, kubernetesCommands } from "./commonCommands.js";

const repo = "https://github.com/YOUR_USERNAME/devops-lab-program.git";
const dockerUser = "YOUR_DOCKERHUB_USERNAME";

const block = (label, language, code) => ({ label, language, code: code.trim() });

const gitPush = `git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin ${repo}
git push -u origin main`;

const dockerPush = (image) => `docker login
docker tag ${image}:latest ${dockerUser}/${image}:latest
docker push ${dockerUser}/${image}:latest`;

const makeDockerPractical = ({ title, aim, files, blocks, build, run, output }) => ({
  aim,
  files,
  blocks,
  steps: [
    "Create the listed source files in one folder.",
    "Open terminal in that folder.",
    "Run the Ubuntu commands block from top to bottom.",
    "Build the Docker image using the docker build command.",
    "Run the container using the docker run command.",
    "Check output in terminal or browser.",
    "Push code to GitHub.",
    "Push Docker image to DockerHub."
  ],
  commandBlocks: [
    block("Ubuntu commands", "bash", [...build, ...run].join("\n")),
    block("GitHub push commands", "bash", gitPush),
    block("DockerHub push commands", "bash", dockerPush(title))
  ],
  expected: output,
  fixes: [
    "If Docker build fails, confirm file names match Dockerfile COPY commands.",
    "If port is busy, change the left side of `-p`, for example `-p 9090:80`.",
    "If DockerHub push fails, run `docker login` and verify repository name."
  ]
});

const simpleApps = {
  java: makeDockerPractical({
    title: "java-devops-lab",
    aim: "Write a simple Java program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["HelloDevOps.java", "Dockerfile"],
    blocks: [
      block("HelloDevOps.java", "java", `public class HelloDevOps {
  public static void main(String[] args) {
    System.out.println("Hello from Java DevOps Lab");
  }
}`),
      block("Dockerfile", "dockerfile", `FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY HelloDevOps.java .
RUN javac HelloDevOps.java
CMD ["java", "HelloDevOps"]`)
    ],
    build: ["javac HelloDevOps.java", "java HelloDevOps", "docker build -t java-devops-lab ."],
    run: ["docker run java-devops-lab"],
    output: "Hello from Java DevOps Lab"
  }),
  c: makeDockerPractical({
    title: "c-devops-lab",
    aim: "Write a simple C program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["main.c", "Dockerfile"],
    blocks: [
      block("main.c", "c", `#include <stdio.h>

int main() {
  printf("Hello from C DevOps Lab\\n");
  return 0;
}`),
      block("Dockerfile", "dockerfile", `FROM gcc:13
WORKDIR /app
COPY main.c .
RUN gcc main.c -o main
CMD ["./main"]`)
    ],
    build: ["gcc main.c -o main", "./main", "docker build -t c-devops-lab ."],
    run: ["docker run c-devops-lab"],
    output: "Hello from C DevOps Lab"
  }),
  html: makeDockerPractical({
    title: "html-devops-lab",
    aim: "Create a simple HTML page, serve it using nginx Docker image, push code to GitHub, and push image to DockerHub.",
    files: ["index.html", "Dockerfile"],
    blocks: [
      block("index.html", "html", `<!doctype html>
<html>
  <head><title>DevOps Lab</title></head>
  <body>
    <h1>Hello from HTML DevOps Lab</h1>
    <p>This page is running inside Docker.</p>
  </body>
</html>`),
      block("Dockerfile", "dockerfile", `FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./index.html .
EXPOSE 80`)
    ],
    build: ["docker build -t html-devops-lab ."],
    run: ["docker run -d --name html-lab -p 8080:80 html-devops-lab", "curl http://localhost:8080"],
    output: "Browser shows: Hello from HTML DevOps Lab"
  }),
  python: makeDockerPractical({
    title: "python-devops-lab",
    aim: "Write a simple Python program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.py", "Dockerfile"],
    blocks: [
      block("app.py", "python", `print("Hello from Python DevOps Lab")`),
      block("Dockerfile", "dockerfile", `FROM python:latest
WORKDIR /app
COPY app.py .
CMD ["python", "app.py"]`)
    ],
    build: ["python3 app.py", "docker build -t python-devops-lab ."],
    run: ["docker run python-devops-lab"],
    output: "Hello from Python DevOps Lab"
  }),
  node: makeDockerPractical({
    title: "node-devops-lab",
    aim: "Write a simple Node.js program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.js", "package.json", "Dockerfile"],
    blocks: [
      block("app.js", "javascript", `console.log("Hello from Node.js DevOps Lab");`),
      block("package.json", "json", `{"scripts":{"start":"node app.js"},"dependencies":{}}`),
      block("Dockerfile", "dockerfile", `FROM node:20-alpine
WORKDIR /app
COPY package.json app.js ./
CMD ["npm", "start"]`)
    ],
    build: ["node app.js", "docker build -t node-devops-lab ."],
    run: ["docker run node-devops-lab"],
    output: "Hello from Node.js DevOps Lab"
  }),
  flask: makeDockerPractical({
    title: "flask-devops-lab",
    aim: "Create a Flask app, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.py", "requirements.txt", "Dockerfile"],
    blocks: [
      block("app.py", "python", `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask DevOps Lab"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)`),
      block("requirements.txt", "text", "flask"),
      block("Dockerfile", "dockerfile", `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
EXPOSE 5000
CMD ["python", "app.py"]`)
    ],
    build: ["pip3 install flask", "python3 app.py", "docker build -t flask-devops-lab ."],
    run: ["docker run -d --name flask-lab -p 5000:5000 flask-devops-lab", "curl http://localhost:5000"],
    output: "Hello from Flask DevOps Lab"
  })
};

const htmlRegistrationDocker = makeDockerPractical({
  title: "html-registration-lab",
  aim: "Develop a simple containerized HTML application (Registration form) using Docker and push the image to dockerhub and code to GIT",
  files: ["index.html", "Dockerfile"],
  blocks: [
    block("index.html", "html", `<!doctype html>
<html>
  <head>
    <title>Registration Form</title>
  </head>
  <body>
    <h2>Registration Form</h2>
    <form>
      <input placeholder="Name" required>
      <input placeholder="Email" type="email" required>
      <input placeholder="Password" type="password" required>
      <button>Register</button>
    </form>
  </body>
</html>`),
    block("Dockerfile", "dockerfile", `FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./index.html .
EXPOSE 80`)
  ],
  build: ["docker build -t html-registration-lab ."],
  run: ["docker run -d --name html-registration -p 8080:80 html-registration-lab", "curl http://localhost:8080"],
  output: "Browser shows the Registration Form page."
});

const fiveStageJenkinsfile = block("Jenkinsfile", "groovy", `pipeline {
  agent any
  stages {
    stage('Start') { steps { sh 'echo start' } }
    stage('Build') { steps { sh 'echo build' } }
    stage('Test') { steps { sh 'echo test' } }
    stage('Package') { steps { sh 'echo package' } }
    stage('Deploy') { steps { sh 'echo deploy' } }
  }
}`);

const jenkinsJob = ({ aim, files, blocks, shell, output, extra = [] }) => ({
  aim,
  files,
  blocks,
  steps: [
    "Create project folder and add the source files.",
    "Run the program locally using Ubuntu commands.",
    "Push the project to GitHub.",
    "Open Jenkins at http://localhost:8080.",
    "Create New Item -> Freestyle project.",
    "Under Source Code Management choose Git and paste the repository URL.",
    "Under Build Steps choose Execute shell and paste the shell commands.",
    "Save and click Build Now.",
    ...extra
  ],
  commandBlocks: [
    block("Ubuntu commands", "bash", shell),
    block("GitHub push commands", "bash", gitPush),
    block("Jenkins Execute shell", "bash", shell)
  ],
  expected: output,
  fixes: [
    "If Jenkins cannot access Git, install Git plugin and verify repository URL.",
    "If command not found appears, use absolute paths like `/usr/bin/python3`.",
    "If workspace is dirty, delete old files from Jenkins workspace and rebuild."
  ]
});

const kubeYaml = (name, image, port, command = "") => `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${name}
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ${name}
  template:
    metadata:
      labels:
        app: ${name}
    spec:
      containers:
        - name: ${name}
          image: ${image}
${command}
          ports:
            - containerPort: ${port}
---
apiVersion: v1
kind: Service
metadata:
  name: ${name}-service
spec:
  type: NodePort
  selector:
    app: ${name}
  ports:
    - port: ${port}
      targetPort: ${port}
      nodePort: 30080`;

const practicals = {
  1: simpleApps.java,
  2: simpleApps.c,
  3: simpleApps.html,
  4: simpleApps.python,
  5: simpleApps.node,
  6: simpleApps.flask,
  7: jenkinsJob({
    aim: "Write a C program, push it to GitHub, and create a Jenkins job to compile and execute it.",
    files: ["main.c"],
    blocks: [simpleApps.c.blocks[0]],
    shell: "gcc main.c -o main\n./main",
    output: "Hello from C DevOps Lab"
  }),
  8: jenkinsJob({
    aim: "Create a Python calculator, push it to GitHub, and run it through Jenkins.",
    files: ["calculator.py"],
    blocks: [block("calculator.py", "python", `a = 20
b = 10
print("Add:", a + b)
print("Sub:", a - b)
print("Mul:", a * b)
print("Div:", a / b)`)],
    shell: "python3 calculator.py",
    output: "Add: 30, Sub: 10, Mul: 200, Div: 2.0"
  }),
  9: jenkinsJob({
    aim: "Write a Java program to reverse a number, push it to GitHub, and execute through Jenkins.",
    files: ["ReverseNumber.java"],
    blocks: [block("ReverseNumber.java", "java", `public class ReverseNumber {
  public static void main(String[] args) {
    int n = 12345, rev = 0;
    while (n != 0) {
      rev = rev * 10 + n % 10;
      n = n / 10;
    }
    System.out.println("Reverse number: " + rev);
  }
}`)],
    shell: "javac ReverseNumber.java\njava ReverseNumber",
    output: "Reverse number: 54321"
  }),
  10: {
    aim: "Give Docker commands to Run an Hello-World image in Docker.",
    files: ["No source file required"],
    blocks: [],
    steps: ["Open terminal.", "Check Docker is installed and running.", "Pull the hello-world image.", "Run the hello-world image.", "Read the success message in terminal."],
    commandBlocks: [block("Docker hello-world commands", "bash", "docker --version\ndocker pull hello-world\ndocker run hello-world")],
    expected: "Docker prints the hello-world success message.",
    fixes: ["If Docker is not running, start Docker Desktop or Docker service.", "If image pull fails, check internet connection."]
  },
  11: jenkinsJob({
    aim: "Create an HTML registration form, push to GitHub, and publish it using Jenkins.",
    files: ["index.html"],
    blocks: [block("index.html", "html", `<!doctype html>
<html>
  <body>
    <h2>Registration Form</h2>
    <form>
      <input placeholder="Name" required>
      <input placeholder="Email" type="email" required>
      <input placeholder="Password" type="password" required>
      <button>Register</button>
    </form>
  </body>
</html>`)],
    shell: "mkdir -p public\ncp index.html public/index.html\necho \"Published HTML page\"",
    output: "Jenkins workspace contains public/index.html. Open it from workspace or configured web directory."
  }),
  12: {
    aim: "Create a Jenkins pipeline job using Jenkinsfile from SCM Git.",
    files: ["Jenkinsfile"],
    blocks: [block("Jenkinsfile", "groovy", `pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Build') { steps { sh 'echo Building DevOps project' } }
    stage('Test') { steps { sh 'echo Tests passed' } }
    stage('Deploy') { steps { sh 'echo Deployment completed' } }
  }
}`)],
    steps: ["Add Jenkinsfile to GitHub repository.", "Create Jenkins Pipeline item.", "Choose Pipeline script from SCM.", "Select Git and paste repository URL.", "Set branch as `*/main`.", "Script Path: `Jenkinsfile`.", "Save and Build Now."],
    commandBlocks: [block("GitHub push commands", "bash", gitPush)],
    expected: "Jenkins pipeline shows Checkout, Build, Test, and Deploy stages as successful.",
    fixes: ["Keep filename exactly `Jenkinsfile`.", "Install Pipeline and Git plugins if SCM option is missing."]
  },
  13: jenkinsJob({
    aim: "Run Java and Python pattern display programs in Jenkins using file parameterization.",
    files: ["Pattern.java", "pattern.py"],
    blocks: [block("Pattern.java", "java", `public class Pattern {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      for (int j = 1; j <= i; j++) System.out.print("* ");
      System.out.println();
    }
  }
}`), block("pattern.py", "python", `for i in range(1, 6):
    print("* " * i)`)],
    shell: "echo \"Selected file: $PROGRAM_FILE\"\nif [ \"$PROGRAM_FILE\" = \"Pattern.java\" ]; then javac Pattern.java && java Pattern; else python3 pattern.py; fi",
    output: "A star pattern is printed from the selected Java or Python file.",
    extra: ["Enable This project is parameterized -> Choice Parameter.", "Name it `PROGRAM_FILE` and add `Pattern.java` and `pattern.py`."]
  }),
  14: {
    aim: "Give Docker commands to Run an Ubuntu image in Docker container named \"MyContainer\" and execute some shell commands inside it.",
    files: ["No source file required"],
    blocks: [],
    steps: ["Pull the Ubuntu image.", "Run an Ubuntu container named MyContainer.", "Execute shell commands inside MyContainer.", "Verify command output in terminal."],
    commandBlocks: [block("Docker Ubuntu commands", "bash", "docker pull ubuntu\ndocker run -dit --name MyContainer ubuntu bash\ndocker exec MyContainer pwd\ndocker exec MyContainer ls\ndocker exec MyContainer echo \"Hello from Ubuntu container\"")],
    expected: "Container MyContainer runs and shell commands print output.",
    fixes: ["If the container name already exists, use another name or remove the old container first.", "If Ubuntu exits, run it with `-dit` so it stays active."]
  },
  15: null,
  16: null,
  17: null,
  18: htmlRegistrationDocker,
  19: {
    aim: "Use Docker Compose to create busybox containers bbConA and bbConB and ping bbConB from bbConA.",
    files: ["docker-compose.yml"],
    blocks: [block("docker-compose.yml", "yaml", `services:
  bbConA:
    image: busybox
    container_name: bbConA
    command: sleep 3600
  bbConB:
    image: busybox
    container_name: bbConB
    command: sleep 3600`)],
    steps: ["Create docker-compose.yml.", "Start both containers.", "Ping bbConB from bbConA.", "Stop containers after verification."],
    commandBlocks: [block("Docker Compose commands", "bash", "docker compose up -d\ndocker exec bbConA ping -c 4 bbConB")],
    expected: "Ping replies from bbConB are displayed inside bbConA.",
    fixes: ["Use `docker compose`, not old `docker-compose`, on recent Docker.", "Both containers must be on the same compose network."]
  },
  20: null,
  21: null,
  22: null,
  23: null,
  24: null,
  25: jenkinsJob({
    aim: "Create Jenkins Java Git job and trigger the build remotely.",
    files: ["HelloDevOps.java"],
    blocks: [simpleApps.java.blocks[0]],
    shell: "javac HelloDevOps.java\njava HelloDevOps",
    output: "Remote trigger starts build and Java output appears in console.",
    extra: ["Enable Build Triggers -> Trigger builds remotely.", "Set token as `devops123`.", "Trigger using: `curl http://localhost:8080/job/JOB_NAME/build?token=devops123`."]
  }),
  26: jenkinsJob({
    aim: "Create Jenkins Python calculator Git job and trigger automatically using SCM polling.",
    files: ["calculator.py"],
    blocks: [block("calculator.py", "python", `a = 15
b = 5
print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)`)],
    shell: "python3 calculator.py",
    output: "After GitHub code change, Jenkins detects SCM polling and runs calculator.",
    extra: ["Enable Build Triggers -> Poll SCM.", "Use schedule `H/2 * * * *`.", "Commit and push any code change to test automatic build."]
  }),
  27: jenkinsJob({
    aim: "Run Java and Python calculator programs through Jenkins using file and variable parameterization.",
    files: ["Calculator.java", "calculator.py"],
    blocks: [block("Calculator.java", "java", `public class Calculator {
  public static void main(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Add: " + (a + b));
    System.out.println("Sub: " + (a - b));
  }
}`), block("calculator.py", "python", `import sys
a = int(sys.argv[1])
b = int(sys.argv[2])
print("Add:", a + b)
print("Sub:", a - b)`)],
    shell: "if [ \"$PROGRAM_FILE\" = \"Calculator.java\" ]; then javac Calculator.java && java Calculator $A $B; else python3 calculator.py $A $B; fi",
    output: "Selected calculator runs with parameter values A and B.",
    extra: ["Add Choice Parameter `PROGRAM_FILE`: Calculator.java, calculator.py.", "Add String Parameters `A` and `B`."]
  })
};

const dockerImageTask = (image, commands) => ({
  aim: `Run a ${image} Docker image and execute basic commands.`,
  files: ["No source file required"],
  blocks: [],
  steps: ["Pull the Docker image.", "Run the container.", "Execute the shown command inside the container.", "Check the terminal output."],
  commandBlocks: [block("Docker image commands", "bash", commands)],
  expected: `${image} container runs and prints command output.`,
  fixes: ["If image pull is slow, check internet connection.", "If container exits immediately, use interactive mode or a long-running command."]
});

const kubeTask = (name, image, port = 80, command = "") => ({
  aim: `Create a Kubernetes ${name} deployment and run kubectl commands.`,
  files: [`${name}-deployment.yaml`],
  blocks: [block(`${name}-deployment.yaml`, "yaml", kubeYaml(name, image, port, command))],
  steps: ["Start Minikube.", "Create the YAML file.", "Apply the YAML manifest.", "Check deployments, pods, and services.", "Open service using Minikube URL."],
  commandBlocks: [block("kubectl commands", "bash", `minikube start
kubectl apply -f ${name}-deployment.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
minikube service ${name}-service --url`)],
  expected: `${name} pods show Running and service URL opens successfully.`,
  fixes: ["If pods are Pending, run `kubectl describe pod <pod-name>`.", "If service URL fails, verify Minikube is running."]
});

practicals[15] = dockerImageTask("python", "docker pull python:3.12-slim\ndocker run -it --name pycon python:3.12-slim python\nprint('Hello from Python container')\nexit()");
practicals[16] = dockerImageTask("node", "docker pull node:20-alpine\ndocker run -it --name nodecon node:20-alpine node\nconsole.log('Hello from Node container')\n.exit");
practicals[17] = dockerImageTask("nginx", "docker pull nginx\ndocker run -d --name nginxcon -p 8080:80 nginx\ncurl http://localhost:8080\ndocker exec nginxcon ls /usr/share/nginx/html");
practicals[20] = kubeTask("nginx", "nginx", 80);
practicals[21] = kubeTask("node", "node:20-alpine", 3000, `          command: ["node"]
          args: ["-e", "require('http').createServer((req,res)=>res.end('Node app running')).listen(3000, '0.0.0.0')"]`);

const seleniumOpen = {
  aim: "Write a JavaScript Selenium program to open Google or college website in Chrome.",
  files: ["openWebsite.js", "package.json"],
  blocks: [block("openWebsite.js", "javascript", `const { Builder } = require("selenium-webdriver");

(async function openWebsite() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.google.com");
    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();`), block("package.json", "json", `{"scripts":{"test":"node openWebsite.js"},"dependencies":{"selenium-webdriver":"latest"}}`)],
  steps: ["Install Node.js and Google Chrome.", "Install Selenium dependency.", "Run the script.", "Confirm Chrome opens and title prints."],
  commandBlocks: [block("Selenium commands", "bash", "npm init -y\nnpm install selenium-webdriver\nnode openWebsite.js")],
  expected: "Chrome opens Google and terminal prints page title.",
  fixes: ["Do not close Chrome manually while test is running.", "Update Google Chrome if Selenium cannot create session."]
};

practicals[22] = {
  aim: "Create a JavaScript login validation app and test it using Selenium.",
  files: ["index.html", "app.js", "testLogin.js", "package.json"],
  blocks: [block("index.html", "html", `<!doctype html>
<html>
  <body>
    <input id="username" placeholder="Username">
    <input id="password" placeholder="Password" type="password">
    <button id="login">Login</button>
    <p id="message"></p>
    <script src="app.js"></script>
  </body>
</html>`), block("app.js", "javascript", `document.getElementById("login").onclick = () => {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  document.getElementById("message").textContent =
    u === "admin" && p === "1234" ? "Login successful" : "Invalid login";
};`), block("testLogin.js", "javascript", `const { Builder, By } = require("selenium-webdriver");
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
})();`)],
  steps: ["Create HTML and JS files.", "Install selenium-webdriver.", "Run Selenium test.", "Check printed result."],
  commandBlocks: [block("Run commands", "bash", "npm init -y\nnpm install selenium-webdriver\nnode testLogin.js")],
  expected: "Login successful",
  fixes: ["IDs in Selenium must match HTML IDs.", "Use file URL or serve page with `npx http-server`."]
};

practicals[23] = {
  ...seleniumOpen,
  aim: "Write a JavaScript Selenium program to open https://matrusri.skolo.in/ and check exam results page.",
  files: ["checkResult.js", "package.json"],
  blocks: [block("checkResult.js", "javascript", `const { Builder, By, until } = require("selenium-webdriver");

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
})();`)],
  expected: "Terminal prints page title and Result site loaded successfully."
};

practicals[24] = {
  aim: "Develop a web calculator, write test cases for an operation, and test using Selenium.",
  files: ["index.html", "calculator.js", "testCalculator.js"],
  blocks: [block("index.html", "html", `<!doctype html>
<html>
  <body>
    <input id="a" value="12">
    <input id="b" value="8">
    <button id="add">Add</button>
    <p id="result"></p>
    <script src="calculator.js"></script>
  </body>
</html>`), block("calculator.js", "javascript", `document.getElementById("add").onclick = () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = String(a + b);
};`), block("testCalculator.js", "javascript", `const { Builder, By } = require("selenium-webdriver");
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
})();`)],
  steps: ["Create calculator page.", "Install Selenium.", "Run test case for addition.", "Verify expected result."],
  commandBlocks: [block("Run commands", "bash", "npm init -y\nnpm install selenium-webdriver\nnode testCalculator.js")],
  expected: "Test passed",
  fixes: ["Convert input values using Number().", "Check expected result exactly in Selenium."]
};

const programSpecs = [
  ["Java + Docker + GitHub + DockerHub", "Write a simple program in Java, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["C + Docker + GitHub + DockerHub", "Write a simple program in C, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["HTML + Docker + GitHub + DockerHub", "Write a simple program in HTML, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["Python + Docker + GitHub + DockerHub", "Write a simple program in PYTHON, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["Node.js + Docker + GitHub + DockerHub", "Write a simple program in Node, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["Flask Python + Docker + GitHub + DockerHub", "Write a simple program using FLASK in python, Build and run the Docker image and push the code to GITHUB and Docker Image to DockerHub."],
  ["C + GitHub + Jenkins Job", "Write a simple program in C, and push the code to GITHUB. Create a Jenkins Job for executing the program."],
  ["Python calculator + GitHub + Jenkins Job", "Write a simple program in Python(ADD, SUB, MUL, DIV of 2 numbers) , and push the code to GITHUB. Create a Jenkins Job for executing the program."],
  ["Java reverse number + GitHub + Jenkins Job", "Write a simple program in Java(Reverse of a number) , and push the code to GITHUB. Create a Jenkins Job for executing the program."],
  ["Docker hello-world + Jenkins periodic shell job", "Give Docker commands to Run an Hello-World image in Docker.", "Create a Jenkins Job for executing shell commands and Using Build Trigger- build the job periodically."],
  ["HTML registration form + GitHub + Jenkins publish job", "Create a simple HTML page - Registration form and push the code to GITHUB. Create a Jenkins Job for publishing the HTML Page."],
  ["Jenkins pipeline using Jenkinsfile from SCM Git", "Create a Jenkins pipeline Job using pipeline script using Jenkinsfile (SCM - GIT)"],
  ["Java and Python pattern display + Jenkins file parameterization", "Write a simple program in Java and Python for Pattern display and Create a Jenkins Job for executing the programs. (Use file Parameterization)"],
  ["Ubuntu Docker container named MyContainer + Jenkins pipeline", "Give Docker commands to Run an Ubuntu image in Docker container named \"MyContainer\" and execute some shell commands inside it.", "Create a Jenkins pipeline Job using pipeline script with 5 stages."],
  ["Python Docker image commands + Kubernetes nginx deployment", "Give Docker commands to run a Python image and execute some commands.", "Kubernetes - Create an nginx deployment and run some kubectl commands"],
  ["Node Docker image commands + Kubernetes Python deployment", "Give Docker commands to run a node image and execute some commands.", "Kubernetes - Create an python deployment and run some kubectl commands"],
  ["nginx Docker image commands + Kubernetes Mongo deployment", "Give Docker commands to run a nginx image and execute some commands.", "Kubernetes - Create an Mongo deployment and run some kubectl commands"],
  ["Containerized HTML registration form", "Develop a simple containerized HTML application (Registration form) using Docker and push the image to dockerhub and code to GIT"],
  ["Docker Compose busybox ping task", "Using Docker compose - Create two instances of busybox images in two containers named bbConA and bbConB and ping bbConB from bbConA."],
  ["Kubernetes nginx deployment using YAML manifest", "Kubernetes - Create an nginx deployment using manifest (YAML) files."],
  ["Kubernetes node deployment + Selenium website opener", "Kubernetes - Create an node deployment and run some kubectl commands", "Write a JavaScript program to open Google / College website in the browser using Selenium"],
  ["JavaScript login validation + Selenium", "Write a JavaScript program for login validation application and test it using Selenium."],
  ["JavaScript Selenium exam result checker", "Write a JavaScript program for checking exam results on college website (https://matrusri.skolo.in/) and test it using Selenium."],
  ["Web calculator app + Selenium testing", "Develop a Web-Application for Calculator, Write test cases for any operation and test it using Selenium."],
  ["Jenkins Java Git job remote trigger", "Create a Jenkins Job for executing Java program in GIT – Using Trigger, Build the Job remotely."],
  ["Jenkins Python calculator Git job SCM polling", "Create a Jenkins Job for executing Python program (Calculator) in GIT – Using Trigger, execute the job through SCM polling. (automatically execute when code is changed in GITHub)."],
  ["Java and Python calculator + Jenkins parameterization", "Write a simple program in Java and Python for Calculator and Create a Jenkins Job for executing the programs. (Use file and variable Parameterization)"]
];

const q = (n, q4, q5) => [
  "List out any five Git commands and give its usage.",
  "List out any five Docker commands and give its usage.",
  "List out any five Kubernetes commands and give its usage.",
  q4,
  q5
].filter(Boolean);

const topicGroups = {
  Docker: new Set([1, 2, 3, 4, 5, 6, 10, 14, 15, 16, 17, 18, 19]),
  Jenkins: new Set([7, 8, 9, 10, 11, 12, 13, 14, 25, 26, 27]),
  Kubernetes: new Set([15, 16, 17, 20, 21]),
  Selenium: new Set([21, 22, 23, 24])
};

const getTopics = (id) =>
  Object.entries(topicGroups)
    .filter(([, setIds]) => setIds.has(id))
    .map(([topic]) => topic);

export const programs = programSpecs.map(([title, q4, q5], index) => {
  const id = index + 1;
  const practical = practicals[id];
  const q5Practical =
    id === 15 ? kubeTask("nginx", "nginx", 80) :
    id === 16 ? kubeTask("python", "python:3.12-slim", 8000, `          command: ["python"]
          args: ["-m", "http.server", "8000"]`) :
    id === 17 ? kubeTask("mongo", "mongo:7", 27017) :
    id === 21 ? seleniumOpen :
    id === 10 ? {
      aim: "Create a Jenkins periodic shell job.",
      files: ["No source file required"],
      blocks: [],
      steps: ["Create Freestyle project.", "Enable Build periodically.", "Use `H/5 * * * *`.", "Add Execute shell commands.", "Save and Build Now."],
      commandBlocks: [block("Jenkins shell", "bash", "date\necho \"Periodic shell job executed\"")],
      expected: "Jenkins runs the shell job periodically.",
      fixes: ["Schedule must be valid cron syntax.", "Check Jenkins system time if trigger seems late."]
    } :
    id === 14 ? {
      aim: "Create a Jenkins pipeline Job using pipeline script with 5 stages.",
      files: ["Jenkinsfile"],
      blocks: [fiveStageJenkinsfile],
      steps: ["Create a Jenkinsfile with 5 stages.", "Push the Jenkinsfile to GitHub.", "Open Jenkins.", "Create a Pipeline job.", "Use Pipeline script from SCM or paste the pipeline script.", "Save the job.", "Click Build Now and check all 5 stages."],
      commandBlocks: [block("GitHub push commands", "bash", gitPush), fiveStageJenkinsfile],
      expected: "Jenkins displays Start, Build, Test, Package, and Deploy stages as successful.",
      fixes: ["Keep filename exactly `Jenkinsfile`.", "Install Pipeline plugin if the Pipeline job type is missing."]
    } : null;
  const q4Practical = practical ? { ...practical, aim: q4 } : practical;
  const q5Answer = q5Practical && q5 ? { ...q5Practical, aim: q5 } : q5Practical;
  return {
    id,
    title: `Set ${id}: ${title}`,
    topics: getTopics(id),
    questions: q(id, q4, q5),
    git: gitCommands,
    docker: dockerCommands,
    kubernetes: kubernetesCommands,
    q4: q4Practical,
    q5: q5Answer
  };
});
