# Set 14: Ubuntu Docker container named MyContainer + Jenkins pipeline

## Questions

1. List out any five Git commands and give its usage.
2. List out any five Docker commands and give its usage.
3. List out any five Kubernetes commands and give its usage.
4. Give Docker commands to Run an Ubuntu image in Docker container named "MyContainer" and execute some shell commands inside it.
5. Create a Jenkins pipeline Job using pipeline script with 5 stages.

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

**Aim:** Give Docker commands to Run an Ubuntu image in Docker container named "MyContainer" and execute some shell commands inside it.

**Files:**
- No source file required

**Execution Steps:**
1. Open terminal and become root if required.
2. Pull the Ubuntu latest image.
3. Run Ubuntu container named ubuntucontainer.
4. Inside the container, create folder and file.
5. Exit the container.
6. Stop the container after completion.
7. If name already exists, remove old container and run again.

**Commands:**

#### Root login

```bash
sudo su
```

#### Pull Ubuntu image

```bash
docker pull ubuntu:latest
```

#### Run Ubuntu container

```bash
docker run -it --name ubuntucontainer ubuntu bash
```

#### Inside Ubuntu container

```bash
whoami
mkdir cse
cd cse
echo "Hello CSE" > hello.txt
ls
cat hello.txt
exit
```

#### Stop container

```bash
docker stop ubuntucontainer
```

#### Remove container if name exists

```bash
docker rm ubuntucontainer
```

**Expected Output:** Ubuntu container opens, creates hello.txt, and prints `Hello CSE`.

**Quick Fixes:**
- If the container name already exists, run `docker rm ubuntucontainer`.
- If permission is denied, start with `sudo su`.

### Q5 Practical Answer

**Aim:** Create a Jenkins pipeline Job using pipeline script with 5 stages.

**Files:**
- Pipeline script

**Execution Steps:**
1. Open Jenkins in the browser.
2. Click New Item.
3. Enter job name `Pipeline5Stages`.
4. Select Pipeline and click OK.
5. In Pipeline section choose Definition: `Pipeline script`.
6. Paste the 5-stage pipeline code.
7. Click Apply.
8. Click Save.
9. Open the Pipeline job.
10. Click Build Now.
11. Open Build Number #1.
12. Click Console Output and verify all five stages.

**Source Files:**

#### Jenkinsfile

```groovy
pipeline {
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
}
```

**Expected Output:** Console Output shows Executing Build, Test, Deploy, Verify, Cleanup stages and `Finished: SUCCESS`.

**Quick Fixes:**
- Select `Pipeline script`, not `Pipeline script from SCM`.
- Install Pipeline plugin if the Pipeline job type is missing.
