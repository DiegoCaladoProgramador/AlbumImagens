$(document).ready(function(){
    //document.querySelector('header button'); == $('header button');
    //document.querySelector('header button').addEventListener('click', function(){})  == $('header button').click(function(){})
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(){
        console.log("submit");
        e.preventDefault();
    })
})