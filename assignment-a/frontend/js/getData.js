function getData () {
    let url = 'https://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67';

    let req = fetch(url,
    ).then(data => data.json())
    .then(res => {
        document.getElementById('x').innerHTML = `x: ${res.velocity.x}`;
        document.getElementById('y').innerHTML = `y: ${res.velocity.y}`;
        document.getElementById('z').innerHTML = `z: ${res.velocity.z}`;
        document.getElementById('altitude').innerHTML = res.altitude;
        document.getElementById('temperature').innerHTML = res.temperature;
        document.getElementById('goingUp').innerHTML = res.goingUp ? 'up' : 'down';
        document.getElementById('statusMessage').innerHTML = res.statusMessage;

        //charts
        let time = Date.now();
        addData(altitudeChartInstance, '', Date.now(), res.altitude);
        addData(temperatureChartInstance, '', Date.now(), res.temperature);
        setVectorDirection(res.velocity.x, res.velocity.y, res.velocity.z);
    });
}
getData();