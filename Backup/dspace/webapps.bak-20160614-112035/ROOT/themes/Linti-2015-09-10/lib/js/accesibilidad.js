
/*function keyboardAccessible(id){
//alert(id);
}*/

function focusFunction() {
	//alert(this);
	this.keyup(function (event) {
						alert(event.keycode);
            if (event.keyCode == '13') {
                this.click();
            }
            return false;
        });	
}


/*function keyboardSend(){
x=document.getElementsByName("submit_next");
var i;
for (i = 0; i < x.length; i++) {
	x[i].addEventListener('focus',focusFunction);
}
}*/

function keyboardSend(){
/*x=document.getElementsByName("submit_next");
var i;
alert("aaaa");
for (i = 0; i < x.length; i++) {
	x[i].on('keyup',function (e) {
    if (e.keyCode == 13) {
				alert("BBBB");
        x[i].click();
			}
    });

	}*/
/*x= document.getElementById("aspect_submission_StepTransformer_field_submit_next");
alert(x);
x.addEventListener("focus", focusFunction, true);
*/
$('#aspect_submission_StepTransformer_field_submit_next').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    alert("aaaa");
    return false;  
  }
});   
}


window.addEventListener("load", keyboardSend);


