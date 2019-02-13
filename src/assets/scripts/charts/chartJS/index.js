import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';

export default (function () {
  // ------------------------------------------------------
  // @Line Charts
  // ------------------------------------------------------

  const lineChartBox = document.getElementById('line-chart');

  //example json structure to receive from arduino
  var jsonfile = {
    "stress": [{
       "hour": "1:00 am",
       "value": 60
    }, {
       "hour": "2:00 am",
       "value": 70
    }],
    "HeartRate": [{
       "hour": "1:00 am",
       "value": 30
    }, {
       "hour": "2:00 am",
       "value": 100
    }]
 };


//how to receive data? maybe json from arduino?
  
  var labelsStress = jsonfile.stress.map(function(e) {
      return e.hour;
   });
   var dataStress = jsonfile.stress.map(function(e) {
      return e.value;
   });;

   var dataHR = jsonfile.HeartRate.map(function(e) {
    return e.value;
 });;
  
  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
  if (lineChartBox) {
    const lineCtx = lineChartBox.getContext('2d');
    lineChartBox.height = 80;

    var chart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: labelsStress,
        datasets: [{
          label                : 'Stress',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : dataStress,
        }, {
          label                : 'Heart Rate',
          backgroundColor      : 'rgba(232, 245, 233, 0.5)',
          borderColor          : COLORS['blue-500'],
          pointBackgroundColor : COLORS['blue-700'],
          borderWidth          : 2,
          data                 : dataHR,
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
    addData(chart, '3:00 am' , 30) //adding a point in chart
  }

  const lineChartBox2 = document.getElementById('line-chart2');

  if (lineChartBox2) {
    const line2Ctx = lineChartBox2.getContext('2d');
    lineChartBox2.height = 80;

    var chart2 = new Chart(line2Ctx, {
      type: 'line',
      data: {
        labels: ['12:00 am', '1:00 am', '2:00 am'],
        datasets: [{
          label                : 'Stress',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [60, 80, 110],
        }, {
          label                : 'Heart Rate',
          backgroundColor      : 'rgba(232, 245, 233, 0.5)',
          borderColor          : COLORS['blue-500'],
          pointBackgroundColor : COLORS['blue-700'],
          borderWidth          : 2,
          data                 : [70, 75, 85],
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
    //addData(chart2, '2018' , 0) //adding a point in chart
  }  
/*
  // ------------------------------------------------------
  // @Bar Charts
  // ------------------------------------------------------

  const barChartBox = document.getElementById('bar-chart');

  if (barChartBox) {
    const barCtx = barChartBox.getContext('2d');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label           : 'Dataset 1',
          backgroundColor : COLORS['deep-purple-500'],
          borderColor     : COLORS['deep-purple-800'],
          borderWidth     : 1,
          data            : [10, 50, 20, 40, 60, 30, 70],
        }, {
          label           : 'Dataset 2',
          backgroundColor : COLORS['light-blue-500'],
          borderColor     : COLORS['light-blue-800'],
          borderWidth     : 1,
          data            : [10, 50, 20, 40, 60, 30, 70],
        }],
      },

      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      },
    });
  }

  // ------------------------------------------------------
  // @Area Charts
  // ------------------------------------------------------
*/
  const areaChartBox = document.getElementById('area-chart');

  if (areaChartBox) {
    const areaCtx = areaChartBox.getContext('2d');

    var areaChart = new Chart(areaCtx, {
      type: 'line',
      data: {
        labels: ['12:00 am', '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am', '7:00 am', '8:00 am'],
        datasets: [{
          backgroundColor : 'rgba(3, 169, 244, 0.5)',
          borderColor     : COLORS['light-blue-800'],
          data            : [10, 50, 20, 40, 60, 30, 70, 50, 50],
          label           : 'Stress',
          fill            : 'start',
        }],
      },
    });
    //for(i = 0; i < 20; i++){
      addData(areaChart, 'test', 10 );
      addData(areaChart, 'test', 30 );
      addData(areaChart, 'test', 50 );
      addData(areaChart, 'test', 60 );
      addData(areaChart, 'test', 20 );
      //if dataset.data # > x, destroy and remake?
    
  }
/*
  // ------------------------------------------------------
  // @Scatter Charts
  // ------------------------------------------------------

  const scatterChartBox = document.getElementById('scatter-chart');

  if (scatterChartBox) {
    const scatterCtx = scatterChartBox.getContext('2d');

    Chart.Scatter(scatterCtx, {
      data: {
        datasets: [{
          label           : 'My First dataset',
          borderColor     : COLORS['red-500'],
          backgroundColor : COLORS['red-500'],
          data: [
            { x: 10, y: 20 },
            { x: 30, y: 40 },
            { x: 50, y: 60 },
            { x: 70, y: 80 },
            { x: 90, y: 100 },
            { x: 110, y: 120 },
            { x: 130, y: 140 },
          ],
        }, {
          label           : 'My Second dataset',
          borderColor     : COLORS['green-500'],
          backgroundColor : COLORS['green-500'],
          data: [
            { x: 150, y: 160 },
            { x: 170, y: 180 },
            { x: 190, y: 200 },
            { x: 210, y: 220 },
            { x: 230, y: 240 },
            { x: 250, y: 260 },
            { x: 270, y: 280 },
          ],
        }],
      },
    });
  }*/
}())
