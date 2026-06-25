# Set 9: Java reverse number + GitHub + Jenkins Job

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Java(Reverse of a number) , and push the code to GITHUB. Create a Jenkins Job for executing the program.

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

**Aim:** Write a simple program in Java(Reverse of a number) , and push the code to GITHUB. Create a Jenkins Job for executing the program.

**Files:**
- ReverseNumber.java

**Execution Steps:**
1. Create folder: `mkdir JavaProgram && cd JavaProgram`.
2. Create file: `vi ReverseNumber.java`.
3. Push the project to GitHub.
4. Start Jenkins service on Ubuntu.
5. Open Jenkins at http://localhost:8080.
6. Create New Item -> Freestyle project.
7. Under Source Code Management choose Git and paste the repository URL.
8. Under Build Steps choose Execute shell and paste the shell commands.
9. Save and click Build Now.
10. Use job name `JavaProgramJob`.
11. Branch specifier: `*/main`.

**Source Files:**

#### ReverseNumber.java

```java
public class ReverseNumber {
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
}
```

**Commands:**

#### Start Jenkins

```bash
sudo su
systemctl enable jenkins
systemctl start jenkins
```

#### GitHub push commands

```bash
git init
git add .
git commit -m "Added Java Reverse Number Program"
git branch -M main
git remote add origin https://github.com/username/JavaProgram.git
git push -u origin main
```

#### Jenkins Execute shell

```bash
javac ReverseNumber.java
java ReverseNumber
```

**Expected Output:** Reverse Number = 54321

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
