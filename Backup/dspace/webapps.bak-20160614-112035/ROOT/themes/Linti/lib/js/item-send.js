/*script to initialize the item send form.
It modifies what fields of the form are visible acording to the item type combobox.
Controls that some items have value when the form is send
It also realizes validations of those fields.
And sets defaults values for some items.

Special Fields:
	Video URI: only visible if the type of item is video
	Lenguaje de programacion y SO: only visible if the type of item is software
Validations:
	Video URI: debe ser una url de un video en youtube.
	Nombre, docente responsable ... solo pueden ser nombres
Valores por defecto:
	fecha: fecha de hoy
	editor: Facultad de informatica
*/
function specialFields(){
    //maneja los campos especiales segun como va cambiando el tipo del item
    // sType is the TYPE combobox
    var sType =document.getElementById("aspect_submission_StepTransformer_field_dc_type");
    var selectedOption;
    if(sType.selectedIndex==-1){
       	selectedOption = "null";
	}
    else{
    	selectedOption = sType.options[sType.selectedIndex].value;
    }
    var videoListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_video_uri").parentNode.parentNode;
    var lenguajeListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje").parentNode.parentNode;
    var sistemaOperativoListItem =document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_sistemaOperativo").parentNode.parentNode;
    if(selectedOption == "Video"){
	//if the selected option is video I reset the options for the sofware fields and hide them
	videoListItem.style.display ="inherit";
	//videoListItem.getElementsByClassName("ds-form-content")[0];


	sistemaOperativoListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';
	sistemaOperativoListItem.style.display = "none";	

	lenguajeListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';		
	lenguajeListItem.style.display = "none";
    }
    else{
      if(selectedOption == "Software"){	
	//if the selected option is sotfware I reset the options for the video field and hide it
	videoListItem.getElementsByClassName("ds-form-content")[0].children[0].value='';
	videoListItem.style.display ="none";
	sistemaOperativoListItem.style.display = "inherit";
	lenguajeListItem.style.display = "inherit";
	}
      else{	
	//if the selected option is neither sotfware  nor video I reset all theirs options and hide them
	videoListItem.getElementsByClassName("ds-form-content")[0].children[0].value='';
	videoListItem.style.display ="none";
	sistemaOperativoListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';
	sistemaOperativoListItem.style.display = "none";	

	lenguajeListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';		
	lenguajeListItem.style.display = "none";
   	}	
    }
}
    	
