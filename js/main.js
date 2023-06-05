google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Tools: '],
        ['Python', 55],
        ['HTML', 49],
        ['CSS', 44],
        ['JavaScript', 24],
        ['MySQL', 15],
        ['Java', 15],
        ['C++', 15],

    ]);
    const options = {
        backgroundColor: 'rgb(74, 73, 71)',
        colors: ['green'],
        textDecoration: 'none',

    };
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (Number.isInteger(data[i][j])) {
                console.log(data[i][j]);
            }
        }
    }
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}