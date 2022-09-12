function sumar(a,b){
    return a + b
}

function restar(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b
}

function dividir(a,b){
    let resultado
    if(b!=0){
        resultado = a / b}
    else{
        resultado = "error"
    }
}

function exponenciar(b,e){
    let resultado = 1
    for(let i=0; i<e; i++){
        resultado = resultado * b
    }
    return resultado
}

function factorial(n){
    if(n == 0){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}

function seno(a){
    return Math.sin(a)
}

function coseno(a){
    return Math.cos(a)
}

function tangente(a){
    return Math.tan(a)
}

function logaritmo(b,x){
    return Math.log10(x)/Math.log10(b)
}
