

var denominaciones = {
    uno: 25, 
    dos: 50, 
    cinco: 30,
    diez: 40,
    viente: 6,
    cincuenta: 10,
    cien: 25,
    docientos: 35,
    quinientos: 22,
    mil: 10,
};

function imprimirEstadoCaja() {
    console.log("\nEstado actual de la caja: \n");
    console.log("1 peso:  " + denominaciones.uno   + "     2 pesos:  "  + denominaciones.dos);
    console.log("5 pesos: " + denominaciones.cinco + "     10 pesos: " + denominaciones.diez);
    console.log("20 pesos:  " + denominaciones.veinte + "  50 pesos:  "  + denominaciones.cincuenta);
    console.log("100 pesos: " + denominaciones.cien + "    200 pesos: " + denominaciones.docientos);
    console.log("500 pesos: " + denominaciones.quinientos + "  1000 pesos: " + denominaciones.mil);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Cuanto dinero desea retirar?`, (monto) => {
    console.log("\nSe retiraron 1450 pesos \n");
    imprimirEstadoCaja();
    denominaciones.docientos = denominaciones.docientos - 2;
    denominaciones.cincuenta = denominaciones.cincuenta - 1;
    denominaciones.mil = denominaciones.mil - 1;
    imprimirEstadoCaja();
    readline.close()
})
const fs = require('fs');

function loadFileData(fileName) {
    return JSON.parse(fs.readFileSync(fileName).toString());

}
 
function saveFileData(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data));
}

const usuario = loadFileData('usuario.dat');
console.log(usuario);

let usuario = usuarios.find(p => p.id == 3);
console.log(usuario);
usuario.description = "Hanna";
saveFileData('otros-usuarios.dat', usuarios);
//fs.writeFileSync('otros-productos.dat', JSON.stringify(products));
