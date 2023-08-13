const decoraciones=[
    {Id: "A", 
    Nombre: "Candy Bar Simple", 
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
    Nombre: "Decoracion Media", 
    Precio: 15500, 
    Incluye: "Fondo principal con led + 6 telas en techo + Banderines de nombre y FC + Globo numero + 70 globos"},
    {Id: "E", 
    Nombre: "Decoracion Completa" , 
    Precio: 20500, 
    Incluye: "Fondo principal con led + 8 telas en techo + Banderines de nombre y FC + Globo numero + 100 globos"}
]







//ACLARACION
//La idea era utilizar un archivo json donde este cargado el arreglo y traerlo a un arreglo vacio en el archivo js, pero no lo supe hacer. 
//entonces solo converti el arreglo a JSON y aplique el setItem para guardarlo como clave valor en el local storage.
//Para el trabajo final lo resolveré


const enJSON = JSON.stringify(decoraciones)
localStorage.setItem("decoraciones", enJSON)

const decoJSON = JSON.parse(localStorage.getItem("decoraciones"))


let ElegirOpciones = document.getElementById("opciones")
ElegirOpciones.addEventListener("submit", elegirOpcion)

function elegirOpcion(e){
    e.preventDefault();
    let elegir = document.getElementById("elegir").value;
        {
            switch (elegir) {
                case "Presupuesto":
                    presupuesto(e)
                    break;
                case "Incluye":
                    incluir(e)
                    break;
                case "Descuentos":
                    descuento(e)
                    break;
                default:
                    console.log("nada")
                    //alert("Ingreso datos incorrectos")
        }
        document.getElementById("elegir").value = ""
    }
}

function presupuesto(e){
    e.preventDefault();
    let presupues = document.getElementById("presupues")
    presupues.innerHTML += `
        <p>Para obtener el presupuesto,</p>
        <p>Escriba la opcion que desee: A - B - C - D - E</p>
        <form id="opcionesPresupuesto">
             <input type="text" id="presup" value="">
             <input type="submit" id="btnEnviar2" value="Enviar">
         </form>
        `;
    let refPresupuesto = document.getElementById("opcionesPresupuesto")
    refPresupuesto.addEventListener("submit", buscarPrecio)
}

function buscarPrecio(e){   
    e.preventDefault();
    let precio = document.getElementById("presup").value;
    const buscar = decoJSON.find(elemento => elemento.Id === precio)
    document.getElementById("presup").value = ""
    let resultadoPresupuesto = document.getElementById("precio")
    resultadoPresupuesto.innerHTML = `<p>El precio de ${buscar.Nombre} es $ ${buscar.Precio}</p>`
    
}

