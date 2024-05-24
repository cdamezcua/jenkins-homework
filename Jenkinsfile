pipeline {
    agent {
        docker {
            image 'node:14' // Usa una imagen de Docker con Node.js preinstalado
            args '-u root'  // Ejecuta el contenedor con privilegios de root si es necesario
        }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id') // Asegúrate de que este ID coincida con el de tus credenciales en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                git branch: 'main', url: 'https://github.com/cdamezcua/jenkins-homework.git'
            }
        }

        stage('Build') {
            steps {
                dir('/tmp/jenkins-homework') {  // Cambia el directorio de trabajo a /tmp
                    echo 'Building the project...'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('/tmp/jenkins-homework') {  // Cambia el directorio de trabajo a /tmp
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('/tmp/jenkins-homework') {  // Cambia el directorio de trabajo a /tmp
                    echo 'Building Docker image...'
                    script {
                        def app = docker.build("tu-usuario-dockerhub/tu-imagen:latest")
                    }
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                echo 'Pushing Docker image to DockerHub...'
                script {
                    docker.withRegistry('', 'DOCKERHUB_CREDENTIALS') {
                        def app = docker.image("tu-usuario-dockerhub/tu-imagen:latest")
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
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
    }
}
