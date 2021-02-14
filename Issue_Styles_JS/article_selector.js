//capitalize all the titles of the json object
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};


//serve a costruire gli elementi <li> da aggiungere nell'accordionEntities 
function extract_tag(tag_name)//, target) //person, entity or place 
{ var x = $("."+tag_name).map(function(){return this.innerHTML}).get(); //mappa l'html attraverso le classi e ritorna un this.innerHtml nella callback 
  var x_unique = [...new Set(x)]; //spread operator, gli elementi che map ritrova vengono convertiti in un set dalla singola variabile x senza usare un for 
  //set = elimina elementi duplicati 
  var list_inside = x_unique.join('</li><li onclick = "onClick_tag(this)">');
  //di base: tony de nonno </li> <li> Giuseppino; l'open e il closing tag di list_inside vengono montati nel content 
  content = "<h5>" + capitalize(tag_name) + ":" + '</h5> <li onclick = "onClick_tag(this)">' + list_inside + "</li>";
  //$(target).append(content);
  return content;
};


var lastTagName = "";
function onClick_tag(e){
  var target = e.target;
  //console.log(e.innerHTML);
  var tagName = e.innerHTML; //prende il contenuto dell'elemento cliccato 
  var selectTagName = $("span:contains(" + tagName +")"); //selector con il contenuto, crea un'array 
  var pointTo = selectTagName[0]; 
  //console.log(pointTo.getBoundingClientRect(), document.body.getBoundingClientRect()); 
  var rect1 = pointTo.getBoundingClientRect(); //coordinate dell'elemento relative alla viewport 
  var rect2 = document.body.getBoundingClientRect(); //coordinate della window
  var scrollingElement = (document.scrollingElement || document.body); //or document.body per essere supportato da IE: è il punto dello scrolling della window quello che in pratica vediamo 
  var targetPosition = rect1.top - rect2.top; //coordinate dell'elemento - coordinate della window 
  scrollingElement.scrollTop = targetPosition; //la visuale > posizionala > alla target position 
  selectTagName.css("background-color", "yellow"); //impone il giallo al tag oltrepassando lo stile 
  if (lastTagName != "") {  //se lastTagName non è vuoto 
    selectTagName = $("span:contains(" + lastTagName +")"); //se il lastTagName ha già qualcosa 
    selectTagName.css("background-color", "transparent"); //diventa transparente 
  }
  lastTagName = tagName; //lastTagName è l'ultimo selezionato; in questa maniera, quando la funzione finisce, viene svuotato subito prima; così si cambia sempre il colore 
};

