
const hora= document.getElementById("hour");   
const segundos = document.getElementById("seconds");   
const $AM_PM = document.getElementById("AM/PM");  
const $fecha = document.getElementById("date");  
const $crontrols = document.getElementById("controls"); 
const $button_reloj = document.getElementById("buttonH");  
const $button_cronometro = document.getElementById("buttonC");  

// __________________funcion del funcionamiento del reloj ___________________
function timeFunction () { 
    let fecha = new Date();
        let hour = fecha.getHours();  
        let minutes = fecha.getMinutes();   
        let seconds = fecha.getSeconds();   
             
        let ceroM = new String(minutes); 
            if (ceroM.length === 1) minutes = `0${minutes}`; 
    
        let ceroS = new String(seconds); 
            if (ceroS.length === 1) seconds = `0${seconds}`;


    if (hour < 12 ) { 
        $AM_PM.textContent = "AM";   
        if(hour != 0) { 
        hora.textContent = `0${hour}:${minutes}`; 
        segundos.textContent = `${seconds}`;  
        if (hour === 10 || hour === 11) { 
            hora.textContent = `${hour}:${minutes}`; 
            segundos.textContent = `${seconds}`;  
        } 

        }else{ 
            hora.textContent = `${12}:${minutes}`; 
            segundos.textContent = `${seconds}`; 
        }

    }else{ 
        $AM_PM.textContent = "PM"; 

        if (hour != 12){ 
        hora.textContent = `0${hour-12}:${minutes}`;   
        segundos.textContent = `${seconds}`; 
            if (hour === 22 || hour === 23) { 
                hora.textContent = `${hour-12}:${minutes}`;
                segundos.textContent = `${seconds}`; 
            } 
        }else{ 
            hora.textContent = `${hour}:${minutes}`; 
            segundos.textContent = `${seconds}`; 
        }
    }
    }  

    function star_reloj(){ 
        startClock = setInterval(timeFunction, 1000);
    }

    // es necesario crear una nueva instancia del objeto date con cada segundo, de esta manera, el objeto date se estara ejecutando constantemente.  

// ______________________funcion mostrar fecha_____________________________ 

