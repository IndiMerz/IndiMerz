// getting dates
const seconds = () => {
    const getDate = Date.now()
    const date = new Date(getDate)
    document.getElementById('date').innerText = date ;
}

let timeID;

const startTime = () => {
    if (!timeID){
        timeID = setInterval(seconds, 1000)
    }
}

const stopTime = () => {
    clearInterval(timeID);
    timeID = null;
}

document.getElementById('stop').addEventListener('click', stopTime)
document.getElementById('start').addEventListener('click', startTime)




// change background
const getColors = () => {
    if (document.body.style.backgroundColor !== 'black'){
        document.body.style.cssText = 'background-color: black; color: white'
    } else {
        document.body.style.cssText = 'background-color: white; color: black'
    }
}

let colorID;

const generateColors = () => {
    if (!colorID){
       colorID = setInterval(getColors, 1000)
    }
}

const stopGenerating = () => {
    if (colorID){
        clearInterval(getColors)
        colorID = null;
    }
}



document.getElementById('generate').addEventListener('click', generateColors)
document.getElementById('stopGenerate').addEventListener('click', stopGenerating)