function caseMes(mm){
	var mes=0
	switch (mm) {
	    case "01":
		mes = "1";
		break;
	    case "02":
		mes = "2";
		break;
	    case "03":
		mes = "3";
		break;
	    case "04":
		mes = "4";
		break;
	    case "05":
		mes = "5";
		break;
	    case 06:
		mes = "6";
		break;
	    case 07:
		mes = "7";
		break;
	    case "08":
		mes = "8";
		break;
	    case "09":
		mes = "9";
		break;
	    case "10":
		mes = "10";
		break;
	    case "11":
		mes = "11";
		break;
	    case "12":
		mes = "12";
		break;
	
	}

	  return mes;
} 
/*<span class="error"></span>*/
function initializeDefaults(){
	
	var idiomaCombobox = document.getElementById("aspect_submission_StepTransformer_field_dc_language_iso");
	idiomaCombobox.selectedIndex = 3;//seteo el idioma por defecto en español
	


	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	}
	var fecha_dia = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_day");
	var fecha_mes = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_month");
	var fecha_anio = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_year"); 
	fecha_dia.value= dd;
	fecha_mes.selectedIndex = caseMes(mm);
	fecha_anio.value= yyyy;
}
var button_clicked="ninguno";
function changeButton( clickeado){
	//funcion para cambiar que boton se clickeo, y en base a eso cambiar el validador a usar
		button_clicked= clickeado;	
}
function validarNombre(){
	//primero que nada valido el nombre, solo puede tener entre 3 y 20 caracteres y espacios
	var nombre = document.getElementById("aspect_submission_StepTransformer_field_dc_contributor_author_first");
	var apellido = document.getElementById("aspect_submission_StepTransformer_field_dc_contributor_author_last");
	var parent = apellido.parentNode;
	var validator= /^[a-zA-Z ]{3,23}$/;
	if(!validator.test(apellido.value)  || !validator.test(nombre.value)){
			var node = document.createElement("SPAN");
			var textnode = document.createTextNode("nombre y apellido deben ser palabras de entre 3 y 23 caracteres");
			node.appendChild(textnode);
			node.className = "error"; 
			parent.appendChild(node);
			return false;	
	}
	return true;
}
function validarTitulo() {
	var titulo = document.getElementById("aspect_submission_StepTransformer_field_dc_title");
	var parent = titulo.parentNode;
	if(titulo.value== "" || titulo.value == null){		
		var node = document.createElement("SPAN");
		var textnode = document.createTextNode("Usted debe ingresar un título principal para el item");
		node.appendChild(textnode);
		node.className = "error"; 
		parent.appendChild(node);

		return false;	
	}
	return true;

}
function validarVideo(){
	//valido que el video no sea vacio, y que sea una url valida;
		var resultado;
		var r = /^(ftp|http|https):\/\/[^ "]+$/;
		var textVideoURL =document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_video_uri").value;
 		videoListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_video_uri").parentNode;
		if(textVideoURL == null || textVideoURL == ""){
			var node = document.createElement("SPAN");
			var textnode = document.createTextNode("*Usted debe ingresar una url para el video como: www.youtube.com/video");
			node.appendChild(textnode);
			node.className = "error"; 
			videoListItem.appendChild(node);
  		resultado = false;
		}
		else{
			if(!r.test(textVideoURL)){
				var node = document.createElement("SPAN");
				var textnode = document.createTextNode("La url ingresada no es valida, ingrese una como: www.youtube.com/video");
				node.appendChild(textnode);
				node.className = "error"; 
				videoListItem.appendChild(node);
  			resultado = false;
			}		
		}
	return resultado;

}
function validarForm(){
	if(button_clicked=="remove_nombre"){
		return true;	
	}
	if(button_clicked=="add_nombre"){
			return validarNombre();	
	}

	//si no se agrega ni se borra un nombre, solo me interesa el caso que se envio el formulario
	if(button_clicked=="enviar_form"){	
		var resultado= validarNombre(); 
		var resultado2= validarTitulo();
		resultado= resultado && resultado2;
		//obtengo el tipo seleccionado del combobox
		var sType = document.getElementById("aspect_submission_StepTransformer_field_dc_type");
		var selectedOption;
		var videoListItem;
		if(sType.selectedIndex==-1){
		     	selectedOption = "null";
		}
		else{
		  selectedOption = sType.options[sType.selectedIndex].value;
		}
		if(selectedOption=="Video"){
			resultado = resultado && validarVideo();
		}
		if(selectedOption=="Software"){
			var lenguajeListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje").parentNode;
		  var sistemaOperativoListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_sistemaOperativo").parentNode;	
			var selectedLenguaje = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje");
			var selectedOperativeSystem =	document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje");
			if(selectedLenguaje.selectedIndex== 0){
				var node = document.createElement("SPAN");
				var textnode = document.createTextNode("*Debe seleccionar un lenguaje de programacion si el item es de tipo software");
				node.appendChild(textnode);
				node.className = "error"; 
				lenguajeListItem.appendChild(node);
				resultado=false;
			}
			if(selectedOperativeSystem.selectedIndex== 0){
				var node = document.createElement("SPAN");
				var textnode = document.createTextNode("*Debe seleccionar un Sistema Operativo si el item es de tipo software");
				node.appendChild(textnode);
				node.className = "error"; 
				sistemaOperativoListItem.appendChild(node);
				resultado=false;
			}		
		}
		return resultado;
	}
	return true;
}
function initialize(){
  initializeDefaults();

	/*NOTA: Revisar, lo siguiente solo lo hago con javascript porque hay un problema con los match y los call en los templates de xsl*/
	var x = document.getElementsByClassName("ds-add-button");
	var i;
	for (i = 0; i < x.length; i++) {
    x[i].value= "Añadir nuevo";
	}
	var x2 = document.getElementsByClassName("ds-delete-button");
	var i;
	for (i = 0; i < x2.length; i++) {
    x2[i].value= "Borrar Seleccionados";
	}
	/*FIN NOTA */
  specialFields();
  var tipoBox =document.getElementById("aspect_submission_StepTransformer_field_dc_type");
  tipoBox.addEventListener("change", specialFields);
	document.getElementById("aspect_submission_StepTransformer_field_submit_next").addEventListener("click",function(){changeButton("enviar_form");});
	document.getElementsByName("submit_dc_contributor_author_add")[0].addEventListener("click",function(){changeButton("add_nombre");});
	document.getElementsByName("submit_dc_contributor_author_delete")[0].addEventListener("click",function(){changeButton("remove_nombre");});  

}


window.addEventListener("load", initialize);
