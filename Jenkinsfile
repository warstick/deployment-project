node {
    checkout scm
}

pipeline {
  agent {
    docker {
        image 'node:6-alpine'
        args '-p 3000:3000'
    }
 }

  stages {
      stage('Build') {
          steps {
            sh 'node -v'
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
