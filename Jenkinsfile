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

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKERHUB_REGISTRY, DOCKERHUB_CREDENTIALS) {
                        docker.image('my-image:latest').push('latest')
                    }
                }
            }
        }
    }
}
