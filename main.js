const main = document.getElementById("main");
const text = document.getElementById("text");
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
if (params.color != null) {
    main.style.backgroundColor = params.color;
    text.style.visibility = false;
}
else if (params.text != null) {
    main.style.backgroundColor = "white";
    text.style.visibility = true;
    text.innerText = params.text;
}
