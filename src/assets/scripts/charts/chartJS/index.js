import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';

export default (function () {
  // ------------------------------------------------------
  // @Line Charts
  // ------------------------------------------------------

  const lineChartBox = document.getElementById('line-chart');

  //Definition of arduino serial port
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

//dataJson test from arduino reading.
var datajson = {"stress":30,"HR":40};
var datajson2 = {"stress":40,"HR":55};

var result = [];                      // Results will go here
var nowHour = new Date().getHours();  // Get current hour of the day
console.log(Date())
// Loop from current hour number to 23
for(var i = 0; i < 24; i++){
  result.push(i + "00");  // Put loop counter into array with "00" next to it
}


//test of adding data to array
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
  }

  const lineChartBox2 = document.getElementById('line-chart2');

  if (lineChartBox2) {
    const line2Ctx = lineChartBox2.getContext('2d');
    lineChartBox2.height = 80;

    var chart2 = new Chart(line2Ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label                : 'Hear Rate',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [],
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
  }


  // ------------------------------------------------------
  // @Area Charts
  // ------------------------------------------------------
  const areaChartBox = document.getElementById('area-chart');

  if (areaChartBox) {
    const areaCtx = areaChartBox.getContext('2d');

    var areaChart = new Chart(areaCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          backgroundColor : 'rgba(3, 169, 244, 0.5)',
          borderColor     : COLORS['light-blue-800'],
          data            : [],
          label           : 'Stress',
          fill            : 'start',
        }],
      },
    });

  }

  //Cgeneration of random numbers for test
  denData();
  function denData(){
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    //console.log(time)
    var ran = Math.floor(Math.random() * 40) + 80;
    var streRan = Math.floor(Math.random() * (10 + 10 + 1) ) - 10;
    //console.log(ran)
    addData(chart2, time, ran);
    addData(areaChart, time, ran - 50 + streRan );
    setTimeout(function(){denData()}, 30000);
  }

}())
