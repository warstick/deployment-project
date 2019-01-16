node('node') {
    checkout scm
}

pipeline {
  agent any

  stages {
      stage('Build') {
          sh 'node -v'
      }
      stage('Test') {
          steps {
              echo 'Testing..'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}
