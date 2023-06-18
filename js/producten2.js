let products = {
    data:[
    {
        productName: "Ark Survival",
        category: "Adventure",
        price: "16,79",
        image: "img2/ark.webp"
    },
    {
        productName: "Watch Dogs 2",
        category: "Action",
        price: "8,99",
        image: "img2/watchdogs.webp"
    },
    {
        productName: "The last of us",
        category: "Action",
        price: "59,99",
        image: "img2/lastofus.webp"
    },
    {
        productName: "Red dead online",
        category: "Action",
        price: "19,79",
        image: "img2/reddeadredemption.webp"
    },
    {
        productName: "Destiny 2",
        category: "Action",
        price: "0,00",
        image: "img2/destiny2.webp"
    },
    {
        productName: "God Of War",
        category: "Adventure",
        price: "49,99",
        image: "img2/godofwar.webp"
    },
    {
        productName: "Gta 5",
        category: "Action",
        price: "14,99",
        image: "img2/gta5.webp"
    },
    {
        productName: "Formula 1",
        category: "Sport",
        price: "69,99",
        image: "img2/f1.webp"
    },
    {
        productName: "Fishing Planet",
        category: "Sport",
        price: "0,00",
        image: "img2/fishing.webp"
    },
    {
        productName: "Forza Horizon 5",
        category: "Sport",
        price: "59,99",
        image: "img2/forza5.webp"
    },
    {
        productName: "Sea Of Thieves",
        category: "Adventure",
        price: "39,99",
        image: "img2/sea.webp"
    },
    {
        productName: "Hogwarts Legacy",
        category: "Adventure",
        price: "59,99",
        image: "img2/hogwarts.webp"
    },
    {
        productName: "Rainbow Six",
        category: "Action",
        price: "7,99",
        image: "img2/rainbow.webp"
    },
    {
        productName: "Rust",
        category: "Action",
        price: "39,99",
        image: "img2/rust.webp"
    },
    {
        productName: "Fifa 2023",
        category: "Sport",
        price: "69,99",
        image: "img2/fifa23.webp"
    },
    {
        productName: "Starwars",
        category: "Adventure",
        price: "69,99",
        image: "img2/starwars.webp"
    },
    {
        productName: "Minecraft",
        category: "Adventure",
        price: "15,00",
        image: "img2/minecraft.webp"
    },
]
};

for(let i of products.data){
    let card = document.createElement("div");

    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "€" + i.price;
    container.appendChild(price);

    let button = document.createElement("button");
    button.classList.add("card-button");
    button.innerText = "Koop Nu";
    container.appendChild(button);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

    
    if (i.productName === "God Of War") {
        button.classList.add("card-link");
        button.setAttribute("data-url", "product1.html"); //colocar link aqui
    } else if (i.productName === "Red dead online") {
        button.classList.add("card-link");
        button.setAttribute("data-url", "product2.html"); //colocar link aqui
    }


    document.getElementById("products").appendChild(card);
    }

    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const url = link.getAttribute("data-url");
        window.location.href = url;
    });
});


function filterProduct(value){
    let buttons = document.querySelectorAll("button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase()  == buttons.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((elements) => {
        if(value == "all"){
            elements.classList.remove("hide");
        }
        else{
            if (elements.classList.contains(value)){
                elements.classList.remove("hide");
            }
            else{
                elements.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element,index) =>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });
});

  
window.onload = () => {
    filterProduct("all");
}

function filterByPrice(value) {
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        let price = element.querySelector(".container h6").innerText;
        price = price.substring(1); 
        if (parseInt(price) <= value) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}

document.querySelector(".dropdown-toggle").addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.toggle("show");
});

window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown-toggle")) {
        let dropdownMenu = document.querySelector(".dropdown-menu");
        if (dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.remove("show");
        }
    }
});

window.onload = () => {
    filterProduct("all");
}