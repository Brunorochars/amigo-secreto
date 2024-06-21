let amigos = []; // Array

function adicionar(){

    let amigo = document.getElementById('nome-amigo');

if(amigo.value == ''){
    alert('Digite um nome');
    return;
}

if(amigos.includes(amigo.value.toUpperCase())){ // amigos.includes(amigo.value) verifica na arrays se ja existe o numero digitado.
    alert('Nome ja adicionado!');
    return;
}

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value.toUpperCase()); //amigos.push puxa os amigos para a array amigos.

    if(lista.textContent == ''){

        lista.textContent = amigo.value.toUpperCase(); //toUpperCase() converte todas a letras da string em maiusculas.

    }else{
       
        lista.textContent = lista.textContent + ', ' + amigo.value.toUpperCase();   
        
    }

    amigo.value = '';
}

function sortear(){

    if(amigos.length < 4){
        alert('Numero insuficiente de pessoas');
        return;
    }

embaralha(amigos);


let sorteio = document.getElementById('lista-sorteio');

for(i = 0; i < amigos.length; i++){

    if(i == amigos.length - 1){ // Array comeca pela posicao zero, entao o tamanho dele e o tamanho -1

        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0];

    }else{

        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';

    } 
    
}

}


function embaralha(lista){

    for(let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random()*indice);

        [lista[indice - 1],lista[indiceAleatorio]]=
        [lista[indiceAleatorio], lista[indice - 1]]

    }

}

function reiniciar(){

    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    
}
