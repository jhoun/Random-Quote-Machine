
$("#getQuote").click(function(){

  $.ajax({
    url:"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    cache:false,
    success:function(result){
      var quote = result[0].content;
      var author = result[0].title;
      $("#message").html( quote + "- " + author );
      $("#tweet").click(function(){
        var twtLink = `http://twitter.com/home?status=${encodeURIComponent($(quote).text() + " - " + author)}`;
        window.open(twtLink,'_blank');
      })
  }});
})