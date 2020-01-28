document.addEventListener('DOMContentLoaded', function () {

    let canvas = document.getElementById("lienzo");
    let context = canvas.getContext("2d");



    let frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;





   

    function dibujarLinea(x1, y1, x2, y2) {     
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineWidth = 5;
        context.stroke();    
    }

    
   

    let imagen_x = new Image();
    imagen_x.src = "./img/x.png";


    function dibujarX () {    
  
      context.drawImage(imagen_x, 50 , 50, imagen_x.naturalWidth, imagen_x.naturalHeight);
    }


    dibujarX();

   
   
    
    console.log(imagen_x);


    

    let Usuarios = {

      "usuario_1": {
        "username": "Guido",
        "password": "Pola"
      },
      "usuario_2": {
        "username": "Nacho",
        "password": "Master"
      },

      "usuario_3": {
        "username": "Sebinsky",
        "password": "hackerpro911"
      }

    }



    //--------------------------------------------------------------------
    canvas.addEventListener("click", function (evt) {
      var mousePos = getMousePos(canvas, evt);

      console.log("clicked");
      console.log(mousePos.x + ',' + mousePos.y);   
      
      

      //aca va logica de clickear para colocar x/o en cuadro


















      
  }, false);
  
  //Get Mouse Position
  function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
          x: evt.clientX - rect.left,
          y: Math.floor(evt.clientY - rect.top)
      };
  }
 //--------------------------------------------------------------------










//   AJAX Rest

    let direccion_url = "http://web-unicen.herokuapp.com/api/groups/26/tateti";

     //el json dentro de thing
    
    
     //  let info_cargada = {
    //     "thing": {
    //       "nombreItem": nombre_item,
    //       "precioGe": precioge_item
    //     }
    //   };




  function tiempo() {  
    frame(tiempo);



    context.clearRect(0, 0, canvas.width, canvas.heigh);
    dibujarLinea(200, 0 , 200 , 600);
    dibujarLinea(400, 0 , 400 , 600);
    dibujarLinea(0, 200 , 600 , 200);
    dibujarLinea(0, 400 , 600 , 400);



    //
    dibujarX();
    //




  }

   
  tiempo();



});