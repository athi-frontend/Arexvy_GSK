var main_tag = main_tag || '#main';
var isi_tag = isi_tag || '#isi';

this.isi = document.querySelector(isi_tag);
let main = document.querySelector(main_tag);

this.isi.classList.add('fixed');

main.insertAdjacentHTML('afterend', '<div id="trigger-up"></div>');
main.insertAdjacentHTML('beforeend', '<div id="trigger-down"></div>');

let triggerUp = document.getElementById('trigger-up');
let triggerDown = document.getElementById('trigger-down');

let observer = new IntersectionObserver((e) => {
	if(e[0].isIntersecting == true){
		if(e[0].target == triggerUp){
			this.isi.classList.remove('fixed');
			$('#isi').removeClass("collapsed");
			observer.unobserve(triggerUp);
			observer.observe(triggerDown);
		}
		if(e[0].target == triggerDown){
			this.isi.classList.add('fixed');
			this.isi.classList.add('collapsed')
			observer.unobserve(triggerDown);
			observer.observe(triggerUp);
			$('#main').addClass("collapsed");
		}
	}
},
{
	threshold: 1,
});
$(function(){
	$(window).on('wheel', function(e) {
		var delta = e.originalEvent.deltaY;
		var aTop = $('.fixed').height();
		if (delta > 0){
			
		  if($(this).scrollTop()>aTop){
				$('#isi').addClass("collapsed");
		  }
		} 
		else{ 
			if($('body').hasClass('pop-video'))
				{
					$('#isi').removeClass('collapsed')
				}
				else{
					if($(this).scrollTop()<aTop){
					$('#isi').removeClass('collapsed');
				}
			}
		
		} 
	  });
  });

  document.addEventListener('scroll', (e) => {
				var delta = $(window).scrollTop();
				var aTop = $('.fixed').height();
				if (delta > 0){
					
				  if($(this).scrollTop()>aTop){
						$('#isi').addClass("collapsed");
				  }
				} 
				else{ 
					if($('body').hasClass('pop-video'))
						{
							$('#isi').removeClass('collapsed')
						}
						else{
							if($(this).scrollTop()<aTop){
							$('#isi').removeClass('collapsed');
						}
					}
				
				} 
			  });

observer.observe(triggerUp);

document.addEventListener('scroll', (e) => {
	//onLoad();
    // if ($(this).scrollTop() > 50) {
    //    $('#main').addClass('collapsed2');
    // } else {
    //    $('#main').removeClass('collapsed2');
    // }
});

// $(window).scroll(function(){
//  var aTop = $('.fixed').height();
//  var expandstart = $('.active-expand').offset().top;
// var expandend = $('.active-expand>.bio-video-content').offset().top;
//  if($(this).scrollTop()>aTop){
// if(($(this).scrollTop()>expandstart && $(this).scrollTop()<expandend) && $('body').hasClass('pop-video')){
//  $('#isi').removeClass('collapsed');
// }
//  else{
//  $('#isi').addClass("collapsed");
// }
// }
// if($(this).scrollTop()<aTop){
// $('#isi').removeClass('collapsed');
//  } });

$(function() {
	$("#isi-btn").click(function(){
		$("#isi").toggleClass("isi-expand");
		$(".isi-icon-up").toggleClass("isi-icon-down");
		$(".isi_scroll ").toggleClass("isi-expan-height");
		$("body").toggleClass("isi-data");
	});
});

$(document).ready(function(){
// 	var newHeight = "15vh";
// $(".fixed").height(newHeight);
});
// $(".fixed").get(0).style.setProperty("--height", "15vh");
// $(".fixed.collapsed").get(0).style.setProperty("--min-height", "50px");
// $(".collapsed + #trigger-up + .fixed").get(0).style.setProperty("--min-height", "50px");
