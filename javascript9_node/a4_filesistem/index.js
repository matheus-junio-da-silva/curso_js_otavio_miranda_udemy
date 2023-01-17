const fs = require('fs').promises;
const path = require('path');

// readdir é assincrona e readdirSinc é sincrona
// assincrona nao para a execucao de seu codigo 

// path.resolve(__dirname)
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // se o rootdir for enviado usu ele 
    const files = await fs.readdir(rootDir);
}