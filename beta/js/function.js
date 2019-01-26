//variaveis globais
var swiperProject = [];

$(document).ready(function(){

		initSlider();
		visibilidadeBox();

		if(window.innerWidth < 960){
				removeInvert();
		}else{
				adicionaInvert();
		}

		$(window).on('scroll', function(){
				visibilidadeBox();
		});

		$(window).on('resize', function(){
				if(window.innerWidth < 960){
						removeInvert();
				}else{
						adicionaInvert();
				}
		});

});

//define se box project esta na tela para aplicar transiçao removendo ou adicionando
function visibilidadeBox(){
		$('.box-project').each(function(){
				if($(this).isOnScreen()){
						$(this).addClass('show');
				}else{
						$(this).removeClass('show');
				}
		});
}

//remove classe invert quanod mobile
function removeInvert(){
		$('.box-project').removeClass('invert');
}

//adiciona classe invert quanod mobile
function adicionaInvert(){
		$('.box-project:nth-child(even)').addClass('invert');
}

//inicia js dos slides das imagens dos projetos
function initSlider(){
		$('.swiper-container.project').each(function(){
				swiperProject = new Swiper('.swiper-container.project', {
					effect: 'coverflow',
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: 1,
					coverflowEffect: {
						rotate: 30,
						stretch: 0,
						depth: 100,
						modifier: 4,
						slideShadows : false,
					},
					// pagination: {
					//   el: '.swiper-pagination',
					// },
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
		})
}

//return false ou true para se elemento esta na tela
//ex: $('.elemento').isOnScreen()
$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
				top : win.scrollTop(),
				left : win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		if(bounds == undefined){
			return false;
		}

		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
