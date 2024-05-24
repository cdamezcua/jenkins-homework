pipeline {
    agent {
        docker {
            image 'node:14' // Usa una imagen de Docker con Node.js preinstalado
            args '-u root'  // Ejecuta el contenedor con privilegios de root si es necesario
            reuseNode true  // Reutiliza el nodo de Jenkins para ejecutar los pasos del pipeline
        }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // Asegúrate de que este ID coincida con el de tus credenciales en Jenkins
    }

    stages {

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

        stage('Test') {
            steps {
                dir('/tmp/jenkins-homework') {  // Cambia el directorio de trabajo a /tmp
                    echo 'Running tests...'
                    sh 'npm test'
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
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
    }
}
