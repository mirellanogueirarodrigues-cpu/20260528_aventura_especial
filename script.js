let etapa = 0;

function escolha(opcao){

    const texto = document.getElementById("texto");
    const opcoes = document.getElementById("opcoes");

    if(etapa === 0){

        if(opcao === 1){

            texto.innerHTML =
            "Você atravessa o portal com Amora e chega ao Mundo de Amora.";

            opcoes.innerHTML =
            `
            <button onclick="escolha(3)">
            Ajudar Glub
            </button>

            <button onclick="escolha(4)">
            Ignorar Glub
            </button>
            `;

            etapa = 1;
        }

        else{

            texto.innerHTML =
            "Você volta para casa. Fim neutro.";

            opcoes.innerHTML =
            `<button onclick='location.reload()'>Jogar novamente</button>`;
        }
    }

    else if(etapa === 1){

        if(opcao === 3){

            texto.innerHTML =
            "Você ajuda Glub e salva a Grande Fonte do Afeto. O reino é restaurado!";

            opcoes.innerHTML =
            `<button onclick='location.reload()'>Jogar novamente</button>`;
        }

        else{

            texto.innerHTML =
            "O reino perde sua magia e o portal desaparece para sempre.";

            opcoes.innerHTML =
            `<button onclick='location.reload()'>Jogar novamente</button>`;
        }
    }
}