//parametri: nome dell'articolo, percorso del file json corrispondente 
function postArticle(articleName, issueJsonPath) {
  $.ajax({url: articleName, 
    success: function(result){ //articleName è il percorso dato ad ajax, che viene poi messo all'effettivo sotto 
    //prepare html to append metadata 
    $('#static').empty(); //prima svuota #static, che è un div esplicativo 
    $("#filerequest").empty(); //poi svuota il div dell'articolo 
    $("#filerequest").html(result); //aggiunge l'ajax result all'interno del div svuotato 
    $("#metadata").empty(); //svuota il metadata viewer nella navbar 
    $("#metadata").append('<h6>Metadata</h6><ul id="metadataList"></ul> <h6>Class List</h4><div id="accordionEntities"></div> <h6>Metadata Issue</h6><div id="accordion"></div>'); 
    //aggiunge gli elementi che faranno da gancio per i metadati e le issue di json 
    $("#metadataList").empty();
    //get meta tags AFTER article has been loaded //i meta tags dell'articolo vengono estratti e messi nella lista a sinistra dell'articolo dentro la navbar 
    var title = $("meta[name='DC.title']").attr('content');
    var creator = $("meta[name='DC.creator']").attr('content');
    var publisher = $("meta[name='DC.publisher']").attr('content');
    var date = $("meta[name='DCTERMS.issued']").attr('content');
    var uri = $("meta[name='DC.identifier']").attr('content');
    //append meta tags to Metadata List on the right 
    $("#metadataList").append("<li> <strong>Title:</strong> " + title + "</li>");
    $("#metadataList").append("<li> <strong>Author:</strong> " + creator + "</li>");
    $("#metadataList").append("<li> <strong>Publisher:</strong> " + publisher + "</li>");
    $("#metadataList").append("<li> <strong>Date:</strong> " + date + "</li>");
    $("#metadataList").append("<a id='linkToSource' href=" + uri + "> Link to source </a>");
    //end Metadata div 
    //Json function; viene compiuta dopo la precedente 
    //è un for each che prende il parametro precedentemente richiesto 
      $.getJSON(issueJsonPath, function( data ) {
        $("#accordion").empty(); //bootstrap div coi collapsable buttons 
        var counter = 1; //il counter viene usato per poter fare lo stesso lavoro su ogni elemento dell'oggetto 
        $.each( data, function( key, val ) { //data = json obj; key = chiavi, value = effettivi valori delle issue 
          var content = []; //crea una lista vuota e non appende direttamente i risultati perché 
          //the html is built BEFORE being appended to the #accordion to avoid closing tags automatically
          content.push('<div class="card metadataListStyle">');
          content.push('<div class="card-header" id="heading' + counter + '">');
          content.push('<h5 class="mb-0">');
          content.push('<button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + counter + '" aria-expanded="true" aria-controls="collapse' + counter + '">');
          content.push('Article ' + counter);
          content.push('</button></h5></div>');
          content.push('<div id="collapse' + counter + '" class="collapse show" aria-labelledby="heading' + counter + '" data-parent="#accordion">')
          content.push('<div class="card-body">');
          $.each( val, function( key2, val2 ) {
           /* $('#metadataIssueList').append('<li>' + key2 + ': '+ val2 + '</li>');*/
          if (key2 == 'source') {
            content.push('<p><strong>' + capitalize(key2) + '</strong>: <a href="'+ val2 + '" target="_blank"> Link </a></p>');
          }
          else {
            content.push('<p><strong>' + capitalize(key2) + '</strong>: '+ val2 + '</p>');
          }
          });
          //close tags
          content.push('</div>');
          content.push('</div>');
          content.push('</div>');
          //append the whole content to #accordion
          $('#accordion').append(content.join(""));
          counter = counter+1;
        });
      });
      //var person = extract_tag('person', "#classList");
      //var entity = extract_tag('entity', "#classList");
      //var place = extract_tag('place', "#classList");
      namedEntities = ['person', 'entity', 'place']; //array con le span classes diverse 
      var counterNames = 0; //un altro counter che però parte da zero in quanto itera sull'array 
      $.each(namedEntities, function() {
          var contents = [];
          contents.push('<div class="card">');
          contents.push('<div class="card-header" id="heading' + counterNames + '">');
          contents.push('<h6 class="mb-0">');
          contents.push('<button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + counterNames + '" aria-expanded="true" aria-controls="collapse' + counterNames + '">');
          contents.push(capitalize(namedEntities[counterNames]));
          contents.push('</button></h6></div>');
          contents.push('<div id="collapse' + counterNames + '" class="collapse show" aria-labelledby="heading' + counterNames + '" data-parent="#accordionEntities">')
          contents.push('<div class="card-body">');
          contents.push('<ul>');
          contents.push(x = extract_tag(namedEntities[counterNames])); //content fatto dall'<h5>Person</h5> + <ul>con tutto dentro</ul>
          console.log(contents);
          contents.push('</ul>'); //viene chiusa e aperta la lista 
          contents.push('</div>');
          contents.push('</div>');
          contents.push('</div>'); //chiudiamo i div per lo stesso principio precedente: jquery chiude automaticamente i tag 
          $('#accordionEntities').append(contents.join("")); //joiniamo tutto in accordionEntities: viene montato il primo collapse 
          //button, poi i successivi con l'aumento del counter: da Person a Place ad Entity 
              counterNames = counterNames+1;});
      var sheets = $('link');
      var style = sheets[0].href;
      console.log(style);
      if (style.includes("2040/2040.css")) {
        $('#spotifyFrame').remove();
        addSpotify();
      }
      if (style.includes("1980/teletext.css")) {
        $('#counter').remove();
        addClock();
      }
}});};

function addSpotify() {
  $('header').attr('id', 'header');
  $('#header').after("<iframe id='spotifyFrame'src='https://open.spotify.com/embed/playlist/4pjbEJfUe0OX8c8AAObGXX' width='300' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
}

function addClock() {
  $('header').attr('id', 'header');
  $('#header').before('<div id="counter"></div>')
  $(window).ready(function(e) {
  tick();});
}

function tick() {
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currTime = new Date();
  var currMin;
  var currHour;
  //leading zeroes
  if (String(currTime.getMinutes()).length == 1) {
    currMin = "0" + String(currTime.getMinutes());
  } else {
    currMin = String(currTime.getMinutes());
  }
  if (String(currTime.getHours()).length == 1) {
    currHour = "0" + String(currTime.getHours());
  } else {
    currHour = String(currTime.getHours());
  }
  document.getElementById("counter").innerHTML =
    days[currTime.getDay()] +
    " " +
    months[currTime.getMonth()] +
    " " +
    currTime.getDate() +
    " " +
    currHour +
    ":" +
    currMin;
  }


function toggleTheme(value) {
  //css as a parameter; takes the FIRST link tag, so the switching css anchor must always be on top of the head. 

  var sheets = $('link');  //nella pagina corrente, il <link al css non è ovviamente interno all'articolo. 
  //sheets è pari al tag link; dopodiché viene preso il primo (appositamente messo come primo <link> nell'html)
  sheets[0].href = value; //e aggiorna l'attributo del link con il valore imposto dal bottone 
  $('#spotifyFrame').remove(); //rimuove lo spotify frame e l'orologio 
  $('#counter').remove();
  if (value == "2040/2040.css") { //se il valore è 2040, aggiunge l'iframe 
    addSpotify();
  }
  else if (value == "1980/teletext.css") { //altrimenti l'orologio 
    addClock();
  }
}

  


//on top button
var btn = $('#button_scroll');
//bottone di scrolling
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault(); //previene l'attivazione 
  $('html, body').animate({scrollTop:0}, '300');
});

//Navbar bootstrap 
/*NAVBAR*/
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#overlay').toggleClass('active');
  });

  $('#dismiss, #overlay').on('click', function () {
      $('#overlay').removeClass('active');
      $('#sidebar').removeClass('active');
  });
});
