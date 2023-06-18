var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
var editionSelect = document.getElementById("editionSelect");
var h1 = document.querySelector("h1#productTitle");
var h4 = document.querySelector("h4#productPrice");

editionSelect.addEventListener("change", function() {
    var selectedOption = editionSelect.value;
    if (selectedOption === "collection") {
        SmallImg[0].src = "img4/collection1.jpg";
        SmallImg[1].src = "img4/collection2.jpg";
        SmallImg[2].src = "img4/collection3.jpg";
        SmallImg[3].src = "img4/collection4.avif";
        h1.textContent = "Red Dead Redemption (Collectors Edition)";
        h4.textContent = "$200,00";
    } else if (selectedOption === "limited") {
        SmallImg[0].src = "img4/ultimate1.jpg";
        SmallImg[1].src = "img4/ultimate2.png";
        SmallImg[2].src = "img4/ultimate3.jpg";
        SmallImg[3].src = "img4/ultimate4.webp";
        h1.textContent = "Red Dead Redemption (Ultimate Edition)";
        h4.textContent = "$79,99";
    } else {
        SmallImg[0].src = "img4/reddead1.jpg";
        SmallImg[1].src = "img4/reddead2.webp";
        SmallImg[2].src = "img4/reddead3.jpg";
        SmallImg[3].src = "img4/reddead4.jpg";
        h1.textContent = "Red Dead Redemption";
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