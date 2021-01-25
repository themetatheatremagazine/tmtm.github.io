//capitalize all the titles of the json object
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function extract_tag(tag_name, target)
{ var x = $("."+tag_name).map(function(){return this.innerHTML}).get();
  var x_unique = [...new Set(x)];
  var list_inside = x_unique.join('</li><li onclick = "onClick_tag(this)">');
  content = "<h5>" + capitalize(tag_name) + ":" + '</h5> <li onclick = "onClick_tag(this)">' + list_inside + "</li>";
  $(target).append(content);
  return x_unique;
};

var lastTagName = "";

function onClick_tag(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  //console.log(e.innerHTML);
  var tagName = e.innerHTML;
  var selectTagName = $("span:contains(" + tagName +")");
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
    $("#metadata").append('<h4>Metadata</h4><ul id="metadataList"></ul> <h4>Class List</h4><ul id="classList"></ul> <h4>Metadata Issue</h4><div id="accordion"></div>');
    $("#metadataList").empty();
    //get meta tags AFTER article has been loaded 
    var title = $("meta[name='DC.title']").attr('content');
    var creator = $("meta[name='DC.creator']").attr('content');
    var publisher = $("meta[name='DC.publisher']").attr('content');
    var date = $("meta[name='DCTERMS.issued']").attr('content');
    var uri = $("meta[name='DC.identifier']").attr('content');
    //append meta tags to Metadata List on the right 
    $("#metadataList").append("<li> Title: <a href='#'>" + title + "</a></li>");
    $("#metadataList").append("<li> Author: <a href='#'>" + creator + "</a></li>");
    $("#metadataList").append("<li> Publisher: <a href='#'>" + publisher + "</a></li>");
    $("#metadataList").append("<li> Date: <a href='#'>" + date + "</a></li>");
    $("#metadataList").append("<li> URI: <a href=" + uri + "> Link </a></li>");
    //retrieve arrays of span classess.htmls 
 
    /*SCRAP === issueFile = $.getJSON('Issue_Unusual/unusualJson.json');
      metaDict = issueFile.responseJSON;
      console.log(issueFile);
      metaDict = $.getJSON("Issue_Unusual/unusual.json", function(json) {
        console.log(json); // this will show the info it in firebug console*/
    
    //append json of the issue: each article of the same issue HAS THE SAME JSON FILE
      $.getJSON(issueJsonPath, function( data ) {
        $("#accordion").empty();
        var counter = 1;
        $.each( data, function( key, val ) {
          var content = [];
          //the html is built BEFORE being appended to the #accordion to avoid closing tags automatically
          content.push('<div class="card">');
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
            content.push('<p><strong>' + capitalize(key2) + '</strong>: <a href="'+ val2 + '"> Link </a></p>');
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
      //
      var person = extract_tag('person', "#classList");
      var entity = extract_tag('entity', "#classList");
      var place = extract_tag('place', "#classList");
}});};


function toggleTheme(value) { 
  //css as a parameter; takes the FIRST link tag, so the switching css anchor must always be on top of the head. 
  var sheets = document .getElementsByTagName('link'); 

  sheets[0].href = value; 
} 


//on top button
var btn = $('#button');

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

