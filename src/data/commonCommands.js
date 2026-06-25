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
    command: "docker pull <image>",
    usage: "Downloads an image from Docker Hub.",
    example: "docker pull nginx"
  },
  {
    command: "docker run <image>",
    usage: "Creates and starts a container from an image.",
    example: "docker run nginx"
  },
  {
    command: "docker build -t <image> .",
    usage: "Builds a Docker image from a Dockerfile.",
    example: "docker build -t myapp ."
  },
  {
    command: "docker tag <image> <username>/<image>",
    usage: "Tags an image with a new name for a registry.",
    example: "docker tag myapp username/myapp"
  },
  {
    command: "docker push <username>/<image>",
    usage: "Uploads the image to Docker Hub.",
    example: "docker push username/myapp"
  }
];

export const kubernetesCommands = [
  {
    command: "kubectl create deployment <name> --image=<image>",
    usage: "Creates a deployment using the specified image.",
    example: "kubectl create deployment nginx-deployment --image=nginx"
  },
  {
    command: "kubectl get deployments",
    usage: "Lists all deployments.",
    example: "kubectl get deployments"
  },
  {
    command: "kubectl get pods",
    usage: "Lists all pods.",
    example: "kubectl get pods"
  },
  {
    command: "kubectl describe deployment <name>",
    usage: "Shows detailed information about a deployment.",
    example: "kubectl describe deployment nginx-deployment"
  },
  {
    command: "kubectl delete deployment <name>",
    usage: "Deletes the specified deployment.",
    example: "kubectl delete deployment nginx-deployment"
  }
];
