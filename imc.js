let nome = "nathan", altura = 1.80, peso = 81, imc = peso / (altura **2);




if(imc < 18.5 ) {
    console.log(`O ${nome} está abaixo do peso normal`)
} else if (imc >= 18.5 && imc < 24.9 ) {
    console.log(`O ${nome} está no peso normal`)
} else if (imc >= 25.0 && imc < 29.9) {
    console.log(`O ${nome} está com excesso de peso`)
} else if (imc >= 30.0 && imc < 34.9) {
    console.log(`O ${nome} está com obesidade classe 1`)
} else if (imc >= 35.0 && imc < 39.9){
    console.log(`O ${nome} está com obesidade classe 2`)
} else {
    console.log(`O ${nome} está com obesidade classe 3`)
}1000/12