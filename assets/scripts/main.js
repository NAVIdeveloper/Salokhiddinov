// Add this code to the existing script
const menuButton = document.querySelector('.menu');
const pages = document.querySelector('.pages');

menuButton.addEventListener('click', () => {
    pages.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !pages.contains(e.target)) {
        pages.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.pages a').forEach(link => {
    link.addEventListener('click', () => {
        pages.classList.remove('active');
    });
});


let darkmode = localStorage.getItem('dark-mode')
    const themeSwitch = document.getElementById('themeSwitch')

    const enableDarkmode = () => {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
    }
    const disableDarkmode = () => {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
    }
    if (darkmode === 'active') {
        enableDarkmode()
    }

    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('dark-mode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })