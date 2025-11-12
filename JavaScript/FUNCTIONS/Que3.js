// 3. Write a function that takes a string and returns it in uppercase.

function upperString(value) {
    if (typeof value === "string") {
        const upper_string = value.toUpperCase();
        return console.log(upper_string);
    }
    else{
        return console.log("Please enter valid string");  
    }
}
upperString("akshit")