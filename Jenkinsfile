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
      stage('install dependencies') {
        steps {
            sh 'npm install'
        }    
      }
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
      stage('artifacts') {
          steps {
              sh 'npm run build'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
              sh '/usr/local/bin/aws s3 cp ./build s3://jenkins-test-pipeline --recursive --include "*"'
          }
      }
  }
}
