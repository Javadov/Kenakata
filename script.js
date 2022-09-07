function openNav() {
    if (x.matches) { // If media query matches
      document.getElementById("myNav").style.width = "50%";
    } else {
      document.getElementById("myNav").style.width = "70%";
    }
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var x = window.matchMedia("(min-width: 400px)")