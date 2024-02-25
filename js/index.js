function toggleDropdown() {
    var navegador = document.getElementById("myDropdown");
    navegador.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var navegadores = document.getElementsByClassName("lista");
      for (var i = 0; i < navegadores.length; i++) {
        var openDropdown = navegadores[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }