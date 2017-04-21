// function to reload all content from json
function chargeContent() {
  let selectedLanguaje = getSelectedLanguaje();
  chargeCarousel(selectedLanguaje);
  chargeMarketing(selectedLanguaje);
}

// function to load carousel content from json
function chargeCarousel(selectedLanguaje){
  $.getJSON("data/json/items/carousel." + selectedLanguaje + ".json?nocache=" + (new Date()).getTime(), function(json){
    // delete child nodes
    let caruselIndicator = $( ".carousel-indicators" );
    let caruselInner = $( ".carousel-inner" );
    caruselIndicator.empty()
    caruselInner.empty();
    // add new content
    for(let i = 0 ; i < json.length ; i++){
      let object = json[i];
      caruselIndicator.append("<li data-target=\"#portfolio-carousel\" data-slide-to=\"" + i + "\"" + ( i === 0 ? " class=\"active\"></li>" : "></li>"));

      caruselInner.append(
        "<div class=\"item "
      // define active if is index 0
      + ( i === 0 ? " active\"" : "\"")
      // define background image if exist
      + (object.image !== undefined ? "style=\"background:url('" + object.image + "') no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;" : "")
      + "><div class=\"container\"><div class=\"carousel-caption\">"
      // define title
      +"<h1>" + object.title + "</h1>"
      // define text
      +"<p> " + object.text + "</p></div></div></div>");
    }
  });
}

// function to load  marketing icons info
function chargeMarketing(selectedLanguaje){
  $.getJSON("data/json/items/marketing." + selectedLanguaje + ".json?nocache=" + (new Date()).getTime(), function(json){
    // delete child nodes
    let content = $( ".marketing .container" );
    content.empty();

    // define columns
    let columns = 3;
    // concatenator content
    let fragment = "";
    // add new content
    for(let i = 0 ; i < json.length ; i++){
      let object = json[i];
        fragment += ((i === 0 || i % columns === 0) ? "<div class=\"row\" >" : "")
        + "<div class=\"col-md-4\">"
        + (object.glyphicon !== undefined ? "<span class=\"glyphicon " + object.glyphicon + "\" ></span>" : "")
        + "<h2>" + object.title + "</h2>"
        + "<p>" + object.text + "</p>"
        + "</div>"
        + (((i + 1) % columns === 0) || json.length === (i + 1) ? "</div>" : "");
    }
    content.append(fragment);
  });
}
