let displayColors=function(...colours){
    for(let i in colours){
        console.log(colours[i].toUpperCase());
    }
}
let colourArray=['Harsha', 'Ammu', 'Siddiq', 'kanth'];
displayColors(...colourArray);
