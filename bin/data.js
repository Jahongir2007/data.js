/*
    Author: Jahongir Sobirov
    Data.js framework main codes
    License: MIT
    Version: 1.0.0
    All rights reserved (c) 2021
*/
module.exports = function(data,self){

    if(self["get"] == "false"){
        console.log("don't get value");
    }else{
    }

    if(self["getLength"] == true){
        console.log(data.length);
    }else{
    }

    if(self["join"] == false){
    }else{
        console.log(data.join(self["join"]));
    }

    if(self["copy"] == true){
        console.log(data.copyWithin("copy"));
    }else{
    }

    if(self["constructor"] == true){
        console.log(data.constructor);
    }else{
    }

    if(self["entries"] == true){
        console.log(data.constructor);
    }else{
        console.log(data.entries());
    }

    if(self["reverse"] == true){
        console.log(data.reverse());
    }else{
    }

    if(self["sort"] == true){
        console.log(data.sort());
    }else{
    }

    if(self["fill"] == false){
    }else{
        console.log(data.fill(self["fill"]));
    }

    if(self["shift"] == true){
        console.log(data.shift());
    }else{
    }

    if(self["map"] == false){
    }else{
        console.log(data.map(self["map"]));
    }

    if(self["pop"] == true){
        console.log(data.pop(self["pop"]));
    }else{
    }
};
