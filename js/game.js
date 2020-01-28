document.addEventListener('DOMContentLoaded', function () {

    let canvas = document.getElementById("lienzo");
    let context = canvas.getContext("2d");


    function dibujarLinea(x1, y1, x2, y2) {     
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineWidth = 5;
        context.stroke();    
    }


    dibujarLinea(200, 0 , 200 , 600);
    dibujarLinea(400, 0 , 400 , 600);
    dibujarLinea(0, 200 , 600 , 200);
    dibujarLinea(0, 400 , 600 , 400);





//   AJAX Rest

    let direccion_url = "http://web-unicen.herokuapp.com/api/groups/26/tateti";

     //el json dentro de thing
     let info_cargada = {
        "thing": {
          "nombreItem": nombre_item,
          "precioGe": precioge_item
        }
      };






});