function incluir(e){
    e.preventDefault();
    let incluye = document.getElementById("incluye")
    incluye.innerHTML += `
        <p>Para conocer lo que incluye cada decoracion,</p>
        <p>Escriba la opcion que desee: A - B - C - D - E</p>
        <form id="opcionesIncluye">
             <input type="text" id="inclu" value="">
             <input type="submit" id="btnEnviar3" value="Enviar">
        </form>
        `;
    let refIncluir = document.getElementById("opcionesIncluye")
    refIncluir.addEventListener("submit", buscarIncluye)
    } 

    function buscarIncluye(e){
        e.preventDefault();
        let incluye = document.getElementById("inclu").value;
        const buscar = decoJSON.find(elemento => elemento.Id === incluye)
        document.getElementById("inclu").value = ""
        let resultadoIncluye = document.getElementById("incluye")
        resultadoIncluye.innerHTML += `<p>La opcion ${buscar.Nombre} Incluye: ${buscar.Incluye}</p>`
    }

    function descuento(e){
        e.preventDefault();
        let formaPago = document.getElementById("pago")
        formaPago.innerHTML += `
            <p>Escriba la opcion de decoracion a calcular sus descuentos: A - B - C - D - E</p>
            <form id="opcionesPago">
                 <input type="text" id="formasPago" value="">
                 <p>"Escriba la forma de pago: Efectivo - Tarjeta de credito - Debito"</p>
                 <input type="text" id="descuentosPago" value="">
                 <input type="submit" id="btnEnviar4" value="Enviar">
             </form>
            `;
        let refPago = document.getElementById("opcionesPago")
        refPago.addEventListener("submit", buscarPago)
        } 

        function buscarPago(e){
            e.preventDefault();
            //valor A B C D E
            let formasDePago = document.getElementById("formasPago").value;
            //valor EFECTIVO TARJETACREDITO DEBITO
            let descuentoPago = document.getElementById("descuentosPago").value
            switch(formasDePago){
                case "A":
                    if (descuentoPago == "Efectivo") {
                        precioFinal = decoJSON[0].Precio * 0.95
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>En efectivo se realiza un 5% de descuento y abonará :$ ${Math.round(precioFinal)}</p>`
                    } else if(descuentoPago == "Tarjeta de credito"){
                        precioFinal = decoJSON[0].Precio * 1.1
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>Con tarjeta de credito tiene un 10% de recargo y abonará: $ ${Math.round(precioFinal)}</p>
                        <p>o hasta en 3 cuotas de: $ ${Math.round(precioFinal/3)}</p>`
                    } else if(descuentoPago=="Debito"){
                        precioFinal = decoJSON[0].Precio
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `No tiene descuento ni recargo y abonará: $ ${precioFinal}`
                    } else{
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `<p>Forma de pago incorrecta, vuelva a escribir las opciones</p>`
                    }
                    break;
                case "B":
                    if (descuentoPago == "Efectivo") {
                        precioFinal = decoJSON[1].Precio * 0.95
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>En efectivo se realiza un 5% de descuento y abonará :$ ${Math.round(precioFinal)}</p>`
                    } else if(descuentoPago == "Tarjeta de credito"){
                        precioFinal = decoJSON[1].Precio * 1.1
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>Con tarjeta de credito tiene un 10% de recargo y abonará: $ ${Math.round(precioFinal)}</p>
                        <p>o hasta en 3 cuotas de: $ ${Math.round(precioFinal/3)}</p>`
                    } else if(descuentoPago=="Debito"){
                        precioFinal = decoJSON[1].Precio
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `No tiene descuento ni recargo y abonará: $ ${precioFinal}`
                    } else{
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `<p>Forma de pago incorrecta, vuelva a escribir las opciones</p>`
                    }
                    break;
                case "C":
                    if (descuentoPago == "Efectivo") {
                        precioFinal = decoJSON[2].Precio * 0.95
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>En efectivo se realiza un 5% de descuento y abonará :$ ${Math.round(precioFinal)}</p>`
                    } else if(descuentoPago == "Tarjeta de credito"){
                        precioFinal = decoJSON[2].Precio * 1.1
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>Con tarjeta de credito tiene un 10% de recargo y abonará: $ ${Math.round(precioFinal)}</p>
                        <p>o hasta en 3 cuotas de: $ ${Math.round(precioFinal/3)}</p>`
                    } else if(descuentoPago=="Debito"){
                        precioFinal = decoJSON[2].Precio
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `No tiene descuento ni recargo y abonará: $ ${precioFinal}`
                    } else{
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `<p>Forma de pago incorrecta, vuelva a escribir las opciones</p>`
                    }
                    break;
                case "D":
                    if (descuentoPago == "Efectivo") {
                        precioFinal = decoJSON[3].Precio * 0.95
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>En efectivo se realiza un 5% de descuento y abonará :$ ${Math.round(precioFinal)}</p>`
                    } else if(descuentoPago == "Tarjeta de credito"){
                        precioFinal = decoJSON[3].Precio * 1.1
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>Con tarjeta de credito tiene un 10% de recargo y abonará: $ ${Math.round(precioFinal)}</p>
                        <p>o hasta en 3 cuotas de: $ ${Math.round(precioFinal/3)}</p>`
                    } else if(descuentoPago=="Debito"){
                        precioFinal = decoJSON[3].Precio
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `No tiene descuento ni recargo y abonará: $ ${precioFinal}`
                    } else{
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `<p>Forma de pago incorrecta, vuelva a escribir las opciones</p>`
                    }
                    break;
                case "E":
                    if (descuentoPago == "Efectivo") {
                        precioFinal = decoJSON[4].Precio * 0.95
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>En efectivo se realiza un 5% de descuento y abonará :$ ${Math.round(precioFinal)}</p>`
                    } else if(descuentoPago == "Tarjeta de credito"){
                        precioFinal = decoJSON[4].Precio * 1.1
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `
                        <p>Con tarjeta de credito tiene un 10% de recargo y abonará: $ ${Math.round(precioFinal)}</p>
                        <p>o hasta en 3 cuotas de: $ ${Math.round(precioFinal/3)}</p>`
                    } else if(descuentoPago=="Debito"){
                        precioFinal = decoJSON[4].Precio
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `No tiene descuento ni recargo y abonará: $ ${precioFinal}`
                    } else{
                        let resultadoPago = document.getElementById("pago")
                        resultadoPago.innerHTML += `<p>Forma de pago incorrecta, vuelva a escribir las opciones</p>`
                    }
                    break;
            }
            
        }
