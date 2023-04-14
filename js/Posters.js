AFRAME.registerComponent("comic", {
  schema: {
    state: { type: "string", default: "comics-list" },
    selectedCard: { type: "string", default: "#comics1" },
  },
    init: function () {
      this.placesContainer = this.el;
      this.createComics()
      
    },

    
  tick: function () {
    const { state } = this.el.getAttribute("comic");

    if (state === "view") {
      this.hideEl([this.placesContainer]);
      this.showView();
    }
  },
  hideEl: function (elList) {
    elList.map(el => {
      el.setAttribute("visible", false);
    });
  },

  showView: function () {
    const { selectedCard } = this.data;

    const skyEl = document.querySelector("#main-container");

    //skyEl.setAttribute("material", {
    // src: `./assets/360_images/${selectedCard}/place-0.jpg`,
    //  color: "white"
    //});
  },


    createComics: function () {
        const comicsHr = [
          {
            id: "spawn",
            title: "Spawn",
            url: "./assets/thumbnails/spawn.jpg",
          },
          {
            id: "avengers",
            title: "Avengers",
            url: "./assets/thumbnails/avengers.jpg",
          },
    
          {
            id: "action-comics",
            title: "Action Comics",
            url: "./assets/thumbnails/action comics.jpg",
          },
          {
            id: "invencible",
            title: "Invencible",
            url: "./assets/thumbnails/invencible.jpg",
          },
        ];
        let prevoiusXPosition = -60;
        for (var item of comicsHr) {
            const posX = prevoiusXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;
      
            // Elemento de borde
            const borderAttribute = this.createBorder(item.id, position)
            
            // Elemento de miniatura
            const miniatureAttribute = this.createMiniature(item)
            borderAttribute.appendChild(miniatureAttribute)
           
            // Elemento del texto del título
            const titleAttribute = this.createTitle(item, position)
            borderAttribute.appendChild(titleAttribute)
            
            this.placesContainer.appendChild(borderAttribute);
          }
    },

    createBorder: function(id, position){
        const border = document.createElement("a-entity")
        border.setAttribute("id", id)
        border.setAttribute("visible", true)
        border.setAttribute("geometry", {primitive: "plane", width: 22, height: 22})
        border.setAttribute("position", position)
        border.setAttribute("material", {color: "#0077cc", opacity: 1})
        border.setAttribute("cursor-listener",{})
    
       return border
      },
    
      createMiniature: function(index){
        const miniature = document.createElement("a-entity")
        miniature.setAttribute("visible", true)
        miniature.setAttribute("geometry", {primitive: "plane", width: 20, height: 20})
        miniature.setAttribute("position", {x:0, y:0, z:0.1})
        miniature.setAttribute("material", {src: index.url})
    
        return miniature
      },
    
      createTitle: function(index, position){
        const title = document.createElement("a-entity")
        title.setAttribute("text", {font: "exo2bold", align: "center", width: 70, color: "#e65100", value: index.title})
    
        const newPosition = position
        newPosition.y = -20
    
        title.setAttribute("position", newPosition)
        title.setAttribute("visible", true)
    
        return title
      }
      


  }) 