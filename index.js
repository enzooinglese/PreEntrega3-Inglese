const decoraciones=[
    {Id: "A", Nombre: "Candy Bar Simple", 
    Precio: 6250, 
    Incluye: "Mobiliario"},
    {Id: "B", 
    Nombre: "Candy Bar Con Decoracion", 
    Precio: 11900, 
    Incluye: "Mobiliario + 50 globos + imagen de la tematica + nombre del agasajado"},
    {Id: "C", 
    Nombre: "Decoracion Basica", 
    Precio: 10000, 
    Incluye: "Fondo principal + 4 telas en techo + Banderines de nombre y FC + Globo numero + 40 globos"},
    {Id: "D", 
    Nombre: "DecoracionMedia", 
    Precio: 15500, 
    Incluye: "Fondo principal con led + 6 telas en techo + Banderines de nombre y FC + Globo numero + 70 globos"},
    {Id: "E", 
    Nombre: "Decoracion Completa" , 
    Precio: 20500, 
    Incluye: "Fondo principal con led + 8 telas en techo + Banderines de nombre y FC + Globo numero + 100 globos"}
]

function elejirOpcion(){
    let elejir = prompt("Elija la opcion que desee: Presupuesto - Incluye - Descuentos - X(para cerrar)")
        while(elejir != "X"){
            switch (elejir) {
                case "Presupuesto":
                    presupuesto()
                    break;
                case "Incluye":
                    incluir()
                    break;
                case "Descuentos":
                descuento()
                    break;
                default:
                    alert("Ingreso datos incorrectos")
        }
        elejir=prompt("Elija la opcion que desee: Presupuesto - Incluye - Descuentos - X(para cerrar)")
    }
}

function presupuesto(){
    let precio = prompt("elija opcion segun el presupuesto que quiera: A - B - C - D - E")
        const buscar = decoraciones.find(elemento => elemento.Id === precio)
        alert("el precio de " + buscar.Nombre + " es $" + buscar.Precio)
    } 
function incluir(){
    let incluye = prompt("elija opcion segun el presupuesto que quiera: A - B - C - D - E")
        const buscar = decoraciones.find(elemento => elemento.Id === incluye)
        alert(buscar. Nombre + " Incluye: " + buscar.Incluye)
    } 

function descuento(precio = prompt("Escriba la opcion correspondiente para seleccionar el precio: A - B - C - D - E"),formaDePago = prompt("escriba la forma de pago: Efectivo - Tarjeta de credito - Debito")){
        switch (precio) {
            case "A":
                if (formaDePago == "Efectivo") {
                    precioFinal = decoraciones[0].Precio * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = decoraciones[0].Precio * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = decoraciones[0].Precio
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                }
                break;
            case "B":
                if (formaDePago == "Efectivo") {
                    precioFinal = decoraciones[1].Precio * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = decoraciones[1].Precio * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = decoraciones[1].Precio
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "C":
                if (formaDePago == "Efectivo") {
                    precioFinal = decoraciones[2].Precio * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = decoraciones[2].Precio * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = decoraciones[2].Precio
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "D":
                if (formaDePago == "Efectivo") {
                    precioFinal = decoraciones[3].Precio * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = decoraciones[3].Precio * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = decoraciones[3].Precio
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "E":
                if (formaDePago == "Efectivo") {
                    precioFinal = decoraciones[4].Precio * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = decoraciones[4].Precio * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = decoraciones[4].Precio
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            default:
                alert("Opcion incorrecta")
                break;
        } 
}

elejirOpcion()