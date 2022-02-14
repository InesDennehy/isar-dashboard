var client = new WebSocket("wss://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67");
client.onmessage = updateData;

let direction = true;

function updateData (msg) {
    let res = JSON.parse(msg.data);

    document.getElementById('x').innerHTML = `x: ${res.Velocity.X}`;
    document.getElementById('y').innerHTML = `y: ${res.Velocity.Y}`;
    document.getElementById('z').innerHTML = `z: ${res.Velocity.Z}`;
    document.getElementById('altitude').innerHTML = res.Altitude;
    document.getElementById('temperature').innerHTML = res.Temperature;
    document.getElementById('goingUp').innerHTML = res.GoingUp ? 'up' : 'down';
    direction = res.GoingUp;
    if(!res.GoingUp){
        if(!document.getElementById('topBanner').classList.contains('alert'))
            document.getElementById('topBanner').classList.add('alert');
    } else {
        if(document.getElementById('topBanner').classList.contains('alert'))
        document.getElementById('topBanner').classList.remove('alert');
    }
    document.getElementById('statusMessage').innerHTML = res.StatusMessage;

    //charts
    let time = Date.now();
    addData(altitudeChartInstance, '', Date.now(), res.Altitude);
    addData(temperatureChartInstance, '', Date.now(), res.Temperature);
    setVectorDirection(res.Velocity.X, res.Velocity.Y, res.Velocity.Z);
}

function changeDirection(){
    let url = `https://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumChangeDirection?token=0DB9D71DE67&direction=${!direction}`;
    fetch(url);
}