function esDivisible(number, divisor) {
    return number % divisor == 0;
}

function tieneElDigito(number, digito) {
    return number.toString().indexOf(digito) >= 0;
}

function decirPalabra(number, digito, palabra){
    if(esDivisible(number, digito) || tieneElDigito(number,digito)){
        return palabra;
    } else {
        return ''
    }
}

function decirFizz(number) {
    return decirPalabra(number, 3, 'Fizz');
}

function decirBuzz(number) {
    return decirPalabra(number, 5, 'Buzz');
}

function decirFizzBuzz(number) {
    return decirFizz(number) + decirBuzz(number)
}


function FizzBuzz(array){
    return array.reduce(function (acc, n) {
        let palabra = decirFizzBuzz(n);
        return palabra ? acc.concat(palabra) : acc;
    }, []);
}


module.exports = FizzBuzz;