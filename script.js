const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for(let i=0; i<barbearia.cortes.length; i++){
        if(barbearia.cortes[i].id == id){
            return barbearia.cortes[i];
        }
    }
    return "Corte não encontrado"
}

function buscaBarbaPorId(id) {
    for(let i=0; i<barbearia.barbas.length; i++){
        if(barbearia.barbas[i].id == id){
            return barbearia.barbas[i];
        }
    }
    return "Barba não encontrada"
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
       return "Estamos abertos";
    }
    return "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let todosCortesId = [];
    let todasBarbasId = [];

    for(let i=0; i<barbearia.cortes.length; i++){
        if(barbearia.cortes[i].id == corteId){
            todosCortesId.push(buscaCortePorId(corteId));
        }
    }
    for(let i=0; i<barbearia.barbas.length; i++){
        if(barbearia.barbas[i].id == barbaId){
            todasBarbasId.push(buscaBarbaPorId(barbaId));
        }
    }
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: todosCortesId[0].tipo,
        pedidoCortePreco: todosCortesId[0].valor,
        pedidoBarba: todasBarbasId[0].tipo,
        pedidoBarbaPreco: todasBarbasId[0].valor,
    }
    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    for(let i=0; i<lista.length; i++){
        if(lista[i].id == id){
            lista[i].valor = valor;
            lista[i].tipo = tipo;
        }
    }
    return lista;
}

function calculaTotal(pedido) {
    return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
}
  
  
