function navigate(page) {
    var button_home = document.getElementById("button_home");
    var button_about = document.getElementById("button_about");
    var button_socials = document.getElementById("button_socials");
    var button_projects = document.getElementById("button_projects");
    var button_credits = document.getElementById("button_credits");
    var button_options = document.getElementById("button_options");

    var container_home = document.getElementById("container_home");
    var container_about = document.getElementById("container_about");
    var container_socials = document.getElementById("container_socials");
    var container_projects = document.getElementById("container_projects");
    var container_credits = document.getElementById("container_credits");
    var container_options = document.getElementById("container_options");

    if (page == 1) {
        button_home.classList.add('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');
        button_credits.classList.remove('text-bold');
        button_options.classList.remove('text-bold');

        container_home.classList.remove('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
        container_credits.classList.add('hidden');
        container_options.classList.add('hidden');
    } else if (page == 2) {
        button_home.classList.remove('text-bold');
        button_about.classList.add('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');
        button_credits.classList.remove('text-bold');
        button_options.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.remove('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
        container_credits.classList.add('hidden');
        container_options.classList.add('hidden');
    } else if (page == 3) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.add('text-bold');
        button_socials.classList.remove('text-bold');
        button_credits.classList.remove('text-bold');
        button_options.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.remove('hidden');
        container_credits.classList.add('hidden');
        container_options.classList.add('hidden');
    } else if (page == 4) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.add('text-bold');
        button_credits.classList.remove('text-bold');
        button_options.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.remove('hidden');
        container_projects.classList.add('hidden');
        container_credits.classList.add('hidden');
        container_options.classList.add('hidden');
    } else if (page == 5) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');
        button_credits.classList.add('text-bold');
        button_options.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
        container_credits.classList.remove('hidden');
        container_options.classList.add('hidden');
    } else if (page == 8) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');
        button_credits.classList.remove('text-bold');
        button_options.classList.add('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
        container_credits.classList.add('hidden');
        container_options.classList.remove('hidden');
    }
};

function changeFont(tag, selection) {
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
    var newValue = document.getElementById('background_image_selector').value;
    var body = document.getElementsByTagName('body');
    
    if (newValue == "Forest") {
        body.style.backgroundImage = "url('assets/background-forest')";
    } else if (newValue == "Astral") {
        body.style.backgroundImage = "url('assets/background-astral')";
    }
}
