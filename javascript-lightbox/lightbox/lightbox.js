(function($){

	$.fn.lightbox = function(){
		_click = this;
		//
		_click.click(function(){
			$(this).clicklightbox($(this).attr('href'));
			return false;
		})
	};

	$.fn.clicklightbox = function(_target){
			$.fn.constructlightbox(_target);
		}

	$.fn.constructlightbox = function (_target){
			//$.fn.getcontentlightbox(_target);
			lightbox ='<div id="boxes">';
				lightbox +='<div id="lightbox">';
					lightbox +='<div class="fechar"><a href="#">Fechar</a></div>';
					lightbox +='<div id="content-lightbox"></div>';
				lightbox +='</div>';
				lightbox +='<div id="mask">';
				lightbox +='</div>';
			lightbox +='</div>';
			//
			$("body").append(lightbox);
			$("#content-lightbox").load(_target);
			$(".fechar a, #mask").click(function(){
				$.fn.fechaLightbox();
				return false;
			})
			//
			$.fn.positionlightbox();
			//
			$(window).resize(function() {
			  $.fn.positionlightbox();
			});
		}

	$.fn.positionlightbox = function(){
			var maskHeight = $(window).height();
			var maskWidth = $(window).width();
			$('#mask').css({'width':maskWidth,'height':maskHeight,'display':'block'});
			var lbHeight = $('#lightbox').height()
			var lbWidth =  $('#lightbox').width();
			positiontop = maskHeight/2-lbHeight/2;
			positionleft = maskWidth/2-lbWidth/2;
			$('#lightbox').css({'top': positiontop ,'left': positionleft});
			$('#lightbox iframe').css({'width':lbWidth,'height':lbHeight});
		}
	$.fn.fechaLightbox = function(){
		$('#boxes').remove();
		}
})(jQuery);