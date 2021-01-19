function postArticle(articleName) {
  $.ajax({url: articleName, success: function(result){
    $("#style2040").html(result);
}});};

