// Changed selector from #quicklinks to #js-quicklinks

$(function(){
  $('#js-quicklinks').setup_navigation();
});

$.fn.setup_navigation = function(settings) {
  settings = jQuery.extend({
    menuHoverClass: 'show-menu',
  }, settings);
  
  var top_level_links = $(this).find('> li > a');
  
  // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
  $(top_level_links).next('ul').find('a').attr('tabIndex',-1);
  
  $(top_level_links).hover(function(){
    $(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);
  });
  $(top_level_links).focus(function(){
    $(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);
    $(this).next('ul')
      .addClass(settings.menuHoverClass)
      .find('a').attr('tabIndex',0);
  });
  
  // Bind arrow keys for navigation
  $(top_level_links).keydown(function(e){
    if(e.keyCode == 37) {
      // This is the first item
      if($(this).parent('li').prev('li').length == 0) {
        $(this).parents('ul').find('> li').last().find('a').first().focus();
      } else {
        $(this).parent('li').prev('li').find('a').first().focus();
      }
    } else if(e.keyCode == 38) {
      if($(this).parent('li').find('ul').length > 0) {
        $(this).parent('li').find('ul').find('a').last().focus();
      }
    } else if(e.keyCode == 39) {
      // This is the last item
      if($(this).parent('li').next('li').length == 0) {
        $(this).parents('ul').find('> li').first().find('a').first().focus();
      } else {
        $(this).parent('li').next('li').find('a').first().focus();
      }
    } else if (e.keyCode == 40) {
      if($(this).parent('li').find('ul').length > 0) {
        $(this).parent('li').find('ul').find('a').first().focus();
      }
    }
  });
  
  
  var links = $(top_level_links).parent('li').find('ul').find('a');
  $(links).keydown(function(e){
    if(e.keyCode == 38) {
      // This is the first item
      if($(this).parent('li').prev('li').length == 0) {
        $(this).parents('ul').parents('li').find('a').first().focus();
      } else {
        $(this).parent('li').prev('li').find('a').first().focus();
      }
    } else if(e.keyCode == 40) {
      if($(this).parent('li').next('li').length == 0) {
        $(this).parents('ul').parents('li').find('a').first().focus();
      } else {
        $(this).parent('li').next('li').find('a').first().focus();
      }
    }
  });

    
  // Hide menu if click or focus occurs outside of navigation
  $(this).find('a').last().keydown(function(e){ 
    if(e.keyCode == 9) {
      // If the user tabs out of the navigation hide all menus
      $('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);
    }
  });
  $(document).click(function(){ $('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1); });
  
  $(this).click(function(e){
    e.stopPropagation();
  });
}