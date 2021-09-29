const btn = document.querySelector(".btun");
const close = document.querySelector(".close");
const rules = document.querySelector(".darken");

btn.addEventListener("click", () => {
    rules.style.visibility = "visible";
});
close.addEventListener("click", () => {
    rules.style.visibility = "hidden";
    console.log('h');
})