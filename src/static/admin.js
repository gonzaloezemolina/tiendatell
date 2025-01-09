const getCoverForm = document.getElementById('cover_form');

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
