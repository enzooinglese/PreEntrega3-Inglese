const CandyBarSimple = {
    precio : 6250,
    incluye : "Mobiliario"
}
const CandyBarconDecoracion = {
    precio : 11900,
    incluye: "Mobiliario + 50 globos + imagen de la tematica + nombre del agasajado"
}
const DecoracionBasica = {
    precio : 10000,
    incluye : "Fondo principal + 4 telas en techo + Banderines de nombre y FC + Globo numero + 40 globos"
}
const DecoracionMedia = {
    precio : 15500,
    incluye : "Fondo principal con led + 6 telas en techo + Banderines de nombre y FC + Globo numero + 70 globos"
}
const DecoracionCompleta = {
    precio : 20500,
    incluye : "Fondo principal con led + 8 telas en techo + Banderines de nombre y FC + Globo numero + 100 globos"
}

function presupuestar(){
    let presupuesto = prompt("elija opcion segun el presupuesto que quiera: A - B - C - D - E - X (Para Terminar)")
        while(presupuesto != "X" ){
            switch (presupuesto) {
                case "A":
                    alert("el precio requerido es $" + CandyBarSimple["precio"])
                    break;
                case "B":
                    alert("el precio requerido es $" + CandyBarconDecoracion["precio"])
                    break;
                case "C":
                    alert("el precio requerido es $" + DecoracionBasica["precio"])
                    break;
                case "D":
                    alert("el precio requerido es $" + DecoracionMedia["precio"])
                    break;
                case "E":
                    alert("el precio requerido es $" + DecoracionCompleta["precio"])
                    break;
                default:
                    alert("opcion incorrecta")
            }
        presupuesto = prompt("elija opcion segun el presupuesto que quiera: A - B - C - D - E - X (Para Terminar)")
        }
}

function incluye(){
    let elementos = prompt("elija la opcion para conocer lo que incluya cada una: A - B - C - D - E - X(para terminar)")
        while(elementos != "X"){
            switch(elementos){
                case "A":
                    alert("Incluye: " + CandyBarSimple["incluye"])
                    break;
                case "B":
                    alert("Incluye: " + CandyBarconDecoracion["incluye"])
                    break;
                case "C":
                    alert("Incluye: " + DecoracionBasica["incluye"])
                    break;
                    case "D":
                        alert("Incluye: " + DecoracionMedia["incluye"])
                        break;
                    case "E":
                    alert("Incluye: " + DecoracionCompleta["incluye"])
                    break;
                default:
                    alert("opcion incorrecta")
            }
        elementos = prompt("Esciba la opcion para conocer lo que incluya cada una: A - B - C - D - E - X(para terminar)")
    }
}

function descuento(precio = prompt("Escriba la opcion correspondiente para seleccionar el precio: A - B - C - D - E"),formaDePago = prompt("escriba la forma de pago: Efectivo - Tarjeta de credito - Debito")){
        switch (precio) {
            case "A":
                if (formaDePago == "Efectivo") {
                    precioFinal = CandyBarSimple["precio"] * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = CandyBarSimple["precio"] * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = CandyBarSimple["precio"]
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                }
                break;
            case "B":
                if (formaDePago == "Efectivo") {
                    precioFinal = CandyBarconDecoracion["precio"] * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = CandyBarconDecoracion["precio"] * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = CandyBarconDecoracion["precio"]
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "C":
                if (formaDePago == "Efectivo") {
                    precioFinal = DecoracionBasica["precio"] * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = DecoracionBasica["precio"] * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = DecoracionBasica["precio"]
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "D":
                if (formaDePago == "Efectivo") {
                    precioFinal = DecoracionMedia["precio"] * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = DecoracionMedia["precio"] * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = DecoracionMedia["precio"]
                    alert("No tiene descuento ni recargo y abonará: $" + precioFinal)
                } else{
                    alert("Forma de pago incorrecta, vuelva a intentar")
                    }
                break;
            case "E":
                if (formaDePago == "Efectivo") {
                    precioFinal = DecoracionCompleta["precio"] * 0.95
                    alert("En efectivo se realiza un 5% de descuento y abonará: $" + Math.round(precioFinal))
                } else if(formaDePago == "Tarjeta de credito"){
                    precioFinal = DecoracionCompleta["precio"] * 1.1
                    alert("Con tarjeta de credito tiene un 10% de recargo y se abonará: " + Math.round(precioFinal) + " o 3 cuotas de: $" + Math.round(precioFinal/3))
                } else if(formaDePago=="Debito"){
                    precioFinal = DecoracionCompleta["precio"]
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
