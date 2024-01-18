let screenEl= document.getElementById("screen")

     function input(value){
      if(value == "clear"){
        screenEl.innerHTML=""
      }else if(value == "=" ){
        screenEl.innerHTML= eval(screenEl.innerHTML)
      }else{
        screenEl.innerHTML+= value
      } 
    }
