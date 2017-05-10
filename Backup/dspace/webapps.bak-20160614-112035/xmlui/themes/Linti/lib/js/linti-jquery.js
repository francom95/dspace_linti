// jQuery code for the Linti theme.  
// 
//  This applies some id in item's divs :P

$(document).ready(function(){

    if ($('ul a')){
        $('ul a').each(function(index) {    
          var ref= $(this).attr('href').replace(/\/xmlui\//, "");
          ref=ref.replace("?type=", "_");
          ref=ref.replace(/\//,"_");
          $(this).attr('id',   ref);
        });
    }
    if ($('h1')){
        $('h1').each(function() {
          if ($(this)[0].childNodes[0].nodeValue == "Buscar:"){
            $(this).addClass("ds-div-search-tit");
            $(this).removeClass("ds-div-tit");
          }

          if ($(this)[0].childNodes[0].nodeValue == "Search DSpace"){
            $(this).addClass("ds-div-search-tit");
            $(this).removeClass("ds-div-tit");
          }
        });
    }

    $('.dropbox-dropin-btn').each(function (index) {
        $(this).text('Guardar');
        $(this).prepend('<span class="dropin-btn-status"></span>');
    });



});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

