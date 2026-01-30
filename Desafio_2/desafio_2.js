var vitorias = 20, derrotas = 5;
var ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
var vitoriasRank = [10, 20, 50, 80, 90, 100];

function rankear(valor) {
    for (let i = 7; i > 0; i--) {
        if (valor > vitoriasRank[i-1]) {
            return ranks[i];
        } 
    }
    return ranks[0];
}

function totalDeVitorias(vitorias, derrotas) {
    return vitorias-derrotas;
}

var total = totalDeVitorias(vitorias, derrotas);
console.log("O Herói tem de saldo de "+total+" está no nível de "+rankear(total));