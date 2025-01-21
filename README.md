Utilize o dados descrito em <<DADOS>>  e formate-os gerando 10 perguntas para um quiz aplicando o <<TEMPLATE>>
Não esqueça de colocar no campo <<Explicação>> do template o maior número de explicações possíveis. 

Começe o número de questão por 78.

Mantenha o idioma original.

defina o seguinte valor para QUESTION_TYPE
"QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",

DADOS:
"""
Descobrir recursos de rede do Serviço de Aplicativo
Concluído
100 XP
4 minutos
Por padrão, os aplicativos hospedados no Serviço de Aplicativo podem ser acessados diretamente pela Internet e permitem acessar apenas pontos de extremidade hospedados online. No entanto, para muitos aplicativos, você precisa controlar o tráfego de rede de entrada e saída.
Há dois tipos de implantação principais para o Serviço de Aplicativo do Azure. O serviço público multilocatário hospeda planos do Serviço de Aplicativo nas SKUs Gratuitas, Compartilhadas, Básicas, Standard, Premium, PremiumV2 e PremiumV3. Há ainda o ASE (Ambiente do Serviço de Aplicativo) de locatário único, que hospeda planos do Serviço do Aplicativo de SKU Isolado diretamente na rede virtual do Azure.
Recursos de rede do Serviço de Aplicativo multilocatário
O Serviço de Aplicativo do Azure é um sistema distribuído. As funções que tratam solicitações HTTP ou HTTPS de entrada são chamadas de front-ends. As funções que hospedam a carga de trabalho do cliente são chamadas de Trabalhos. Todas as funções em uma implantação do Serviço de Aplicativo são encontradas em uma rede multilocatário. Como há muitos clientes diferentes na mesma unidade de escala do Serviço de Aplicativo, não é possível conectar a rede do Serviço de Aplicativo diretamente à sua rede.
Em vez de conectar as redes, use recursos para lidar com os vários aspectos da comunicação do aplicativo. Os recursos que tratam as solicitações para o aplicativo não podem ser usados para resolver problemas ao fazer chamadas pelo aplicativo. Da mesma forma, os recursos que resolvem problemas de chamadas pelo aplicativo não podem ser usados para resolver problemas do aplicativo.
Recursos de entrada	Recursos de saída
Endereço atribuído ao aplicativo	Conexões Híbridas
Restrições de acesso	Integração de rede virtual exigida por gateway
Pontos de extremidade de serviço	Integração de rede virtual
Pontos de extremidade privados	
Você pode combinar os recursos para resolver problemas, com poucas exceções. Os casos de uso a seguir de entrada são exemplos de como usar os recursos de rede do Serviço de Aplicativo para controlar o tráfego de entrada para o seu aplicativo.
Caso de uso de entrada	Recurso
Suporte às necessidades de SSL baseado em IP para o aplicativo	Endereço atribuído ao aplicativo
Suporte ao endereço de entrada dedicado e não compartilhado para o aplicativo	Endereço atribuído ao aplicativo
Restringir o acesso ao aplicativo de um conjunto de endereços bem definidos	Restrições de acesso
Comportamento de rede padrão
As unidades de escala do Serviço de Aplicativo do Azure suportam muitos clientes em cada implantação. Os planos de SKU Gratuita e Compartilhada hospedam cargas de trabalho do cliente em trabalhos multilocatários. Os planos Básico e superiores hospedam cargas de trabalho do cliente que são dedicadas a apenas um plano do Serviço de Aplicativo. Se você tiver um plano Standard do Serviço de Aplicativo, todos os aplicativos nesse plano serão executados no mesmo trabalho. Se você escalar horizontalmente o trabalho, todos os aplicativos nesse plano do Serviço de Aplicativo serão replicados em um novo trabalho para cada instância existente.
Endereços de saída

As VMs de trabalho são divididas em grande parte pelos planos do Serviço de Aplicativo. Os planos Gratuito, Compartilhado, Básico, Standard e Premium usam o mesmo tipo de VM de trabalho. O plano PremiumV2 usa outro tipo de VM. O PremiumV3 usa um outro tipo de VM. Ao mudar a família de VMs, você obtém um conjunto diferente de endereços de saída.
Há muitos endereços que são usados para chamadas de saída. Os endereços de saída usados pelo aplicativo para fazer chamadas de saída são listados nas propriedades do aplicativo. Esses endereços são compartilhados por todos os aplicativos em execução na mesma família de VMs de trabalho da implantação do Serviço de Aplicativo. Caso queira ver todos os endereços que o aplicativo pode usar em uma unidade de escala, há uma propriedade chamada possibleOutboundIpAddresses que os listará.
Localizar IPs de saída

Para localizar os endereços IP de saída atualmente usados pelo aplicativo no portal do Azure, selecione Propriedades na barra de navegação à esquerda do aplicativo.
É possível localizar as mesmas informações, executando o comando da CLI do Azure a seguir no Cloud Shell. Eles são listados no campo Endereços IP de saída adicionais.
Bash

Copiar
az webapp show \
    --resource-group <group_name> \
    --name <app_name> \ 
    --query outboundIpAddresses \
    --output tsv
Para localizar todos os endereços IP de saída possíveis para o aplicativo, independentemente dos tipos de preços, execute o comando a seguir no Cloud Shell.
Bash

Copiar
az webapp show \
    --resource-group <group_name> \ 
    --name <app_name> \ 
    --query possibleOutboundIpAddresses \
    --output tsv




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
