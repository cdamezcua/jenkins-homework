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
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                script {
                    docker.image(registry + ":$BUILD_NUMBER").inside('-u root:root -v /opt/jenkins/workspace/jenkins-homework:/workspace') {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
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