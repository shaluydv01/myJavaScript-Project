let image = document.querySelector("img");
let text = document.querySelector("p");

image.addEventListener("mouseover", () => {
  image.src = "./img/kerala.avif";
  image.style.border = "2px solid red";
  image.style.height = "200px";
  text.innerText = "Kerala";
});

image.addEventListener("mouseleave", ()=>{
    image.src = "./img/ladakh.avif";
    text.innerText = "Ladakh";
})

text.addEventListener("click", () => {
    image.src = "./img/sikkim.jpg";
    text.innerText = "Sikkim";
})