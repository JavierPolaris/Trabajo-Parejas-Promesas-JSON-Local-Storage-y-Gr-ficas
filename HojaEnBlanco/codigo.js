//TODO Necesitamos que cuando la raza se repita no pinte el src de la galeria.



let razas = [];
let cont = 0;

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => crearImg(json));


    function crearImg(url) {

        //document.getElementById('perro' + cont).src = `${url.message}`
        document.getElementById('perro').src = `${url.message}`


        let urlCortada = (url.message.split("/"));
        razas.push(urlCortada[4]);

        let puseoCon = [];

        let puseo = [];
        let repetido = false;
        let key;
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            puseo.push(localStorage.key(i));

            if (key == urlCortada[4]) {

                console.log('Repetido')
                let contador = parseInt(JSON.parse(localStorage.getItem(`${key}`)).cazado)
                contador++;


                localStorage.setItem(urlCortada[4], JSON.stringify({
                    cazado: contador
                }));

                cont--
                repetido = true;
            }
            puseoCon.push(JSON.parse(localStorage.getItem(`${key}`)).cazado)

        }

        if (!repetido) {
            document.getElementById('perro' + cont).src = `${url.message}`

            localStorage.setItem(urlCortada[4], JSON.stringify({
                cazado: 1
            }));
        }

        console.log(puseo)
        // console.log(puseoCon)

        let i = localStorage.length;
        // let j = key
        // var arr = Object.entries(j)
        // console.log(arr)
        // let puseoDeMierda = puseoCon.split('"cazado":');
        // console.log(puseoDeMierda)
        function mostrar(id) {
            let test = document.getElementById('grafica');
            if (test.style.display == 'block') {
               test.style.display='none';
            }else{
                test.style.display='block'
            }
        }


        if (i >= 20) {
            mostrar(grafica)
            var array = puseo;
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: array,
                    datasets: [{
                        label: 'perretes cazados',
                        data: puseoCon,
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
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    cont++
});

function borrar() {
    localStorage.clear();
    location.reload();
}

function btnGr(id) {
    let test = document.getElementById('grafica');
    if (test.style.display == 'inline') {
       test.style.display='block';
    }else{
        test.style.display='none'
    }
}

