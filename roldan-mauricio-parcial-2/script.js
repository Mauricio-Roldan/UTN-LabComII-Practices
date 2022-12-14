var cantidad = document.getElementById("cantidad");
var capacidad = document.getElementById("capacidad");
var color = document.getElementById("color");
var resultado = document.getElementById("result");


function calculatePrice() {
    if (capacidad.value == 128) {
        var precio = 485000.00;
    }
    else if (capacidad.value == 256) {
        var precio = 617000.00;
    }
    else if (capacidad.value == 512) {
        var precio = 1006800.00;
    }
    var cotizacion = precio * cantidad.value;
    resultado.innerHTML = "Cotizacion: $"+cotizacion;
    resultado.style.backgroundColor = "#25c05b"
}

function validarDatos() {
    resultado.style.display="block"
    if (color.value == 0 || capacidad.value == 0) {
        resultado.innerHTML = "Error: Complete todos los campos";
        resultado.style.backgroundColor = "crimson"
    } else if (cantidad.value <= 0) {
        resultado.innerHTML = "Error: La cantidad no puede ser menor a 1";
        resultado.style.backgroundColor = "crimson"
    } else if (cantidad.value > 10) {
        resultado.innerHTML = "Error: La cantidad no puede ser mayor a 10";
        resultado.style.backgroundColor = "crimson"
    } else {
        calculatePrice();
    }
}

function changeProductImage() {
    descriptionChange();
    var imagen = document.getElementById("imagen");
    switch (color.value) {
        case 'graphite':
            imagen.innerHTML = '<img src="./img/iphone_13_graphite.png"/>';
            break;

        case 'silver':
            imagen.innerHTML = '<img src="./img/iphone_13_silver.png" alt="iphone" />';
            break;

        case 'sierra':
            imagen.innerHTML = '<img src="./img/iphone_13_sierra.png" alt="iphone" />';
            break;

        case 'gold':
            imagen.innerHTML = '<img src="./img/iphone_13_gold.png" alt="iphone" />';
            break;
    }
}

function descriptionChange() {
    if (color.value != 0 && capacidad.value != 0) {
        document.getElementById("strDescrip-Prod").innerHTML = `<p><b>Caracteristicas</b></p>
    <ul>
        <li>Marca: Apple</li>
        <li>Modelo: iPhone 13 Pro</li>
        <li>Color: ${color.value}</li>
        <li>Memoria interna: ${capacidad.value} GB</li>
        <li>Memoria RAM: 4 GB</li>
        <li>Dual SIM: No</li>
        <li>Compa????a telef??nica: Liberado</li>
        <li>Sistema operativo: iOS 15</li>
        <li>Tama??o de la pantalla: 6.1"</li>
        <li>Resoluci??n de la c??mara: 12 MP</li>
        <li>Red: 5G</li>
        <li>Con pantalla t??ctil: Si</li>
        <li>C??mara digital: Si</li>
        <li>Capacidad de tarjeta de memoria: 128 GB</li>
        <li>USB: USB-C</li>
        <li>Teclado QWERTY: No</li>
        <li>Wi-Fi: Si</li>
        <li>Con GPS: Si</li>
        <li>Radio: Si</li>
        <li>Reproductor de m??sica: Si</li>
        <li>Grabador de voz: Si</li>
        <li>Sintonizador de TV: No</li>
        <li>Tama??o de SIM: Nano-SIM</li>
        <li>Resoluci??n de la pantalla: 2532 x 1170 pixeles a 460 ppi</li>
        <li>Tipo de bater??a: De litio recargable integrada</li>
        <li>Bater??a removible: No</li>
        <li>Sensor de movimiento: Si</li>
        <li>Brillo: M??ximo de 1000 nits (normal); brillo m??ximo de 1,200 nits (HDR)</li>
        <li>Flash en c??mara frontal: Si</li>
        <li>C??mara lenta: Si</li>
        <li>Con Bluetooth: Si</li>
        <li>Mini HDMI: No</li>
        <li>Zoom ??ptico: Si</li>
        <li>Zoom digital: Si</li>
        <li>Tipo de pantalla: OLED</li>
        <li>Modelo del Procesador: Chip A15 Bionic</li>
        <li>Es a prueba de agua: Clasificaci??n IP68 (hasta 30 minutos a una profundidad m??xima de 6 metros) seg??n la norma IEC 60529</li>
        <li>Lector de huella digital: No</li>
        <li>Sensor de proximidad: Si</li>
        <li>Origen: China</li>
    </ul>`;
    }
}