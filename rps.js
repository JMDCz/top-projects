

let options = ("Rock, Paper, Scissors")
let index = Math.floor(Math.random()) * options.length;

function getComputerChoice (options)   {
    let index = Math.floor(Math.random()) * options.length;
    return options(index)
    

}