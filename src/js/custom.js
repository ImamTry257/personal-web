import $ from 'jquery/dist/jquery.min.js';

$('div.main_menu').each(function(){

    $(this).on('mouseenter',function(){
        $(this).addClass('after_click');
        if($(this).hasClass('main_menu')){
            var menu = $(this);
            runMenu(menu)
        }
    })

    $(this).on('click',function(e){
        if($(this).attr('class') == 'main_menu'){
            e.preventDefault();
            $(this).addClass('after_click');
            if($(this).hasClass('main_menu')){
                runMenu($(this))
            }
        }
    })

    $(this).on('mouseleave',function(){
        if($(this).hasClass('main_menu')){
            $(this).removeClass('active_menu');
            $(this).next().hide()
        }
    })
})

$('div.sub_menu').on('mouseenter',function(){
    $(this).show()
    $(this).prev().addClass('active_menu')
    if($(this).prev().hasClass('active_sub_menu')){
        $(this).prev().addClass('active_menu');
    }
})

$('div.sub_menu').on('mouseleave',function(){
    $(this).prev().removeClass('active_menu')
    $('div.sub_menu').each(function(){
        $(this).removeClass('active_sub_menu');
    })
    $(this).hide()
})

$('#navbar-tbl').on('click',function(){
    $('div.sub_menu').each(function(){
        $(this).hide();
    })
})

runHeaderMenu();

runModalLogin()

// detection distance div to top
$(window).scroll(function() {
    runHeaderMenu();
})

$(window).on('resize',function(){
    runModalLogin()
})

function runMenu(menu){
    menu.addClass('active_menu');
    menu.next().show()
    menu.next().addClass('active_sub_menu')
}

function runHeaderMenu(){
    var distance = String ($(window).scrollTop());
    if(Math.round(distance) > Number (85)){
        $('.menu').addClass('scroll_menu');
        if(window.outerWidth > 993){
            $('#navbarNavDropdown').addClass('center_menu');
        }
    }else{
        $('.menu').removeClass('scroll_menu');
        $('#navbarNavDropdown').removeClass('center_menu');
    }
    runActiveMenu(distance)
}

function runActiveMenu(distance){
    $('.main_menu').children().each(function(e){
        if($(this).hasClass('actived') == true){
            if(Math.round(distance) > Number (85)){
                $(this).css('color','white')
            }else{
                $(this).css('color','#ff049d')
            }
        }
    })
}

function runModalLogin(){
    if(window.outerWidth < 993){
        $("li#li-menu").hide();

        var login = $('a.login-title');
        login.attr('data-toggle','modal');
        login.attr('data-target','#exampleModalCenter');

        login.on('click',function(e){
            e.preventDefault();
        })

        $('ul.nav.navbar-nav.navbar-center').removeClass('navbar-center')
    }else{
        $("li#li-menu").show();
    }
}


// click menu features
// $('.link-home-menu').on('click',function(e){
//     e.preventDefault()
//     $("html, body").animate({ scrollTop: 0 }, 1000, 'swing');
// })

// click menu features
// $('.link-fitur-menu').on('click',function(e){
//     e.preventDefault()
//     $("html, body").animate({ scrollTop: Number ($('#title-fitur')[0].offsetTop) - Number (85) }, 1500, 'swing');
// })

// click menu kontak kami
$('.link-kontak-kami-menu').on('click',function(e){
    e.preventDefault()
    $("html, body").animate({ scrollTop: Number ($('.info')[0].offsetTop) - Number (85) }, 1500, 'swing');
})

// js to header menu
$("button").click(function(){

    if($("button").text() == "☰"){
      $("button").text("☰");
    }else{
      $("button").text("☰");
    }

    $('li#li-menu').toggle(500);
    // $("#parent-li").slideToggle();
});


// list title
$('ul#ul-title').hide()
$('li#month i.fa-angle-down').hide();

$('li#month').click(function(){
    $(this).css('cursor','pointer');

    $(this).children().first().show();
    $(this).children().first().next().hide();

    if($(this).hasClass('after_click')){
        $(this).children().first().hide();
        $(this).children().first().next().show();
        $(this).removeClass('after_click')
        $(this).removeClass('bold')
    }else{
        $(this).addClass('after_click');
        $(this).addClass('bold')
    }

    $(this).children().last().slideToggle();
})
// list title
