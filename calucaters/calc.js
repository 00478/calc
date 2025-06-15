var mynumbers= document.getElementsByClassName("giv")
var myclerar=document.getElementById("clear")
var equale=document.getElementById("equal")
var ty=document.getElementById("type")
var color = document.querySelector(".col").addEventListener("click",function(g){

    if(g.target.className === "col"){
        document.querySelector(".mein").style.backgroundColor="red"
    }
})
var colp=document.querySelector(".q1").addEventListener("click",function(e){
    if(e.target.className === "q1"){
        document.querySelector(".mein").style.backgroundColor="gray"
    }
})
var i;
for(i=0;i<mynumbers.length;i++){
    mynumbers[i].onclick=function (){
        ty.value+=this.value
    }
}

myclerar.onclick=function(){
    ty.value=" "
}

equale.onclick=function(){
    ty.value=eval(ty.value)
}