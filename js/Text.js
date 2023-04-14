AFRAME.registerComponent("text", {
    schema:{itemId: {default: "", type: "string"}},
    update: function(){
        this.createText()
    },
    createText: function(){
        const postersInfo = {
            spawn: {
                imageUrl: "./assets/thumbnails/spawn.jpg",
                title: "Spawn",
                date: "1/8/1997",
                description: "Spawn (Albert Francis Al Simmons) es un personaje ficticio, un antihéroe, su primera aparición fue en Spawn #1. Spawn sigue apareciendo en un cómic mensual del mismo nombre publicado por la compañía estadounidense Image Comics. Creado por Todd McFarlane."
            },
            avengers: {
                imageUrl: "./assets/thumbnails/avengers.jpg",
                title: "Avengers",
                date: "2001",
                description: "Los Vengadores son un equipo de superhéroes que aparecen en los cómics estadounidenses publicados por Marvel Comics , creados por el escritor y editor Stan Lee y el artista/co-guionista Jack Kirby . El equipo hizo su debut en The Avengers # 1 (portada con fecha de septiembre de 1963). Etiquetados como Los héroes más poderosos de la Tierra, los Vengadores originales estaban formados por Iron Man , Ant-Man , Hulk , Thor y Wasp . El Capitán América fue descubierto atrapado en el hielo en el número 4 y se unió al grupo después de que lo revivieran."
            },
            actionComics: {
                imageUrl: "./assets/thumbnails/action comics.jpg",
                title: "Action Comics",
                date: "18/4/1938",
                description: "Action Comics, publicada por primera vez en abril de 1938 por DC Comics, con fecha de portada de junio, aunque hay desacuerdo en su fecha exacta de publicación,1 2 3 4 es la serie de cómics que marca el debut de Superman, el primer gran superhéroe de la historia. Debido a la tensa situación mundial previa a la Segunda Guerra, el concepto de super héroe creado en el primer número de Action Comics motivó un éxito sin precedentes y dio origen a una enorme cantidad de personajes similares, iniciando la Edad Dorada de los cómics."
            },
            invencible: {
                imageUrl: "./assets/thumbnails/invencible.jpg",
                title: "Invencible",
                date: "22/1/2003",
                description: "Invencible (en el original, Invincible) es un cómic de publicación mensual creado por el guionista Robert Kirkman y el dibujante Cory Walker para Image Comics."
            }
        }

        const {itemId} = this.data

        const fadeBackgroundEl = document.querySelector("#fadeBackground")

        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("id", `${itemId}-banner`)
        entityEl.setAttribute("geometry",{primitive: "plane", width: 0.9, height: 1})
        entityEl.setAttribute("material", {color: "#000"})
        entityEl.setAttribute("position", {x: 0, y: 0.1, z: -1})

        const item = postersInfo[itemId]

        const imageEl = this.createImageEl(item)
        const titleEl = this.createTitleEl(item)
        const descriptionEl = this.createDescriptionEl(item)

        entityEl.appendChild(imageEl)
        entityEl.appendChild(titleEl)
        entityEl.appendChild(descriptionEl)

        fadeBackgroundEl.appendChild(entityEl)
    },
    
    createImageEl: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry",{primitive: "plane", width: 0.85, height: 0.4})
        entityEl.setAttribute("material", {src: item.banner_url})
        entityEl.setAttribute("position", {x: 0, y: 0.3, z: 0.05})
        return entityEl
    },

    createTitleEl: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("Text",{shader: "msdf", anchor: "left", font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json", width: 1.2, height: 2, color: "#fff", value: `${item.title} (${item.date})` })
        entityEl.setAttribute("position", {x: -0.4, y: 0.02, z: 0.05})
        return entityEl
    },

    createDescriptionEl: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("Text",{shader: "msdf", anchor: "left", font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json", width: 0.75, height: 2, color: "#fff", wrapCount: 40, value: item.description })
        entityEl.setAttribute("position", {x: -0.4, y: 0.24, z: 0.05})
        return entityEl
    }
    

})