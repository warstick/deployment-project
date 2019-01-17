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
            script {
                fileOperations([
                        fileDownloadOperation(
                                password: '',
                                targetFileName: 'foo.zip',
                                targetLocation: "${WORKSPACE}",
                                url: 'https://foobar.com/foo.zip',
                                userName: ''),
                        fileUnZipOperation(
                                filePath: 'foo.zip',
                                targetLocation: '.'),
                        folderCopyOperation(
                                destinationFolderPath: 'dest',
                                sourceFolderPath: 'foo/content'),
                        folderDeleteOperation(
                                './foo'
                        )
                ])
            }
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}
