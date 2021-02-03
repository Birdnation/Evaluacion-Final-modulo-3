const p1 = $('#p1');
var concatena1 = '';
var concatena2 = '';
var contador = 0;

$('#adjuntar1').on('click',()=>{
    const texto = '<p>Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo</p> ';
    concatena1 = concatena1 + texto
    $(p1).html(concatena1);
})

$('#obtener1').on('click', ()=>{
    contador = 0;

    for (const i of $(p1).children()) {
        const texto = $(i).html();
        concatena2 = concatena2 +texto
        contador++;
    }
    alert(`Hay ${contador} párrafos y contiene: \n ${concatena2} \n`) 
});

$('#agregar2').on('click', ()=>{
    $('.addClass2').css('color','red');
})

$('#slide3').on('click',()=>{
    $('#img1').slideToggle();
})


$('#agregar3').on('click',()=>{
    $('#append').append('<p>Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo</p>');
});

$('#valor4').on('click', ()=>{
    alert($('#input4').val())
})

$('#fadeIn5').on('click', ()=>{
    $('#img5').fadeIn();
})

$('#fadeOut5').on('click', ()=>{
    $('#img5').fadeOut();
})

$("#focus6").on('click', () => {
    $("#input6").on('focus', () => {
        alert("Focus Activo")
    });
});

$('#hide7').on('click', ()=>{
    $('#p7').hide();
})

$('#show7').on('click', ()=>{
    $('#p7').show();
})


$('#slideUp8').on('click', (e)=>{
    $('#p8').slideUp();
})

$('#slideDown8').on('click', ()=>{
    $('#p8').slideDown();
})
