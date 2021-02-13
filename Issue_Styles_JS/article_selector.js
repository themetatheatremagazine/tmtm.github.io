//capitalize all the titles of the json object
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function extract_tag(tag_name)//, target)
{ var x = $("."+tag_name).map(function(){return this.innerHTML}).get();
  var x_unique = [...new Set(x)];
  var list_inside = x_unique.join('</li><li onclick = "onClick_tag(this)">');
  content = "<h5>" + capitalize(tag_name) + ":" + '</h5> <li onclick = "onClick_tag(this)">' + list_inside + "</li>";
  //$(target).append(content);
  return content;
};

var lastTagName = "";


function onClick_tag(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  //console.log(e.innerHTML);
  var tagName = e.innerHTML;
  var selectTagName = $("span:contains(" + tagName +")");
  var pointTo = selectTagName[0]; 
  console.log(pointTo.getBoundingClientRect(), document.body.getBoundingClientRect()); 
  var rect1 = pointTo.getBoundingClientRect();
  var rect2 = document.body.getBoundingClientRect();
  var scrollingElement = (document.scrollingElement || document.body);
  var targetPosition = rect1.top - rect2.top;
  scrollingElement.scrollTop = targetPosition; 
  selectTagName.css("background-color", "yellow");
  if (lastTagName != "") {  
    selectTagName = $("span:contains(" + lastTagName +")");  
    selectTagName.css("background-color", "transparent");
  }
  lastTagName = tagName;
};

function postArticle(articleName, issueJsonPath) {
  $.ajax({url: articleName, 
    success: function(result){
    //prepare html to append metadata 
    $('#static').empty();
    $("#filerequest").empty();
    $("#filerequest").html(result);
    $("#metadata").empty();
    $("#metadata").append('<h6>Metadata</h6><ul id="metadataList"></ul> <h6>Class List</h4><div id="accordionEntities"></div> <h6>Metadata Issue</h6><div id="accordion"></div>');
    $("#metadataList").empty();
    //get meta tags AFTER article has been loaded 
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
      $.getJSON(issueJsonPath, function( data ) {
        $("#accordion").empty();
        var counter = 1;
        $.each( data, function( key, val ) {
          var content = [];
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
      namedEntities = ['person', 'entity', 'place'];
      var counterNames = 0;
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
          contents.push(x = extract_tag(namedEntities[counterNames]));
          console.log(contents);
          contents.push('</ul>');
          contents.push('</div>');
          contents.push('</div>');
          contents.push('</div>');
          $('#accordionEntities').append(contents.join(""));
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

  var sheets = $('link'); 
  sheets[0].href = value;
  $('#spotifyFrame').remove();
  $('#counter').remove();
  if (value == "2040/2040.css") {
    addSpotify();
  }
  else if (value.includes("1980/teletext.css")) {
    addClock();
  }
}

  


//on top button
var btn = $('#button_scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

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
