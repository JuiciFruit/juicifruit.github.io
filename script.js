$(function() {
    try {
        $('#accordion').accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
        });
    } catch(e) {
        location.reload();
    }
    
    $('#accordion').show();
    
    $(document).tooltip({
        position: {
            my: 'center',
            at: 'center bottom+25'
        }
    });
    
    $('.dl').each(function() {
        var str = $(this).attr('title');
        if (str.length != 0) {
            str = str + ' - ';
        }
        
        if($(this).hasClass('dl-rec')) {
            str = str + 'Recommended Build';
        } else if($(this).hasClass('dl-beta')) {
            str = str + 'Beta Build';
        } else if($(this).hasClass('dl-dev')) {
            str = str + 'Development Build';
        }
        
        if ($(this).attr('ver').length != 0) {
            str = str + ' - ' + $(this).attr('ver');
        }
        $(this).attr('title', str);
    });
    
    $('.versions').each(function() {
        $(this).attr('title', 'Older Versions');
    });
});

$(document).ready(function() {    
    $('.versions').click(function() {
        var $v = $(this).parent().nextAll('.old');
        $v.toggle('blind', {}, 500);
    });
    
    $('#accordion h3').click(function() {
        $(this).removeClass('ui-state-focus');
    });
    
    $('.nav-button').hover(function() {
        if (!$(this).hasClass('nav-button-selected')) {
            $(this).addClass('nav-button-hover');
        }
    }, function() {
        $(this).removeClass('nav-button-hover');
    });
    
    var menu1 = false;
    var menu2 = false;
    var show = false;
    
    var showMenu = function() {
        if (menu1 || (menu2 && show)) {
            if (!show) {
                $('.menu').show('blind', 200);
                show = true;
            }
        } else if (show) {
            $('.menu').hide('blind', 200);
            show = false;
        }
    }
    
    $('.author').hover(function() {
        menu1 = true;
        showMenu();
    }, function() {
        menu1 = false;
        setTimeout(function() {showMenu();}, 200);
    });
    
    $('.menu').hover(function() {
        menu2 = true;
        showMenu();
    }, function() {
        menu2 = false;
        setTimeout(function() {showMenu();}, 200);
    });
});