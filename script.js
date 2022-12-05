// 
document.addEventListener("DOMContentLoaded", () => {
    getCats()
    }) 
              
    // The endpoint to fetch data
    const url= "http://localhost:3000/characters"
    // 
                function getCats(){
    
                    fetch(url) 
                    .then(res => res.json()) 
                    .then(cats => {
                       
                        cats.forEach(cat => {
                            displayCats(cat)
                        });
                    })
                }
    
    //
                function displayCats(cat){
                    const name= document.createElement('p')
                    name.innerHTML=cat.name
                    const main= document.getElementById("main")
                    main.append(name)
                    //Event listener listens for a click, it the calls SingleCat function
                    name.addEventListener("click", () => {
                        singleCat(cat) 
                        
                    })
                }
            // 
    function singleCat(cat){
        document.getElementById("catName").innerHTML=cat.name
        document.getElementById("catImg").src = cat.image
        const btn = document.getElementById("catLikes")
            btn.textContent= `Likes ${cat.votes}`
            // 
        btn.addEventListener("click", ()=> { 
           cat.votes++
           btn.textContent= `Likes ${cat.votes}`
            
        })
    } 
    btn.innerHTML=`Likes: ${Likes}`