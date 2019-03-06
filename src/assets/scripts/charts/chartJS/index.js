import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';

export default (function () {
  // ------------------------------------------------------
  // @Line Charts
  // ------------------------------------------------------

  const lineChartBox = document.getElementById('line-chart');
  //var port = new SerialPort('COM4', {
  //  baudRate: 115200
  //});
  //var Readline = SerialPort.parsers.Readline

  //Arreglos de datos stress & HR para charts
  var readStress = [];
  var readHR = [];

  //example json structure to receive from arduino
  /*var jsonfile = {
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
 };*/
 var datajson = {"stress":30,"HR":40};
 var datajson2 = {"stress":40,"HR":55};
 //datajson = JSON.parse(datajson);
//how to receive data? maybe json from arduino?
/*
  var labelsStress = jsonfile.stress.map(function(e) {
      return e.hour;
   });
   var dataStress = jsonfile.stress.map(function(e) {
      return e.value;
   });;

   var dataHR = jsonfile.HeartRate.map(function(e) {
    return e.value;
 });;
 */
var result = [];                      // Results will go here
var nowHour = new Date().getHours();  // Get current hour of the day

// Loop from current hour number to 23
for(var i = 0; i < 24; i++){
  result.push(i + "00");  // Put loop counter into array with "00" next to it
}
  readStress.push(datajson.stress);
  readStress.push(datajson2.stress)
  readHR.push(datajson.HR);
  readHR.push(datajson2.HR);


  function addData(chart, label, data) {
    if (chart.data.labels.length > 15) {
      chart.data.labels.shift();
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.shift();
          dataset.data.push(data);
      });
      chart.update();
    }
    else{
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
    }
  }

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
readHR.push(37,58,50,44,60,40,39,52,34,55);
readStress.push(29,45,37,33,39,34,37,45,27,40);

  if (lineChartBox) {
    const lineCtx = lineChartBox.getContext('2d');
    lineChartBox.height = 80;

    var chart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label                : 'Stress',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : readStress,
        }, {
          label                : 'Heart Rate',
          backgroundColor      : 'rgba(232, 245, 233, 0.5)',
          borderColor          : COLORS['blue-500'],
          pointBackgroundColor : COLORS['blue-700'],
          borderWidth          : 2,
          data                 : readHR,
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
    //addData(chart, '000' , 30) //adding a point in chart
  }

  const lineChartBox2 = document.getElementById('line-chart2');

  if (lineChartBox2) {
    const line2Ctx = lineChartBox2.getContext('2d');
    lineChartBox2.height = 80;

    var chart2 = new Chart(line2Ctx, {
      type: 'line',
      data: {
        labels: ['12:00 am', '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am','7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm'],
        datasets: [{
          label                : 'Hear Rate',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [60, 80, 85,50,60,40,35,70,65,90,100,50,85,60],
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
    //addData(chart2,'2:00 pm',40);
    //addData(chart2,'3:00 pm',10);
    //addData(chart2,'4:00 pm',150);


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
      addData(areaChart, '9:00 am', 10 );
      addData(areaChart, '10:00 am', 30 );
      addData(areaChart, '11:00 am', 50 );
      addData(areaChart, '12:00 am', 60 );
      addData(areaChart, '1:00 pm', 20 );
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
