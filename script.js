const historia = {

inicio:{
texto:"Estava lendo um belo livro sobre um lugar mágico chamado Mundo de Amora. Até que as páginas começaram a brilhar e um portal apareceu diante de você. Uma pequena fada chamada Amora estendeu a mão.",

escolhas:[
{
texto:"Segurar a patinha de Amora",
proximo:"passo1"
},
{
texto:"Fechar o livro e fugir",
proximo:"passo2"
}
]
},

passo1:{
texto:"Você atravessa o portal e chega ao Mundo de Amora. Amora explica que a Grande Fonte do Afeto está perdendo sua magia. No caminho vocês encontram o dragão Glub com uma pedra presa no dente.",

escolhas:[
{
texto:"Ajudar Glub",
proximo:"passo3"
},
{
texto:"Ignorar Glub",
proximo:"passo4"
}
]
},

passo2:{
texto:"Você tenta fugir, mas durante a noite é puxado para dentro do livro. Agora está na Floresta dos Sussurros Gentis.",

escolhas:[
{
texto:"Gritar com as árvores",
proximo:"passo5"
},
{
texto:"Dizer algo gentil sobre si mesmo",
proximo:"passo6"
}
]
},

passo3:{
texto:"Você ajuda Glub. Em agradecimento, ele leva você e Amora até a Grande Fonte do Afeto.",

escolhas:[
{
texto:"Dar um abraço em Amora",
proximo:"passo7"
}
]
},

passo4:{
texto:"Você ignora Glub e segue sozinho. O caminho fica cada vez mais difícil.",

escolhas:[
{
texto:"Pedir desculpas e voltar",
proximo:"passo7"
},
{
texto:"Continuar sozinho",
proximo:"finalRuim"
}
]
},

passo5:{
texto:"Você perde a paciência e a floresta reage de forma negativa.",

escolhas:[
{
texto:"Pedir desculpas",
proximo:"passo7"
},
{
texto:"Continuar brigando",
proximo:"finalRuim"
}
]
},

passo6:{
texto:"A floresta reconhece sua sinceridade e permite sua passagem.",

escolhas:[
{
texto:"Abraçar Amora",
proximo:"passo8"
}
]
},

passo7:{
texto:"A Grande Fonte do Afeto volta a brilhar. Todo o reino comemora sua ajuda.",

escolhas:[
{
texto:"Voltar para casa",
proximo:"passo9"
},
{
texto:"Ficar mais um pouco na festa",
proximo:"passo10"
}
]
},

passo8:{
texto:"Seu gesto fortalece a amizade com Amora e restaura a harmonia do reino.",

escolhas:[
{
texto:"Ir para o portal",
proximo:"passo9"
},
{
texto:"Participar da festa",
proximo:"passo10"
}
]
},

passo9:{
texto:"FINAL BOM 🌸 Você retorna para casa exatamente no instante em que saiu.",

escolhas:[]
},

passo10:{
texto:"Você aproveita a festa, mas percebe que o portal está desaparecendo.",

escolhas:[
{
texto:"Correr para o portal",
proximo:"finalSecreto"
}
]
},

finalSecreto:{
texto:"FINAL SECRETO ⭐ Você volta para casa por pouco e nunca esquece o Mundo de Amora.",

escolhas:[]
},

finalRuim:{
texto:"FINAL RUIM ⚠️ A magia desaparece e você não consegue concluir sua missão.",

escolhas:[]
}

};

function mostrarCena(cena){

document.getElementById("texto").innerText =
historia[cena].texto;

const opcoes =
document.getElementById("opcoes");

opcoes.innerHTML = "";

historia[cena].escolhas.forEach(escolha=>{

const botao =
document.createElement("button");

botao.innerText =
escolha.texto;

botao.onclick = ()=>{
mostrarCena(escolha.proximo);
};

opcoes.appendChild(botao);

});

if(historia[cena].escolhas.length === 0){

const reiniciar =
document.createElement("button");

reiniciar.innerText =
"Jogar novamente";

reiniciar.onclick = ()=>{
mostrarCena("inicio");
};

opcoes.appendChild(reiniciar);

}
}

mostrarCena("inicio");
