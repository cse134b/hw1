Element.prototype.addClass = function(className){
	this.className += (" "+className);
}

Element.prototype.removeClass = function(className){
	var oldClass = this.className;
	this.className = oldClass.replace((" "+className), "");
}

Element.prototype.hasClass = function(className){
	if(this.className.indexOf(className) < 0){
		return false;
	}
	return true;
}

Element.prototype.toggleClass = function(className){
	if(this.hasClass(className)){
		this.removeClass(className);
	}
	else{
		this.addClass(className);
	}
}

window.onload = function() {

	var starfox_audio1 = document.getElementById('starfox_sound1');
	var starfox_audio2 = document.getElementById('starfox_sound2');
	starfox_audio1.addEventListener('ended', function(){
		setTimeout(function() {starfox_audio2.play();},100);
	}, false);
	starfox_audio1.load();
	starfox_audio2.load();

	var top_nav_items = document.getElementById('top_nav').getElementsByClassName('nav_item');
	var active_nav_item = top_nav_items[0];
	console.log(top_nav_items);
	var navbar_onclick = function(e){
		active_nav_item.removeClass('active');
		if(e.target.hasClass('nav_item')){
			e.target.addClass('active');
			active_nav_item = e.target;
		}
		else{
			e.target.parentElement.addClass('active');
			active_nav_item = e.target.parentElement;
		}
	}
	var navbar_onclick_sound = function(e){
		active_nav_item.removeClass('active');
		if(e.target.hasClass('nav_item')){
			e.target.addClass('active');
			active_nav_item = e.target;
		}
		else{
			e.target.parentElement.addClass('active');
			active_nav_item = e.target.parentElement;
		}
		starfox_audio1.play();
	}
	for(var i=0; i<top_nav_items.length; i++){
		if(i==(top_nav_items.length-1)){
			top_nav_items[i].onclick = navbar_onclick_sound;
		}
		else{
			top_nav_items[i].onclick = navbar_onclick;
			}
	}
	
	var sound_played = false;
	var anchors = document.getElementsByClassName('a_target');
	
	window.onscroll = function(){
		for(var i = 0; i<anchors.length; i++){
			var position = anchors[i].getBoundingClientRect();
			if(position.top <= 90 && position.bottom > 0){
				active_nav_item.removeClass('active');
				top_nav_items[i].addClass('active');
				active_nav_item = top_nav_items[i];
				if(i==(anchors.length-1) && !sound_played){
					starfox_audio1.play();
					sound_played = true;
				}
			}
		}
	}
	
	var fox_audio = document.getElementById('fox_audio');
	var fox_img = document.getElementById('fox_img');
	fox_img.onclick = function(e){
		fox_audio.play();
	}
	
	var peppy_audio = document.getElementById('peppy_audio');
	var peppy_img = document.getElementById('peppy_img');
	peppy_img.onclick = function(e){
		peppy_audio.play();
	}
	
	var falco_audio = document.getElementById('falco_audio');
	var falco_img = document.getElementById('falco_img');
	falco_img.onclick = function(e){
		falco_audio.play();
	}
	
	var slippy_audio = document.getElementById('slippy_audio');
	var slippy_img = document.getElementById('slippy_img');
	slippy_img.onclick = function(e){
		slippy_audio.play();
	}
	
	
	
	
	
	
};