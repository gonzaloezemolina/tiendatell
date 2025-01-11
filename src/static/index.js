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
            <div>
                <img src="" alt="imagen de cuaderno o agenda" class="cuaderno_or_agenda">
                <img src="" alt="imagen de cuaderno o agenda" class="cuaderno_or_agenda">
            </div>
            <div>
                <button onclick="selectProduct('cuaderno')">Cuaderno</button>
                <button onclick="selectProduct('agenda')">Agenda</button> 
            </div>
            `;
            break;
        case 2:
            leftDiv.innerHTML = `<h2>Elige la tapa.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <div class="covers_custom_container">
            </div>
            <div>
                <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
            </div>
            `
            break;
        case 3:
            if (state.selectedOptions.productType === 'cuaderno') {
                leftDiv.innerHTML = `<h2>Elige el interior.  Paso ${state.currentStep}/6</h2>`;
                rightDiv.innerHTML = `<div class="interior_custom_container">
                    <img src="" alt="imagen de interior de cuaderno" class="interior_custom">
                    <img>
                    <img>
                </div>
                <div>
                    <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                    <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
                </div>
                `
            } else {
                leftDiv.innerHTML = `<h2>Elige el interior.  Paso ${state.currentStep}/6</h2>`;
                rightDiv.innerHTML = `
                <h1>Elegiste una agenda</h1>
                            <div>
                    <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                    <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
                </div>
                `
            }
            break;
        case 4:
            leftDiv.innerHTML = `<h2>Elige el tipo de encuadernación.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
                        <div>
                <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
            </div>
            `
            break;
        case 5:
            leftDiv.innerHTML = `<h2>Elige los accesorios.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
                        <div>
                <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
            </div>
            `
            break;
        case 6:
            leftDiv.innerHTML = `<h2>Personaliza tu producto.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
                    <textarea placeholder="Escribe aquí tus notas"></textarea>
                            <div>
                <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
            </div>
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
