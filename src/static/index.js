const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

const customLeft = [
    {
        title: 'Personaliza tu cuaderno o agenda',
        text: 'Elegí entre una de las opciones y ve continuando a lo largo de la pasarela'
    },
    {
        title: 'Anillado o cocido',
        text: 'Elegí entre una de las opciones y ve continuando a lo largo de la pasarela'
    },
    {
        title: 'Selecciona una tapa',
        text: 'Puedes agregar la tuya o puedes hacerlo con una imagen preestablecida'
    },
];

const getCustomLeft = document.getElementById('custom_left');

customLeft.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title}</h3>
    <p>${item.text}</p>
    `
    getCustomLeft.appendChild(div);
});



const steps = [];








//  Vamos a crear con PostgreSQL las distintas opciones. Una vez que conseguimos las opciones, vamos a por todo:
//  1. Posiblemente tengamos un switch con distintos cases + break. 
// 2. El programa probablemente de error si le damos a varios endpoints a la vez. El fetch debe aparecer en el momento dado. no viene mal intentar una funcion y activarla despues de cada break
// 3. De alguna forma u otra debemos implementar un 0/6. Tambien se debe volver para atras
// 4. El usuario debe poder agregar la imagen de una tapa y poder eliminarla tambien.
// 5. Se debe crear un objeto con todas las opciones seleccionadas
// 6. Tema precio. Hay que averiguar como se puede ir aumentando respecto a cada opcion