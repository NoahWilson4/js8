$(document).on('ready', function() {

	var picturesSlide = ['<img src="1.jpg" class="slide-pic">','<img src="2.jpg" class="slide-pic">', '<img src="3.jpg" class="slide-pic">','<img src="4.jpg" class="slide-pic">', '<img src="5.jpg" class="slide-pic">','<img src="6.jpg" class="slide-pic">', '<img src="7.jpg" class="slide-pic">','<img src="8.jpg" class="slide-pic">', '<img src="9.jpg" class="slide-pic">','<img src="10.jpg" class="slide-pic">', '<img src="11.jpg" class="slide-pic">','<img src="12.jpg" class="slide-pic">', '<img src="13.jpg" class="slide-pic">','<img src="14.jpg" class="slide-pic">', '<img src="15.jpg" class="slide-pic">','<img src="16.jpg" class="slide-pic">']
	 	
	 	$(document).on('click', '.previous', function(){
	 		$('.slide').empty();
			i--;
			if (i < 0) {
				i = picturesSlide.length - 1;
			}
			$('.slide').append(picturesSlide[i]);

	 	});

	 function viewTheSlideShow(i){
		
	 	$('.photos').append('<div class="background">Press esc to Exit Slideshow</div>');
	 	$('.background').css({
	 						position: 'fixed',
	 						top: 0,
	 						left: 0,
	 						bottom: 0,
	 						right: 0,
	 						background: 'black',
	 						color: 'gray',
	 						fontWeight: '100'

	 		});
	 	var maxSlideHeight = $(window).height - 25;
	 	var maxSlideWidth = $(window).width - 25;
	 	$('.slide').css({
	 					maxHeight: maxSlideHeight,
	 					maxWidth: maxSlideWidth
	 	});
	 	var maxPicHeight = $('.slide').height;
	 	$('.slide-pic').css({
	 					margin: 'auto',
	 					maxHeight: maxPicHeight,
	 					maxWidth: maxSlideWidth
	 	});
	 	


	 	$('.background').append('<div class="slide"></div>');
	 	$('.slide').append(picturesSlide[i]);
		
		var slideTimer = setInterval(function(){
			if(playPause === true) {
				$('.slide').empty();
				i++;
				$('.slide').append(picturesSlide[i]);
				if (i === picturesSlide.length - 1) {
					i = -1;
				}
			}
		}, 3000);
	
	 	$(document).on('click', '.next', function(){
	 		$('.slide').empty();
				i++;
				if (i === picturesSlide.length - 1) {
					i = 0;
				}
				$('.slide').append(picturesSlide[i]);
	 	});
	 	if (playPause === true){
			$('.background').append('<div class="buttons"><button class="sb previous">Previous Pic</button><button class="sb pause">Pause</button><button class="sb next">Next Pic</button></div>');	
		} else {
				$('.background').append('<div class="buttons"><button class="sb previous">Previous Pic</button><button class="sb resume">Play</button><button class="sb next">Next Pic</button></div>');
		}
		 	
	 	$('.previous').css({
	 						position: 'fixed',
	 						bottom: 0,
	 						left: 0,
	 						borderRadiusTopRight: 5
	 					});
	 	$('.next').css({
	 						position: 'fixed',
	 						bottom: 0,
	 						left: 219,
	 						borderRadiusTopLeft: 5
	 					});
	 	$('.pause').css({
	 						
	 						width: 100,
	 						bottom: 0,
	 						position: 'fixed',
	 						left: 120
	 				});
	 	$('.resume').css({
	 						
	 						width: 100,
	 						bottom: 0,
	 						position: 'fixed',
	 						left: 120
	 				});
	 
		$(document).on('click', '.pause', function(){
	 		playPause = false;
	 		$('.buttons').remove();
	 		$('.background').append('<div class="buttons"><button class="sb previous">Previous Pic</button><button class="sb resume">Play</button><button class="sb next">Next Pic</button></div>');
	 	
	 		$('.previous').css({
		 						position: 'fixed',
		 						bottom: 0,
		 						left: 0,
		 						borderRadiusTopRight: 5
		 					});
		 	$('.next').css({
		 						position: 'fixed',
		 						bottom: 0,
		 						left: 219,
		 						borderRadiusTopLeft: 5
		 					});
		 	$('.pause').css({
		 						
		 						width: 100,
		 						bottom: 0,
		 						position: 'fixed',
		 						left: 120
		 				});
		 	$('.resume').css({
		 						
		 						width: 100,
		 						bottom: 0,
		 						position: 'fixed',
		 						left: 120
		 				});
		 });
	 	$(document).on('click', '.resume', function(){
	 		playPause = true;
	 		$('.buttons').hide();
	 		$('.background').append('<div class="buttons"><button class="sb previous">Previous Pic</button><button class="sb pause">Pause</button><button class="sb next">Next Pic</button></div>');
	 		
	 	
		 	$('.previous').css({
			 						position: 'fixed',
			 						bottom: 0,
			 						left: 0,
			 						borderRadiusTopRight: 5
			 					});
			 	$('.next').css({
			 						position: 'fixed',
			 						bottom: 0,
			 						left: 219,
			 						borderRadiusTopLeft: 5
			 					});
			 	$('.pause').css({
			 						
			 						width: 100,
			 						bottom: 0,
			 						position: 'fixed',
			 						left: 120
			 				});
			 	$('.resume').css({
			 						
			 						width: 100,
			 						bottom: 0,
			 						position: 'fixed',
			 						left: 120
			 				});
	 
		 });	
	 			
	 	

	 	$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('.background').remove();
			}
		});
		
	 	
	 };

	 var i = 0;
	 $('.view-slideshow').on('click', function(){
		i = 0;
		playPause = true;
		viewTheSlideShow(i);
	});
	$('.p1').on('click', function(){
		i = 0;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p2').on('click', function(){
		i = 1;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p3').on('click', function(){
		i = 2;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p4').on('click', function(){
		i = 3;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p5').on('click', function(){
		i = 4;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p6').on('click', function(){
		i = 5;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p7').on('click', function(){
		i = 6;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p8').on('click', function(){
		i = 7;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p9').on('click', function(){
		i = 8;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p10').on('click', function(){
		i = 9;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p11').on('click', function(){
		i = 10;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p12').on('click', function(){
		i = 11;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p13').on('click', function(){
		i = 12;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p14').on('click', function(){
		i = 13;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p15').on('click', function(){
		i = 14;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.p16').on('click', function(){
		i = 15;
		playPause = false;
		viewTheSlideShow(i);
	});
	$('.view-slideshow').on('click', function(){
		i = 0;
		playPause = true;
		viewTheSlideShow(i);
	});

});























