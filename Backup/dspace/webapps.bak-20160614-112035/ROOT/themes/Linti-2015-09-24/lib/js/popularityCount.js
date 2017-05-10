//funciones llamadas cuando se guarda el archivo en dropbox, se hace click en mg de facebook, o se guarda el archivo en google drive
function dropboxCallback(url,filename){
  console.log("dropbox callback function called");
  //deberia acceder a la URL y otros datos
  callAjaxMethod(url,"guardeDropbox"); 
}
var pageLikeCallback = function(url, html_element) {
  console.log("+1 en el like de"+ url + html_element);
  //alert("page_like_or_unlike_callback "+ url +" "+html_element);
  callAjaxMethod(url,"meGusta");
}
var pageUnlikeCallback = function(url, html_element) {
  console.log("-1 en el like de"+ url + html_element);
  //alert("page_like_or_unlike_callback "+ url +" "+html_element);
  callAjaxMethod(url,"noMeGusta");
}
function callAjaxMethod(url,action){
/*action es un string que representa si es un meGusta, un noMeGusta o un guardeDropbox*/
  console.log("calling ajax function");
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp = new XMLHttpRequest(); //for IE7+, Firefox, Chrome, Opera, Safari
  }
  else
  {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //for IE6, IE5
  }
  xmlhttp.open("GET","facebook-count?value="+url,true);


  xmlhttp.onreadystatechange = function(){
  if (xmlhttp.readyState == 4) { 
    if (xmlhttp.status == 200) 
    {
      alert(xmlhttp.responseText);
    } 
    else {
        alert('Something is wrong !!');
    }
  }
  };
  xmlhttp.send(null);  
  console.log("ajax function called");
  
}
function init(){
  /*problema se ejecuta este script en todos los sitios no solo en la visualizacion de los documentos*/
  
  /*inicializo facebook*/


  FB.Event.subscribe('edge.create', pageLikeCallback);
  FB.Event.subscribe('edge.remove', pageUnlikeCallback);
  console.log("suscripto a los eventos de facebook");  
  

  console.log("accedo a la URL y al filename");  
  var url=document.getElementById('downloadLink').getAttribute('href');
  var filename=document.getElementById('downloadLink').getAttribute('title');
  if(!url){return;}
  if(!filename){return;}
  /*console.log("URL ...."+url);
  console.log("FILENAME...."+filename);
  */


  /*inicializo dropbox*/

  var options = {
    files: [
        {'url': url, 'filename': filename},
    ],
    // Success is called once all files have been successfully added to the user's
    // Dropbox, although they may not have synced to the user's devices yet.
    success: function () {
      console.log("se guardo el archivo en dropbox");//probar
      //aca llamaria  para guardar el +1 de dropbox
      dropboxCallback(url,filename);
    },
    progress: function (progress) {},
    cancel: function () {},
    error: function (errorMessage) {}
  };
  var button = Dropbox.createSaveButton(options);
  document.getElementById("container").appendChild(button);

  /* inicializo drive */



};
//comento asi no se llama a los eventos hasta que no este todo terminado

//window.addEventListener("load", init);
 



