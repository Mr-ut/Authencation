const findLocation = () => {

    const link = document.getElementById('links');



    const success = (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const geoApiUrl = `https://us1.locationiq.com/v1/reverse?key=pk.6edbea252a2d86faf0fac5d951d4c6a0&lat=${lat}&lon=${lng}&format=json`



        fetch(geoApiUrl).then(res => res.json()).then(data => {
            link.textContent = data.address.state + ', ' + data.address.city + ', ' + data.address.postcode;
        });
        // const locname = {
        //     city: data.address.city,
        //     state: data.address.state,
        //     postcode: data.address.postcode
        // };
        // var location = document.createTextNode(locname.city + ', ' + locname.state + ', ' + locname.postcode);
    }

    const error = () => {
        link.textContent = 'Unable to get your location';
    }

    navigator.geolocation.getCurrentPosition(success, error);
}
document.getElementById('links').addEventListener('click', findLocation);
