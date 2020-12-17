$('.question').click(function(){
    $(this).next().toggle();
})

$('#faq-accordeon-nthchild ul li:nth-child(odd)').click(function(){
    $(this).next().toggle();
})