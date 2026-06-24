import { dockerCommands, gitCommands, kubernetesCommands } from "./commonCommands.js";

const repo = "https://github.com/YOUR_USERNAME/devops-lab-program.git";
const dockerUser = "245123751006";

const block = (label, language, code) => ({ label, language, code: code.trim() });

const gitPush = `git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin ${repo}
git push -u origin main`;

const dockerPush = (image) => `docker login -u ${dockerUser}
docker tag ${image} ${dockerUser}/${image}
docker push ${dockerUser}/${image}`;

const makeDockerPractical = ({ title, aim, files, blocks, build, run, output, commit = "Docker App" }) => ({
  aim,
  files,
  blocks,
  steps: [
    "Create the listed source files in one folder.",
    "Open terminal in that folder.",
    "Run the Build & Run commands.",
    "Check output in terminal or browser.",
    "Run the DockerHub commands to push the image.",
    "Run the GitHub commands to push the code."
  ],
  commandBlocks: [
    block("Build & Run", "bash", [...build, ...run].join("\n")),
    block("DockerHub", "bash", dockerPush(title)),
    block("GitHub", "bash", `git init
git add .
git commit -m "${commit}"
git remote add origin ${repo}
git branch -M main
git push -u origin main`)
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
    title: "java-app",
    aim: "Write a simple Java program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["HelloWorld.java", "Dockerfile"],
    blocks: [
      block("HelloWorld.java", "java", `public class HelloWorld{
public static void main(String args[]){
System.out.println("Hello from Java Docker Application");
}
}`),
      block("Dockerfile", "dockerfile", `FROM eclipse-temurin:17
WORKDIR /app
COPY HelloWorld.java .
RUN javac HelloWorld.java
CMD ["java","HelloWorld"]`)
    ],
    build: ["docker build -t java-app ."],
    run: ["docker run java-app"],
    output: "Hello from Java Docker Application",
    commit: "Java Docker App"
  }),
  c: makeDockerPractical({
    title: "c-app",
    aim: "Write a simple C program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["hello.c", "Dockerfile"],
    blocks: [
      block("hello.c", "c", `#include<stdio.h>
int main(){
printf("Hello from C Docker Application");
return 0;
}`),
      block("Dockerfile", "dockerfile", `FROM gcc:latest
WORKDIR /app
COPY hello.c .
RUN gcc hello.c -o hello
CMD ["./hello"]`)
    ],
    build: ["docker build -t c-app ."],
    run: ["docker run c-app"],
    output: "Hello from C Docker Application",
    commit: "C Docker App"
  }),
  html: makeDockerPractical({
    title: "html-app",
    aim: "Create a simple HTML page, serve it using nginx Docker image, push code to GitHub, and push image to DockerHub.",
    files: ["index.html", "Dockerfile"],
    blocks: [
      block("index.html", "html", `<html>
<body>
<h1>Hello HTML Docker Application</h1>
</body>
</html>`),
      block("Dockerfile", "dockerfile", `FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80`)
    ],
    build: ["docker build -t html-app ."],
    run: ["docker run -d -p 8080:80 html-app"],
    output: "Browser shows: Hello HTML Docker Application",
    commit: "HTML Docker App"
  }),
  python: makeDockerPractical({
    title: "python-app",
    aim: "Write a simple Python program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.py", "Dockerfile"],
    blocks: [
      block("app.py", "python", `print("Hello Python Docker Application")`),
      block("Dockerfile", "dockerfile", `FROM python:3.12
WORKDIR /app
COPY app.py .
CMD ["python","app.py"]`)
    ],
    build: ["docker build -t python-app ."],
    run: ["docker run python-app"],
    output: "Hello Python Docker Application",
    commit: "Python Docker App"
  }),
  node: makeDockerPractical({
    title: "nodeimage",
    aim: "Write a simple Node.js program, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.js", "Dockerfile"],
    blocks: [
      block("app.js", "javascript", `console.log("Hello Node Docker Application");`),
      block("Dockerfile", "dockerfile", `FROM node:alpine
WORKDIR /app
COPY app.js .
CMD ["node","app.js"]`)
    ],
    build: ["docker build -t nodeimage ."],
    run: ["docker run nodeimage"],
    output: "Hello Node Docker Application",
    commit: "Node Docker App"
  }),
  flask: makeDockerPractical({
    title: "flask-app",
    aim: "Create a Flask app, build and run it in Docker, push code to GitHub, and push image to DockerHub.",
    files: ["app.py", "requirements.txt", "Dockerfile"],
    blocks: [
      block("app.py", "python", `from flask import Flask
app=Flask(__name__)

@app.route("/")
def home():
 return "Hello Flask Docker Application"

app.run(host="0.0.0.0",port=5000)`),
      block("requirements.txt", "text", "Flask"),
      block("Dockerfile", "dockerfile", `FROM python:3.12
WORKDIR /app
COPY app.py .
COPY requirements.txt .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python","app.py"]`)
    ],
    build: ["docker build -t flask-app ."],
    run: ["docker run -p 5000:5000 flask-app"],
    output: "Hello Flask Docker Application",
    commit: "Flask Docker App"
  })
};

