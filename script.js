function manageDomain(){
    document.querySelector("#domain").innerText = window.location.host
    if(window.location.host == "krapo.fr"){
        internalBtn = document.querySelector("#redirect_internal")
        internalBtn.href="javascript: void(0)"
        internalBtn.style.textDecoration = "line-through"
        internalBtn.style.backgroundColor = "grey"
        internalBtn.classList.remove("redirect_hover")
    }
}

window.onload = manageDomain;
