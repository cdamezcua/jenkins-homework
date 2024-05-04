pipeline {

    agent {
        docker {
            image 'node:latest'
            args '-u root'
        }
    }

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
                    sh 'npm test'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            when {
                expression { currentBuild.result == 'SUCCESS' }
            }
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
