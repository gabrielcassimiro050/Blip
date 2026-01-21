var nivel = 6000
var nome = "Dunkleosteus"
var ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
var rankNiveis = [1000, 2000, 5000, 7000, 8000, 9000, 10000]
var rank 

function rankear(valor) {
    for (let i = 8; i > 0; i--) {
        if (valor > rankNiveis[i-1]) {
            return ranks[i]
        } 
    }
}

rank = rankear(nivel)
console.log("O Herói de nome "+nome+" está no nível de "+rank)