function navigate(page) {
	 let containers = [container_home, container_about, container_projects, container_socials, container_credits, container_options];
	 let buttons = [button_home, button_about, button_projects, button_socials, button_credits, button_options];
	
     for (let button of buttons) {
		 button.classList.remove('text-bold');
         button.classList.remove('button-bg');
	 }
	 buttons[page-1].classList.add('text-bold');
     buttons[page-1].classList.add('button-bg2');

	 for (let container of containers) {
		 container.classList.add('hidden');
	 }
	 containers[page-1].classList.remove('hidden');
};

function changeFont(tag) {
    var selector;
    if (tag == 'h') {
        selector = document.getElementById('header_font_selector');
        var newValue = selector.value;

        if (newValue == 'Cal Sans') {
            Array.from(document.getElementsByClassName('text-font-dynapuff')).forEach((element) => {
                if (element.tagName != 'OPTION' && element.tagName != 'H6') {
                    element.classList.remove('text-font-dynapuff');
                    element.classList.add('text-font-calsans');
                }
            });
        } else if (newValue == 'DynaPuff') {
            Array.from(document.getElementsByClassName('text-font-calsans')).forEach((element) => {
                if (element.tagName != 'OPTION' && element.tagName != 'H6') {
                    element.classList.remove('text-font-calsans');
                    element.classList.add('text-font-dynapuff');
                }
            });
        }   
    }
}

function changeBackground() {
    var newValue = background_image_selector.value;
    var body = document.getElementsByTagName('body');
    
    if (newValue == "Forest") {
        body.style.backgroundImage = "url('assets/background-forest')";
    } else if (newValue == "Astral") {
        body.style.backgroundImage = "url('assets/background-astral')";
    }
}
