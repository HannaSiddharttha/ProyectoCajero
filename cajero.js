

var denominaciones = {
    quinientos: 500,
    doscientos: 200,
    cien: 100,
    cincuenta: 50,
    veinte: 20,
    diez: 10,
    cinco: 5,
    dos: 2,
    uno: 1
};

var caja = {
    quinientos: 22,
    doscientos: 30,
    cien: 25,
    cincuenta: 10,
    veinte: 6,
    diez: 40,
    cinco: 30,
    dos: 50,
    uno: 25
};

function imprimirEstadoCaja() {
    console.log("\nEstado actual de la caja: \n");
    console.log("1 peso:  " + caja.uno   + "     2 pesos:  "  + caja.dos);
    console.log("5 pesos: " + caja.cinco + "     10 pesos: " + caja.diez);
    console.log("20 pesos:  " + caja.veinte + "  50 pesos:  "  + caja.cincuenta);
    console.log("100 pesos: " + caja.cien + "    200 pesos: " + caja.doscientos);
    console.log("500 pesos: " + caja.quinientos);
}

function imprimirRetirado(retirado) {
    console.log("Retirado: \n");
    for(var key in retirado) {
        if(retirado[key] > 0) {
            console.log(key + ": "+ retirado[key] + "\n");
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Cuanto dinero desea retirar?`, (monto) => {
    //console.log("\nSe retiraron 1450 pesos \n");
    var totalEnCaja = 3000;
    imprimirEstadoCaja();

    if(monto > totalEnCaja) {
        console.log("\n Fondos insuficientes \n");
        readline.close()
    }

    var retirado = reajustarCaja(monto);
    imprimirRetirado(retirado)


    imprimirEstadoCaja();
    readline.close()
})
const fs = require('fs');

function reajustarCaja(monto) {
    var retirado = {
        quinientos: 0,
        doscientos: 0,
        cien: 0,
        cincuenta: 0,
        veinte: 0,
        diez: 0,
        cinco: 0,
        dos: 0,
        uno: 0
    };
    var montoActual = monto;
    for(var key in denominaciones) {

        var acumular = true;
        while(acumular) {
            //Si el monto a retirar es mayor a la denominacion del billete y hay billetes disponibles...
            if(montoActual >= denominaciones[key] && caja[key] > 0) {
                caja[key] = caja[key] - 1;
                retirado[key] += 1;
                montoActual = montoActual - denominaciones[key];
            } else {
                acumular = false;
            }
        }
    }
    return retirado;
}

function loadFileData(fileName) {
    return JSON.parse(fs.readFileSync(fileName).toString());

}
 
function saveFileData(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data));
}

//const usuario = loadFileData('usuario.dat');
//console.log(usuario);

//let usuario = usuarios.find(p => p.id == 3);
//console.log(usuario);
//usuario.description = "Hanna";
//saveFileData('otros-usuarios.dat', usuarios);
//fs.writeFileSync('otros-productos.dat', JSON.stringify(products));
