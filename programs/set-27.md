# Set 27: Java and Python calculator + Jenkins parameterization
## Questions
1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Write Java and Python calculator and execute using Jenkins file and variable parameterization.
## Q1 Git Commands

1. git init
Usage: Creates a new Git repository in the current folder.
```bash
git init
```

2. git status
Usage: Shows changed, staged, and untracked files.
```bash
git status
```

3. git add .
Usage: Stages all project files for commit.
```bash
git add .
```

4. git commit -m "initial commit"
Usage: Saves staged changes with a message.
```bash
git commit -m "initial commit"
```

5. git push origin main
Usage: Uploads local commits to GitHub.
```bash
git push -u origin main
```
## Q2 Docker Commands

1. docker --version
Usage: Checks whether Docker is installed.
```bash
docker --version
```

2. docker build -t myapp .
Usage: Builds a Docker image from a Dockerfile.
```bash
docker build -t myapp .
```

3. docker run --name mycontainer myapp
Usage: Runs a container from an image.
```bash
docker run myapp
```

4. docker ps -a
Usage: Lists running and stopped containers.
```bash
docker ps -a
```

5. docker push username/myapp:latest
Usage: Pushes an image to DockerHub.
```bash
docker push username/myapp:latest
```
## Q3 Kubernetes Commands

1. kubectl version --client
Usage: Checks the installed kubectl client version.
```bash
kubectl version --client
```

2. kubectl create deployment web --image=nginx
Usage: Creates a deployment from an image.
```bash
kubectl create deployment web --image=nginx
```

3. kubectl get pods
Usage: Lists pods in the current namespace.
```bash
kubectl get pods
```

4. kubectl expose deployment web --type=NodePort --port=80
Usage: Creates a service to access the deployment.
```bash
kubectl expose deployment web --type=NodePort --port=80
```

5. kubectl apply -f deployment.yaml
Usage: Creates or updates Kubernetes objects from YAML.
```bash
kubectl apply -f deployment.yaml
```
## Q4 Practical

Aim: Run Java and Python calculator programs through Jenkins using file and variable parameterization.

Files required: Calculator.java, calculator.py

### Execution Steps
1. Open Ubuntu terminal and create a fresh folder for this program.
2. Create these file(s) exactly with the same names: Calculator.java, calculator.py.
3. Copy the source code shown below into the matching file names.
4. Create project folder and add the source files.
5. Run the program locally using Ubuntu commands.
6. Push the project to GitHub.
7. Open Jenkins at http://localhost:8080.
8. Create New Item -> Freestyle project.
9. Under Source Code Management choose Git and paste the repository URL.
10. Under Build Steps choose Execute shell and paste the shell commands.
11. Save and click Build Now.
12. Add Choice Parameter `PROGRAM_FILE`: Calculator.java, calculator.py.
13. Add String Parameters `A` and `B`.
14. Run the command block in the same order from top to bottom.
15. Compare the terminal/Jenkins/browser output with the expected output shown at the end.

### Calculator.java
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

### calculator.py
```python
import sys
a = int(sys.argv[1])
b = int(sys.argv[2])
print("Add:", a + b)
print("Sub:", a - b)
```

### Ubuntu commands
```bash
if [ "$PROGRAM_FILE" = "Calculator.java" ]; then javac Calculator.java && java Calculator $A $B; else python3 calculator.py $A $B; fi
```

### GitHub push commands
```bash
git init
git add .
git commit -m "devops lab program"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-lab-program.git
git push -u origin main
```

### Jenkins Execute shell
```bash
if [ "$PROGRAM_FILE" = "Calculator.java" ]; then javac Calculator.java && java Calculator $A $B; else python3 calculator.py $A $B; fi
```

### Expected Output
Selected calculator runs with parameter values A and B.
