var navigation = responsiveNav(".nav-collapse, .wvu-nav ul", {
  insert: "before",
  transition: 600
});

$('.inactive-search').click(function() {
  $(this).toggleClass('active-search');
});