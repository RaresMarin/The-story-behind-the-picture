let exhibition = document.getElementsByClassName("exhibition");
let vector = ["Art Camp by Kozma István shows a rural area with houses, trees, and a path, painted in natural colors with a balanced and static composition"
    , "Atmosphere by Negoșanu Grigor presents several human figures placed in a stylized landscape, using strong colors and a non-realistic perspective" ,
    "Countryside by Droc Popovici Maria depicts a rural scene with a house, trees, and a path, using bright colors and a dynamic composition that creates a sense of movement and energy."];

for (let i = 0; i < exhibition.length; i++) {
    exhibition[i].addEventListener("click", () => {
        for(let j = 0; j < exhibition.length; j++) {
            if(j != i) exhibition[j].style.display = "none";
        }
        if(window.innerWidth < 901) {
            document.getElementById("grid").style.gridTemplateColumns = "1fr";
            document.getElementById("nu").style.display = "block";
            document.getElementById("info").innerHTML = vector[i];
            document.getElementById("info").style.marginTop = "100px";
        }else
        {
        document.getElementById("grid").style.gridTemplateColumns = "1fr 2fr";
        document.getElementById("nu").style.display = "grid";
        document.getElementById("info").innerHTML = vector[i];
        }
    })
}  
function reset() {
    for(let j = 0; j < exhibition.length; j++) {
        exhibition[j].style.display = "block";
    }
     if(window.innerWidth < 901) {
    document.getElementById("nu").style.display = "none";
    document.getElementById("grid").style.gridTemplateColumns = "1fr";
    document.getElementsByClassName("exhibition")[0].style.animation = "none";
    document.getElementsByClassName("exhibition")[1].style.animation = "none";
    document.getElementsByClassName("exhibition")[2].style.animation = "none";
     } else
     {
        document.getElementById("nu").style.display = "none";
        document.getElementById("grid").style.gridTemplateColumns = "1fr 1fr 1fr";
            document.getElementsByClassName("exhibition")[0].style.animation = "none";
    document.getElementsByClassName("exhibition")[1].style.animation = "none";
    document.getElementsByClassName("exhibition")[2].style.animation = "none";
    }
}