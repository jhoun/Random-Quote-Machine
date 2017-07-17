$("button").click(function(){

  $.ajax({url:"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", cache:false, success:function(result){
    $("#message").html(result[0].content + "- " + result[0].title);
  }});
})