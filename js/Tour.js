AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Torre Eiffel",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "Nueva York",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
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
    border.setAttribute("geometry", {primitive: "ring", radiusInner: 9, radiusOuter: 10})
    border.setAttribute("position", position)
    border.setAttribute("material", {color: "#0077cc", opacity: 1})

   return border
  },

  createMiniature: function(index){
    const miniature = document.createElement("a-entity")
    miniature.setAttribute("visible", true)
    miniature.setAttribute("geometry", {primitive: "circle", radius : 9})
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
  
});
