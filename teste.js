const questions = [
    {
        "QUESTION_NUMBER": "1",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Qual das alternativas a seguir descreve melhor a camada de acesso 'Frequente' no Armazenamento de Blobs do Azure?",
        "POSSIBLE_ANSWERS": [
            "A. Uma camada offline otimizada para dados raramente acessados.",
            "B. Uma camada online otimizada para dados acessados com frequência.",
            "C. Uma camada online otimizada para dados acessados esporadicamente.",
            "D. Uma camada de armazenamento com custos baixos e requisitos de latência flexíveis.",
            "E. Uma camada usada apenas para armazenar dados expirados."
        ],
        "EXPLANATION_TEXT": "Explicação: A camada 'Frequente' é otimizada para armazenar dados que são acessados com frequência, proporcionando maior desempenho para esses dados.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "2",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Qual é a principal diferença entre as camadas 'Esporádico' e 'Armazenar' no Armazenamento de Blobs do Azure?",
        "POSSIBLE_ANSWERS": [
            "A. A camada 'Esporádico' tem custos de armazenamento mais baixos que a camada 'Armazenar'.",
            "B. A camada 'Armazenar' armazena dados com acessos muito baixos e latência flexível.",
            "C. A camada 'Esporádico' armazena dados por pelo menos 30 dias, enquanto a camada 'Armazenar' exige 90 dias.",
            "D. A camada 'Armazenar' é utilizada apenas para dados expirados.",
            "E. A camada 'Esporádico' tem custos de acesso mais baixos e custos de armazenamento mais altos."
        ],
        "EXPLANATION_TEXT": "Explicação: A camada 'Esporádico' é para dados acessados esporadicamente, enquanto a camada 'Armazenar' é para dados raramente acessados, com custos de armazenamento mais baixos e mais altos custos de acesso.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "2",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "3",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Qual é a função da política de gerenciamento do ciclo de vida no Armazenamento de Blobs do Azure?",
        "POSSIBLE_ANSWERS": [
            "A. Definir quais camadas de acesso serão utilizadas de forma automática.",
            "B. Definir a quantidade de dados que podem ser armazenados em cada camada.",
            "C. Transitar dados entre camadas de acesso para otimizar custos e desempenho.",
            "D. Criar backups automáticos dos dados armazenados.",
            "E. Excluir dados automaticamente após determinado período."
        ],
        "EXPLANATION_TEXT": "Explicação: A política de gerenciamento do ciclo de vida permite que você transite dados entre camadas de armazenamento para otimizar custos e desempenho, conforme seu ciclo de vida.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "3",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "4",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Em um cenário onde dados são acessados com frequência nos primeiros dias, mas raramente após um mês, qual camada de acesso seria mais apropriada após o primeiro mês?",
        "POSSIBLE_ANSWERS": [
            "A. Frequente",
            "B. Esporádico",
            "C. Fria",
            "D. Arquivar",
            "E. Nenhuma camada é apropriada após o primeiro mês."
        ],
        "EXPLANATION_TEXT": "Explicação: Dados acessados com frequência inicialmente, mas raramente após um mês, são mais adequados para a camada 'Arquivar', que é otimizada para dados com acesso raro.",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "4",
        "Probability": 1
    }];