const htmlRegistrationDocker = makeDockerPractical({
  title: "registration-app",
  aim: "Develop a simple containerized HTML application (Registration form) using Docker and push the image to dockerhub and code to GIT",
  files: ["index.html", "Dockerfile"],
  blocks: [
    block("index.html", "html", `<html>
<body>
<h2>Registration Form</h2>
<form>
Name:<input type="text"><br>
Email:<input type="email"><br>
Password:<input type="password"><br>
<input type="submit" value="Register">
</form>
</body>
</html>`),
    block("Dockerfile", "dockerfile", `FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80`)
  ],
  build: ["docker build -t registration-app ."],
  run: ["docker run -d -p 8080:80 registration-app"],
  output: "Browser shows the Registration Form page.",
  commit: "HTML Registration Docker App"
});

const fiveStageJenkinsfile = block("Jenkinsfile", "groovy", `pipeline {
    agent any

    stages {

        stage('Stage 1 - Build') {
            steps {
                echo 'Executing Build Stage'
            }
        }

        stage('Stage 2 - Test') {
            steps {
                echo 'Executing Test Stage'
            }
        }

        stage('Stage 3 - Deploy') {
            steps {
                echo 'Executing Deploy Stage'
            }
        }

        stage('Stage 4 - Verify') {
            steps {
                echo 'Executing Verify Stage'
            }
        }

        stage('Stage 5 - Cleanup') {
            steps {
                echo 'Executing Cleanup Stage'
            }
        }

    }
}`);

