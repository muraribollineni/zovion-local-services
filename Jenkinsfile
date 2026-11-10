
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Zovion source code'
                checkout scm
            }
        }

        stage('Check Tools') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'python --version'
            }
        }

        stage('Frontend Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Frontend Lint') {
            steps {
                dir('frontend') {
                    bat 'npm run lint'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Backend Dependencies') {
            steps {
                bat 'python -m venv backend\\.venv'
                bat 'backend\\.venv\\Scripts\\python.exe -m pip install -r backend\\requirements.txt'
            }
        }

        stage('Backend Validation') {
            steps {
                bat 'backend\\.venv\\Scripts\\python.exe -m compileall -q backend\\main.py'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'frontend/dist/**',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Zovion CI Pipeline Completed Successfully!'
        }

        failure {
            echo 'Zovion CI Pipeline Failed. Check Console Output.'
        }
    }
}
