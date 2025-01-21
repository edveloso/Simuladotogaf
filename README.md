Utilize o dados descrito em <<DADOS>>  e formate-os gerando 10 perguntas para um quiz aplicando o <<TEMPLATE>>
Não esqueça de colocar no campo <<Explicação>> do template o maior número de explicações possíveis. 

Começe o número de questão por 68.

Mantenha o idioma original.

defina o seguinte valor para QUESTION_TYPE
"QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",

DADOS:
"""
Explorar a autenticação e a autorização no Serviço de Aplicativo
Concluído
100 XP
6 minutos
O Serviço de Aplicativo do Azure fornece suporte interno para a autenticação e autorização. Você pode conectar usuários e acessar dados escrevendo pouco ou nenhum código em seu aplicativo Web, API RESTful, back-end móvel ou Azure Functions.

Por que usar a autenticação interna?
Você não é necessário usar o Serviço de Aplicativo para autenticação e autorização. Muitas estruturas da Web são agrupadas com recursos de segurança e você poderá utilizá-las, se desejar. Caso precise de mais flexibilidade do que o Serviço de Aplicativo fornece, você também poderá gravar seus próprios utilitários.

O recurso interno de autenticação para o Serviço de Aplicativo e o Azure Functions pode facilitar e agilizar os processos ao fornecer autenticação pronta para uso com provedores de identidade federada, a fim de permitir que você se concentre no restante do aplicativo.

O Serviço de Aplicativo do Azure permite integrar uma variedade de recursos de autenticação ao aplicativo Web ou à API sem implementá-los por conta própria.
A autenticação é incorporada diretamente à plataforma e não requer nenhuma linguagem específica, SDK, expertise em segurança ou código.
Você pode integrar vários provedores de logon. Por exemplo, Microsoft Entra ID, Facebook, Google, X.
Provedores de identidade
O Serviço de Aplicativo usa identidade federada, na qual um provedor de identidade de terceiros gerencia as identidades do usuário e o fluxo de autenticação para você. Os provedores de identidade a seguir estão disponíveis por padrão:

Provedor	Ponto de extremidade de logon	Diretrizes
Plataforma de identidade da Microsoft	/.auth/login/aad	Logon da plataforma de identidade da Microsoft do Serviço de Aplicativo
Facebook	/.auth/login/facebook	Logon do Facebook no Serviço de Aplicativo
Google	/.auth/login/google	Logon do Google no Serviço de Aplicativo
X	/.auth/login/twitter	Login no Serviço de Aplicativo com o X
Qualquer provedor do OpenID Connect	/.auth/login/<providerName>	Logon do OpenID Connect no Serviço de Aplicativo
GitHub	/.auth/login/github	Serviço de Aplicativo Logon do GitHub
Ao habilitar a autenticação e autorização com um desses provedores, seu ponto de extremidade de logon estará disponível para autenticação de usuário e validação de tokens de autenticação do provedor. Você pode fornecer com facilidade aos usuários qualquer combinação dessas opções de conexão.

Como ele funciona
O módulo de autenticação e autorização executa na mesma caixa restrita que o código do aplicativo. Quando habilitado, cada solicitação HTTP recebida passa por ele antes de ser entregue ao código do seu aplicativo. Esse módulo trata diversos pontos do aplicativo:

Autentica usuários e clientes com o provedor de identidade especificado
Valida, armazena e atualiza tokens OAuth emitidos pelo provedor de identidade configurado
Gerencia a sessão autenticada
Injeta informações de identidade em cabeçalhos da solicitação
O módulo é executado separadamente do código do aplicativo e pode ser configurado usando as configurações do Azure Resource Manager ou um arquivo de configuração. Não há necessidade de SDKs, linguagens de programação específicas ou alterações no código do aplicativo.

 Observação

Em Linux e contêineres, o módulo de autenticação e autorização é executado em um contêiner separado, isolado do código do aplicativo. Como não funciona em processo, a integração direta com estruturas de linguagem específicas não é possível.

Fluxo de autenticação
O fluxo de autenticação é o mesmo para todos os provedores, mas difere dependendo se você deseja entrar com o SDK do provedor.

Sem SDK do provedor: o aplicativo delega o logon federado ao Serviço de Aplicativo. Essa delegação é geralmente o caso em aplicativos de navegador, que podem apresentar a página de logon do provedor ao usuário. O código do servidor gerencia o processo de entrada e é conhecido como fluxo direcionado pelo servidor ou fluxo do servidor.

Com o provedor SDK: o aplicativo assina os usuários no provedor manualmente e, em seguida, envia o token de autenticação para o Serviço de Aplicativo para validação. Esse é tipicamente o caso de aplicativos sem navegador, que não podem apresentar a página de entrada do provedor ao usuário. O código do aplicativo gerencia o processo de entrada e é conhecido como fluxo direcionado pelo cliente ou fluxo do cliente. Isso se aplica a APIs REST, Azure Functions, clientes de navegador JavaScript e aplicativos móveis nativos que assinam usuários usando o SDK do provedor.

A tabela a seguir mostra as etapas do fluxo de autenticação.

Etapa	Sem SDK do provedor	Com SDK do provedor
Conectar usuário	Redireciona o cliente para /.auth/login/<provider>.	O código do cliente coneta o usuário diretamente no SDK do provedor e recebe um token de autenticação. Para obter informações, consulte a documentação do provedor.
Pós-autenticação	Provedor redireciona o cliente para /.auth/login/<provider>/callback.	O código do cliente envia o token do provedor para /.auth/login/<provider> para validação.
Estabelecer sessão autenticada	O Serviço de Aplicativo adiciona um cookie autenticado à resposta.	O Serviço de Aplicativo retorna o próprio token de autenticação para o código do cliente.
Atender conteúdo autenticado	O cliente inclui o cookie de autenticação em solicitações subsequentes (manipuladas automaticamente pelo navegador).	O código do cliente apresenta o token de autenticação no cabeçalho X-ZUMO-AUTH (manipulado automaticamente pelos SDKs de cliente dos Aplicativos Móveis).
Para navegadores do cliente, o Serviço de Aplicativo pode direcionar automaticamente todos os usuários não autenticados para /.auth/login/<provider>. Você também pode apresentar aos usuários um ou mais links /.auth/login/<provider> para entrar no aplicativo usando o provedor escolhido.

Comportamento de autorização
No portal do Azure, é possível configurar o Serviço de Aplicativo com vários comportamentos quando uma solicitação de entrada não é autenticada.

Permitir solicitações não autenticadas: essa opção adia a autorização de tráfego não autenticado para o seu código do aplicativo. Para solicitações autenticadas, o Serviço de Aplicativo também passa informações de autenticação nos cabeçalhos HTTP. Essa opção oferece mais flexibilidade no processamento de solicitações anônimas. Permite que você apresente vários provedores de entrada aos usuários.

Exigir autenticação: essa opção rejeita qualquer tráfego não autenticado para seu aplicativo. Essa rejeição pode ser uma ação de redirecionamento para um dos provedores de identidade configurados. Nesses casos, um cliente de navegador é redirecionado para /.auth/login/<provider> para o provedor escolhido. Se a solicitação anônima originar-se de um aplicativo móvel nativo, a resposta retornada será HTTP 401 Unauthorized. Você também pode configurar a rejeição como HTTP 401 Unauthorized ou HTTP 403 Forbidden para todas as solicitações.

 Cuidado

Esse tipo de restrição de acesso se aplica a todas as chamadas ao aplicativo, o que pode não ser útil para aplicativos que desejam uma página inicial publicamente disponível, como muitos aplicativos de página única.

Token Store
O Serviço de Aplicativo fornece um armazenamento de token integrado, que é um repositório de tokens associados aos usuários dos aplicativos Web, APIs ou aplicativos móveis nativos. Ao habilitar a autenticação com qualquer provedor, esse armazenamento de token ficará imediatamente disponível para o aplicativo.

Registro em log e rastreamento
Se você habilitar o log de aplicativo, os rastreamentos de autenticação e autorização serão coletados diretamente nos arquivos de log. Ao ver um erro de autenticação não esperado, é possível localizar com facilidade todos os detalhes examinando os logs do aplicativo existente.






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
