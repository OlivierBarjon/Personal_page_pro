function viewportSize() {
    var d = document.documentElement;
    return {
      height: d.clientHeight,
      width: d.clientWidth
    };
  }
  
  var tailles = viewportSize();
  var hauteur = tailles.height;
  var largeur = tailles.width;  

  console.log(`viewport width : ${largeur}`);
  console.log(`viewport height : ${hauteur}`);