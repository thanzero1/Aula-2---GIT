let horas = 8;
let velocidadeMedia = 85;
let consumoMedio = 12 ;
let precoGasolina = 6.17
let precoEtanol = 4.17


let distancia = (horas * velocidadeMedia)
console.log(`A distância total da viagem é de ${distancia}km`)


let consumoTotal = distancia / consumoMedio;
console.log(`o consumo total de litros será ${(consumoTotal).toLocaleString('pt-BR')}L`)

console.log(`O custo para abastecer com Etanol será de ${(consumoTotal * precoEtanol).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
console.log(`O custo para abastecer com Gasolina será de ${ (consumoTotal * precoGasolina).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)


