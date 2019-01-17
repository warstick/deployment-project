node {
    checkout scm
}

pipeline {
  agent {
    docker {
        image 'node:11.6.0'
    }
  }
  environment {
        HOME = '.'
  }

  stages {
      stage('Build') {
          steps {
            sh 'node -v && npm install'
          }
      }
      stage('Test') {
          steps {
              sh 'npm run test'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}
