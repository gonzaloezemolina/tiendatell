const getCoverForm = document.getElementById('cover_form');

document.addEventListener('DOMContentLoaded', () => {
    const coverList = document.getElementById('covers_list');
    
    const getCovers = async () => {
        try {
            const response = await fetch('/api/covers/get', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching covers:', error);
            return [];
        }
    }

    const renderCovers = async () => {
        const covers = await getCovers();
        coverList.innerHTML = ''; 
        
        covers.forEach((cover) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${cover.image_url}" alt="Tapa" width="200px" height="200px">
                <button data-id="${cover.id}">Borrar</button>
            `;
            coverList.appendChild(li);
        });
    }
    renderCovers();
});



getCoverForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(getCoverForm)
    const response = await fetch('/api/covers/create', {
        method:'POST',
        body: JSON.stringify(Object.fromEntries(formData)), 
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json(); 
    console.log(result);
    if (response.status === 200) {
        console.log("Se ha creado cover correctamente");
    } else{
        console.log("error creando cover");
      }
})
