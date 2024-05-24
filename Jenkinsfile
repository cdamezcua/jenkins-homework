pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // Asegúrate de que este ID coincida con el de tus credenciales en Jenkins
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        /*

        stage('Build Docker Image') {
            steps {
                dir('/tmp/jenkins-homework') {  // Cambia el directorio de trabajo a /tmp
                    echo 'Building Docker image...'
                    script {
                        def app = docker.build('cdamezcua/jenkins-homework:latest', '-f Dockerfile .')
                    }
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

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
    }
}
