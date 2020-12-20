//FAQ Accordeon using classes (questions 1-4)

$('.question').click(function(){
    $(this).next().toggle();
})

//FAQ Accordeon using pseudo class ::nth-child (questions 5-8)

$('#faq-accordeon-nthchild ul li:nth-child(odd)').click(function(){
    $(this).next().toggle();
})