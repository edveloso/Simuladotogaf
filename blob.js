const questions = [
    {
        "QUESTION_NUMBER": "1",
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
    },
    {
        "QUESTION_NUMBER": "5",
        "QUESTION_TEXT": "Qual dos seguintes é um recurso da política de gerenciamento do ciclo de vida do Armazenamento de Blobs do Azure?",
        "POSSIBLE_ANSWERS": [
            "A. Garantir que dados sejam armazenados exclusivamente na camada 'Arquivar'.",
            "B. Permitir que dados sejam excluídos automaticamente após 30 dias.",
            "C. Aplicar regras de transição de dados para camadas de acesso adequadas conforme seu ciclo de vida.",
            "D. Impedir que dados sejam acessados por mais de 60 dias.",
            "E. Requerer que os dados sejam armazenados por pelo menos 180 dias."
        ],
        "EXPLANATION_TEXT": "Explicação: A política de gerenciamento do ciclo de vida permite aplicar regras de transição para mover dados entre camadas de acesso conforme seu ciclo de vida e necessidade de acesso.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "5",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "6",
        "QUESTION_TEXT": "Qual das opções abaixo descreve a funcionalidade principal de uma política de ciclo de vida em armazenamento de blobs?",
        "POSSIBLE_ANSWERS": [
            "A. Gerenciar o backup automático de blobs.",
            "B. Aplicar regras de filtragem e ações baseadas na idade dos blobs.",
            "C. Criar contêineres automaticamente para novos blobs.",
            "D. Monitorar acessos a blobs em tempo real.",
            "E. Realizar compressão automática de blobs."
        ],
        "EXPLANATION_TEXT": "Explicação: Uma política de ciclo de vida é uma coleção de regras definidas em JSON que aplicam ações, como mover ou excluir blobs, com base em condições de execução como a idade (última modificação ou criação). Ela é útil para gerenciar o armazenamento de forma eficiente.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "7",
        "QUESTION_TEXT": "Qual dos parâmetros abaixo é obrigatório ao definir uma regra em uma política de ciclo de vida?",
        "POSSIBLE_ANSWERS": [
            "A. name",
            "B. enabled",
            "C. prefixMatch",
            "D. blobIndexMatch",
            "E. daysAfterLastAccessTimeGreaterThan"
        ],
        "EXPLANATION_TEXT": "Explicação: O parâmetro 'name' é obrigatório e deve ser único dentro da política, permitindo até 256 caracteres alfanuméricos. Já parâmetros como 'enabled', 'prefixMatch' e 'blobIndexMatch' são opcionais, enquanto 'daysAfterLastAccessTimeGreaterThan' é uma condição específica para blobs com controle de acesso habilitado.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "2",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "8",
        "QUESTION_TEXT": "Qual ação de gerenciamento de ciclo de vida é a mais barata para um blob?",
        "POSSIBLE_ANSWERS": [
            "A. tierToCool",
            "B. tierToArchive",
            "C. delete",
            "D. enableAutoTierToHotFromCool",
            "E. tierToCold"
        ],
        "EXPLANATION_TEXT": "Explicação: A ação 'delete' é a mais barata, seguida de 'tierToArchive' e 'tierToCool'. Essas prioridades ajudam a otimizar custos no gerenciamento de armazenamento. Por outro lado, 'enableAutoTierToHotFromCool' não é suportada para blobs base.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "3",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "9",
        "QUESTION_TEXT": "Quais são os filtros disponíveis em uma política de ciclo de vida para limitar as ações aplicadas a blobs?",
        "POSSIBLE_ANSWERS": [
            "A. blobTypes, prefixMatch, blobIndexMatch",
            "B. name, enabled, type",
            "C. tierToCool, tierToArchive, delete",
            "D. blockBlob, appendBlob, snapshotBlob",
            "E. version, baseBlob, instantBlob"
        ],
        "EXPLANATION_TEXT": "Explicação: Os filtros disponíveis são 'blobTypes' (ex. blockBlob), 'prefixMatch' (para corresponder prefixos como nomes de contêineres) e 'blobIndexMatch' (condições baseadas em marcações de índice). Esses filtros permitem restringir ações a subconjuntos específicos de blobs.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "4",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "10",
        "QUESTION_TEXT": "Quanto tempo um blob deve permanecer na camada 'tierToCool' antes de ser movido para 'tierToArchive'?",
        "POSSIBLE_ANSWERS": [
            "A. 7 dias",
            "B. 30 dias",
            "C. 90 dias",
            "D. 2555 dias",
            "E. Não é necessário um intervalo específico"
        ],
        "EXPLANATION_TEXT": "Explicação: Para mover um blob de 'tierToCool' para 'tierToArchive', é necessário que ele tenha pelo menos 90 dias desde a última modificação, e 7 dias desde a última mudança de camada ('tierToCool' para outra camada). Esses tempos garantem eficiência na organização e armazenamento.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "5",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "11",
        "QUESTION_TEXT": "Qual das alternativas descreve corretamente a necessidade de reidratar um blob arquivado?",
        "POSSIBLE_ANSWERS": [
            "A. Para otimizar o tamanho de armazenamento do blob.",
            "B. Para mover o blob para um contêiner diferente.",
            "C. Para tornar os dados do blob arquivado acessíveis novamente.",
            "D. Para atualizar os metadados do blob.",
            "E. Para alterar a região de armazenamento do blob."
        ],
        "EXPLANATION_TEXT": "Explicação: Blobs arquivados são considerados offline, ou seja, não podem ser lidos nem modificados. A reidratação é necessária para tornar os dados acessíveis novamente, movendo o blob para uma camada online (quente ou fria) por meio de uma cópia ou alteração da camada.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "11",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "12",
        "QUESTION_TEXT": "Qual método é recomendado pela Microsoft para reidratar blobs arquivados na maioria dos cenários?",
        "POSSIBLE_ANSWERS": [
            "A. Alterar diretamente a camada do blob arquivado para quente ou fria.",
            "B. Copiar o blob arquivado para um novo blob em uma camada online.",
            "C. Excluir o blob arquivado e recriá-lo em uma camada diferente.",
            "D. Usar uma política de ciclo de vida para mover o blob.",
            "E. Transferir o blob para uma conta de armazenamento em outra região."
        ],
        "EXPLANATION_TEXT": "Explicação: A Microsoft recomenda copiar o blob arquivado para um novo blob em uma camada online usando a operação Copiar Blob ou Copiar Blob da URL. Isso permite preservar o blob original e é adequado para a maioria dos casos.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "12",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "13",
        "QUESTION_TEXT": "O que acontece com a hora da última modificação de um blob quando sua camada de acesso é alterada?",
        "POSSIBLE_ANSWERS": [
            "A. É redefinida para o momento da alteração.",
            "B. Permanece inalterada.",
            "C. É ajustada para coincidir com a data de criação do blob.",
            "D. Depende da prioridade definida na operação.",
            "E. É configurada automaticamente para o próximo ciclo de vida."
        ],
        "EXPLANATION_TEXT": "Explicação: Alterar a camada de um blob não afeta a hora da última modificação. Isso pode causar conflitos com políticas de ciclo de vida que movem blobs automaticamente para a camada de arquivos com base em limites de tempo.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "13",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "14",
        "QUESTION_TEXT": "Qual é a diferença entre prioridade padrão e alta prioridade ao reidratar blobs?",
        "POSSIBLE_ANSWERS": [
            "A. A prioridade padrão permite reidratar blobs em outra região.",
            "B. A prioridade alta conclui a reidratação mais rapidamente para blobs menores.",
            "C. A prioridade padrão sempre utiliza a operação Copiar Blob.",
            "D. A prioridade alta redefine a hora de criação do blob.",
            "E. A prioridade padrão suporta apenas blobs maiores que 10 GB."
        ],
        "EXPLANATION_TEXT": "Explicação: A prioridade alta processa a reidratação mais rapidamente, concluindo em menos de uma hora para blobs menores que 10 GB, enquanto a prioridade padrão pode levar até 15 horas. Ambas as opções usam as mesmas operações (Copiar Blob ou Alterar Camada).",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "14",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "15",
        "QUESTION_TEXT": "Qual é uma limitação ao copiar um blob arquivado para uma camada online?",
        "POSSIBLE_ANSWERS": [
            "A. O blob deve ser copiado para o mesmo nome e contêiner.",
            "B. A operação só é possível em contas de armazenamento na mesma região.",
            "C. A operação é compatível apenas com blobs criados antes de 2021.",
            "D. O blob original será excluído automaticamente.",
            "E. A reidratação por cópia não suporta blobs maiores que 10 GB."
        ],
        "EXPLANATION_TEXT": "Explicação: A partir da versão de serviço 2021-02-12, é possível reidratar um blob arquivado copiando-o para uma conta de armazenamento diferente, desde que esteja na mesma região que a conta de origem. Além disso, o blob original não é alterado e deve ser copiado para um novo nome ou contêiner.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "15",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "16",
        "QUESTION_TEXT": "O que acontece com um blob enquanto está na camada de acesso do arquivo?",
        "POSSIBLE_ANSWERS": [
            "A. Ele pode ser lido, mas não modificado.",
            "B. Ele pode ser modificado, mas não lido.",
            "C. Ele é considerado offline e não pode ser lido nem modificado.",
            "D. Ele é automaticamente movido para a camada quente após 24 horas.",
            "E. Ele é excluído automaticamente após 30 dias."
        ],
        "EXPLANATION_TEXT": "Explicação: Enquanto um blob está na camada de acesso do arquivo, ele é considerado offline, o que significa que não pode ser lido nem modificado. Para torná-lo acessível, é necessário reidratá-lo para uma camada online, como quente ou fria.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "16",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "17",
        "QUESTION_TEXT": "Qual é a principal recomendação da Microsoft para reidratar um blob arquivado?",
        "POSSIBLE_ANSWERS": [
            "A. Alterar diretamente a camada de acesso do blob.",
            "B. Copiar o blob para um novo blob em uma camada online.",
            "C. Excluir o blob e recriá-lo na camada quente.",
            "D. Alterar a região de armazenamento do blob.",
            "E. Usar a operação 'Obter Propriedades do Blob'."
        ],
        "EXPLANATION_TEXT": "Explicação: A Microsoft recomenda copiar o blob arquivado para um novo blob em uma camada online (quente ou fria). Essa abordagem preserva o blob original e é ideal para a maioria dos cenários.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "17",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "18",
        "QUESTION_TEXT": "O que define a prioridade da reidratação de um blob?",
        "POSSIBLE_ANSWERS": [
            "A. O tamanho do blob.",
            "B. O cabeçalho x-ms-rehydrate-priority.",
            "C. A região do armazenamento.",
            "D. A política de ciclo de vida configurada.",
            "E. O nome do contêiner do blob."
        ],
        "EXPLANATION_TEXT": "Explicação: A prioridade da reidratação é definida pelo cabeçalho x-ms-rehydrate-priority, que pode ser configurado como Standard (até 15 horas) ou High (menos de uma hora para blobs menores que 10 GB).",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "18",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "19",
        "QUESTION_TEXT": "Qual das opções abaixo NÃO é verdadeira ao usar a operação 'Copiar Blob' para reidratar um blob?",
        "POSSIBLE_ANSWERS": [
            "A. O blob de origem permanece inalterado na camada de arquivo.",
            "B. O blob pode ser copiado para um contêiner diferente.",
            "C. O blob pode ser copiado para um blob com o mesmo nome.",
            "D. A operação é suportada apenas na mesma conta de armazenamento para versões anteriores a 2021-02-12.",
            "E. A operação suporta copiar para uma conta diferente na mesma região desde 2021-02-12."
        ],
        "EXPLANATION_TEXT": "Explicação: Não é possível copiar um blob para outro blob com o mesmo nome no mesmo contêiner. O blob de origem permanece inalterado, e a operação permite copiar para uma conta de armazenamento diferente na mesma região para versões de serviço desde 2021-02-12.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "19",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "20",
        "QUESTION_TEXT": "Qual é o impacto de alterar a camada de acesso de um blob na sua hora de última modificação?",
        "POSSIBLE_ANSWERS": [
            "A. A hora de última modificação é redefinida para o momento da alteração.",
            "B. A hora de última modificação permanece inalterada.",
            "C. A hora de última modificação é ajustada com base na prioridade de reidratação.",
            "D. A hora de última modificação é atualizada para coincidir com a data de criação do blob.",
            "E. A hora de última modificação é removida."
        ],
        "EXPLANATION_TEXT": "Explicação: Alterar a camada de acesso de um blob não afeta sua hora de última modificação. Isso pode levar a cenários onde políticas de ciclo de vida retornam o blob para a camada de arquivo com base em limites de tempo configurados.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "20",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "21",
        "QUESTION_TEXT": "What is the recommended version of the Azure Storage client library for new applications?",
        "POSSIBLE_ANSWERS": [
            "A. Version 10.x",
            "B. Version 11.x",
            "C. Version 12.x",
            "D. Version 13.x",
            "E. Version 9.x"
        ],
        "EXPLANATION_TEXT": "Explanation: Microsoft recommends using version 12.x of the Azure Storage client library for new applications as it is the latest version and includes the most recent features and updates.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "16",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "22",
        "QUESTION_TEXT": "Which class allows you to manipulate Azure Storage blobs directly?",
        "POSSIBLE_ANSWERS": [
            "A. BlobContainerClient",
            "B. BlobServiceClient",
            "C. BlobClient",
            "D. BlobUriBuilder",
            "E. BlobClientOptions"
        ],
        "EXPLANATION_TEXT": "Explanation: The BlobClient class allows direct manipulation of Azure Storage blobs, providing methods for creating, deleting, and updating blob data.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "17",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "23",
        "QUESTION_TEXT": "What is the purpose of the BlobServiceClient class?",
        "POSSIBLE_ANSWERS": [
            "A. To manage Azure Storage blob containers.",
            "B. To manage individual blob files.",
            "C. To manage Azure Storage service resources and blob containers.",
            "D. To configure client options for Blob Storage.",
            "E. To modify the contents of a URI for Azure Storage resources."
        ],
        "EXPLANATION_TEXT": "Explanation: The BlobServiceClient class provides methods to manage Azure Storage service resources and blob containers. It operates at the service account level, offering a top-level namespace for the Blob service.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "18",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "24",
        "QUESTION_TEXT": "Which package contains classes specifically for operations on different blob types, such as block blobs?",
        "POSSIBLE_ANSWERS": [
            "A. Azure.Storage.Blobs",
            "B. Azure.Storage.Blobs.Specialized",
            "C. Azure.Storage.Blobs.Models",
            "D. Azure.Storage.Common",
            "E. Azure.Storage.Specialized.Models"
        ],
        "EXPLANATION_TEXT": "Explanation: The Azure.Storage.Blobs.Specialized package contains classes designed for operations specific to blob types, such as block blobs, append blobs, or page blobs.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "19",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "25",
        "QUESTION_TEXT": "Which class provides a way to modify a URI to point to different Azure Storage resources?",
        "POSSIBLE_ANSWERS": [
            "A. BlobServiceClient",
            "B. BlobContainerClient",
            "C. BlobClient",
            "D. BlobUriBuilder",
            "E. BlobClientOptions"
        ],
        "EXPLANATION_TEXT": "Explanation: The BlobUriBuilder class provides a convenient way to modify the contents of a URI to reference different Azure Storage resources, such as accounts, containers, or blobs.",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "20",
        "Probability": 1
    }
];

