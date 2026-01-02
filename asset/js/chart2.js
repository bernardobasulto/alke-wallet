var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();



var options = {
          series: [
          {
            name: 'Q1 Budget',
            group: 'budget',
            data: [44000, 55000, 41000, 67000, 22000, 43000]
          },
          {
            name: 'Q1 Actual',
            group: 'actual',
            data: [48000, 50000, 40000, 65000, 25000, 40000]
          },
          {
            name: 'Q2 Budget',
            group: 'budget',
            data: [13000, 36000, 20000, 8000, 13000, 27000]
          },
          {
            name: 'Q2 Actual',
            group: 'actual',
            data: [20000, 40000, 25000, 10000, 12000, 28000]
          }
        ],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings',
            'Public relations'
          ]
        },
        fill: {
          opacity: 1
        },
        colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
        yaxis: {
          labels: {
            formatter: (val) => {
              return val / 1000 + 'K'
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();

var options = {
          series: [{
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
          chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Traffic Sources'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        yaxis: [{
          title: {
            text: 'Website Blog',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Social Media'
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart3"), options);
        chart.render();

 var options = {
          series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }, {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        }, {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        }],
          chart: {
          height: 200,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        yaxis: {
          stepSize: 20
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart4"), options);
        chart.render();

 var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
          height: 250
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart5"), options);
        chart.render();


        var options = {
          series: [25, 15, 44, 55, 41, 17],
          chart: {
          height:200,
          type: 'pie',
        },
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        theme: {
          monochrome: {
            enabled: true,
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        grid: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          },
        },
        legend: {
          show: false,
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart6"), options);
        chart.render();

var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          width: 300,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        title: {
          text: 'Gradient Donut with custom Start-angle'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart7"), options);
        chart.render();

var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
          }
        },
        grid: {
          padding: {
            bottom: -100
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart8"), options);
        chart.render();