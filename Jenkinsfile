node {
    checkout scm
    stage('Checkout'){
        checkout scm
    }
    stage('Build') {
        steps {
            sh 'node -v'
        }
    }
    stage('Test') {
        echo 'Testing..'
    }
    stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }


}
