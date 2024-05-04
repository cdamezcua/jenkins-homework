pipeline {

    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKERHUB_REGISTRY = 'docker.io'
        registry = "yourname/nodeapp"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Run Tests Inside Docker Container') {
            steps {
                script {
                    try {
                        dockerImage.inside {
                            def PROJECTDIR = sh(script: 'echo \$PROJECTDIR', returnStdout: true).trim()
                            sh "cp -r '$PROJECTDIR' '$WORKSPACE'"
                            dir("$WORKSPACE$PROJECTDIR") {
                                sh "npm test"
                            }
                        }
                    }
                    catch (err) {
                        currentBuild.result = 'FAILURE'
                        error "Tests failed"
                    }
                }
            }
        }
    }
}
