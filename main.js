const listaPalabras = [
    'coche', 'perro', 'silla', 'libro', 'manos'
]
let numeroAleatorio = Math.floor(Math.random()*listaPalabras.length)
let palabraAleatoria = listaPalabras[numeroAleatorio]
console.log(palabraAleatoria)
let intentos = 1
let casillaRevisada = 0
let contador = 0


let fila = document.querySelectorAll('.fila')

const btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener('click', ()=>{
    
    let palabraUsuario = document.querySelector('#palabraUsuario').value

    const teclado = document.querySelectorAll('.teclado')
    for(let i = 0; i < 28 ;i++){
        teclado.addEventListener('click',()=>{
            console.log(teclado)
            fila[i].innerHTML =  teclado[i].innerHTML
        })
    }
    
        
        
    
        

    for (casillaRevisada; casillaRevisada < intentos * 5; casillaRevisada++){

        fila[casillaRevisada].innerHTML = palabraUsuario[casillaRevisada % 5]
        
           
           for (let i = (intentos -1) * 5 ; i < intentos * 5; i++){
            console.log(palabraUsuario[i % 5],palabraAleatoria[casillaRevisada % 5])


            if(palabraAleatoria[casillaRevisada % 5] == palabraUsuario[i % 5]){
                //fila[i].classList.remove('nada')
                
                fila[i].classList.add('naranja')
            


                if (i % 5 == casillaRevisada % 5 ){
                    fila[casillaRevisada].classList.add('verde')

                }
            } 
            

           }

           
           
       // }else{
          //  console.log('perdiste')
        // }
           
    }
    

    console.log(intentos)
    
    
    
    intentos ++

    }   
    
    
)   











    


   
     
    
        
    


    

    
    /*
     
    
    if(!saltoDeLinea){
        for (let i=0; i < palabraAleatoria.length ;i++){
        espacioLetra[i].innerHTML = palabraUsuario[i]
    }*/


    