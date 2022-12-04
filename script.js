document.addEventListener("DOMContentLoaded", () => {
getCats(cats)
})

fetch("http://localhost:3000/cat")
.then(res => res.json())
.then(data => console.log(d))

function getCats(){

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data)
    data.forEach(cat => {
        displayCats(cat)
        
    });
})

}

{
    function displayCats(cats) {
        console.log(cats);
        const name= document.createElement('p');
        name.innerHTML= cat.name
        const main= document.getElementById("main")
        main.append(name)
    }
}