// Recupération du boutton more et de son contenu pour l'afficher et le faire disparaitre avec toogle
    let more = document.getElementById('more');
    let less = document.getElementById('less');
    let moreContent = document.getElementById('fourth-section');

    more.addEventListener('click', () => {
        moreContent.style.display = 'block';
        more.style.display = 'none';
        less.style.display = 'inline';
    });

    less.addEventListener('click', () => {
        moreContent.style.display = 'none';
        more.style.display = 'inline';
        less.style.display = 'none';
    });
    // more.addEventListener('click', function(){
    //     moreContent.style.display = 'block';
    // });

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
    
        // Charge le thème sauvegardé, sinon utilise le thème par défaut 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(savedTheme);
    
        // Bascule le thème lors du clic sur l'icône
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.classList.remove(currentTheme);
            body.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });
    
    