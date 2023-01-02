/*Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos)*/

const tablaMultiplicar = () => {

    let num = Number(prompt("Ingrese un numero para ver su tabla de multiplicar"))

    let string = "";

    for(let i = 1; i <= 10; i++){

        string += `${num}x${i}=${num * i}, `

    }
    console.log(`Table del: ${num}: ${string}`)
}

//tablaMultiplicar();

/*Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

const acumularNum = () => {

    let acumulado = [];

    let ingreso = 0;
    
    do{

        ingreso = Number(prompt("ingrese un numero para ir guardando, ingrese 0 para finalizar"))

        if(ingreso) acumulado.push(ingreso);

    }while(ingreso !== 0);

    console.log(`Total de números acomulados: ${acumlado.toString()}`);

}


//acumularNum()

/*Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/

const adivinarNumero = () => {

    let numero = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    let adivinando;

    let count = 0; 
  
    do{

        count++

        adivinando = Number(prompt("Adivine un numero del 1 al 100"))

        console.log("numero: ", numero)
        console.log("adivinando: ", adivinando)

        if(adivinando < numero) console.log("El numero es mayor")

        if(adivinando > numero) console.log("El numero es menor")

    }while(adivinando !== numero)


    console.log(`Felicitaciones has adivinado el número en ${count} intentos`)
}

//adivinarNumero(); 

/*Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/

const esPrimo = () => {

    let num = Number(prompt("Ingrese un numero para saber si es primo"))

    for(let i = 2; i <= num/2; i++){

        if(num % i === 0) console.log(`${num} no es un número primo`)

        else console.log(`${num} es un número primo`)

    }

}

//esPrimo();

/*Realizar un programa que permita dado un numero, mostrar todos sus divisores.*/

const mostrarDivisores = () => {

    let divisores = [];

    let num = Number(prompt("Ingrese un número para ver sus divisores"))

    for(let i = 1; i <= num/2; i++){

        if(num % i === 0) divisores.push(i);

    }
    console.log(`Los divisores de ${num} son: ${divisores.toString()}`)

}

//mostrarDivisores();

/*Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/

const mostrarElementos = (array) => {

    array.forEach(element => {
        console.log(element)
    });

}

//mostrarElementos([1,2,3,4,5,6])

/*Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/

const mostrarDoble = (array) => {

    array.forEach(element => {
        console.log(element * 2)
    });

}

//mostrarElementos([1,2,3,4,5,6])

/*Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array*/

const presentacionFamiliar = (array) => {

    for(let i = 1; i <= array.length; i++){

        let presentation = `Persona ${i}: `

        let arrayData = []

        for(let [key, value] of Object.entries(array[i-1])){

            arrayData.push(`${key} : ${value}`);
           
        }

        presentation += arrayData.join(", ")

        console.log(presentation)

    }


}

/*presentacionFamiliar([  {nombre: "Sara", apellido: "Lopez", edad: 32, pais: "Argentina"},
                        {nombre: "Federico", apellido: "Almodas", edad: 32, pais: "Uruguay"},
                        {nombre: "Imad", apellido: "Alehin", edad: 32, pais: "Pakistan"},
                        {nombre: "Carlos", apellido: "Siud", edad: 32, pais: "Turquìa"},
                        {nombre: "Marcelo", apellido: "Gutierrez", edad: 32, pais: "España"}])*/

/*Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/

const impares = (array) => {

    let impares = [];

    for(let num of array){

        if(num % 2 !== 0) impares.push(num);

    }

    console.log(impares);

}

//impares([1,2,3,4,5,6,7,8])

/* Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0 */

const sumarNumerosParesEImpares = () => {

    let pares = 0;

    let impares = 0;

    let num; 

    do{

        num = Number(prompt("Introdusca un número para sumar, con 0 termina el programa"))

        if(num % 2 !== 0) impares += num
        
        else pares += num;

    }while(num!==0)

    console.log(`Pares sumados total: ${pares}`)
    console.log(`Impares sumados total: ${impares}`)

}

//sumarNumerosParesEImpares();

/* Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande. */

const numMaximo = (array) => {

    for(let num of array){

        let max = true;

        for(let i = 0; i < array.length; i++){

            if (num < array[i]) max = false;

        }   
        
        if(max) return console.log(num)

    }

}

//numMaximo([1,3000,3,4,5,293])

/* Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico. */

const numMinimo = (array) => {

    for(let num of array){

        let max = true;

        for(let i = 0; i < array.length; i++){

            if (num > array[i]) max = false;

        }   
        
        if(max) return console.log(num)

    }
 
}

