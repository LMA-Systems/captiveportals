var modal_footer = document.getElementById('modal_footer');
function showFooter(){
  var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("footer_content").innerHTML =
              this.responseText;
         }
      };
      xhttp.open("GET", "terms/terms.txt", true);
      xhttp.send();
      modal_footer.style.display = "block";

}
function close_terms(){

      modal_footer.style.display = "none";

}
    var logoVisible = "|logo_show|";
    if (logoVisible == "yes") {
      document.getElementById("show_logo").style.display = "block";

    } else {
      document.getElementById("show_logo").style.display = "none";

    }
    var how_many_slides = 0;
    loadDoc();
    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          myFunction(this);
        }
      };
      xhttp.open("GET", "xadvertisment/images.xml", true);
      xhttp.send();
    }
    function myFunction(xml) {
     var i;
      var xmlDoc = xml.responseXML;
      var table="";
      var url_variable = "";
      var x = xmlDoc.getElementsByTagName("|advert_images_language|");
      how_many_slides = x.length;
      var shuffle_var = [];
     for (i = 0; i <x.length; i++) {
      shuffle_var[i] = i;
     }
     shuffle_var = shuffle(shuffle_var);
     for (i = 0; i <x.length; i++) {
        url_variable = x[shuffle_var[i]].getElementsByTagName("url")[0].childNodes[0].nodeValue;
        table += '<div class="mySlides fade" style="width:100%">'
        +

        '<img onclick="wallet_add(\''+url_variable+'\')" src="xadvertisment/'+
        x[shuffle_var[i]].getElementsByTagName("image")[0].childNodes[0].nodeValue +
        '"></a></div>';
      }
        document.getElementById("slideshow-container").innerHTML = table;
    }
    function wallet_add(reff) {
      var popup = document.getElementById("myPopup");
       popup.classList.toggle("show");
       setTimeout(function(){ popup.classList.toggle("show"); }, 2000);
       var xhttp = new XMLHttpRequest();
       xhttp.open("POST", "cmd", true);
       xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("_wallet_add_="+reff);
    }
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (how_many_slides > 0) {

        for (i = 0; i < how_many_slides; i++) {
           slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > how_many_slides) {slideIndex = 1}

        slides[slideIndex-1].style.display = "block";

        setTimeout(showSlides, 10000);
    } else { setTimeout(showSlides, 50);  }
    }
