const getDiv = document.querySelector('.addClass');


const addBackground = () => {
    getDiv.className = 'darkmode';
}

// too keep old class too
const addBackground2 = () => {
    getDiv.className = 'addClass darkmode';
}


// using classlist
const addBackground3 = () => {
    getDiv.classList.add('highlight');
}
const removeBackground = () => {
    getDiv.classList.remove('addClass');
}

const toggleBackground = () => {
    getDiv.classList.toggle('darkmode');
}

const replaceBackground = () => {
    getDiv.classList.replace('darkmode', 'addClass');
}

const changeStyle = () => {
    getDiv.style.cssText = 'color: green; height: 20vh; padding:20px';
}




document.querySelector('.add').onclick = addBackground3;
document.querySelector('.remove').onclick = removeBackground;
document.querySelector('.toggle').onclick = toggleBackground;
document.querySelector('.replace').onclick = replaceBackground;
document.querySelector('.change').onclick = changeStyle;
