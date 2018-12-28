$(document).ready(function(){

	$("#logotipo").on("mouseover",function(){
		
		$("#banner h1").addClass("efeito");

	}).on("mouseout", function(){

		$("#banner h1").removeClass("efeito");

	});

	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");				

	});

	$(".thumbnails").owlCarousel({
 
      //autoPlay: 3000,
      items : 4
 
  	});

  	var owl = $(".thumbnails").data('owlCarousel');

  	$('#btn-news-prev').on("click", function(){

  		owl.prev();

  	});

  	$('#btn-news-next').on("click", function(){

  		owl.next();
  		
  	});

  	$("#page-up").on("click", function(event){
    
    	$("html, body").stop().animate({
      		scrollTop:0 // para voltar pro topo
    	}, 1000); // para fazer a animação de 1 segundo
    	event.preventDefault(); // para cancelar o clique padrão dentro do <a href="#"
 	});

 	/*$("#page-up").on("click", function(event){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        event.preventDefault();
    });*/

    $("#btn-bars").on("click", function(){
    	$("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click", function(){
    	$("header").removeClass("open-menu");
    });

    $("#btn-search").on("click", function(){
    	$("header").toggleClass("open-search");
    	$("#input-search-mobile").focus();
    });

});