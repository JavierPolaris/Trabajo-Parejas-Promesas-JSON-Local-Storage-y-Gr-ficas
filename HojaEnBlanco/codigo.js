
let razas = [];
let cont = 0;
// Un boton con un escuchador.
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
//Tiramos de la API para obtener los datos
    fetch('https://dog.ceo/api/breeds/image/random')        
        .then(res => res.json())
        .then(json => crearImg(json));

//Creamos funcion para crear las imagenes
    function crearImg(url) {

        document.getElementById('perro').src = `${url.message}` //Creamos la foto Grande


        let urlCortada = (url.message.split("/"));
        razas.push(urlCortada[4]);                              //Obtenemos, unicamente, la raza del perro

        // en estas variables guardamos tanto raza como contador de raza
        let puseoCon = [];
        let puseo = [];
        
        
        let repetido = false;
        let key;
        // recorremos el Json 
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);                          //Asignamos el valor i del JSON a la variable key
            puseo.push(localStorage.key(i));                    //Puseamos las key`s


            //comprobacion si las razas estan repetidas,
            
            if (key == urlCortada[4]) {

                console.log('Repetido')
                let contador = parseInt(JSON.parse(localStorage.getItem(`${key}`)).cazado)      //Si se repite aumentamos el contador en 1
                contador++;


                localStorage.setItem(urlCortada[4], JSON.stringify({         //Creamos el valor y contador
                    cazado: contador
                }));

                cont--     //SI ESTA REPETIDO PARA QUE NO SALTE AL SIGUIENTE CUADRO Y DEJE UNO SIN PINTAR RETROCEDEMOS EL CONTADOR EN UNO
                repetido = true;
            }
            puseoCon.push(JSON.parse(localStorage.getItem(`${key}`)).cazado)            //puseamos el resultado de cazado

        }
        // Si no esta repetida la raza, creamos la key y su valor en contador = 1
        if (!repetido) {
            document.getElementById('perro' + cont).src = `${url.message}`

            localStorage.setItem(urlCortada[4], JSON.stringify({
                cazado: 1
            }));
        }

        console.log(puseo)

        // Creamos grafica si localStorage tiene una dimension de 20 key`s

        let i = localStorage.length;

        if (i >= 20) {
            mostrar(grafica) //llamada a la funcion para que aparezca la grafica
            var array = puseo; //asignamos nueva variable para las razas
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: array, //decimos que los valores de las barras sean las razas
                    datasets: [{
                        label: 'perretes cazados',
                        data: puseoCon, //decimos que los valores de la  grafica sean las veces que se repiten
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    
                    scales: {
                        y: {
                            beginAtZero: true           //Asignamos el valor de comienzo de la grafica en 0
                        }
                    }
                }
            });
        }
    }
    cont++
});

//Funcion para que cuando tengamos la caja de perros llena nos muestre la grafica
function mostrar(id) {
    let test = document.getElementById('grafica');
    if (test.style.display == 'block') {
        test.style.display = 'none';
    } else {
        test.style.display = 'block'
    }
}
//Borramos aplicacion de la consola y refrescamos la pagina
function borrar() {
    localStorage.clear();
    location.reload();
}
//Funcion para ocultar la grafica
function btnGr(id) {
    let test = document.getElementById('grafica');
    if (test.style.display == 'inline') {
        test.style.display = 'block';
    } else {
        test.style.display = 'none'
    }
}

