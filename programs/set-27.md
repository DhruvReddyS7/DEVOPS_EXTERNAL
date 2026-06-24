# Set 27: Java and Python calculator + Jenkins parameterization

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Java and Python for Calculator and Create a Jenkins Job for executing the programs. (Use file and variable Parameterization)

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

**Aim:** Write a simple program in Java and Python for Calculator and Create a Jenkins Job for executing the programs. (Use file and variable Parameterization)

**Files:**
- Calculator.java
- calculator.py

**Execution Steps:**
1. Create the listed source files with the exact file names.
2. Run the program locally using the run commands.
3. Push the project to GitHub.
4. Open Jenkins at http://localhost:8080.
5. Create New Item -> Freestyle project.
6. Under Source Code Management choose Git and paste the repository URL.
7. Under Build Steps choose Execute shell and paste the shell commands.
8. Save and click Build Now.
9. Add Choice Parameter `PROGRAM_FILE`: Calculator.java, calculator.py.
10. Add String Parameters `A` and `B`.

**Source Files:**

#### Calculator.java

```java
public class Calculator {
  public static void main(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Add: " + (a + b));
    System.out.println("Sub: " + (a - b));
  }
}
```

#### calculator.py

```python
import sys
a = int(sys.argv[1])
b = int(sys.argv[2])
print("Add:", a + b)
print("Sub:", a - b)
```

**Commands:**

#### Run commands

```bash
if [ "$PROGRAM_FILE" = "Calculator.java" ]; then javac Calculator.java && java Calculator $A $B; else python3 calculator.py $A $B; fi
```

#### GitHub push commands

```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

#### Jenkins Execute shell

```bash
if [ "$PROGRAM_FILE" = "Calculator.java" ]; then javac Calculator.java && java Calculator $A $B; else python3 calculator.py $A $B; fi
```

**Expected Output:** Selected calculator runs with parameter values A and B.

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
