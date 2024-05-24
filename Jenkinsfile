pipeline {
    agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                git branch: 'main', url: 'https://github.com/cdamezcua/jenkins-homework'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm install'
            }
        }

        /*

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    def app = docker.build("cdamezcua/jenkins-homework:latest")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                echo 'Pushing Docker image to DockerHub...'
                script {
                    docker.withRegistry('', 'DOCKERHUB_CREDENTIALS') {
                        def app = docker.image("cdamezcua/jenkins-homework:latest")
                        app.push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Agrega los pasos necesarios para desplegar tu aplicación
            }
        }

        */
    }
}
