AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.mouseEnterEvents();
      this.mouseLeaveEvents();
      
    },
    update: function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground")

        c = fadeBackgroundEl.children;
        if(c.length > 0){
            var i;
            for(i = 0; i <= c.length; i++){
                fadeBackgroundEl.removeChild(c[i])
            }
        } else{
            this.handleClickEvents();
        }
    },

    handleClickEvents: function () {
        this.el.addEventListener("click", ()=>{

          const {selectedItemId} = this.data
          const fadeBackgroundEl = document.querySelector("#fadeBackground")
          const titleEl = document.querySelector("#app-title")
          const cursorEl = document.querySelector("#camera-cursor")

            if(selectedItemId){
                fadeBackgroundEl.setAttribute("visible", true)
                fadeBackgroundEl.setAttribute("info-banner",{itemId: selectedItemId})
                titleEl.setAttribute("visible", false)
                cursorEl.setAttribute("position",{x:0, y:0, z:-1})
                cursorEl.setAttribute("geometry",{radiusInner: 0.03, radiusOuter: 0.04})
            } else {
                fadeBackgroundEl.setAttribute("visible", false)
                titleEl.setAttribute("visible", true)
                cursorEl.setAttribute("position", {x: 0, y: 0, z: -3})
                cursorEl.setAttribute("geometry", {radiusInner: 0.08, radiusOuter: 0.12})
            }
        })
      },
    
    
   

    mouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const placesId = ["spawn", "avengers", "action-comics", "invencible"];
            if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#comics-container");
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {
                color: "black",
                opacity: 1
            });
      }      
    });
    },
    
    mouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", () =>{
            const {selectedItemId} = this.data
        if (selectedItemId){
        const elementSelected = document.querySelector(`#${selectedItemId}`)
        const elementSelectedID = elementSelected.getAttribute("id")

        if(elementSelectedID == selectedItemId){
        elementSelected.setAttribute("material", {color: "#0077CC", opacity: 1})
        }
        }

        
    })      
    }

})












 /*handleClickEvents: function () {
        this.el.addEventListener("click", ()=>{
          const placesContainer = document.querySelector("#comics-container")
          const {state} = placesContainer.getAttribute("comic")
          if(state == "comics-list"){
            const id = this.el.getAttribute("id")
            const placesId = ["spawn", "avengers", "action-comics", "invencible"]
    
            if(placesId.includes(id)){
              placesContainer.setAttribute("comic", {state: "view", selectedCard: id})
            }
          }
        })
      },
    */