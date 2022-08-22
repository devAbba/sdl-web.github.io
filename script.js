window.addEventListener("scroll", () => {
    let toTop = document.querySelector(".upNav")
    if(scrollY < 200){
        toTop.style.display = "none";
    }
    else {
        toTop.style.display = "block";
    }
})

const togl = document.getElementById("hamburger-btn");

togl.addEventListener("click", ()=>{
    let navTogl = document.querySelector(".navigation")
    navTogl.classList.toggle("nav-hide")
})

const profileBtn = document.querySelector(".dropDown-btn");

profileBtn.addEventListener("click", (e) => {
    let x = document.querySelector(".dropdown-content");
    let y = document.querySelector(".expandMore")

    if(x.style.display === "none"){
        x.style.display = "block";
        y.innerText = "expand_less";
    }
    else {
        x.style.display = "none";
        y.innerText = "expand_more"
    }   
})

const theme = document.getElementById("toggleMain");
const slider = document.getElementById("toggleBtn");
const headerGroup = document.querySelector(".header")
const backgroundTheme = document.querySelector(".body-wrapper");
theme.addEventListener("click", () => {
    
    if (slider.style.marginLeft === "0px"){
        slider.style.marginLeft = "45%";
        backgroundTheme.style.backgroundColor = "black";
        backgroundTheme.style.color = "white";
        headerGroup.style.backgroundColor = "rgb(48, 48, 49)";
    }
    else {
        slider.style.marginLeft = "0px";
        backgroundTheme.style.backgroundColor = "white";
        backgroundTheme.style.color = "black";
        headerGroup.style.backgroundColor = "white";
    }   
})



