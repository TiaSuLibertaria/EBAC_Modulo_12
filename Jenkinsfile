pipeline {
    agent any
    
    tools { nodejs "nodejs" }

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/TiaSuLibertaria/EBAC_Modulo_12.git'
            }
        }
         stage('Instalar dependencias') {
            steps {
               sh 'npm install'
            }
        }
         stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}