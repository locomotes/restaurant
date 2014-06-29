var allergy_info = "This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.";


$('.allergies-icon').hover(function () {
    
    $(this).append('<div>' + allergy_info + '</div>');
  
  }, function () {
  
    //$(this).find('span').remove();
    
});
