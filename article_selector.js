const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function postArticle(articleName, issueJsonPath) { //try bastard function 
  $.ajax({url: articleName, 
    success: function(result){
    $('#static').empty();
    $("#filerequest").empty();
    $("#filerequest").html(result).fadeIn("slow");
    $("#metadata").empty();
    $("#metadata").append('<h4>Metadata</h4><ul id="metadataList"></ul><h4>Metadata Issue</h4><div id="accordion"></div>')
    $("#metadataList").empty();
    var title = $("meta[name='DC.title']").attr('content');
    var creator = $("meta[name='DC.creator']").attr('content');
    var publisher = $("meta[name='DC.publisher']").attr('content');
    var date = $("meta[name='DCTERMS.issued']").attr('content');
    var uri = $("meta[name='DC.identifier']").attr('content');

    $("#metadataList").append("<li> Title: <a href='#'>" + title + "</a></li>");
    $("#metadataList").append("<li> Author: <a href='#'>" + creator + "</a></li>");
    $("#metadataList").append("<li> Publisher: <a href='#'>" + publisher + "</a></li>");
    $("#metadataList").append("<li> Date: <a href='#'>" + date + "</a></li>");
    $("#metadataList").append("<li> URI: <a href=" + uri + "> Link </a></li>");
  /*
    issueFile = $.getJSON('Issue_Unusual/unusualJson.json');
    metaDict = issueFile.responseJSON;
    console.log(issueFile);*/
/*
    metaDict = $.getJSON("Issue_Unusual/unusual.json", function(json) {
      console.log(json); // this will show the info it in firebug console*/
      $.getJSON(issueJsonPath, function( data ) {
        $("#accordion").empty();
        var counter = 1;
        $.each( data, function( key, val ) {
          var content = [];
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
          content.push('</div>');
          content.push('</div>');
          content.push('</div>');
          $('#accordion').append(content.join(""));
          counter = counter+1;
        });
      });
}});};


function toggleTheme(value) { 
  // Obtain the name of stylesheet  
  // as a parameter and set it  
  // using href attribute. 
  var sheets = document .getElementsByTagName('link'); 

  sheets[0].href = value; 
} 
