const questions = [
    {
      "QUESTION_NUMBER": "1010",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual benefício a criptografia em repouso oferece no Registro de Contêiner do Azure?",
      "POSSIBLE_ANSWERS": [
        "A. Impede completamente o acesso não autorizado às imagens.",
        "B. Garante que todas as imagens sejam criptografadas antes do armazenamento e descriptografadas dinamicamente quando acessadas.",
        "C. Duplica automaticamente as imagens em várias regiões para segurança.",
        "D. Reduz o tempo de carregamento das imagens armazenadas."
      ],
      "EXPLANATION_TEXT": "A criptografia em repouso garante que todas as imagens de contêiner e artefatos sejam criptografados antes de serem armazenados e descriptografados dinamicamente quando acessados.",
      "CORRECT_ANSWER": "B",
      "JSONINDEX": "1",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1011",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "O que acontece com os dados do registro de contêiner armazenados no Brasil Sul e Sudeste da Ásia?",
      "POSSIBLE_ANSWERS": [
        "A. São automaticamente replicados em uma região emparelhada.",
        "B. São armazenados apenas na região original, para atender aos requisitos de residência de dados.",
        "C. São movidos para a região dos EUA Leste para backup.",
        "D. Podem ser transferidos manualmente para qualquer outra região sem restrições."
      ],
      "EXPLANATION_TEXT": "No Brasil Sul e Sudeste da Ásia, os dados do registro são confinados na região original para atender aos requisitos de residência de dados, sem replicação automática para uma região emparelhada.",
      "CORRECT_ANSWER": "B",
      "JSONINDEX": "2",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1012",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual funcionalidade permite armazenar imagens em várias regiões para garantir alta disponibilidade?",
      "POSSIBLE_ANSWERS": [
        "A. Armazenamento regional",
        "B. Replicação geográfica",
        "C. Redundância de zona",
        "D. Criptografia em repouso"
      ],
      "EXPLANATION_TEXT": "A replicação geográfica permite armazenar imagens em várias regiões, garantindo alta disponibilidade e resiliência em caso de falha regional.",
      "CORRECT_ANSWER": "B",
      "JSONINDEX": "3",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1013",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "O que a redundância de zona oferece como benefício adicional?",
      "POSSIBLE_ANSWERS": [
        "A. Armazena dados do registro em três zonas separadas dentro da mesma região.",
        "B. Replica automaticamente as imagens em todas as regiões do Azure.",
        "C. Garante que os registros sejam replicados entre diferentes contas de armazenamento.",
        "D. Duplica as imagens em discos SSD para aumentar a velocidade de acesso."
      ],
      "EXPLANATION_TEXT": "A redundância de zona, disponível na camada Premium, replica o registro em pelo menos três zonas separadas dentro da mesma região para aumentar a disponibilidade.",
      "CORRECT_ANSWER": "A",
      "JSONINDEX": "4",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1014",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Por que é recomendável excluir repositórios, marcas e imagens não utilizadas periodicamente?",
      "POSSIBLE_ANSWERS": [
        "A. Para reduzir custos e melhorar o desempenho do registro.",
        "B. Porque imagens antigas são automaticamente corrompidas pelo Azure.",
        "C. Para evitar conflitos com novas imagens armazenadas.",
        "D. Porque há um limite fixo de 100 imagens por registro."
      ],
      "EXPLANATION_TEXT": "Números altos de repositórios e marcas podem afetar o desempenho do registro. Excluir periodicamente os recursos não utilizados melhora a eficiência e reduz custos.",
      "CORRECT_ANSWER": "A",
      "JSONINDEX": "5",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1015",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual camada do Registro de Contêiner do Azure oferece suporte à replicação geográfica?",
      "POSSIBLE_ANSWERS": [
        "A. Basic",
        "B. Standard",
        "C. Premium",
        "D. Nenhuma das opções"
      ],
      "EXPLANATION_TEXT": "A camada Premium do Registro de Contêiner do Azure oferece suporte à replicação geográfica, garantindo maior disponibilidade e resiliência.",
      "CORRECT_ANSWER": "C",
      "JSONINDEX": "6",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1016",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual das seguintes opções NÃO é um benefício da replicação geográfica?",
      "POSSIBLE_ANSWERS": [
        "A. Garantia de alta disponibilidade",
        "B. Armazenamento de imagens em proximidade para maior velocidade",
        "C. Melhor desempenho em diferentes regiões geográficas",
        "D. Redução do custo de armazenamento"
      ],
      "EXPLANATION_TEXT": "A replicação geográfica melhora a disponibilidade e o desempenho, mas não reduz diretamente os custos de armazenamento.",
      "CORRECT_ANSWER": "D",
      "JSONINDEX": "7",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1017",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "O que acontece com os dados do registro em caso de interrupção regional sem replicação geográfica ativada?",
      "POSSIBLE_ANSWERS": [
        "A. Os dados permanecem acessíveis a partir de outras regiões automaticamente.",
        "B. Os dados podem ficar indisponíveis e não serão recuperados automaticamente.",
        "C. O Azure move os dados para um local secundário automaticamente.",
        "D. Os dados são replicados para a conta de armazenamento do usuário."
      ],
      "EXPLANATION_TEXT": "Se a replicação geográfica não estiver ativada, os dados podem ficar indisponíveis em caso de falha regional e não serão recuperados automaticamente.",
      "CORRECT_ANSWER": "B",
      "JSONINDEX": "8",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1018",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "O que diferencia a camada Premium das outras camadas do Registro de Contêiner do Azure?",
      "POSSIBLE_ANSWERS": [
        "A. Maior taxa de transferência de imagens e mais armazenamento incluído",
        "B. Suporte a imagens do Windows e Linux",
        "C. Integração com serviços como Azure Kubernetes Service (AKS)",
        "D. Suporte ao Docker e OCI (Open Container Initiative)"
      ],
      "EXPLANATION_TEXT": "A camada Premium oferece a maior taxa de transferência de imagens, mais armazenamento e recursos adicionais como replicação geográfica e redundância de zona.",
      "CORRECT_ANSWER": "A",
      "JSONINDEX": "9",
      "Probability": 1
    },
    {
      "QUESTION_NUMBER": "1019",
      "QUESTION_TYPE": "container",
      "QUESTION_TEXT": "Qual estratégia é recomendada para manter o desempenho e a eficiência do Registro de Contêiner do Azure?",
      "POSSIBLE_ANSWERS": [
        "A. Utilizar criptografia em repouso",
        "B. Ativar a replicação geográfica",
        "C. Excluir periodicamente imagens e repositórios não utilizados",
        "D. Utilizar apenas a camada Premium"
      ],
      "EXPLANATION_TEXT": "Excluir periodicamente imagens e repositórios não utilizados ajuda a manter o desempenho do registro e otimizar os recursos de armazenamento.",
      "CORRECT_ANSWER": "C",
      "JSONINDEX": "10",
      "Probability": 1
    }
  ]