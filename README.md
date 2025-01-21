Utilize o dados descrito em <<DADOS>>  e formate-os gerando 10 perguntas para um quiz aplicando o <<TEMPLATE>>
Não esqueça de colocar no campo <<Explicação>> do template o maior número de explicações possíveis. 

Começe o número de questão por 88.

Mantenha o idioma original.

defina o seguinte valor para QUESTION_TYPE
"QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",

DADOS:
"""
Configurar mapeamentos de caminho
Concluído
100 XP
3 minutos
Na seção Configuração > Mapeamentos de caminho, você pode configurar mapeamentos de manipulador, de aplicativo virtual e diretórios. A página Mapeamentos de caminho exibe diferentes opções com base no tipo de SO.
Aplicativos do Windows (não conteinerizado)
Para aplicativos do Windows, você pode personalizar os mapeamentos do manipulador do IIS, os diretórios e os aplicativos virtuais.
Os mapeamentos do manipulador permitem que você adicione processadores de script personalizado para manipular solicitações para extensões de arquivo especificadas. Para adicionar um manipulador personalizado, selecione Novo mapeamento de manipulador. Configure o manipulador da seguinte maneira:
Extensão: a extensão de arquivo que você deseja manipular, como *.php ou handler.fcgi.
Processador descript: o caminho absoluto do processador de script. As solicitações para arquivos que correspondam à extensão do arquivo são processadas pelo processador de script. Use o caminho D:\home\site\wwwroot para se referir ao diretório raiz do seu aplicativo.
Argumentos: argumentos de linha de comando opcionais para o processador de script.
Cada aplicativo tem o caminho raiz padrão (/) mapeado para D:\home\site\wwwroot, em que seu código é implantado por padrão. Se a raiz do aplicativo estiver em uma pasta diferente ou se o repositório tiver mais de um aplicativo, você poderá editar ou adicionar diretórios e aplicativos virtuais.
Você pode configurar diretórios e aplicativos virtuais, especifique cada diretório virtual e seu caminho físico correspondente em relação à raiz do site (D:\home). Para marcar um diretório virtual como um aplicativo Web, desmarque a caixa de seleção Diretório.
Aplicativos Linux e em contêineres
Você pode adicionar armazenamento personalizado para seu aplicativo conteinerizado. Os aplicativos conteinerizados incluem todos os aplicativos do Linux e também os contêineres personalizados do Windows e Linux em execução no Serviço de Aplicativo. Selecione Nova Montagem de Armazenamento do Azure e configure seu armazenamento personalizado da seguinte maneira:
Nome: o nome de exibição.
Opções de configuração: Básico ou Avançado. Selecione Básico se a conta de armazenamento não estiver usando pontos de extremidade de serviço, pontos de extremidade privados ou Azure Key Vault. Caso contrário, selecione Avançado.
Contas de armazenamento: a conta de armazenamento com o contêiner desejado.
Tipo de armazenamento: Blobs do Azure ou Arquivos do Azure. Os aplicativos de contêiner do Windows são compatíveis somente com os Arquivos do Azure. Os Blobs do Azure dão suporte apenas ao acesso somente leitura.
Contêiner de armazenamento: para configuração básica, o contêiner desejado.
Nome do compartilhamento: para configuração avançada, o nome do compartilhamento de arquivos.
Chave de acesso: para configuração avançada, a chave de acesso.
Caminho de montagem: o caminho absoluto em seu contêiner para montar o armazenamento personalizado.
Configuração do slot de implantação: Quando marcadas, as configurações de montagem de armazenamento também se aplicam aos slots de implantação.



"""

TEMPLATE:
"""
const questions = [
    {
        "QUESTION_NUMBER": "1",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Qual das alternativas a seguir descreve melhor a finalidade do TRM?",
        "POSSIBLE_ANSWERS": [
            "A. Fornecer um framework para governança de TI.",
            "B. Fornecer um modelo visual e uma taxonomia para apoiar o ambiente tecnológico da empresa.",
            "C. Fornecer uma lista de normas.",
            "D. Fornecer um método de desenvolvimento de software.",
            "E. Fornecer um ponto de vista de engenharia de sistema para uma possível solução."
        ],
        "EXPLANATION_TEXT": "Explicação: <<Explicação>>",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "2",
        "QUESTION_TYPE": "Blob e teste",
        "QUESTION_TEXT": "Qual dos seguintes não é considerado uma das principais partes do TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Método de Desenvolvimento da Arquitetura.",
            "B. Continuum da Corporação.",
            "C. Modelos de Referência do TOGAF.",
            "D. Base de Recursos do TOGAF.",
            "E. Framework de Conteúdo de Arquitetura"
        ],
        "EXPLANATION_TEXT": "Explicação:<<Explicação>>",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "2",
        "Probability": 1
    }
]
"""
