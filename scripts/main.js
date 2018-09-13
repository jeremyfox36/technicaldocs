var lnks = document.getElementsByClassName("nav-link");

for(let item of lnks){
    item.addEventListener("click", (evt) =>{
        let hashVal = item.getAttribute("href");
        let target = document.querySelector(hashVal);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
        history.pushState(null, null, hashVal)
        evt.preventDefault()
    })
};