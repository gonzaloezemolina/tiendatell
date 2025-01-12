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
            <div class="covers_options">
            Aqui hay que realizar el foreach de las tapas, primero realizar el fetch de las tapas
            <div class="covers_buttons">
            <button>Añadir mi imagen</button>
            <button>Añadir texto</button>
            <select>
                <option value="monserrat">Monserrat</option>
                <option value="roboto">Roboto</option>
            </select>
            <button>Color</button>
            </div>
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
                <figure>
                    <img src="./media/lisa.jpg" alt="imagen de interior de cuaderno" class="interior_custom" width="100px" height="100px">
                    <figcaption>Lisa</figcaption>
                    <img src="./media/rayada.jpg" alt="imagen de interior de cuaderno" class="interior_custom" width="100px" height="100px">
                    <figcaption>Rayada</figcaption>
                    <img src="./media/cuadriculada.jpg" alt="imagen de interior de cuaderno" class="interior_custom" width="100px" height="100px">
                    <figcaption>Cuadriculada</figcaption>
                </figure>
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
            <div class="binding_custom_container">
            <figure>
                <img src="./media/anillado.jpeg" alt="imagen de encuadernación" class="binding_custom" width="130px" height="130px">
                <figcaption>Anillado</figcaption>
                <img src="./media/cocido.jpeg" alt="imagen de encuadernación" class="binding_custom" width="130px" height="130px">
                <figcaption>Cocido</figcaption>
            </figure>
            </div>
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
                <input type="checkbox" id="accesorio1" name="accesorio1" value="accesorio1">
                <label for="accesorio1">Accesorio 1</label>
                <input type="checkbox" id="accesorio2" name="accesorio2" value="accesorio2">
                <label for="accesorio2">Accesorio 2</label>
                <input type="checkbox" id="accesorio3" name="accesorio3" value="accesorio3">
                <label for="accesorio3">Accesorio 3</label>
                <input type="checkbox" id="accesorio4" name="accesorio4" value="accesorio4">
                <label for="accesorio4">Accesorio 4</label>
            </div>
            <div>
                <button onclick="goToPreviousStep()" class="btn_step">Volver</button>
                <button onclick="goToNextStep()" class="btn_step">Siguiente</button>
            </div>
            `
            break;
        case 6:
            leftDiv.innerHTML = `<h2>Haz alguna aclaración.  Paso ${state.currentStep}/6</h2>`;
            rightDiv.innerHTML = `
            <div class="custom_notes_container">
                    <textarea placeholder="Escribe aquí tus notas"></textarea>
            </div>
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
