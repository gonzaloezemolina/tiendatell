const form = document.getElementById('register_form');

form.addEventListener("submit", async function (e){
    e.preventDefault();
    const data = new FormData(form);
    const object = {};
    data.forEach((value,key) => object[key]=value);
    const response = await fetch('/api/register', {
        method:'POST',
        body:JSON.stringify(object),
        headers:{
            "Content-Type": "application/json"
        }
    });
    const result = await response.json();
    console.log(result);
    if (response.status === 200) {
        return window.location.replace("/");
      }
});