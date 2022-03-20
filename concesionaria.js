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
        }
}






console.log(concesionaria.puedeComprar("APL123",
    {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 100,
    capacidadDePagoTotal: 100000000
    }));