//numMinimo([23,45,7,53,123])

/* Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora */

const piedraPapelTijera = () => {

    let jugador1 = prompt("Ingrese el nombre del primer jugador");

    let jugador2 = prompt("Ingrese el nombre del segundo jugador");

    let mano1;

    let mano2;

    let win;

    do{

        mano1 = prompt(`${jugador1} elija entre "piedra", "papel" o "tijera"`).toLowerCase()
        mano2 = prompt(`${jugador2} elija entre "piedra", "papel" o "tijera"`).toLowerCase()

        if(mano1 === "piedra" && mano2 === "tijera") win = jugador1;
        if(mano1 === "piedra" && mano2 === "papel") win = jugador2;
        if(mano1 === "papel" && mano2 === "piedra") win = jugador1;
        if(mano1 === "papel" && mano2 === "tijera") win = jugador2;
        if(mano1 === "tijera" && mano2 === "papel") win = jugador1;
        if(mano1 === "tijera" && mano2 === "piedra") win = jugador1;

        if(!win) alert(`¡Hay empate!`)

    }while(!win);

   alert(`El ganador es: ${win}`)

}

//piedraPapelTijera();

/* Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado. */

const trianguloDeLado = () => {


    for(let i = 1; i <= 5; i++){

        let string = "";

        for(let x = 1; x <= i; x++){

            string += "*";

        }

        console.log(string)

    }

}

//trianguloDeLado();

/* Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */

const trianguloDeLadoInvertido = () => {


    for(let i = 5; i > 0; i--){

        let string = "";

        for(let x = 1; x <= i; x++){

            string += "*";

        }

        console.log(string)

    }

}

//trianguloDeLadoInvertido()

/* Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */

const ordenarArray = (array) => {

    let ordenado = [];

    for(let num of array){

            let index = 0;

            for(let i = 0; i < array.length; i++){

                if (num > array[i]) index++; 

            }    

            ordenado[index] = num;

    }

    console.log(ordenado)

}


//ordenarArray([4,2,7,1,9,8,5,6,3]);


/*Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. 
La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. 
Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, 
alcohol (abv) y "amargor" (ibu)*/

const cervezasLimiteAlcohol = (array, medida) => {

    let cervezas = [];

    array.forEach(e => {

                if(e.abv < medida) return cervezas.push({nombre: e.name, abv: e.abv, ibu: e.ibu});

        });

    return cervezas;

}

//console.log(cervezasLimiteAlcohol(beers, 5))

/*Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */

const cervezasConMasAlcohol = (array) => {

   return array.sort((a,b) => b.abv-a.abv).slice(0,10);

}

//console.log(cervezasConMasAlcohol(beers))

/*Generar una función que reciba como parámetro un array de cervezas y 
devuelva un nuevo array con las 10 cervezas menos amargas */

const cervezasMenosAmargas = (array) => {

    return array.sort((a,b) => a.ibu-b.ibu).slice(0,10);
 
}

//console.log(cervezasMenosAmargas(beers))

/*Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad 
y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por 
la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true 
o descendente si es false*/

const ordenarCervezas = (array, propiedad, esAscendente) => {

    if(esAscendente) return array.sort((a,b) => a[propiedad] - b[propiedad]).slice(10)

    else return array.sort((a,b) => b[propiedad] - a[propiedad]).slice(10)

}

//console.log(ordenarCervezas(beers, "ibu", true));

/*Generar una función que reciba como parámetro un array de cervezas y un id. 
La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un archivo html 
una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. 
Cada fila debe tener los datos que se piden de cada una de las cervezas. */

const renderizeBeers = (array, id) => {

    const container = document.getElementById(id);

    const table = document.createElement("table")

    table.style = "border:2px solid black; border-collapse:collapse;"

    table.innerHTML = "<thead><tr><th>Name</th><th>ABV</th><th>IBU</th></tr><tr></tr></thead><tbody id='tbody'></tbody>"

    container.appendChild(table);

    let tbody = document.getElementById("tbody");

    array.forEach(e => {

        tbody.innerHTML += `<td>${e.name}</td><td>${e.abv}</td><td>${e.ibu}</td>`
        
    }) 

    for(let element of document.getElementsByTagName("td")){

        element.style = "border:2px solid black; padding:5px; text-align: center"

    }

    for(let element of document.getElementsByTagName("th")){

        element.style = "background-color: black; color: white"

    }
 


}


//renderizeBeers(beers, "beers")