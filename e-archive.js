// javascript
// self explanitory i think

function navigate(page) {
    var button_home = document.getElementById("button_home");
    var button_about = document.getElementById("button_about");
    var button_socials = document.getElementById("button_socials");
    var button_projects = document.getElementById("button_projects");

    var container_home = document.getElementById("container_home");
    var container_about = document.getElementById("container_about");
    var container_socials = document.getElementById("container_socials");
    var container_projects = document.getElementById("container_projects");

    if (page == 1) {
        button_home.classList.add('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');

        container_home.classList.remove('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
    } else if (page == 2) {
        button_home.classList.remove('text-bold');
        button_about.classList.add('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.remove('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.add('hidden');
    } else if (page == 3) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.add('text-bold');
        button_socials.classList.remove('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.remove('hidden');
        container_projects.classList.add('hidden');
    } else if (page == 4) {
        button_home.classList.remove('text-bold');
        button_about.classList.remove('text-bold');
        button_projects.classList.remove('text-bold');
        button_socials.classList.add('text-bold');

        container_home.classList.add('hidden');
        container_about.classList.add('hidden');
        container_socials.classList.add('hidden');
        container_projects.classList.remove('hidden');
    }
};

