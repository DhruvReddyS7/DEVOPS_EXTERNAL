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

**Aim:** Write a simple program in Java and Python for Calculator and Create a Jenkins Job for executing the programs. (Use file and variable Parameterization)

**Files:**
- Calculator.java
- calculator.py

**Execution Steps:**
1. Create the listed source files with the exact file names.
2. Push the project to GitHub.
3. Open Jenkins at http://localhost:8080.
4. Create New Item -> Freestyle project.
5. Enable `This project is parameterized`.
6. Add Choice Parameter named `PROGRAM_FILE`.
7. Choices: `Calculator.java` and `calculator.py`.
8. Add String Parameter `A` with default value `10`.
9. Add String Parameter `B` with default value `5`.
10. Under Source Code Management choose Git and paste the repository URL.
11. Under Build Steps choose Execute shell.
12. Paste the run command.
13. Save.
14. Click Build with Parameters.
15. Select Java or Python file and enter A/B values.
16. Click Build and check Console Output.

**Source Files:**

#### Calculator.java

```java
public class Calculator {
  public static void main(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Add: " + (a + b));
    System.out.println("Sub: " + (a - b));
    System.out.println("Mul: " + (a * b));
    System.out.println("Div: " + (a / b));
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
print("Mul:", a * b)
print("Div:", a / b)
```

**Commands:**

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
if [ "$PROGRAM_FILE" = "Calculator.java" ]; then
  javac Calculator.java && java Calculator $A $B
else
  python3 calculator.py $A $B
fi
```

**Expected Output:** Selected calculator prints Add, Sub, Mul, and Div using Jenkins values A and B.

**Quick Fixes:**
- Parameter names must be exactly `PROGRAM_FILE`, `A`, and `B`.
- Use `Build with Parameters`, not normal Build Now.
- If values are blank, enter numbers like `10` and `5`.
