/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('.tabs').tabs();
});
//sidenav mobile. menu lateral em telas pequenas.
$(document).ready(function () {
    $('.sidenav').sidenav();
});
//MODAL: 
$(document).ready(function(){
    $('.modal').modal();
  });
  //FOOTER - TOOLTIPED BOTÕES DE REDES SOCIAIS: aparece uma caixa de diálogo com a informação.
$(document).ready(function () {
    $('.tooltipped').tooltip();
});



//dropdown: faz a lista aparecer abaixo do menu quando o mouse está posicionado sobre ele.
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        coverTrigger: false,
        hover: true
    });
});
//PUSHPIN(transição da navbar)
$('.pushpin-nav').each(function () {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});