const jenkinsJob = ({ aim, files, blocks, shell, output, extra = [], git = gitPush, setup = [] }) => ({
  aim,
  files,
  blocks,
  steps: [
    ...setup,
    ...(setup.length ? [] : ["Create the listed source files with the exact file names."]),
    "Push the project to GitHub.",
    "Open Jenkins at http://localhost:8080.",
    "Create New Item -> Freestyle project.",
    "Under Source Code Management choose Git and paste the repository URL.",
    "Under Build Steps choose Execute shell and paste the shell commands.",
    "Save and click Build Now.",
    ...extra
  ],
  commandBlocks: [
    block("GitHub push commands", "bash", git),
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
    aim: "Write a Simple C Program, Push to GitHub, and Create a Jenkins Job.",
    files: ["hello.c"],
    blocks: [block("hello.c", "c", `#include <stdio.h>

int main() {
    printf("Hello World from C Program\\n");
    return 0;
}`)],
    shell: "gcc hello.c -o hello\n./hello",
    output: "Hello World from C Program",
    setup: ["Create folder: `mkdir CProgram && cd CProgram`.", "Create file: `vi hello.c`."],
    git: "git init\ngit add .\ngit commit -m \"Added C Program\"\ngit branch -M main\ngit remote add origin https://github.com/username/CProgram.git\ngit push -u origin main",
    extra: ["Use job name `CProgramJob`.", "Branch specifier: `*/main`."]
  }),
  8: jenkinsJob({
    aim: "Write a Python Program (ADD, SUB, MUL, DIV), Push to GitHub, and Create a Jenkins Job.",
    files: ["calculator.py"],
    blocks: [block("calculator.py", "python", `a = 20
b = 10
print("Addition =", a + b)
print("Subtraction =", a - b)
print("Multiplication =", a * b)
print("Division =", a / b)`)],
    shell: "python3 calculator.py",
    output: "Addition = 30, Subtraction = 10, Multiplication = 200, Division = 2.0",
    setup: ["Create folder: `mkdir PythonProgram && cd PythonProgram`.", "Create file: `vi calculator.py`."],
    git: "git init\ngit add .\ngit commit -m \"Added Python Calculator Program\"\ngit branch -M main\ngit remote add origin https://github.com/username/PythonProgram.git\ngit push -u origin main",
    extra: ["Use job name `PythonProgramJob`.", "Branch specifier: `*/main`."]
  }),
  9: jenkinsJob({
    aim: "Write a Java Program (Reverse of a Number), Push to GitHub, and Create a Jenkins Job.",
    files: ["ReverseNumber.java"],
    blocks: [block("ReverseNumber.java", "java", `public class ReverseNumber {
    public static void main(String[] args) {
        int num = 12345;
        int rev = 0;

        while(num != 0) {
            int rem = num % 10;
            rev = rev * 10 + rem;
            num = num / 10;
        }

        System.out.println("Reverse Number = " + rev);
    }
}`)],
    shell: "javac ReverseNumber.java\njava ReverseNumber",
    output: "Reverse Number = 54321",
    setup: ["Create folder: `mkdir JavaProgram && cd JavaProgram`.", "Create file: `vi ReverseNumber.java`."],
    git: "git init\ngit add .\ngit commit -m \"Added Java Reverse Number Program\"\ngit branch -M main\ngit remote add origin https://github.com/username/JavaProgram.git\ngit push -u origin main",
    extra: ["Use job name `JavaProgramJob`.", "Branch specifier: `*/main`."]
  }),
  10: {
    aim: "Give Docker commands to Run an Hello-World image in Docker.",
    files: ["No source file required"],
    blocks: [],
    steps: ["Open terminal.", "Pull the hello-world image.", "List Docker images.", "Run the hello-world image.", "Read the success message in terminal."],
    commandBlocks: [block("Run Hello-World image in Docker", "bash", "docker pull hello-world\ndocker images\ndocker run hello-world")],
    expected: "Docker prints the hello-world success message.",
    fixes: ["If Docker is not running, start Docker Desktop or Docker service.", "If image pull fails, check internet connection."]
  },
  11: {
    aim: "Create a simple HTML Registration Form, push the code to GitHub, and publish the HTML page using Jenkins.",
    files: ["index.html"],
    blocks: [block("index.html", "html", `<!DOCTYPE html>
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
</html>`)],
    steps: ["Install HTML Publisher Plugin from Manage Jenkins -> Plugins.", "Create folder: `mkdir RegistrationForm && cd RegistrationForm`.", "Create file: `vi index.html`.", "Paste the registration form code and save.", "Push the project to GitHub.", "Open Jenkins at http://localhost:8080.", "Create New Item -> Freestyle Project.", "Use job name `RegistrationForm`.", "Under Source Code Management choose Git and paste `https://github.com/username/RegistrationForm.git`.", "Branch Specifier: `*/main`.", "Go to Post-build Actions.", "Select Publish HTML Reports.", "HTML Directory to Archive: `.`", "Index Page(s): `index.html`.", "Report Title: `Registration Form Report`.", "Click Apply and Save.", "Click Build Now.", "Open `Registration Form Report` from the build page."],
    commandBlocks: [block("GitHub push commands", "bash", "git init\ngit add .\ngit commit -m \"Added Registration Form\"\ngit remote add origin https://github.com/username/RegistrationForm.git\ngit branch -M main\ngit push -u origin main"), block("HTML Publisher settings", "text", "HTML Directory to Archive: .\nIndex Page(s): index.html\nReport Title: Registration Form Report\nReport Files: index.html")],
    expected: "Open Registration Form Report in Jenkins to view the HTML page.",
    fixes: ["Install HTML Publisher Plugin if Publish HTML Reports is missing.", "Keep `index.html` in the repository root.", "Use `.` as the HTML directory."]
  },
  12: {
    aim: "Jenkins Pipeline Job Using Jenkinsfile from GitHub (SCM - GIT).",
    files: ["Jenkinsfile"],
    blocks: [block("Jenkinsfile", "groovy", `pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Hello from Jenkins Pipeline'
            }
        }
    }
}`)],
    steps: ["Create project folder `JenkinsPipelineDemo`.", "Create `Jenkinsfile` and paste the pipeline script.", "Push the Jenkinsfile to GitHub.", "Open Jenkins and create a Pipeline job named `PipelineDemo`.", "In Pipeline definition choose `Pipeline script from SCM`.", "SCM: Git.", "Repository URL: `https://github.com/username/JenkinsPipelineDemo.git`.", "Branch Specifier: `*/main`.", "Script Path: `Jenkinsfile`.", "Save and Build Now.", "Open Console Output and verify success."],
    commandBlocks: [block("Git Commands", "bash", "git init\ngit add .\ngit commit -m \"Added Jenkinsfile\"\ngit remote add origin https://github.com/username/JenkinsPipelineDemo.git\ngit branch -M main\ngit push -u origin main")],
    expected: "Console Output shows `Hello from Jenkins Pipeline` and `Finished: SUCCESS`.",
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
    steps: ["Open terminal and become root if required.", "Pull the Ubuntu latest image.", "Run Ubuntu container named ubuntucontainer.", "Inside the container, create folder and file.", "Exit the container.", "Stop the container after completion.", "If name already exists, remove old container and run again."],
    commandBlocks: [
      block("Root login", "bash", "sudo su"),
      block("Pull Ubuntu image", "bash", "docker pull ubuntu:latest"),
      block("Run Ubuntu container", "bash", "docker run -it --name ubuntucontainer ubuntu bash"),
      block("Inside Ubuntu container", "bash", "whoami\nmkdir cse\ncd cse\necho \"Hello CSE\" > hello.txt\nls\ncat hello.txt\nexit"),
      block("Stop container", "bash", "docker stop ubuntucontainer"),
      block("Remove container if name exists", "bash", "docker rm ubuntucontainer")
    ],
    expected: "Ubuntu container opens, creates hello.txt, and prints `Hello CSE`.",
    fixes: ["If the container name already exists, run `docker rm ubuntucontainer`.", "If permission is denied, start with `sudo su`."]
  },
  15: null,
  16: null,
  17: null,
  18: htmlRegistrationDocker,
  19: {
    aim: "Use Docker Compose to create busybox containers bbConA and bbConB and ping bbConB from bbConA.",
    files: ["docker-compose.yml"],
    blocks: [block("docker-compose.yml", "yaml", `version: "3"
services:
 bbConA:
  image: busybox
  container_name: bbConA
  command: sleep 3600
 bbConB:
  image: busybox
  container_name: bbConB
  command: sleep 3600`)],
    steps: ["Create docker-compose.yml.", "Start both containers.", "Check containers are running.", "Enter bbConA shell.", "Ping bbConB from bbConA.", "Stop containers after verification."],
    commandBlocks: [block("Docker Compose BusyBox commands", "bash", "docker compose up -d\ndocker ps\ndocker exec -it bbConA sh\nping bbConB\ndocker compose down")],
    expected: "Ping replies from bbConB are displayed inside bbConA.",
    fixes: ["Use `docker compose`, not old `docker-compose`, on recent Docker.", "Both containers must be on the same compose network."]
  },
  20: null,
  21: null,
  22: null,
  23: null,
  24: null,
  25: {
    aim: "Jenkins Remote Build Trigger Using CURL.",
    files: ["No source file required"],
    blocks: [],
    steps: ["Open Jenkins in the browser.", "Click New Item.", "Enter a project name such as `TestJob`.", "Select Freestyle Project and click OK.", "Go to Build Triggers.", "Select `Trigger builds remotely`.", "Authentication Token: `1234`.", "Add Build Step -> Execute Shell.", "Paste `echo \"Hello World\"`.", "Click Apply and Save.", "Open terminal.", "Trigger the build using curl.", "Open Jenkins -> Job -> Build History -> latest build -> Console Output."],
    commandBlocks: [block("Execute Shell", "bash", "echo \"Hello World\""), block("Remote Trigger curl", "bash", "curl -u admin:admin \"http://localhost:8080/job/TestJob/build?token=1234\"\n\n# OR\ncurl -X POST -u admin:admin \"http://localhost:8080/job/TestJob/build?token=1234\"")],
    output: "Started by remote host, Hello World, Finished: SUCCESS",
    expected: "Jenkins accepts the request, starts a new build automatically, and Console Output shows `Hello World` and `Finished: SUCCESS`.",
    fixes: ["Use the correct Jenkins username/password in curl.", "Use the exact job name in the URL.", "Keep token as `1234` or update the URL token to match your job."]
  },
  26: jenkinsJob({
    aim: "Create a Jenkins Job for Executing Python Program (Calculator) in GitHub Using SCM Polling Trigger.",
    files: ["calculator.py"],
    blocks: [block("calculator.py", "python", `print("Calculator Program")

a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)`)],
    shell: "ls\ngit log",
    output: "Jenkins polls GitHub every minute and automatically triggers a build when code changes.",
    setup: ["Create folder: `mkdir CalculatorProject && cd CalculatorProject`.", "Create file: `vi calculator.py`."],
    git: "git init\ngit add .\ngit commit -m \"Initial Commit\"\ngit branch -M main\ngit remote add origin https://github.com/username/CalculatorProject.git\ngit push -u origin main",
    extra: ["Use job name `Calculator-SCM-Polling`.", "Repository URL: `https://github.com/username/CalculatorProject.git`.", "Enable Build Triggers -> Poll SCM.", "Schedule: `* * * * *`.", "To test, change `calculator.py`, commit with `Updated Calculator Program`, and push to GitHub."]
  }),
  27: {
    aim: "Run a simple Java or Python calculator through Jenkins using file and variable parameterization.",
    files: ["Calculator.java", "calculator.py"],
    blocks: [block("Calculator.java", "java", `public class Calculator {
  public static void main(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Add: " + (a + b));
    System.out.println("Sub: " + (a - b));
    System.out.println("Mul: " + (a * b));
    System.out.println("Div: " + (a / b));
  }
}`), block("calculator.py", "python", `import sys

a = int(sys.argv[1])
b = int(sys.argv[2])
print("Add:", a + b)
print("Sub:", a - b)
print("Mul:", a * b)
print("Div:", a / b)`)],
    steps: ["Create the listed source files with the exact file names.", "Push the project to GitHub.", "Open Jenkins at http://localhost:8080.", "Create New Item -> Freestyle project.", "Enable `This project is parameterized`.", "Add Choice Parameter named `PROGRAM_FILE`.", "Choices: `Calculator.java` and `calculator.py`.", "Add String Parameter `A` with default value `10`.", "Add String Parameter `B` with default value `5`.", "Under Source Code Management choose Git and paste the repository URL.", "Under Build Steps choose Execute shell.", "Paste the run command.", "Save.", "Click Build with Parameters.", "Select Java or Python file and enter A/B values.", "Click Build and check Console Output."],
    commandBlocks: [block("GitHub push commands", "bash", gitPush), block("Jenkins Execute shell", "bash", "if [ \"$PROGRAM_FILE\" = \"Calculator.java\" ]; then\n  javac Calculator.java && java Calculator $A $B\nelse\n  python3 calculator.py $A $B\nfi")],
    expected: "Selected calculator prints Add, Sub, Mul, and Div using Jenkins values A and B.",
    fixes: ["Parameter names must be exactly `PROGRAM_FILE`, `A`, and `B`.", "Use `Build with Parameters`, not normal Build Now.", "If values are blank, enter numbers like `10` and `5`."]
  }
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

const kubeCommandTask = (name, image) => ({
  aim: `Kubernetes: Create ${name} Deployment and Run kubectl Commands.`,
  files: ["No YAML file required"],
  blocks: [],
  steps: [
    "Start Minikube or make sure Kubernetes is running.",
    `Create ${name} deployment using kubectl.`,
    "Check deployments.",
    "Check pods.",
    `Describe ${name} deployment.`,
    "List all Kubernetes resources.",
    "Delete the deployment after verification."
  ],
  commandBlocks: [
    block(`${name} kubectl commands`, "bash", `kubectl create deployment ${name}-deployment --image=${image}
kubectl get deployments
kubectl get pods
kubectl describe deployment ${name}-deployment
kubectl get all
kubectl delete deployment ${name}-deployment`)
  ],
  expected: `${name} deployment is created, shown in kubectl output, described, and deleted successfully.`,
  fixes: ["If kubectl cannot connect, run `minikube start`.", "If deployment already exists, delete it first using the delete command."]
});

practicals[15] = {
  aim: "Give Docker commands to run a Python image and execute some commands.",
  files: ["No source file required"],
  blocks: [],
  steps: ["Pull the Python latest image.", "Run Python container named pycontainer.", "Inside Python, execute basic commands.", "Exit Python.", "Stop the container after completion.", "If name already exists, remove old container and run again."],
  commandBlocks: [
    block("Pull Python image", "bash", "docker pull python:latest"),
    block("Run Python container", "bash", "docker run -it --name pycontainer python"),
    block("Inside Python", "python", "x = 5\nprint(x)\nprint(4 + 3)\nexit()"),
    block("Stop container", "bash", "docker stop pycontainer"),
    block("Remove container if name exists", "bash", "docker rm pycontainer")
  ],
  expected: "Python container opens and prints `5` and `7`.",
  fixes: ["If container name exists, run `docker rm pycontainer`.", "Use `exit()` to leave Python."]
};
practicals[16] = {
  aim: "Give Docker commands to run a node image and execute some commands.",
  files: ["No source file required"],
  blocks: [],
  steps: ["Pull the Node latest image.", "Run Node container named nodecontainer.", "Inside Node, execute JavaScript commands.", "Exit Node.", "Stop the container after completion.", "If name already exists, remove old container and run again."],
  commandBlocks: [
    block("Pull Node image", "bash", "docker pull node:latest"),
    block("Run Node container", "bash", "docker run -it --name nodecontainer node"),
    block("Inside Node", "javascript", "console.log(\"Hello Node\");\n2 + 5\n.exit"),
    block("Stop container", "bash", "docker stop nodecontainer"),
    block("Remove container if name exists", "bash", "docker rm nodecontainer")
  ],
  expected: "Node container opens, prints `Hello Node`, and evaluates `2 + 5`.",
  fixes: ["If container name exists, run `docker rm nodecontainer`.", "Use `.exit` to leave Node."]
};
practicals[17] = {
  aim: "Give Docker commands to run a nginx image and execute some commands.",
  files: ["No source file required"],
  blocks: [],
  steps: ["Pull the Nginx latest image.", "Run Nginx container named nginxcontainer on port 8080.", "Check running containers.", "Open the browser URL.", "Enter the Nginx container.", "Run basic commands inside it.", "Exit and stop the container.", "If name already exists, remove old container and run again."],
  commandBlocks: [
    block("Pull Nginx image", "bash", "docker pull nginx:latest"),
    block("Run Nginx container", "bash", "docker run -d --name nginxcontainer -p 8080:80 nginx"),
    block("Check running container", "bash", "docker ps"),
    block("Open browser", "text", "http://localhost:8080"),
    block("Enter Nginx container", "bash", "docker exec -it nginxcontainer sh"),
    block("Inside Nginx container", "bash", "nginx -v\npwd\nls\nexit"),
    block("Stop container", "bash", "docker stop nginxcontainer"),
    block("Remove container if name exists", "bash", "docker rm nginxcontainer")
  ],
  expected: "Nginx runs on http://localhost:8080 and container commands print version/path/files.",
  fixes: ["If container name exists, run `docker rm nginxcontainer`.", "If port 8080 is busy, change the left side, for example `-p 9090:80`."]
};
practicals[20] = kubeTask("nginx", "nginx", 80);
practicals[21] = kubeCommandTask("node", "node");

const seleniumOpen = {
  aim: "Write a JavaScript Program to Open Google / College Website in the Browser Using Selenium.",
  files: ["google.js"],
  blocks: [block("google.js", "javascript", `const { Builder } = require('selenium-webdriver');

async function openGoogle() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');
}

openGoogle();`)],
  steps: [
    "Install Node.js and npm.",
    "Create a project directory and move into it.",
    "Initialize the Node.js project.",
    "Install Selenium WebDriver.",
    "Create `google.js`.",
    "Add the Selenium code.",
    "Run the program.",
    "To open college website, replace the Google URL and run again."
  ],
  commandBlocks: [
    block("Install Node.js and npm", "bash", "sudo apt update\nsudo apt install nodejs npm -y"),
    block("Create project directory", "bash", "mkdir selenium-demo\ncd selenium-demo"),
    block("Initialize Node project", "bash", "npm init -y"),
    block("Install Selenium WebDriver", "bash", "npm install selenium-webdriver"),
    block("Create file", "bash", "nano google.js"),
    block("Run program", "bash", "node google.js"),
    block("Replace with college website", "javascript", "await driver.get('https://www.google.com');\n\n// replace with\nawait driver.get('https://www.yourcollegewebsite.com');")
  ],
  expected: "Chrome browser opens automatically and loads the Google website.",
  fixes: ["Install Google Chrome before running Selenium.", "If Chrome session fails, update Chrome and Selenium WebDriver."]
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
  steps: ["Create a project directory.", "Initialize Node.js project.", "Install Selenium WebDriver.", "Create `checkResult.js`.", "Paste the exam-result website Selenium code.", "Run the script.", "Verify that the page title and success message print in terminal."],
  commandBlocks: [
    block("Create project", "bash", "mkdir result-checker\ncd result-checker"),
    block("Initialize and install Selenium", "bash", "npm init -y\nnpm install selenium-webdriver"),
    block("Create file", "bash", "nano checkResult.js"),
    block("Run program", "bash", "node checkResult.js")
  ],
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
    id === 15 ? kubeCommandTask("nginx", "nginx") :
    id === 16 ? kubeCommandTask("python", "python") :
    id === 17 ? kubeCommandTask("mongo", "mongo") :
    id === 21 ? seleniumOpen :
    id === 10 ? {
      aim: "Create a Jenkins Job for executing shell commands and use Build Trigger - Build periodically.",
      files: ["No source file required"],
      blocks: [],
      steps: ["Open Jenkins Dashboard.", "Click New Item.", "Enter job name `PeriodicShellJob`.", "Select Freestyle Project and click OK.", "In Build Triggers select `Build periodically`.", "Schedule: `* * * * *`.", "Add Build Step -> Execute Shell.", "Paste `echo \"Hello World\"`.", "Click Apply and Save.", "Click Build Now.", "Open Console Output to verify."],
      commandBlocks: [block("Build periodically schedule", "text", "* * * * *"), block("Execute Shell", "bash", "echo \"Hello World\"")],
      expected: "Console Output shows `Hello World` and `Finished: SUCCESS`.",
      fixes: ["Schedule must be valid cron syntax.", "Check Jenkins system time if trigger seems late."]
    } :
    id === 14 ? {
      aim: "Create a Jenkins pipeline Job using pipeline script with 5 stages.",
      files: ["Pipeline script"],
      blocks: [fiveStageJenkinsfile],
      steps: ["Open Jenkins in the browser.", "Click New Item.", "Enter job name `Pipeline5Stages`.", "Select Pipeline and click OK.", "In Pipeline section choose Definition: `Pipeline script`.", "Paste the 5-stage pipeline code.", "Click Apply.", "Click Save.", "Open the Pipeline job.", "Click Build Now.", "Open Build Number #1.", "Click Console Output and verify all five stages."],
      commandBlocks: [],
      expected: "Console Output shows Executing Build, Test, Deploy, Verify, Cleanup stages and `Finished: SUCCESS`.",
      fixes: ["Select `Pipeline script`, not `Pipeline script from SCM`.", "Install Pipeline plugin if the Pipeline job type is missing."]
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
