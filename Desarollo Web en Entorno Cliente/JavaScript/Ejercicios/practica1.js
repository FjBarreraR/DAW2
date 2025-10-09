function ejercicio1(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) + parseFloat(num2);

    document.getElementById("suma").textContent = "La suma es: " + resultado;
}

function ejercicio2(){
    let num1 = document.getElementById('num3').value;
    let num2 = document.getElementById('num4').value;
    let resultado = parseFloat(num1) * parseFloat(num2);

    document.getElementById("producto").textContent = "El producto es: " + resultado;
}

function ejercicio3(){
    let num1 = document.getElementById('num5').value;
    let fahrenheit = (parseFloat(num1) * 9/5) + 32;
    let kelvin = parseFloat(num1) + 273.15;

    document.getElementById("centigrados").textContent = "Centigrados: " + num1;
    document.getElementById("fahrenheit").textContent = "Fahrenheit: " + fahrenheit;
    document.getElementById("kelvin").textContent = "Kelvin: " + kelvin;
}

function ejercicio4(){
    let num1 = document.getElementById('num6').value;
    area = parseFloat(num1) * parseFloat(num1);

    document.getElementById("area").textContent = "El area del cuadrado es: " + area;
}

function ejercicio5(){
    let radio = document.getElementById('radio').value;
    area2 = parseFloat(radio)**2 * Math.PI;

    document.getElementById('area2').textContent = "El area del circulo es: " + area2;
}

function ejercicio6(){
    let precioProducto = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;
    let calcularDesc = (parseFloat(descuento) * parseFloat(precioProducto)) / 100;
    let precioFinal = parseFloat(precioProducto) - calcularDesc;

    document.getElementById('cantInicial').textContent = "El precio inicial es de: " + precioProducto + "$";
    document.getElementById('cantAhorrada').textContent = "La cantidad de dinero que te ahorras es de: " + calcularDesc + "$";
    document.getElementById('cantAPagar').textContent = "El total a pagar es de: " + precioFinal + "$";

}