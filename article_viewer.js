function postArticle(articleName) {
  $.ajax({url: articleName, success: function(result){
    $("#filerequest").html(result);
}});};

