function digit(numero){
    if (numero>=0 && numero<=9){
        return console.log("es de un digito")
    }else if (numero>=10 && numero<=99){
        return console.log("es de dos digitos")
    }else if (numero>=100 && numero<=999){
        return console.log("es de 3 digitos")
    }else if (numero>=1000 && numero<=9999){
        return console.log("es de 4 digitos")
    }else if (numero>=10000 && numero<=99999){
        return console.log("es de 5 digitos")
    }
}
digit(1000)