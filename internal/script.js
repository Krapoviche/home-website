categories = [
    "Management",
    "Home",
    "Seedbox",
]

sites = [
    {cat: "Management", url: "https://portainer.krapo.local", "name": "Portainer", "img": "https://getumbrel.github.io/umbrel-apps-gallery/portainer/icon.svg"},
    {cat: "Management", url: "https://haproxy.krapo.local", "name": "Portainer", "img": "https://pbs.twimg.com/profile_images/915241962139086848/4g10jehA_400x400.jpg"},
    {cat: "Home", url: "https://homeassistant.krapo.local", "name": "Homeassistant", "img": "https://play-lh.googleusercontent.com/bGn6qxUHwqZmgtv7RwgxCzl4Uy26SFQrJljVmoOvoIKWa-Xty8s0vOUWcgovUAEAKXnI"},
    {cat: "Seedbox", url: "https://sonarr.krapo.local", "name": "Sonarr", "img": "https://getumbrel.github.io/umbrel-apps-gallery/sonarr/icon.svg"},
    {cat: "Seedbox", url: "https://radarr.krapo.local", "name": "Radarr", "img": "https://getumbrel.github.io/umbrel-apps-gallery/radarr/icon.svg"},
    {cat: "Seedbox", url: "https://prowlarr.krapo.local", "name": "Prowlarr", "img": "https://getumbrel.github.io/umbrel-apps-gallery/prowlarr/icon.svg"},
    {cat: "Seedbox", url: "https://sabnzb.krapo.local", "name": "SabNZB", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebh6oIbknSdflBbyofUOeVo4zKnfkbhJL_q7r2VayWA&s"},
    {cat: "Seedbox", url: "https://deluge.krapo.local", "name": "Deluge", "img": "https://www.cogipas.com/wp-content/uploads/Deluge-Torrent-Client-Review.jpg"},
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
