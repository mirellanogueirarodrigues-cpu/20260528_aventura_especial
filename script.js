const historia = {

    inicio: {
        texto: "Estava lendo um belo livro sobre um lugar mágico chamado Mundo de Amora. Até que as páginas começaram a brilhar e um portal apareceu diante de você. Uma pequena fada chamada Amora estendeu a mão.",
        imagem: "amora.1.png",
        escolhas: [
            { texto: "Segurar a patinha de Amora", proximo: "passo1" },
            { texto: "Fechar o livro e fugir", proximo: "passo2" }
        ]
    },

    passo1: {
        texto: "Você atravessa o portal e chega ao Mundo de Amora. Amora explica que a Grande Fonte do Afeto está perdendo sua magia. No caminho vocês encontram o dragão Glub com uma pedra presa no dente.",
        imagem: "Amora.2.png",
        escolhas: [
            { texto: "Ajudar Glub", proximo: "passo3" },
            { texto: "Ignorar Glub", proximo: "passo4" }
        ]
    },

    passo2: {
        texto: "Você tenta fugir, mas durante a noite é puxado para dentro do livro. Agora está na Floresta dos Sussurros Gentis.",
        imagem: "Amora.3.png",
        escolhas: [
            { texto: "Gritar com as árvores", proximo: "passo5" },
            { texto: "Dizer algo gentil sobre si mesmo", proximo: "passo6" }
        ]
    },

    passo3: {
        texto: "Você ajuda Glub. Em agradecimento, ele leva você e Amora até a Grande Fonte do Afeto.",
        imagem: "Amora.4.png",
        escolhas: [
            { texto: "Dar um abraço em Amora", proximo: "passo7" }
        ]
    },

    passo4: {
        texto: "Você ignora Glub e segue sozinho. O caminho fica cada vez mais difícil.",
        imagem: "Amora.5.png",
        escolhas: [
            { texto: "Pedir desculpas e voltar", proximo: "passo7" },
            { texto: "Continuar sozinho", proximo: "finalRuim" }
        ]
    },

    passo5: {
        texto: "Você perde a paciência e a floresta reage de forma negativa.",
        imagem: "Amora.6.png",
        escolhas: [
            { texto: "Pedir desculpas", proximo: "passo7" },
            { texto: "Continuar brigando", proximo: "finalRuim" }
        ]
    },

    passo6: {
        texto: "A floresta reconhece sua sinceridade e permite sua passagem.",
        imagem: "Amora.7.png",
        escolhas: [
            { texto: "Abraçar Amora", proximo: "passo8" }
        ]
    },

    passo7: {
        texto: "A Grande Fonte do Afeto volta a brilhar. Todo o reino comemora sua ajuda.",
        imagem: "Amora.8.png",
        escolhas: [
            { texto: "Voltar para casa", proximo: "passo9" },
            { texto: "Ficar mais um pouco na festa", proximo: "passo10" }
        ]
    },

    passo8: {
        texto: "Seu gesto fortalece a amizade com Amora e restaura a harmonia do reino.",
        imagem: "Amora.9.png",
        escolhas: [
            { texto: "Ir para o portal", proximo: "passo9" },
            { texto: "Participar da festa", proximo: "passo10" }
        ]
    },

    passo9: {
        texto: "FINAL BOM 🌸 Você retorna para casa exatamente no instante em que saiu.",
        imagem: "Amora.10.png",
        escolhas: []
    },

    passo10: {
        texto: "Você aproveita a festa, mas percebe que o portal está desaparecendo.",
        imagem: "Amora.11.png",
        escolhas: [
            { texto: "Correr para o portal", proximo: "finalSecreto" }
        ]
    },

    finalSecreto: {
        texto: "FINAL SECRETO ⭐ Você volta para casa por pouco e nunca esquece o Mundo de Amora.",
        imagem: "Amora.12.png",
        escolhas: []
    },

    finalRuim: {
        texto: "FINAL RUIM ⚠️ A magia desaparece e você não consegue concluir sua missão.",
        imagem: "Amora.13.png",
        escolhas: []
    }
};

// Imagem bônus (Amora.14.png) reservada para a tela de game over / reiniciar
const imagemReiniciar = "Amora.14.png";

function mostrarCena(cena) {
    // Atualiza o texto
    document.getElementById("texto").innerText = historia[cena].texto;

    // Atualiza a imagem
    const elementoImagem = document.getElementById("imagem-jogo");
    elementoImagem.src = historia[cena].imagem;
    elementoImagem.alt = "Cena de " + cena;

    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";

    // Cria os botões de escolha
    historia[cena].escolhas.forEach(escolha => {
        const botao = document.createElement("button");
        botao.innerText = escolha.texto;
        botao.onclick = () => {
            mostrarCena(escolha.proximo);
        };
        opcoes.appendChild(botao);
    });

    // Se for um final, adiciona o botão de reiniciar e muda para a imagem final (14)
    if (historia[cena].escolhas.length === 0) {
        elementoImagem.src = imagemReiniciar;
        
        const reiniciar = document.createElement("button");
        reiniciar.innerText = "Jogar novamente";
        reiniciar.onclick = () => {
            mostrarCena("inicio");
        };
        opcoes.appendChild(reiniciar);
    }
}

// Inicia o jogo
mostrarCena("inicio");