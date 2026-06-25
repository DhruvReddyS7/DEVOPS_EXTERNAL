# Set 13: Java and Python pattern display + Jenkins file parameterization

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write a simple program in Java and Python for Pattern display and Create a Jenkins Job for executing the programs. (Use file Parameterization)

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

**Aim:** Write a simple program in Java and Python for Pattern display and Create a Jenkins Job for executing the programs. (Use file Parameterization)

**Files:**
- Pattern.java
- pattern.py

**Execution Steps:**
1. Create the listed source files with the exact file names.
2. Push the project to GitHub.
3. Start Jenkins service on Ubuntu.
4. Open Jenkins at http://localhost:8080.
5. Create New Item -> Freestyle project.
6. Under Source Code Management choose Git and paste the repository URL.
7. Under Build Steps choose Execute shell and paste the shell commands.
8. Save and click Build Now.
9. Enable This project is parameterized -> Choice Parameter.
10. Name it `PROGRAM_FILE` and add `Pattern.java` and `pattern.py`.

**Source Files:**

#### Pattern.java

```java
public class Pattern {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      for (int j = 1; j <= i; j++) System.out.print("* ");
      System.out.println();
    }
  }
}
```

#### pattern.py

```python
for i in range(1, 6):
    print("* " * i)
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
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

#### Jenkins Execute shell

```bash
echo "Selected file: $PROGRAM_FILE"
if [ "$PROGRAM_FILE" = "Pattern.java" ]; then javac Pattern.java && java Pattern; else python3 pattern.py; fi
```

**Expected Output:** A star pattern is printed from the selected Java or Python file.

**Quick Fixes:**
- If Jenkins cannot access Git, install Git plugin and verify repository URL.
- If command not found appears, use absolute paths like `/usr/bin/python3`.
- If workspace is dirty, delete old files from Jenkins workspace and rebuild.
