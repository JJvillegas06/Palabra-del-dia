const listaPalabras = [
    'coche', 'perro', 'silla', 'libro', 'manos'
]
let numeroAleatorio = Math.floor(Math.random()*listaPalabras.length)
let palabraAleatoria = listaPalabras[numeroAleatorio]
console.log(palabraAleatoria)
let palabraCorrecta = [false,false,false,false,false]
const btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener('click', ()=>{
    let palabraUsuario = document.querySelector('#palabraUsuario').value
    for (let i=0; i<palabraAleatoria.length;i++){
    let espacioLetra = document.querySelectorAll('.letra')
        espacioLetra[i].innerHTML = palabraUsuario[i]
    if (palabraUsuario[i] == palabraAleatoria[i]){
        palabraCorrecta[i] = true
        console.log(palabraCorrecta)
    }else{
        console.log('perdiste')
    }
}
})