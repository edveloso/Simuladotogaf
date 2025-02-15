const questions = [
          {
            "QUESTION_NUMBER": "36",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que é o Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
              "A. Um serviço de banco de dados no Azure.",
              "B. Um serviço baseado em HTTP para hospedar aplicativos Web, APIs REST e back-ends móveis.",
              "C. Um serviço para gerenciar contêineres no Kubernetes.",
              "D. Um serviço exclusivamente para aplicativos Linux."
            ],
            "EXPLANATION_TEXT": "Explicação: O Serviço de Aplicativo do Azure é um serviço baseado em HTTP que permite hospedar aplicativos Web, APIs REST e back-ends móveis. Ele suporta várias linguagens e frameworks e funciona em ambientes baseados em Windows e Linux.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "36",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "37",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que é escalabilidade horizontal no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
              "A. Aumentar os recursos do servidor, como RAM e núcleos.",
              "B. Reduzir o número de instâncias do aplicativo.",
              "C. Aumentar ou diminuir o número de instâncias de computador que executam o aplicativo Web.",
              "D. Adicionar mais slots de implantação."
            ],
            "EXPLANATION_TEXT": "Explicação: A escalabilidade horizontal refere-se ao aumento ou diminuição do número de instâncias de computador que executam o aplicativo Web. Isso é diferente da escalabilidade vertical, que ajusta os recursos do servidor.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "37",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "38",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a principal vantagem do suporte a contêiner no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
              "A. Executar apenas contêineres do Windows.",
              "B. Permitir a implantação de aplicativos em contêineres no Windows e no Linux.",
              "C. Limitar o uso de imagens personalizadas.",
              "D. Permitir apenas a integração com Docker Hub."
            ],
            "EXPLANATION_TEXT": "Explicação: O suporte a contêiner no Serviço de Aplicativo do Azure permite que aplicativos sejam implantados em contêineres no Windows e no Linux, utilizando imagens do Azure Container Registry, Docker Hub ou imagens personalizadas.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "38",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "39",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são os benefícios dos slots de implantação no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
              "A. Permitir escalabilidade horizontal.",
              "B. Habilitar a integração contínua com o GitHub.",
              "C. Facilitar a troca de configurações e conteúdo entre slots, incluindo o slot de produção.",
              "D. Executar contêineres personalizados."
            ],
            "EXPLANATION_TEXT": "Explicação: Os slots de implantação são úteis para testar alterações antes de aplicá-las ao slot de produção. Eles permitem trocar configurações e conteúdo entre slots e reduzem o risco de implantações diretas.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "39",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "40",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais linguagens de programação são suportadas nativamente pelo Serviço de Aplicativo no Linux?",
            "POSSIBLE_ANSWERS": [
              "A. Apenas Node.js e Python.",
              "B. Node.js, Java, PHP, Python, .NET e Ruby.",
              "C. Node.js, Java, PHP e Go.",
              "D. Apenas .NET e Ruby."
            ],
            "EXPLANATION_TEXT": "Explicação: O Serviço de Aplicativo no Linux suporta várias linguagens, como Node.js, Java (JRE 8 e 11), PHP, Python, .NET e Ruby. É possível usar imagens internas específicas ou contêineres personalizados.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "40",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "41",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual comando pode ser usado para listar runtimes suportados pelo Serviço de Aplicativo no Linux?",
            "POSSIBLE_ANSWERS": [
              "A. az webapp list-runtimes --os-type windows",
              "B. az webapp show-runtimes",
              "C. az webapp list-runtimes --os-type linux",
              "D. az appservice runtimes list"
            ],
            "EXPLANATION_TEXT": "Explicação: O comando 'az webapp list-runtimes --os-type linux' é usado no Azure Cloud Shell para listar os runtimes suportados pelo Serviço de Aplicativo no Linux.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "41",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "42",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O Serviço de Aplicativo no Linux suporta qual tipo de preço?",
            "POSSIBLE_ANSWERS": [
              "A. Gratuito.",
              "B. Compartilhado.",
              "C. Basic, Standard e Premium.",
              "D. Somente Basic."
            ],
            "EXPLANATION_TEXT": "Explicação: O Serviço de Aplicativo no Linux não é compatível com o tipo de preço Compartilhado, mas suporta outras camadas, como Basic, Standard e Premium.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "42",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "43",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a vantagem de usar integração contínua no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
              "A. Reduzir a necessidade de escalabilidade horizontal.",
              "B. Automatizar a sincronização de código e alterações futuras com o aplicativo Web.",
              "C. Limitar as fontes de código disponíveis.",
              "D. Permitir apenas o uso do Azure DevOps."
            ],
            "EXPLANATION_TEXT": "Explicação: A integração contínua permite que o código seja sincronizado automaticamente com o aplicativo Web. Ela suporta várias fontes, como Azure DevOps, GitHub, Bitbucket e repositórios Git locais.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "43",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "44",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais recursos são usados para armazenar conteúdo da Web em aplicativos do Linux com imagens internas?",
            "POSSIBLE_ANSWERS": [
              "A. Azure Blob Storage.",
              "B. Sistema de arquivos do contêiner.",
              "C. Volume de armazenamento suportado pelo Armazenamento do Azure.",
              "D. Azure Queue Storage."
            ],
            "EXPLANATION_TEXT": "Explicação: Quando aplicativos são implantados em imagens internas no Serviço de Aplicativo no Linux, o conteúdo da Web é armazenado em um volume de armazenamento suportado pelo Armazenamento do Azure. Esse volume pode ter maior latência do que o sistema de arquivos do contêiner.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "44",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "45",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual recurso pode beneficiar aplicativos com acesso intensivo e somente leitura a arquivos de conteúdo?",
            "POSSIBLE_ANSWERS": [
              "A. Slots de implantação.",
              "B. Contêiner personalizado.",
              "C. Escalabilidade vertical.",
              "D. Armazenamento do Azure."
            ],
            "EXPLANATION_TEXT": "Explicação: Aplicativos com acesso intensivo e somente leitura a arquivos de conteúdo podem se beneficiar de contêineres personalizados, que permitem armazenar os arquivos no sistema de arquivos do contêiner em vez de em um volume de armazenamento.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "45",
            "Probability": 1
          },
          {
            "QUESTION_NUMBER": "46",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é o objetivo principal de um Plano de Serviço de Aplicativo no Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Fornecer suporte para integração contínua.",
                "B. Definir os recursos de computação para a execução de aplicativos Web.",
                "C. Habilitar slots de implantação para testes.",
                "D. Gerenciar logs de diagnósticos e backups."
            ],
            "EXPLANATION_TEXT": "Explicação: Um Plano de Serviço de Aplicativo define os recursos de computação, como sistema operacional, região, instâncias de VM e tipo de preço, necessários para a execução de aplicativos Web no Azure.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "46",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "47",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que ocorre quando você coloca vários aplicativos no mesmo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Eles compartilham as mesmas instâncias de máquina virtual.",
                "B. Cada aplicativo recebe instâncias de VM dedicadas.",
                "C. Os aplicativos são implantados em diferentes regiões automaticamente.",
                "D. Eles não podem ser executados simultaneamente."
            ],
            "EXPLANATION_TEXT": "Explicação: Quando vários aplicativos estão no mesmo Plano de Serviço de Aplicativo, eles compartilham as mesmas instâncias de máquina virtual configuradas no plano.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "47",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "48",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são as categorias principais de tipos de preço para Planos de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Compartilhado, Gratuito, Dedicado e Isolado.",
                "B. Gratuito, Standard, Premium e Exclusivo.",
                "C. Básico, Standard, PremiumV2 e PremiumV3.",
                "D. Compartilhado, Dedicado e Avançado."
            ],
            "EXPLANATION_TEXT": "Explicação: Os tipos de preço incluem Computação Compartilhada (Gratuito e Compartilhado), Computação Dedicada (Básica, Standard, Premium, PremiumV2 e PremiumV3) e Isolado (Isolado e IsoladoV2).",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "48",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "49",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual tipo de preço é mais adequado para desenvolvimento e teste no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Standard.",
                "B. Compartilhado.",
                "C. Premium.",
                "D. Isolado."
            ],
            "EXPLANATION_TEXT": "Explicação: As camadas Gratuito e Compartilhado são projetadas para desenvolvimento e teste, sendo executadas nas mesmas VMs de outros aplicativos do Azure.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "49",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "50",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que permite o isolamento máximo para aplicativos no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Camadas PremiumV2 e PremiumV3.",
                "B. Uso de contêineres personalizados.",
                "C. Camadas Isolado e IsoladoV2.",
                "D. Dimensionamento automático."
            ],
            "EXPLANATION_TEXT": "Explicação: As camadas Isolado e IsoladoV2 fornecem isolamento máximo ao executar aplicativos em Redes Virtuais do Azure dedicadas.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "50",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "51",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Como você pode melhorar o desempenho de um aplicativo que compartilha recursos de computação?",
            "POSSIBLE_ANSWERS": [
                "A. Movendo o aplicativo para um novo Plano de Serviço de Aplicativo.",
                "B. Reduzindo o número de instâncias de VM.",
                "C. Habilitando os logs de diagnóstico.",
                "D. Alterando a região do plano existente."
            ],
            "EXPLANATION_TEXT": "Explicação: Mover o aplicativo para um novo Plano de Serviço de Aplicativo isola os recursos de computação, melhorando o desempenho.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "51",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "52",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que acontece quando você habilita o dimensionamento automático em um Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Apenas o aplicativo principal é dimensionado.",
                "B. Todos os aplicativos no plano são dimensionados juntos.",
                "C. Cada slot de implantação é dimensionado separadamente.",
                "D. Os logs de diagnóstico são desativados."
            ],
            "EXPLANATION_TEXT": "Explicação: O dimensionamento automático aplica-se a todos os aplicativos no mesmo Plano de Serviço de Aplicativo, dimensionando-os de acordo com as configurações definidas.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "52",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "53",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quando você deve isolar um aplicativo em um novo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Quando ele faz uso intensivo de recursos.",
                "B. Quando você deseja compartilhar recursos com outros aplicativos.",
                "C. Quando ele usa logs de diagnóstico.",
                "D. Quando ele está em um ambiente de desenvolvimento."
            ],
            "EXPLANATION_TEXT": "Explicação: Isolar um aplicativo em um novo plano é recomendado quando ele faz uso intensivo de recursos, necessita de ajuste de escala independente ou requer uma região geográfica diferente.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "53",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "54",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a unidade de escala para aplicativos no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Instâncias de VM configuradas no plano.",
                "B. Slots de implantação.",
                "C. Logs de diagnóstico.",
                "D. Tipos de preço do plano."
            ],
            "EXPLANATION_TEXT": "Explicação: A unidade de escala para aplicativos no Serviço de Aplicativo é baseada nas instâncias de VM configuradas no plano.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "54",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "55",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são os benefícios de colocar vários aplicativos no mesmo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Redução de custos e compartilhamento de recursos.",
                "B. Dimensionamento automático independente.",
                "C. Aumento da segurança de rede.",
                "D. Disponibilidade de tipos de preço Isolado."
            ],
            "EXPLANATION_TEXT": "Explicação: Colocar vários aplicativos no mesmo plano reduz custos ao compartilhar recursos de computação, mas exige considerar a capacidade do plano e a carga esperada dos aplicativos.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "55",
            "Probability": 1
        },{
            "QUESTION_NUMBER": "56",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é o objetivo principal de um Plano de Serviço de Aplicativo no Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Fornecer suporte para integração contínua.",
                "B. Definir os recursos de computação para a execução de aplicativos Web.",
                "C. Habilitar slots de implantação para testes.",
                "D. Gerenciar logs de diagnósticos e backups."
            ],
            "EXPLANATION_TEXT": "Explicação: Um Plano de Serviço de Aplicativo define os recursos de computação, como sistema operacional, região, instâncias de VM e tipo de preço, necessários para a execução de aplicativos Web no Azure.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "46",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "57",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que ocorre quando você coloca vários aplicativos no mesmo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Eles compartilham as mesmas instâncias de máquina virtual.",
                "B. Cada aplicativo recebe instâncias de VM dedicadas.",
                "C. Os aplicativos são implantados em diferentes regiões automaticamente.",
                "D. Eles não podem ser executados simultaneamente."
            ],
            "EXPLANATION_TEXT": "Explicação: Quando vários aplicativos estão no mesmo Plano de Serviço de Aplicativo, eles compartilham as mesmas instâncias de máquina virtual configuradas no plano.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "47",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "58",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são as categorias principais de tipos de preço para Planos de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Compartilhado, Gratuito, Dedicado e Isolado.",
                "B. Gratuito, Standard, Premium e Exclusivo.",
                "C. Básico, Standard, PremiumV2 e PremiumV3.",
                "D. Compartilhado, Dedicado e Avançado."
            ],
            "EXPLANATION_TEXT": "Explicação: Os tipos de preço incluem Computação Compartilhada (Gratuito e Compartilhado), Computação Dedicada (Básica, Standard, Premium, PremiumV2 e PremiumV3) e Isolado (Isolado e IsoladoV2).",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "48",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "59",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual tipo de preço é mais adequado para desenvolvimento e teste no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Standard.",
                "B. Compartilhado.",
                "C. Premium.",
                "D. Isolado."
            ],
            "EXPLANATION_TEXT": "Explicação: As camadas Gratuito e Compartilhado são projetadas para desenvolvimento e teste, sendo executadas nas mesmas VMs de outros aplicativos do Azure.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "49",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "60",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que permite o isolamento máximo para aplicativos no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Camadas PremiumV2 e PremiumV3.",
                "B. Uso de contêineres personalizados.",
                "C. Camadas Isolado e IsoladoV2.",
                "D. Dimensionamento automático."
            ],
            "EXPLANATION_TEXT": "Explicação: As camadas Isolado e IsoladoV2 fornecem isolamento máximo ao executar aplicativos em Redes Virtuais do Azure dedicadas.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "50",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "61",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Como você pode melhorar o desempenho de um aplicativo que compartilha recursos de computação?",
            "POSSIBLE_ANSWERS": [
                "A. Movendo o aplicativo para um novo Plano de Serviço de Aplicativo.",
                "B. Reduzindo o número de instâncias de VM.",
                "C. Habilitando os logs de diagnóstico.",
                "D. Alterando a região do plano existente."
            ],
            "EXPLANATION_TEXT": "Explicação: Mover o aplicativo para um novo Plano de Serviço de Aplicativo isola os recursos de computação, melhorando o desempenho.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "51",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "62",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que acontece quando você habilita o dimensionamento automático em um Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Apenas o aplicativo principal é dimensionado.",
                "B. Todos os aplicativos no plano são dimensionados juntos.",
                "C. Cada slot de implantação é dimensionado separadamente.",
                "D. Os logs de diagnóstico são desativados."
            ],
            "EXPLANATION_TEXT": "Explicação: O dimensionamento automático aplica-se a todos os aplicativos no mesmo Plano de Serviço de Aplicativo, dimensionando-os de acordo com as configurações definidas.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "52",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "63",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quando você deve isolar um aplicativo em um novo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Quando ele faz uso intensivo de recursos.",
                "B. Quando você deseja compartilhar recursos com outros aplicativos.",
                "C. Quando ele usa logs de diagnóstico.",
                "D. Quando ele está em um ambiente de desenvolvimento."
            ],
            "EXPLANATION_TEXT": "Explicação: Isolar um aplicativo em um novo plano é recomendado quando ele faz uso intensivo de recursos, necessita de ajuste de escala independente ou requer uma região geográfica diferente.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "53",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "64",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a unidade de escala para aplicativos no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Instâncias de VM configuradas no plano.",
                "B. Slots de implantação.",
                "C. Logs de diagnóstico.",
                "D. Tipos de preço do plano."
            ],
            "EXPLANATION_TEXT": "Explicação: A unidade de escala para aplicativos no Serviço de Aplicativo é baseada nas instâncias de VM configuradas no plano.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "54",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "65",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são os benefícios de colocar vários aplicativos no mesmo Plano de Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Redução de custos e compartilhamento de recursos.",
                "B. Dimensionamento automático independente.",
                "C. Aumento da segurança de rede.",
                "D. Disponibilidade de tipos de preço Isolado."
            ],
            "EXPLANATION_TEXT": "Explicação: Colocar vários aplicativos no mesmo plano reduz custos ao compartilhar recursos de computação, mas exige considerar a capacidade do plano e a carga esperada dos aplicativos.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "55",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "66",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a vantagem de usar implantação automatizada em um Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Implementar correções de bug rapidamente com impacto mínimo nos usuários.",
                "B. Evitar o uso de repositórios de código como GitHub.",
                "C. Eliminar a necessidade de um pipeline de CI/CD.",
                "D. Garantir que os aplicativos sejam executados apenas em ambientes de preparo."
            ],
            "EXPLANATION_TEXT": "Explicação: A implantação automatizada permite enviar novos recursos e correções de bug de forma rápida e repetitiva, minimizando o impacto para os usuários finais e aumentando a eficiência do processo de desenvolvimento.",
            "CORRECT_ANSWER": "A",
            "JSONINDEX": "56",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "67",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais fontes são suportadas para implantação automatizada no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Apenas Azure DevOps Services.",
                "B. Azure DevOps Services, GitHub e Bitbucket.",
                "C. Repositórios locais apenas.",
                "D. Apenas FTP/S e Git."
            ],
            "EXPLANATION_TEXT": "Explicação: O Serviço de Aplicativo suporta implantação automatizada diretamente do Azure DevOps Services, GitHub e Bitbucket, permitindo uma integração perfeita com essas plataformas para implantações contínuas.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "57",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "68",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é a principal vantagem de usar a autenticação interna do Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Permite maior flexibilidade com o código personalizado.",
                "B. Facilita a integração com provedores de identidade federada.",
                "C. Requer expertise em segurança para configuração.",
                "D. Necessita de SDKs específicos para funcionar."
            ],
            "EXPLANATION_TEXT": "Explicação: A autenticação interna permite integração rápida com provedores de identidade federada sem a necessidade de escrever código adicional ou usar SDKs específicos, facilitando o processo de autenticação.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "68",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "69",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual provedor de identidade não está incluído por padrão no Serviço de Aplicativo do Azure?",
            "POSSIBLE_ANSWERS": [
                "A. Microsoft Entra ID",
                "B. Facebook",
                "C. LinkedIn",
                "D. GitHub"
            ],
            "EXPLANATION_TEXT": "Explicação: Os provedores incluídos por padrão são Microsoft Entra ID, Facebook, Google, X e GitHub. LinkedIn não está incluído por padrão, mas pode ser configurado usando OpenID Connect.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "69",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "70",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que acontece quando uma solicitação HTTP é feita a um Serviço de Aplicativo com autenticação habilitada?",
            "POSSIBLE_ANSWERS": [
                "A. A solicitação é rejeitada automaticamente.",
                "B. A solicitação passa pelo módulo de autenticação antes de chegar ao código do aplicativo.",
                "C. A autenticação é gerenciada diretamente pelo código do aplicativo.",
                "D. Um token de autenticação é sempre exigido, mesmo para solicitações anônimas."
            ],
            "EXPLANATION_TEXT": "Explicação: Quando habilitada, a autenticação é tratada por um módulo que processa a solicitação HTTP antes de entregá-la ao código do aplicativo. Isso permite validar tokens e autenticar usuários de forma transparente.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "70",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "71",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual é o comportamento padrão ao configurar o Serviço de Aplicativo para permitir solicitações não autenticadas?",
            "POSSIBLE_ANSWERS": [
                "A. Todas as solicitações são redirecionadas para o provedor de identidade configurado.",
                "B. As solicitações não autenticadas são rejeitadas com código HTTP 401 Unauthorized.",
                "C. As solicitações não autenticadas são processadas pelo código do aplicativo.",
                "D. O acesso é bloqueado até que a autenticação seja configurada."
            ],
            "EXPLANATION_TEXT": "Explicação: Ao permitir solicitações não autenticadas, o processamento dessas solicitações é delegado ao código do aplicativo, oferecendo flexibilidade para lidar com tráfego anônimo.",
            "CORRECT_ANSWER": "C",
            "JSONINDEX": "71",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "72",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Qual cabeçalho HTTP é usado para enviar tokens de autenticação em aplicações que usam o fluxo do cliente?",
            "POSSIBLE_ANSWERS": [
                "A. Authorization",
                "B. X-ZUMO-AUTH",
                "C. Authentication-Token",
                "D. Token-Header"
            ],
            "EXPLANATION_TEXT": "Explicação: No fluxo do cliente, o token de autenticação é enviado no cabeçalho X-ZUMO-AUTH, que é automaticamente manipulado pelos SDKs dos Aplicativos Móveis.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "72",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "73",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais das seguintes etapas pertencem ao fluxo de autenticação com SDK do provedor?",
            "POSSIBLE_ANSWERS": [
                "A. O cliente é redirecionado para /.auth/login/<provider>.",
                "B. O código do cliente coneta o usuário diretamente no SDK do provedor.",
                "C. O provedor redireciona o cliente para /.auth/login/<provider>/callback.",
                "D. O token do provedor é enviado para /.auth/login/<provider> para validação."
            ],
            "EXPLANATION_TEXT": "Explicação: No fluxo com SDK do provedor, o código do cliente gerencia diretamente o logon e validação do token, ao contrário do fluxo do servidor, onde o cliente é redirecionado para endpoints do provedor.",
            "CORRECT_ANSWER": "B, D",
            "JSONINDEX": "73",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "74",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "O que é o Token Store no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. Um repositório para armazenar arquivos de log.",
                "B. Um local para armazenar tokens associados a usuários.",
                "C. Uma API para gerenciar sessões de usuários.",
                "D. Um banco de dados para armazenar credenciais de login."
            ],
            "EXPLANATION_TEXT": "Explicação: O Token Store é um recurso integrado do Serviço de Aplicativo que armazena tokens associados a usuários, facilitando a autenticação em aplicações Web, APIs ou aplicativos móveis.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "74",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "75",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são as opções disponíveis no portal do Azure para tratar solicitações não autenticadas?",
            "POSSIBLE_ANSWERS": [
                "A. Permitir solicitações não autenticadas.",
                "B. Rejeitar solicitações com HTTP 401 Unauthorized.",
                "C. Rejeitar solicitações com HTTP 403 Forbidden.",
                "D. Redirecionar todas as solicitações para a página inicial."
            ],
            "EXPLANATION_TEXT": "Explicação: As opções incluem permitir solicitações não autenticadas, rejeitar com HTTP 401 Unauthorized ou HTTP 403 Forbidden, dependendo da configuração e necessidades do aplicativo.",
            "CORRECT_ANSWER": "A, B, C",
            "JSONINDEX": "75",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "76",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Como o módulo de autenticação e autorização opera em contêineres Linux no Serviço de Aplicativo?",
            "POSSIBLE_ANSWERS": [
                "A. O módulo é executado na mesma caixa restrita que o código do aplicativo.",
                "B. O módulo é executado em um contêiner separado.",
                "C. Ele integra diretamente com SDKs específicos de linguagem.",
                "D. Ele exige alterações no código do aplicativo para funcionar."
            ],
            "EXPLANATION_TEXT": "Explicação: Em contêineres Linux, o módulo de autenticação e autorização opera em um contêiner separado, isolado do código do aplicativo, garantindo maior segurança e independência do código implementado.",
            "CORRECT_ANSWER": "B",
            "JSONINDEX": "76",
            "Probability": 1
        },
        {
            "QUESTION_NUMBER": "77",
            "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
            "QUESTION_TEXT": "Quais são as duas etapas finais no fluxo de autenticação sem SDK do provedor?",
            "POSSIBLE_ANSWERS": [
                "A. Redirecionar para /.auth/login/<provider>/callback e estabelecer sessão autenticada.",
                "B. Validar o token do provedor e adicionar cookie autenticado à resposta.",
                "C. Gerar um token OAuth e enviar para o código do cliente.",
                "D. Permitir acesso anônimo ao aplicativo."
            ],
            "EXPLANATION_TEXT": "Explicação: No fluxo sem SDK, o provedor redireciona para /.auth/login/<provider>/callback, e o Serviço de Aplicativo estabelece a sessão autenticada adicionando um cookie à resposta.",
            "CORRECT_ANSWER": "A, B",
            "JSONINDEX": "77",
            "Probability": 1
        },
        {
        "QUESTION_NUMBER": "78",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual é a principal diferença entre o Serviço de Aplicativo multilocatário e o Ambiente do Serviço de Aplicativo (ASE)?",
        "POSSIBLE_ANSWERS": [
            "A. O multilocatário suporta SKUs Isoladas, enquanto o ASE suporta todas as SKUs.",
            "B. O ASE hospeda planos de SKU Isolado diretamente na rede virtual do Azure, enquanto o multilocatário utiliza SKUs como Gratuita, Compartilhada e Premium.",
            "C. O ASE utiliza SKUs Gratuita e Compartilhada, enquanto o multilocatário utiliza SKUs Isoladas.",
            "D. O multilocatário oferece suporte apenas a ambientes dedicados."
        ],
        "EXPLANATION_TEXT": "Explicação: O Ambiente do Serviço de Aplicativo (ASE) é uma implantação de locatário único que hospeda planos de SKU Isolado diretamente na rede virtual do Azure. Já o multilocatário utiliza SKUs como Gratuita, Compartilhada, Básica, Standard, Premium, PremiumV2 e PremiumV3.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "79",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais funções tratam solicitações HTTP ou HTTPS de entrada no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Trabalhos.",
            "B. Front-ends.",
            "C. Pontos de extremidade privados.",
            "D. Conexões híbridas."
        ],
        "EXPLANATION_TEXT": "Explicação: No Serviço de Aplicativo, as funções chamadas de front-ends tratam solicitações HTTP ou HTTPS de entrada, enquanto os trabalhos hospedam a carga de trabalho do cliente.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "2",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "80",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual recurso permite restringir o acesso ao aplicativo a partir de um conjunto definido de endereços?",
        "POSSIBLE_ANSWERS": [
            "A. Pontos de extremidade privados.",
            "B. Endereço atribuído ao aplicativo.",
            "C. Restrições de acesso.",
            "D. Conexões híbridas."
        ],
        "EXPLANATION_TEXT": "Explicação: O recurso 'Restrições de acesso' permite restringir o acesso ao aplicativo a partir de um conjunto bem definido de endereços IP.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "3",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "81",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais SKUs do Serviço de Aplicativo hospedam cargas de trabalho dedicadas a apenas um plano?",
        "POSSIBLE_ANSWERS": [
            "A. Gratuita e Compartilhada.",
            "B. Básica e superiores.",
            "C. PremiumV2 e PremiumV3.",
            "D. Apenas Isolada."
        ],
        "EXPLANATION_TEXT": "Explicação: As SKUs Básica e superiores hospedam cargas de trabalho que são dedicadas a apenas um plano do Serviço de Aplicativo, ao contrário das SKUs Gratuita e Compartilhada, que utilizam recursos multilocatários.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "4",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "82",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual propriedade lista todos os endereços IP de saída que o aplicativo pode usar em uma unidade de escala?",
        "POSSIBLE_ANSWERS": [
            "A. outboundIpAddresses.",
            "B. possibleOutboundIpAddresses.",
            "C. ipRestrictions.",
            "D. virtualNetworkIntegration."
        ],
        "EXPLANATION_TEXT": "Explicação: A propriedade 'possibleOutboundIpAddresses' lista todos os endereços IP de saída possíveis que o aplicativo pode usar em uma unidade de escala, independentemente do tipo de preço.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "5",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "83",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Como localizar os endereços IP de saída atualmente usados pelo aplicativo no portal do Azure?",
        "POSSIBLE_ANSWERS": [
            "A. Selecionar Propriedades na barra de navegação à esquerda do aplicativo.",
            "B. Executar o comando 'az webapp show' com o parâmetro '--query outboundIpAddresses'.",
            "C. Consultar a propriedade 'possibleOutboundIpAddresses'.",
            "D. Ambos A e B."
        ],
        "EXPLANATION_TEXT": "Explicação: Você pode localizar os endereços IP de saída atualmente usados pelo aplicativo no portal do Azure, selecionando Propriedades na barra de navegação à esquerda ou executando o comando 'az webapp show' com o parâmetro '--query outboundIpAddresses'.",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "6",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "84",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais recursos permitem tratar o tráfego de saída de um aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Endereço atribuído ao aplicativo e pontos de extremidade de serviço.",
            "B. Integração de rede virtual e conexões híbridas.",
            "C. Restrições de acesso e pontos de extremidade privados.",
            "D. Front-ends e trabalhos."
        ],
        "EXPLANATION_TEXT": "Explicação: A integração de rede virtual e as conexões híbridas permitem gerenciar o tráfego de saída de um aplicativo no Serviço de Aplicativo.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "7",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "85",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "O que ocorre ao escalar horizontalmente um plano Standard do Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Novos aplicativos são adicionados automaticamente.",
            "B. Todos os aplicativos no plano são replicados para novas instâncias.",
            "C. As conexões de rede são redefinidas.",
            "D. Apenas as cargas de trabalho de multilocatários são escaladas."
        ],
        "EXPLANATION_TEXT": "Explicação: Quando você escala horizontalmente um plano Standard do Serviço de Aplicativo, todos os aplicativos nesse plano são replicados para novas instâncias.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "8",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "86",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais tipos de trabalho as SKUs PremiumV2 e PremiumV3 utilizam?",
        "POSSIBLE_ANSWERS": [
            "A. O mesmo tipo usado por Gratuita e Compartilhada.",
            "B. Tipos diferentes de VMs de trabalho.",
            "C. Apenas o tipo de VM usado por Isolada.",
            "D. Não utilizam VMs de trabalho."
        ],
        "EXPLANATION_TEXT": "Explicação: As SKUs PremiumV2 e PremiumV3 utilizam tipos diferentes de VMs de trabalho em comparação às SKUs Gratuita, Compartilhada, Básica, Standard e Premium.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "9",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "87",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual recurso de entrada pode ser utilizado para oferecer suporte a SSL baseado em IP no aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Pontos de extremidade de serviço.",
            "B. Endereço atribuído ao aplicativo.",
            "C. Conexões híbridas.",
            "D. Integração de rede virtual."
        ],
        "EXPLANATION_TEXT": "Explicação: Para suportar SSL baseado em IP no aplicativo, utiliza-se o recurso 'Endereço atribuído ao aplicativo'.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "10",
        "Probability": 1
    },
{
        "QUESTION_NUMBER": "88",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual é o objetivo dos mapeamentos de manipulador nos aplicativos do Windows no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Adicionar processadores de script personalizados para manipular solicitações para extensões de arquivo especificadas.",
            "B. Configurar o caminho absoluto de montagem de armazenamento.",
            "C. Adicionar armazenamento personalizado para aplicativos conteinerizados.",
            "D. Configurar slots de implantação."
        ],
        "EXPLANATION_TEXT": "Explicação: Nos aplicativos do Windows, os mapeamentos de manipulador permitem adicionar processadores de script personalizados para manipular solicitações de extensões de arquivo específicas, como *.php ou handler.fcgi.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "88",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "89",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual é o caminho raiz padrão onde o código é implantado em um aplicativo do Windows no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. D:\\home\\site\\wwwroot",
            "B. C:\\app\\root",
            "C. /var/www/html",
            "D. D:\\root\\site"
        ],
        "EXPLANATION_TEXT": "Explicação: O caminho raiz padrão nos aplicativos do Windows no Serviço de Aplicativo é D:\\home\\site\\wwwroot, onde o código é implantado por padrão.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "89",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "90",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais configurações são aplicáveis aos slots de implantação quando a configuração de montagem de armazenamento está marcada?",
        "POSSIBLE_ANSWERS": [
            "A. Apenas configurações básicas.",
            "B. Configurações de montagem de armazenamento.",
            "C. Configurações de mapeamento de manipulador.",
            "D. Configurações de diretórios virtuais."
        ],
        "EXPLANATION_TEXT": "Explicação: Quando a configuração de montagem de armazenamento está marcada, as configurações de montagem de armazenamento também se aplicam aos slots de implantação.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "90",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "91",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual tipo de armazenamento é compatível apenas com acesso somente leitura para aplicativos conteinerizados no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Arquivos do Azure",
            "B. Blobs do Azure",
            "C. Compartilhamento NFS",
            "D. Disco Gerenciado do Azure"
        ],
        "EXPLANATION_TEXT": "Explicação: Para aplicativos conteinerizados, os Blobs do Azure suportam apenas acesso somente leitura, enquanto os Arquivos do Azure oferecem suporte para leitura e gravação.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "91",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "92",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual opção de configuração deve ser selecionada se a conta de armazenamento usa pontos de extremidade privados ou Azure Key Vault?",
        "POSSIBLE_ANSWERS": [
            "A. Básico",
            "B. Avançado",
            "C. Padrão",
            "D. Personalizado"
        ],
        "EXPLANATION_TEXT": "Explicação: Para configurações que utilizam pontos de extremidade de serviço, pontos de extremidade privados ou Azure Key Vault, a opção 'Avançado' deve ser selecionada.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "92",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "93",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Nos aplicativos do Windows, o que acontece se você desmarcar a caixa de seleção 'Diretório' ao configurar um diretório virtual?",
        "POSSIBLE_ANSWERS": [
            "A. Ele é marcado como um aplicativo Web.",
            "B. Ele é excluído do mapeamento.",
            "C. Ele é configurado como diretório raiz.",
            "D. Ele é configurado como um contêiner."
        ],
        "EXPLANATION_TEXT": "Explicação: Ao desmarcar a caixa de seleção 'Diretório' em um diretório virtual, ele é marcado como um aplicativo Web.",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "93",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "94",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Em aplicativos conteinerizados, o que deve ser fornecido ao usar a configuração básica para montar armazenamento?",
        "POSSIBLE_ANSWERS": [
            "A. Nome do compartilhamento",
            "B. Contêiner de armazenamento",
            "C. Caminho absoluto do processador de script",
            "D. Extensão do arquivo"
        ],
        "EXPLANATION_TEXT": "Explicação: Para configurações básicas em aplicativos conteinerizados, o contêiner de armazenamento desejado deve ser especificado.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "94",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "95",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual das opções a seguir é verdadeira sobre os aplicativos conteinerizados no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. São compatíveis apenas com Arquivos do Azure.",
            "B. Incluem apenas aplicativos baseados em Linux.",
            "C. Podem usar armazenamento personalizado configurado como Básico ou Avançado.",
            "D. Exigem configuração manual de manipuladores de script."
        ],
        "EXPLANATION_TEXT": "Explicação: Os aplicativos conteinerizados no Serviço de Aplicativo podem usar armazenamento personalizado configurado como Básico ou Avançado, dependendo dos requisitos.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "95",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "96",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Qual caminho deve ser usado para referir-se ao diretório raiz de um aplicativo do Windows no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. C:\\home\\site\\root",
            "B. D:\\home\\site\\wwwroot",
            "C. /home/site",
            "D. \\var\\root"
        ],
        "EXPLANATION_TEXT": "Explicação: O caminho D:\\home\\site\\wwwroot é o diretório raiz padrão para aplicativos do Windows no Serviço de Aplicativo.",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "96",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "97",
        "QUESTION_TYPE": "AZ-204 - Serviço de Aplicativo",
        "QUESTION_TEXT": "Quais tipos de armazenamento são compatíveis com aplicativos conteinerizados no Serviço de Aplicativo?",
        "POSSIBLE_ANSWERS": [
            "A. Apenas Blobs do Azure.",
            "B. Apenas Arquivos do Azure.",
            "C. Blobs do Azure e Arquivos do Azure.",
            "D. Apenas armazenamento local."
        ],
        "EXPLANATION_TEXT": "Explicação: Aplicativos conteinerizados no Serviço de Aplicativo são compatíveis com Blobs do Azure (somente leitura) e Arquivos do Azure.",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "97",
        "Probability": 1
    }

        ];



    





