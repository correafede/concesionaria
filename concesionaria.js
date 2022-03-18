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
        venderAuto: function venderAuto(patente) {
            let i = this.autos.indexOf(this.buscarAuto(patente))
            this.autos[i].vendido = true
            return(this.autos)
        }
}



    console.log(concesionaria.venderAuto('APL123'));