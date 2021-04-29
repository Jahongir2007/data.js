module.exports = function (data,get,ofArray,concat) { 
    if(get == true){
        if(ofArray == false){
            console.log(data);
        }else{
            if(ofArray["leng"] == true){
                console.log(data[ofArray["get"]]);
                console.log(data.length);
            }else if(ofArray["sort"] == true){
                console.log(data[ofArray["get"]]);
                console.log(data.sort());
            }else if(ofArray["constructor"] == true){
                console.log(data[ofArray["get"]]);
                console.log(data.constructor)
            }else{
                console.log(data[ofArray["get"]]);
            }
        }
    }
    if(concat == false){
        console.log(data[ofArray["get"]]);
    }else{
        console.log(data.concat(concat))
    }
    if(copy == false){
        console.log(data[ofArray["get"]]);
    }else{
        console.log(data.copyWithin(copy))
    }
    if(entries == true){
        console.log(data.entries());
    }else{
        console.log(data[ofArray["get"]]);
    }
};
