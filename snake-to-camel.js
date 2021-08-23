function snakeToCamel(snakeText) {
    let camelCase = "";
    for(let x = 0;x < snakeText.length;x++){
        if (snakeText[x] != "_"){
            let char = snakeText[x]
            camelCase+=char
        }
        else{
            capletter = snakeText[x+1].toUpperCase();
            camelCase+=capletter;
            x++;
        }
    }
    return camelCase

}

