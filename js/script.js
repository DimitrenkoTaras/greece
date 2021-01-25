$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
    
    $('.destinations__col_7, .destinations__col_8, .destinations__col_9').hide();
    $('.destinations__btn').click(function(event) {
        $('.destinations__col_7, .destinations__col_8, .destinations__col_9').show();
        $('.destinations__btn').hide();
    });
});