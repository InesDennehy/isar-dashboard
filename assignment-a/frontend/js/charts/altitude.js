var altitudeChart = document.getElementById('altitudeChart').getContext('2d');

gradient = altitudeChart.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 0, 255, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.25)');
gradient.addColorStop(1, 'rgba(255, 0, 255, 0)');


var altitudeData  = {
    labels: [],
    datasets: [{
			backgroundColor: gradient,
			pointBackgroundColor: 'white',
			borderWidth: 2,
			borderColor: '#691291',
			data: []
    }]
};


var altitudeOptions = {
	responsive: true,
	maintainAspectRatio: false,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	elements: {
		line: {
			tension: 0.4
		},
        point: {
            radius: 1,
        }
	},
    plugins : {
        legend: {
            display: false
        },
        tooltip: {
            titleFontFamily: 'Open Sans',
            backgroundColor: 'rgba(0,0,0,0.3)',
            titleFontColor: 'red',
            caretSize: 5,
            cornerRadius: 2,
            xPadding: 10,
            yPadding: 10,
            displayColors: false,
            callbacks: {
                title: function(tooltipItem) {                                
                    return '';
                }
            }
        },
    },
    scales : {
        x:{
            type: 'time',
            min: Date.now(),
            display: false,
        }
    },
};


var altitudeChartInstance = new Chart(altitudeChart, {
    type: 'line',
    data: altitudeData,
	options: altitudeOptions
});