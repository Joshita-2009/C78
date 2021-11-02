var images=["Family album.jpg", "Grandpa.png", "Grandma.jpg", "father.png", "mother.png", "sister.png", "me.png"];
var names=["Family book", "Samba siva rao", "Rupavathi", "Devendra", "Ratna", "Varshika", "Joshita"];
var i=0;

function update(){
    if( i==7){
        i=0;
    }
    document.getElementById("imgs").src=images[i];
    document.getElementById("full_name").innerHTML=names[i];
    i++;
}