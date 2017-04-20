// function to reload all content from json
function chargeContent() {
  let selectedLanguaje = getSelectedLanguaje();
  chargeCarousel(selectedLanguaje);
}

// function to reload carousel content from json
function chargeCarousel(selectedLanguaje){
  $.getJSON("data/json/items/carousel." + selectedLanguaje + ".json?nocache=" + (new Date()).getTime(), function(json){
    // delete child nodes
    $( ".carousel-indicators" ).empty();
    $( ".carousel-inner" ).empty();
    // add new content
    for(let i = 0 ; i < json.length ; i++){
      let object = json[i];
      $( ".carousel-indicators" ).append("<li data-target=\"#portfolio-carousel\" data-slide-to=\"" + i + "\"" + ( i === 0 ? " class=\"active\"></li>" : "></li>"));
      $( ".carousel-inner" ).append("<div class=\"item " + ( i === 0 ? " active\">" : "\">") + "<div class=\"container\"><div class=\"carousel-caption\"><h1>"
      + object.title + "</h1><p> " + object.text + "</p></div></div></div>");
    }
  });
}


// first invoke chargeContent
chargeContent();
