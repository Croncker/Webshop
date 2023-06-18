var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
var editionSelect = document.getElementById("editionSelect");
var h1 = document.querySelector("h1#productTitle");
var h4 = document.querySelector("h4#productPrice");

editionSelect.addEventListener("change", function() {
    var selectedOption = editionSelect.value;
    if (selectedOption === "collection") {
        SmallImg[0].src = "img3/collection1.jpg";
        SmallImg[1].src = "img3/collection2.webp";
        SmallImg[2].src = "img3/collection3.jpg";
        SmallImg[3].src = "img3/collection4.png";
        h1.textContent = "God Of War Ragnarok (Collectors Edition)";
        h4.textContent = "$200,00";
    } else if (selectedOption === "limited") {
        SmallImg[0].src = "img3/limited1.jpg";
        SmallImg[1].src = "img3/limited2.jpg";
        SmallImg[2].src = "img3/limited3.jpg";
        SmallImg[3].src = "img3/limited4.webp";
        h1.textContent = "God Of War Ragnarok (Limited Edition)";
        h4.textContent = "$79,99";
    } else {
        SmallImg[0].src = "img/god-of-war-ragnarok.webp";
        SmallImg[1].src = "img3/god2.jpg";
        SmallImg[2].src = "img3/god3.jpg";
        SmallImg[3].src = "img3/god4.jpg";
        h1.textContent = "God Of War Ragnarok";
        h4.textContent = "$49,99";
    }
    ProductImg.src = SmallImg[0].src;
});

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}