btn = document.getElementById("dark");
page = document.querySelector("body");

btn.addEventListener("click", event=>{
    // btn.style.backgroundColor ="green";
    if(page.classList.contains("dark_mode2")){
        page.classList.remove("dark_mode2");
    }
    else{
    page.classList.add("dark_mode2");
    }
})