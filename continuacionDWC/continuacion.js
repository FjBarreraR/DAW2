function ejercicio32(){
    let gasolina = document.getElementById('gasolina').value;
    let hotel = document.getElementById('hotel').value;
    let restaurante = document.getElementById('restaurante').value;

    let total = parseFloat(gasolina) + parseFloat(hotel) + parseFloat(restaurante);
    let gasolinaSol =( total * 100) / parseFloat(gasolina);
    let hotelSol =( total * 100) / parseFloat(hotel);
    let restauranteSol =( total * 100) / parseFloat(restaurante);

}