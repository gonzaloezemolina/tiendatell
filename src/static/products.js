const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

const productContainer = document.getElementById('products_container');
const itemsContainer = document.getElementById('items_container');

const getProducts = async () => {
    try {
        const response = await fetch('/api/products',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        const products = await response.json();
        if (!Array.isArray(products)) {
            throw new Error('Los datos recuperados no son un arreglo.');
        }
        const productsHTML = products.map(product => `
            <div class="product">
                <img src="${product.image_url}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            </div>
        `).join('');

        // Insertamos todo el HTML de una sola vez
        itemsContainer.innerHTML = productsHTML;
    } catch (error) {
        console.error(error);
    }
};

getProducts();