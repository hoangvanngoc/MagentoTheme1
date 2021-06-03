function myFunction() {
    var x = document.getElementsByClassName("footer-bottom__list");
    var y = document.getElementsByClassName("bottom__click-icon");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.transform = "rotate(0)"
    } else {
      x.style.display = "none";
    }
  }
