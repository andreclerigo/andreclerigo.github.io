//Function for side bar collapse on button
$(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
    });
});

// Smooth scrolling on navlink
$('.nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});