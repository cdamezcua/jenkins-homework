pipeline {

    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKERHUB_REGISTRY = 'docker.io'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-image:latest', '-f Dockerfile .')
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image('my-image:latest').inside {
                        //echo the result of ls command
                        sh 'ls -la'
                        sh 'npm install'
                        sh 'ls -la'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
