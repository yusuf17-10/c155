AFRAME.registerComponent('game', {
    schema: {
        elementId : {type:"string",default:"#ring1"}
    },

    init: function () {

        },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    isCollided:function(elementId){
        var element = document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if (elementId.includes("#ring1")){
                console.log(elementId+"collision")
            }else if (elementId.includes("#bird")){
                console.log(elementId+"collision")
            }
        })
    }


});
