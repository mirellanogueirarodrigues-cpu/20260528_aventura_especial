const historia = {
    inicio: {
        texto: `Estava lendo um belo livro sobre um lugar mágico chamado Mundo de Amora. Até que as páginas começaram a brilhar com uma luz cor-de-rosa e o cheiro suave de baunilha e morango tomou conta do seu quarto. De repente, as palavras impressas começaram a flutuar e se transformar em um redemoinho reluzente, abrindo um portal bem no meio do livro aberto. Uma criaturinha fofa, parecida com uma fada, surgiu sorrindo e estendeu sua pequena patinha para você.`,

        escolhas: [
            {
                texto: "Segurar a patinha de Amora e entrar no portal",
                proximo: "passo1"
            },
            {
                texto: "Fechar o livro correndo e tentar esquecer aquilo",
                proximo: "passo2"
            }
        ]
    },

    passo1: {
        texto: `Você sente o corpo ficar leve enquanto atravessa o portal. Quando abre os olhos, está em um campo coberto por flores brilhantes. O céu possui tons dourados e rosados, e um aroma doce paira no ar. A pequena fada se apresenta como Amora e explica que a Grande Fonte do Afeto está secando. Sem ela, toda a harmonia do reino desaparecerá. Para salvá-la, vocês precisam chegar à Montanha de Açúcar Cristal. No caminho, encontram o dragão Glub chorando porque uma enorme pedra de açúcar ficou presa em seu dente.`,

        escolhas: [
            {
                texto: "Ajudar Glub a remover a pedra",
                proximo: "passo3"
            },
            {
                texto: "Ignorar Glub e seguir viagem",
                proximo: "passo4"
            }
        ]
    },

    passo2: {
        texto: `Assustado com tudo aquilo, você fecha o livro rapidamente. Porém, durante a noite, uma névoa rosa invade seu quarto e o livro se abre sozinho. Antes que consiga reagir, você é puxado para dentro dele. Ao cair, percebe que está na Floresta dos Sussurros Gentis. As árvores observam você em silêncio e bloqueiam o caminho. Uma voz ecoa entre os galhos: "Somente quem consegue reconhecer algo bom em si mesmo poderá seguir adiante."`,

        escolhas: [
            {
                texto: "Ficar irritado e tentar quebrar os galhos",
                proximo: "passo5"
            },
            {
                texto: "Respirar fundo e dizer algo sincero e gentil sobre si mesmo",
                proximo: "passo6"
            }
        ]
    },

    passo3: {
        texto: `Você ajuda Glub a remover a pedra de açúcar. Imediatamente o dragão volta a sorrir e agradece com entusiasmo. Em gratidão, ele leva você e Amora voando até o topo da Montanha de Açúcar Cristal. Lá, a Grande Fonte do Afeto começa a recuperar seu brilho. Amora observa tudo emocionada.`,

        escolhas: [
            {
                texto: "Dar um abraço apertado em Amora",
                proximo: "passo7"
            }
        ]
    },

    passo4: {
        texto: `Você decide ignorar Glub e continuar sozinho. Conforme avança, o céu começa a escurecer e o caminho fica cada vez mais difícil. Em pouco tempo você percebe que precisava da ajuda do dragão. Ao olhar para trás, vê Glub ainda preso e Amora desapontada.`,

        escolhas: [
            {
                texto: "Pedir desculpas e voltar para ajudar Glub",
                proximo: "passo7"
            },
            {
                texto: "Continuar sozinho",
                proximo: "finalRuim1"
            }
        ]
    },

    passo5: {
        texto: `Você tenta arrancar galhos e grita com as árvores. Imediatamente a floresta reage. As raízes surgem do chão e prendem seus pés. O céu perde as cores vibrantes e tudo fica cinzento. As árvores parecem ainda mais tristes com sua atitude.`,

        escolhas: [
            {
                texto: "Pedir desculpas pelo egoísmo",
                proximo: "passo7"
            },
            {
                texto: "Continuar brigando com a floresta",
                proximo: "finalRuim2"
            }
        ]
    },

    passo6: {
        texto: `Você deixa o orgulho de lado e diz algo sincero sobre si mesmo. A floresta imediatamente se ilumina. As árvores se afastam e revelam um caminho coberto por flores brilhantes. Amora reaparece sorrindo e agradece sua honestidade.`,

        escolhas: [
            {
                texto: "Dar um abraço apertado em Amora",
                proximo: "passo8"
            }
        ]
    },

    passo7: {
        texto: `Ao envolver Amora em um abraço cheio de gratidão, uma energia rosa e dourada percorre todo o reino. A Grande Fonte do Afeto explode em uma chuva de luz cintilante, espalhando magia por todos os cantos. Os habitantes comemoram enquanto doces mágicos flutuam pelo céu.`,

        escolhas: [
            {
                texto: "Atravessar o portal imediatamente",
                proximo: "passo9"
            },
            {
                texto: "Ficar mais um pouco na festa",
                proximo: "passo10"
            }
        ]
    },

    passo8: {
        texto: `Seu abraço fortalece a amizade entre você e Amora. A energia da floresta se une à magia da Grande Fonte do Afeto e o reino inteiro volta a florescer. Os habitantes organizam uma grande celebração em sua homenagem.`,

        escolhas: [
            {
                texto: "Voltar para o portal",
                proximo: "passo9"
            },
            {
                texto: "Participar da festa antes de partir",
                proximo: "passo10"
            }
        ]
    },

    passo9: {
        texto: `Você atravessa o portal e retorna para casa. O relógio marca exatamente o mesmo minuto em que saiu. O livro está fechado sobre sua cama, mas um leve aroma de morango e baunilha permanece no ar. Você sorri ao perceber que tudo foi real. FIM BOM 🌸`,

        escolhas: []
    },

    passo10: {
        texto: `Você participa da grande festa do Vilarejo dos Doces. Há música, danças e sobremesas mágicas por toda parte. Porém, depois de algum tempo, percebe que a luz do portal está enfraquecendo.`,

        escolhas: [
            {
                texto: "Correr para o portal antes que ele desapareça",
                proximo: "finalSecreto"
            }
        ]
    },

    finalSecreto: {
        texto: `Você corre o mais rápido que consegue e atravessa o portal no último instante. De volta ao seu quarto, sente uma enorme saudade do Mundo de Amora. Às vezes, ao abrir o livro, jura ouvir a risada de Amora ecoando entre as páginas. FIM SECRETO ⭐`,

        escolhas: []
    },

    finalRuim1: {
        texto: `Sem a ajuda de Glub, você não consegue chegar à Grande Fonte do Afeto. A magia desaparece lentamente e o portal para casa se fecha para sempre. Você fica preso no reino enquanto ele perde suas cores. FIM RUIM ⚠️`,

        escolhas: []
    },

    finalRuim2: {
        texto: `A floresta decide que você ainda não aprendeu a lição da gentileza. As raízes o envolvem completamente e você acaba preso para sempre entre as árvores dos Sussurros Gentis. FIM RUIM ⚠️`,

        escolhas: []
    }
};
