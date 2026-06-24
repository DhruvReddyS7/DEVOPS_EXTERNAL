# Set 25: Jenkins Java Git job remote trigger

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Create a Jenkins Job for executing Java program in GIT – Using Trigger, Build the Job remotely.

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

**Aim:** Create a Jenkins Job for executing Java program in GIT – Using Trigger, Build the Job remotely.

**Files:**
- No source file required

**Execution Steps:**
1. Open Jenkins in the browser.
2. Click New Item.
3. Enter a project name such as `TestJob`.
4. Select Freestyle Project and click OK.
5. Go to Build Triggers.
6. Select `Trigger builds remotely`.
7. Authentication Token: `1234`.
8. Add Build Step -> Execute Shell.
9. Paste `echo "Hello World"`.
10. Click Apply and Save.
11. Open terminal.
12. Trigger the build using curl.
13. Open Jenkins -> Job -> Build History -> latest build -> Console Output.

**Commands:**

#### Execute Shell

```bash
echo "Hello World"
```

#### Remote Trigger curl

```bash
curl -u admin:admin "http://localhost:8080/job/TestJob/build?token=1234"

# OR
curl -X POST -u admin:admin "http://localhost:8080/job/TestJob/build?token=1234"
```

**Expected Output:** Jenkins accepts the request, starts a new build automatically, and Console Output shows `Hello World` and `Finished: SUCCESS`.

**Quick Fixes:**
- Use the correct Jenkins username/password in curl.
- Use the exact job name in the URL.
- Keep token as `1234` or update the URL token to match your job.
