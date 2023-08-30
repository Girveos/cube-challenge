const cube = document.getElementById('animatedCube');
const optionsContainer = document.getElementById('options');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

/* Funcion que detiene y reactiva el movimineto del cubo */
let animationPaused = false;
cube.addEventListener('click', () => {
    console.log('Di click en el cubo');
    if (!animationPaused){
        console.log('Animacion pausada');
        cube.style.animationPlayState = 'paused'
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';  
        animationPaused = true;
        setTimeout(()=>{
            cube.style.animationPlayState = 'running';
            optionsContainer.style.display = "none";
            animationPaused = false;
        }, 5000);
    }else{
        cube.style.animationPlayState = 'running'
        optionsContainer.style.display = "none";
        animationPaused = false;
    };
});

/* Función para ver páginas */
option1.addEventListener ('click', () => {
    console.log('Di click en el cubo');
    window.location.href = "../pages/twitter.html"
});
option2.addEventListener ('click', () => {
    console.log('Di click en el cubo');
    window.location.href = "../pages/facebook.html"
});
option3.addEventListener ('click', () => {
    console.log('Di click en el cubo');
    window.location.href = "../pages/linkedin.html"
});
