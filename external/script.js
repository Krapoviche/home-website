categories = [
    "Services",
]

sites = [
    {cat: "Services", url: "https://overseerr.krapo.fr", "name": "Overseer", "img": "https://getumbrel.github.io/umbrel-apps-gallery/overseerr/icon.svg"},
    {cat: "Services", url: "https://memos.krapo.fr", "name": "Memos", "img": "https://avatars.githubusercontent.com/u/95764151?v=4"},
    {cat: "Services", url: "https://nextcloud.krapo.fr", "name": "Nextcloud", "img": "https://play-lh.googleusercontent.com/ooYcbfnlgkfA71bbRylUMfNnqpcxVhVdhfjnBNpCHgTBo5XE75Vp7bFuiCsWnzOk5gM"}
]

function loadSites(){
    body = document.querySelector("body");
    categories.forEach(cat => {
        h2 = document.createElement("h2");
        h2.innerText = cat;
        body.appendChild(h2)

        div = document.createElement("div")
        div.id = "sites"
        body.appendChild(div)

        sites.forEach(element => {
            if(element.cat == cat){
                a = document.createElement("a");
                a.href = element.url
                a.classList.add("site")
                img = document.createElement("img")
                img.src = element.img

                a.appendChild(img)
                div.appendChild(a);
            }
        });
    });
}

window.onload = loadSites;


window.onload = loadSites;
