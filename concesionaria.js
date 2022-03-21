const autos = require('./autos'); //**llamo al archivo que contiene el array con la informacion sobre los autos**//                                  /\ require('./filepath') /\


const concesionaria =            //**creo un objeto literal que el atributo autos sea toda la informacion que esta en el archivo que trajimos con require**//
{  
    autos : autos,
    buscarAuto : function buscarAuto(patente)
        { //**agrego una funcion dentro de uno de los atributos del objeto literal**//
        let patenteFinder = autos.find( auto => auto.patente === patente) //**array.find para que encuentre la patente sino devuelve undefined**//  /\ array.find( x => ... /\
            if(patenteFinder === undefined) 
            {
            return null;
            }
            else
            {
            return patenteFinder;
            }
        },
        venderAuto: function venderAuto(patente) 
        {
            let i = autos.indexOf(this.buscarAuto(patente))
            autos[i].vendido = true;
            return autos;
        },
        autosParaLaVenta: function autosParaLaVenta()
        {
        let filtro = autos.filter(autoV => autoV.vendido === false);
        return filtro;
        },
        autosNuevos: function autos0KM()
        {
        let kms = this.autosParaLaVenta().filter(autoK => autoK.km <= 100);
        return kms;
        },
        listaDeVentas: function listaDeVentas() 
        {
            let listadoP = [];  /*incie un array vacio donde guardamos el listado de porecios de autos vendidos, si es que hay alguno */
            let listadoVendidos = autos.filter(autoP => autoP.vendido === true);
            if (listadoVendidos.length > 0){

            listadoVendidos.forEach( precio => { listadoP.push(precio)}) 
            return listadoP;
            }else {
                return [];
            }
            
        },
        totalDeVentas: function totalDeVentas()
        {
        let listado = this.listaDeVentas(); 
        console.log(listado);
        if (listado.length > 0) {
            let suma = listado.reduce((cont , listado) => cont += listado.precio, 0 );


            return "El total de las ventas es" + suma;
          } else {
            return 0;
          }

        },
        puedeComprar: function puedeComprar(patente, persona) {
            let car = this.buscarAuto(patente);
           if (persona.capacidadDePagoTotal >= car.precio && persona.capacidadDePagoEnCuotas >= car.precio / car.cuotas)
            {
            return true;
            }else{
            return false;
            } 
        },
        autosQuePuedeComprar: function autosQuePuedeComprar(persona){
            let listaVerde = [];
            let listaT = this.autosParaLaVenta();
            console.log(persona);
            
            let verificar = listaT.forEach( (verification) => {
                let verificar=false;
                console.log(listaT);
                
                if (persona.capacidadDePagoTotal >= listaT.precio && persona.capacidadDePagoEnCuotas >= listaT.precio / listaT.cuotas)
                {
                return true;
                }else{
                    return "Lo siento no puedes comprar nada";
                    } 

            })
           console.log(verificar);
               if (verificar === true) {
                  listaVerde.push(listaT);
               };
               
            return listaVerde;   
        }

}

         

         


console.log(concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 99920000,
    capacidadDePagoTotal: 999100000
    }));








    /*
    autosQuePuedeComprar: function autosQuePuedeComprar(persona) {
            let listaComprable = [];
            let listaVenta= this.autosParaLaVenta();
            let agregar = false;
            this.autos.map(function(patente){
               agregar = concesionaria.puedeComprar(patente,persona);

            if (agregar == true) {
            listaComprable.push(patente);
            }
            return listaComprable;
    }
*/