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
    }
}
