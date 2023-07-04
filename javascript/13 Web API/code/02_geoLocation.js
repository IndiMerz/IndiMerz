// Get current Location
const crrSuccess = (position) => {
    const coordination = position.coords
    console.log(`
    Latitude: ${coordination.latitude}
    Longitude: ${coordination.longitude}
    Accuracy: ${coordination.accuracy} meters
    `);
}

const crrError = (error) => {
    console.log(`Error: ${error.code} - ${error.message}`);
}

const crrOption = {
    enableHighAccuracy: true,  // use GPS if available
    timeout: 6000,             // Time to wait for stop trying for location
    maximumAge: 0,             // Do not use cached location
}

// takes 3 argument: success, error and option
navigator.geolocation.getCurrentPosition(crrSuccess, crrError, crrOption)


// Watch Position
const destination = {
    latitude: 23.42452624,
    longitude: 78.490175142
}


const watchSuccess = (position) => {
    const coordination = position.coords

    if (destination.latitude === coordination.latitude && destination.longitude === coordination.longitude) {
        console.log('You have reached at your destination');
        navigator.geolocation.clearWatch(id)
    } else {
        console.log(`
        Latitude Left: ${destination.latitude - coordination.latitude}
        Longitude Left: ${destination.longitude - coordination.longitude}
        `);
    }

}

const watchError = (error) => {
    console.log(`Error: ${error.code} - ${error.message}`);
}

const watchOption = {
    enableHighAccuracy: true,  // use GPS if available
    timeout: 6000,             // Time to wait for stop trying for location
    maximumAge: 0,             // Do not use cached location
}

const id = navigator.geolocation.getCurrentPosition(watchSuccess, watchError, watchOption)
