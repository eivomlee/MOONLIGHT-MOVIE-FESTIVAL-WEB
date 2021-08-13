window.onload = function () {
    const logo_btn = document.querySelector(".logo_btn");
    const home_btn = document.querySelector(".home_btn");

    logo_btn.addEventListener("click", move_scroll);
    home_btn.addEventListener("click", move_scroll);

    random_backgroundImg();

    const searchButton = document.querySelector(".search_button");
    searchButton.addEventListener("click", activeSearch);
}

function move_scroll(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function random_backgroundImg() {
    const img_container = document.querySelector(".main_index");
    const imgs = ["ex_image1.jpg", "ex_image2.PNG",
        "ex_image3.PNG", "ex_image4.PNG", "ex_image5.PNG"];
    const random_number = Math.floor(Math.random() * imgs.length);

    img_container.style.backgroundImage = `url("src/img/${imgs[random_number]}")`;
    img_container.style.backgroundSize = "100% 100%";
    img_container.style.repeat = "no-repeat";
}

function activeSearch(event) {
    event.preventDefault();
    const searchInput = document.querySelector(".search_input");
    searchInput.classList.toggle("active");
}