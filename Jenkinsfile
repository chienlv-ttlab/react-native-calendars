pipeline{
    agent any
    stages{

        stage('Checkout'){
            steps{
                git branch: 'feature/cicd', url: 'https://github.com/chienlv-ttlab/react-native-calendars'
        
            }
        }

        stage('Test'){
            steps{
                echo 'test'
            }
        }
            
        stage('Build'){
            steps{
                echo 'build'
            }
        }
            
        stage('Deploy'){
            steps{
                echo 'start deploy ...'
            }
        }
    }
}