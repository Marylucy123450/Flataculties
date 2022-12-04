document.addEventListener("DOMContentLoaded", () => {
    getCats(cats)
    })

    const url = "http://localhost:3000/characters"

    function getCats(){
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
         console.log(data)
        data.forEach(element => {
            displayCatsName(cat)
            
        });
        })
    }

    
    
    {
        function displayCatsName(cat) {
            console.log(cat);
            const name= document.createElement('p');
            name.innerHTML= cat.name
            const main= document.getElementById("main")
            main.append(name)
    
            name.addEventListener("click", () => {
                getSingleCat(cat)
            })
        }
    }
    
    function getSingleCat(cat){
        document.getElementById("catname").innerHTML = cat.name
        document.getElementById("catimage").src = cat.image
        const btn =document.getElementById("catlikes")
        btn.addEventListener("click", () => {
            cat.votes++
            btn .textContent =`likes ${cat.votes}`
        })

        

    }
    
    
    
    
    
    
    
    


