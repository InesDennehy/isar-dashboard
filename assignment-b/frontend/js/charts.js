function addData(chart, label, time, value) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        let d = {x:time, y:value};
        dataset.data.push(d);
    });
    chart.update();
}