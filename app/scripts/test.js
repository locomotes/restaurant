var item;
appitems.appetizers.forEach(function (a) {
  //$('.hero-unit').append(a.title);

 item = '<p>' + a.item + '</p>';

 $('.box').append(template);