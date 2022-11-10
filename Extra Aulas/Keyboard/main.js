///pegando todas as teclas
const keys = document.querySelectorAll(".key");

//tocar notas
function playNote(event){
   
    //keyCode
    let audioKeyCode = getKeyCode(event);

    //Tecla digitada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    
    //se a tecla não existe

    const isKeyExists = key;

    if(!isKeyExists){
        return
    }


    playAudio(audioKeyCode)

}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown" //true or false
    if(isKeyboard){
        keyCode = event.keyCode
    }else{
        keyCode = event.target.dataset.key
    }

    return keyCode

}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    //iniciar audio em zero
    audio.currentTime = 0;
    audio.play()
}

// quando clica com mouse
keys.forEach(function(key){
    key.addEventListener("click", playNote)
})



// tipo do teclado
//usando evento window, funciona como o document mas para a janela
//acionar uma função ao digitar uma tecla.
window.addEventListener("keydown", playNote)