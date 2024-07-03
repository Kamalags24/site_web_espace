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