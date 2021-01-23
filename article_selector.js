const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function postArticle(articleName, issueJsonPath) { //try bastard function 
  $.ajax({url: articleName, 
    success: function(result){
    $("#filerequest").empty();
    $("#filerequest").html(result);
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

      
      /* <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>
          $('#accordion').append('');

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>*/ 
}});};


function toggleTheme(value) { 
  // Obtain the name of stylesheet  
  // as a parameter and set it  
  // using href attribute. 
  var sheets = document .getElementsByTagName('link'); 

  sheets[0].href = value; 
} 
