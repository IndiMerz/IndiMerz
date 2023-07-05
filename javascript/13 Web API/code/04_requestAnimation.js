const car = document.getElementById('car');

let start;
let end = false;

const runCar = (timestamp) => {
    if (start === undefined){
        start = timestamp;
    }

    const elapsed = timestamp - start;

    if (elapsed > 10000) {
        end = true;
    }

    if (end) {
        return;
    }

    car.style.transform = `translateX(${elapsed/15}px) rotate(${elapsed/20}deg) `

    requestAnimationFrame(runCar)
}

requestAnimationFrame(runCar);