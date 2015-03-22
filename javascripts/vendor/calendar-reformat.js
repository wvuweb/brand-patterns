$(function(){ 
  
  var month = [];
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  $('.wvu-calendar .eventDate').each(function(i, event) {
    ev = {}
    ev.date = new Date($(this).text());
    ev.month = month[ev.date.getMonth()];
    ev.day = ev.date.getDate();

    $(this).html('<span class="calEventMonth">' + ev.month + '</span><span class="calEventDay">' + ev.day + '</span>')

    ev.title = $(event).find('a').text();
  });
  
});