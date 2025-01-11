const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

const state = {
    currentStep: 1,
    selectedOptions: {
        productType: null,
        cover: null, 
        interior: null,
        binding: null,
        accessories: [],
        customNotes: null,
        price: 0,
    },
};

const renderStep = () => {
    const leftDiv = document.getElementById('custom_left');
    const rightDiv = document.getElementById('custom_right');

    switch (state.currentStep) {
        case 1:
            leftDiv.innerHTML = `
            <h2>Elige entre cuaderno o agenda. Paso ${state.currentStep}/6</h2>
            <p>Selecciona el tipo de producto que quieres personalizar</p>
            `;
            rightDiv.innerHTML = `
                <button onclick="selectProduct('cuaderno')">Cuaderno</button>
                <button onclick="selectProduct('agenda')">Agenda</button>
            `;
            break;
        case 2:
            leftDiv.innerHTML = `<h2>Elige la tapa.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <button onclick="goToPreviousStep()">Volver</button>
            <p>TAPA1</p> 
            <button onclick="goToNextStep()">Siguiente</button>
            `
            break;
        case 3:
            leftDiv.innerHTML = `<h2>Elige el interior.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <button onclick="goToPreviousStep()">Volver</button>
            <p>INTERIOR1</p> 
            <button onclick="goToNextStep()">Siguiente</button>
            `
            break;
        case 4:
            leftDiv.innerHTML = `<h2>Elige el tipo de encuadernación.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <button onclick="goToPreviousStep()">Volver</button>
            <p>ENCUADERNACION1</p>
            <button onclick="goToNextStep()">Siguiente</button> 
            `
            break;
        case 5:
            leftDiv.innerHTML = `<h2>Elige los accesorios.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <button onclick="goToPreviousStep()">Volver</button>
            <p>ACCESORIO1</p>
            <button onclick="goToNextStep()">Siguiente</button> 
            `
            break;
        case 6:
            leftDiv.innerHTML = `<h2>Personaliza tu producto.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
                <button onclick="goToPreviousStep()">Volver</button>
                    <textarea placeholder="Escribe aquí tus notas"></textarea>
                <button onclick="goToNextStep()">Siguiente</button>
            `;
            break
        default:
            leftDiv.innerHTML = "<h2>Finalizado</h2>";
            rightDiv.innerHTML = `<button onclick="addToCart()">Agregar al carrito</button>`;
    }
};

const selectProduct = (product) => {
    state.selectedOptions.productType = product;
    state.currentStep++;
    renderStep();
};

const goToNextStep = () => {
    state.currentStep++;
    renderStep();
};

const goToPreviousStep = () => {
    if (state.currentStep > 1) state.currentStep--;
    renderStep();
};

renderStep();
