pipeline {
    environment {
        registry = "cdamezcua/jenkins-homework"
        registryCredential = 'dockerhub-credentials'
        image = ''
    }
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                git branch: 'main', url: 'https://github.com/cdamezcua/jenkins-homework'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                script {
                    image = docker.build registry + ":$BUILD_NUMBER"
                }
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'docker run -p 127.0.0.1:3000:3000 -d --name jenkins-homework-container ' + registry + ":$BUILD_NUMBER"
                sh 'npm test'
                sh 'docker stop jenkins-homework-container'
                sh 'docker rm jenkins-homework-container'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        image.push('latest')
                    }
                }
            }
        }
        stage('Cleaning up') {
            steps {
                echo 'Cleaning up...'
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}