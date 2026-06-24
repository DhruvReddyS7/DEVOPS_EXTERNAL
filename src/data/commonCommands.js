export const gitCommands = [
  {
    command: "git init",
    usage: "Creates a new Git repository in the current folder.",
    example: "git init"
  },
  {
    command: "git status",
    usage: "Shows changed, staged, and untracked files.",
    example: "git status"
  },
  {
    command: "git add .",
    usage: "Stages all project files for commit.",
    example: "git add ."
  },
  {
    command: "git commit -m \"initial commit\"",
    usage: "Saves staged changes with a message.",
    example: "git commit -m \"initial commit\""
  },
  {
    command: "git push origin main",
    usage: "Uploads local commits to GitHub.",
    example: "git push -u origin main"
  }
];

export const dockerCommands = [
  {
    command: "docker --version",
    usage: "Checks whether Docker is installed.",
    example: "docker --version"
  },
  {
    command: "docker build -t myapp .",
    usage: "Builds a Docker image from a Dockerfile.",
    example: "docker build -t myapp ."
  },
  {
    command: "docker run --name mycontainer myapp",
    usage: "Runs a container from an image.",
    example: "docker run myapp"
  },
  {
    command: "docker ps -a",
    usage: "Lists running and stopped containers.",
    example: "docker ps -a"
  },
  {
    command: "docker push username/myapp:latest",
    usage: "Pushes an image to DockerHub.",
    example: "docker push username/myapp:latest"
  }
];

export const kubernetesCommands = [
  {
    command: "kubectl version --client",
    usage: "Checks the installed kubectl client version.",
    example: "kubectl version --client"
  },
  {
    command: "kubectl create deployment web --image=nginx",
    usage: "Creates a deployment from an image.",
    example: "kubectl create deployment web --image=nginx"
  },
  {
    command: "kubectl get pods",
    usage: "Lists pods in the current namespace.",
    example: "kubectl get pods"
  },
  {
    command: "kubectl expose deployment web --type=NodePort --port=80",
    usage: "Creates a service to access the deployment.",
    example: "kubectl expose deployment web --type=NodePort --port=80"
  },
  {
    command: "kubectl apply -f deployment.yaml",
    usage: "Creates or updates Kubernetes objects from YAML.",
    example: "kubectl apply -f deployment.yaml"
  }
];
