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
              /**
              withAWS(region: 'us-east-2') {
                  s3Upload(file:'build/build.tar.gz', bucket:'jenkins-test-pipeline', path:'/')
              }
             **/
              
              step([
                  $class: 'AWSCodeDeployPublisher',
                  applicationName: '',
                  awsAccessKey: '',
                  awsSecretKey: '',
                  credentials: 'awsAccessKey',
                  deploymentGroupAppspec: false,
                  deploymentGroupName: '',
                  deploymentMethod: 'deploy',
                  excludes: '',
                  iamRoleArn: '',
                  includes: '**',
                  proxyHost: '',
                  proxyPort: 0,
                  region: 'ap-northeast-1',
                  s3bucket: '',
                  s3prefix: '',
                  subdirectory: '',
                  versionFileName: '',
                  waitForCompletion: false
              ])

              echo 'Deploying...'
              sh 'rm -rf build/build.tar.gz'
          }
      }
  }
}
