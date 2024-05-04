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
                    // Add npm to the PATH
                    def npmHome = tool 'NodeJS' // Assuming 'NodeJS' is configured in Jenkins Global Tool Configuration
                    env.PATH = "${npmHome}/bin:${env.PATH}"
                    
                    // Now npm should be accessible
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
    }
}