let width_vp = document.documentElement.clientWidth; 
function fecha(){ 
    let date = new Date(); 
    let dias =["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]; 
    let mes = ["Enero", "Febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "Septiembre", "octubre", "noviembre", "diciembre"];   
    
    if (window.innerWidth <=380 || window.innerHeight <=605) { 
        $fecha.textContent = `${date.toLocaleDateString()}`
    }else{ $fecha.textContent = `${dias[date.getDay()]} ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`}

    window.addEventListener("resize", ()=>{ 
        console.log("Se esta redimencionado la ventana");
        if (window.innerWidth <=380 || window.innerHeight <=605) { 
            $fecha.textContent = `${date.toLocaleDateString()}`
        }else{ $fecha.textContent = `${dias[date.getDay()]} ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`}
    })
//   utilizamos el evento resize para disparar un evento cuando se modifiquen las dimenciones del viewport  y con las propiedades window.innerWidth e innerHeight para obtener el tamaño del viewport en px. 

}



// ______________________________funcion alarma___________________________________ 



// __________________________funcion cronometro_______________________________ 

let contadorms = 0;  
let contadors = 0; 
let contadorm = 0; 
let contadorh = 0; 

function cronometro(){ 
            contadorms++; 
            if (contadorms === 100) { 
                contadors ++ 
                contadorms = 0; 
            }
            if (contadors === 60) { 
                contadorm++; 
                contadors = 0;  
            }
            if (contadorm === 60) { 
                contadorh++; 
                contadorm = 0; 
            } 

            let ceroMS = new String(contadorms); 
            if (ceroMS.length === 1) contadorms = `0${contadorms}`; 
    
            let ceroS = new String(contadors); 
            if (ceroS.length === 1) contadors = `0${contadors}`;  

            let ceroM = new String(contadorm); 
            if (ceroM.length === 1) contadorm = `0${contadorm}`; 

            let ceroH = new String(contadorh); 
            if (ceroH.length === 1) contadorh = `0${contadorh}`;
if (contadorh >= 1) { 
    hora.textContent = `${contadorh}:${contadorm}:${contadors}:${contadorms}` 
}
hora.textContent = `${contadorm}:${contadors}:${contadorms}`  

    }  


    function start() { 
        startCron = setInterval(cronometro, 10);  
     } 
    
     function paused() { 
        clearInterval(startCron); 
     }
 
 let $div_Results = document.getElementById("resultC");  
 $div_Results.style.setProperty("display", "none"); 
 const $clean_flag = document.getElementById("clean_flag");  
 const array_results = new Set([]);

 let count = 0; 

 function flag() { 
    count++; 
    pElement = document.createElement("p"); 
     pElement.textContent = `vuelta${count}: ${contadorh}:${contadorm}:${contadors}:${contadorms}` ;   
     array_results.add(pElement); 
 if(count<=10){ 
    array_results.forEach((elements)=>{ 
        $div_Results.appendChild(elements);   
     }); 
      }

      $clean_flag.addEventListener("click", ()=>{ 
        count = 0;  
        array_results.forEach((elements)=>{ 
            elements.remove();
        });     
    
        array_results.clear(); 
      }); 
    }  

 function stop() { 
    contadorms = "00";  
    contadors = "00"; 
    contadorm = "00"; 
    contadorh = "00";  
    hora.textContent = `${contadorm}:${contadors}:${contadorms}`;    
    array_results.forEach((elements)=>{ 
        elements.remove();
    });     

    array_results.clear(); 
    count = 0;
 }

// _____________________________inicio reloj_________________________
const $p1 = document.getElementById("p1"); 
const $p2 = document.getElementById("p2"); 
const $title = document.getElementById("title"); 
let indetiferStarClock = false; 
   
function startClock () { 
    indetiferStarClock = true; 
    star_reloj(); 
    fecha();
    $button_reloj.setAttribute("disabled", "true"); 
    $button_cronometro.setAttribute("disabled", "true"); 
    $p1.style.setProperty("--play", "play"); 
    $p2.style.setProperty("--play2", "play");   
    $title.textContent = "Reloj XD"; 
    $menu.classList.toggle("activate");  
    $div_Results.style.setProperty("display", "none"); 
}

$button_reloj.addEventListener("click", startClock);   

// ______________________________inicio reloj__________________________ 

// _____________________________inicio cronometro________________________ 


const $start = document.getElementById("buttonS"); 
const $paused = document.getElementById("buttonP"); 
const $stop = document.getElementById("buttonO"); 
const $flag = document.getElementById("buttonF");  
let indetiferStarCrono = false; 
// los identificadores nos serviran para controlar el paro de las funciones en la app. 


function startCronometro(){  
    indetiferStarCrono = true; 
    hora.textContent = "Cronometro"; 
    // hora.style.setProperty("font-size", "1.8rem");  
    hora.style.setProperty("text-align", "center"); 
    $button_cronometro.setAttribute("disabled", "true"); 
    $button_reloj.setAttribute("disabled", "true"); 
    $crontrols.style.setProperty("display", "flex");    
    $start.style.setProperty("display", "flex"); 
    $stop.style.setProperty("display", "flex");    
    $title.textContent = "Cronometro XD" ; 
    $clean_flag.style.setProperty("display", "block"); 
    $menu.classList.toggle("activate"); 
    $div_Results.style.setProperty("display", "block"); 
    
} 

$button_cronometro.addEventListener("click", startCronometro); 
 
$start.addEventListener("click", ()=> { 
    start();   
    $p1.style.setProperty("--play", "play"); 
    $p2.style.setProperty("--play2", "play");  

    $start.style.setProperty("display", "none"); 
    $stop.style.setProperty("display", "none");  
    $paused.style.setProperty("display", "flex"); 
    $flag.style.setProperty("display", "flex");  
    
}); 
 $paused.addEventListener("click", ()=>{    
   paused();     
   $p1.style.setProperty("--play", "paused"); 
   $p2.style.setProperty("--play2", "paused");  
 $stop.style.setProperty("display", "flex");  
 $start.style.setProperty("display", "flex"); 
 $paused.style.setProperty("display", "none"); 
 $flag.style.setProperty("display", "none"); 
}); 

$flag.addEventListener("click", ()=>{ 
    flag(); 
}) 

$stop.addEventListener("click", ()=>{ 
    stop(); 
})

  

// ________________________boton de frenado de funcion__________________________________ 

const $buttonStop = document.getElementById("stop");  
$buttonStop.addEventListener("click", ()=>{ 
hora.textContent = "00:00:00"; 
$fecha.textContent = null; 
segundos.textContent = null; 
$AM_PM.textContent = null
$div_Results.style.setProperty("display", "none"); 
// ______________________________frenando cronometro:____________________________ 
if(indetiferStarCrono === true) { 
    clearInterval(startCron); 
    stop();
}
$p1.style.setProperty("--play", "paused"); 
$p2.style.setProperty("--play2", "paused"); 
// frenado de las animaciones. 
$button_cronometro.removeAttribute("disabled");    
$start.style.setProperty("display", "none"); 
$stop.style.setProperty("display", "none");  
$paused.style.setProperty("display", "none"); 
$flag.style.setProperty("display", "none");   
$clean_flag.style.setProperty("display", "none");      

// _______________________________frenando reloj_____________________________________ 
$button_reloj.removeAttribute("disabled");  
if(indetiferStarClock===true) { 
    clearInterval(startClock); 
}
});  

const $button_menu = document.getElementById("button_menu"); 
const $menu = document.getElementById("menu_mobile"); 

$button_menu.addEventListener("click", ()=>{ 
    $menu.classList.toggle("activate"); 
})