function postArticle(articleName) {
  $.ajax({url: articleName, success: function(result){
    $("#articleshower").html(result);
}});};
