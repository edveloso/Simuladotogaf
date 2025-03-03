
 const questions = [
    {
      "QUESTION_NUMBER": "1000",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual das alternativas melhor descreve o Registro de Contêiner do Azure (ACR)?",
      "POSSIBLE_ANSWERS": [
        "A. Um serviço de orquestração de contêineres baseado no Kubernetes.",
        "B. Um serviço gerenciado de registro de contêiner baseado no Registro do Docker 2.0.",
        "C. Um serviço exclusivo para armazenar logs de execução de contêineres.",
        "D. Um serviço para monitoramento de clusters Kubernetes."
      ],
      "EXPLANATION_TEXT": "Explicação: O Registro de Contêiner do Azure (ACR) é um serviço gerenciado de registro de contêiner baseado no Registro do Docker 2.0. Ele permite armazenar e gerenciar imagens de contêiner e artefatos relacionados.",
      "CORRECT_ANSWER": "B",
      "JSONINDEX": "1",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1001",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Quais serviços do Azure podem consumir imagens armazenadas no Registro de Contêiner do Azure?",
      "POSSIBLE_ANSWERS": [
        "A. Apenas o Azure Kubernetes Service (AKS).",
        "B. Apenas serviços de orquestração de contêineres como Kubernetes e Docker Swarm.",
        "C. Azure Kubernetes Service (AKS), App Service, Batch e Service Fabric.",
        "D. Apenas Azure Pipelines e Jenkins."
      ],
      "EXPLANATION_TEXT": "Explicação: O Registro de Contêiner do Azure pode fornecer imagens para vários serviços do Azure, como AKS, App Service, Batch e Service Fabric, além de ser utilizado em fluxos de trabalho de CI/CD.",
      "CORRECT_ANSWER": "C",
      "JSONINDEX": "2",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1002",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual das seguintes funcionalidades é oferecida pelas Tarefas do ACR?",
      "POSSIBLE_ANSWERS": [
        "A. Automatizar a criação, teste e publicação de imagens de contêiner.",
        "B. Monitorar logs de execução de contêineres.",
        "C. Configurar alertas para falhas em clusters Kubernetes.",
        "D. Criar máquinas virtuais no Azure automaticamente."
      ],
      "EXPLANATION_TEXT": "Explicação: As Tarefas do ACR permitem automatizar a criação, teste e publicação de imagens de contêiner no Azure, facilitando a automação de pipelines de build e patch.",
      "CORRECT_ANSWER": "A",
      "JSONINDEX": "3",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1003",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual camada de serviço do ACR oferece suporte a replicação geográfica e link privado?",
      "POSSIBLE_ANSWERS": [
        "A. Basic",
        "B. Standard",
        "C. Premium",
        "D. Nenhuma das anteriores"
      ],
      "EXPLANATION_TEXT": "Explicação: A camada Premium do ACR oferece recursos avançados, como replicação geográfica, confiança de conteúdo e link privado para restrição de acesso.",
      "CORRECT_ANSWER": "C",
      "JSONINDEX": "4",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1004",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual das opções abaixo NÃO é um artefato compatível com o ACR?",
      "POSSIBLE_ANSWERS": [
        "A. Imagens do Docker",
        "B. Gráficos do Helm",
        "C. Arquivos de log de execução de contêineres",
        "D. Imagens baseadas na Especificação OCI"
      ],
      "EXPLANATION_TEXT": "Explicação: O ACR armazena imagens do Docker, Gráficos do Helm e imagens baseadas na Especificação OCI. Ele não armazena arquivos de log de execução de contêineres.",
      "CORRECT_ANSWER": "C",
      "JSONINDEX": "5",
      "Probability": 1
    }
  ]
