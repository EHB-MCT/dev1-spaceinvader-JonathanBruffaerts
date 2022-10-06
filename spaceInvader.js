"use strict";



let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

drawrectangle();

function drawrectangle() {
//Achtergrond tkenen
    context.beginPath();
    context.fillStyle= "black";
    context.rect(0,0,300,300)
    context.fill();
    context.stroke();

    //Grote blok linksboven
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.strokeStyle= "#66FF00";
    context.rect(25,25,100,100);
    context.fill();
    context.stroke();

    //Klein blokje van boven in het midden
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.rect(125,25,50,50);
    context.fill();
    context.stroke();

    //grote blok rechtsboven
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.rect(175,25,100,100);
    context.fill();
    context.stroke();

    //Grote rechthoek in het midden
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.rect(75,125,150,100);
    context.fill();
    context.stroke();

    //Linksbeneden
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.rect(75,225,50,50);
    context.fill();
    context.stroke();

    //rechtsbeneden
    context.beginPath();
    context.fillStyle= "#66FF00";
    context.rect(175,225,50,50);
    context.fill();
    context.stroke();
}