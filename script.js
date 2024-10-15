const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

function checkCode() {
    const code = document.getElementById('access-code').value;
    const correctCode = "equalkidzuf-ljudböcker-facit";
    
    if (code === correctCode) {
        const blurLayer = document.getElementById('blurLayer');
        blurLayer.classList.add('active'); // Remove blur with smooth transition
    } else {
        alert("Fel kod, vänligen försök igen.");
    }
}

function toggleExpand(element) {
    const audio = element.querySelector('audio');
    const icon = element.querySelector('.icon');
    
    // Toggle the 'expanded' class to show or hide the audio
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        icon.innerHTML = '&#9660;'; // Down arrow
    } else {
        element.classList.add('expanded');
        icon.innerHTML = '&#9650;'; // Up arrow
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('access-code');
    const toggleButtonIcon = document.getElementById('toggle-password').querySelector('.material-icons');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButtonIcon.textContent = 'visibility_off'; // Switch to eye-slash icon
    } else {
        passwordInput.type = 'password';
        toggleButtonIcon.textContent = 'visibility'; // Switch back to eye icon
    }
}

