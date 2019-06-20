jQuery( document ).ready(function($){

  $("a.smooth-scroll").each(function() {
   var $this = $(this);
   var _href = $this.attr("href");
   $this.attr("href", 'https://scarboroughosteopathy.com' + _href);
 });

});
