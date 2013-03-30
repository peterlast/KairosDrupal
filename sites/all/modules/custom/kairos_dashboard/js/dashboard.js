/**
 * This file contains behaviours for taking milestones data and rendering it using JS Fiddle
 */

(function($) {

  var chartMilestones;

	Drupal.behaviors.kairosDashboard = {
		attach: function(context, settings) {
			console.log(settings);
			// Initialize the data array.
			var series = [];
			$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {
			
			});

			// Create the data array for milestones. Create an entry for each
			// project and each date.
			for (i = 0; i < settings.kairosDashboardNumDaysDisplayed; i++) {
				$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {

				});	
			}


	    	var chart;
	    	var chartSeries = settings.kairosDashboardSeries;
	    	var chartXaxis = settings.kairosDashboardXaxis;
        chartMilestones = settings.kairosDashboardMilestones;
	    	console.log(series);
	        chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'foobar'
	            },
	            title: {
	                text: ' '
	            },
	            xAxis: {
	                categories: chartXaxis,
                  labels: {
                    enabled: false
                  }
	            },
	            yAxis: {
                  labels: {
                    enabled: false
                  },
                  title: {
                    enabled: false
                  }
	            },
	            tooltip: {
	                formatter: function() {
	                    var s;
	                    if (this.point.name) { // the pie chart
	                        return false;
	                    } else if(this.series.stackKey == 'column' && this.y > 0) {
                          //s = ''+this.series.name + ': ' + chartMilestones[this.point.projectID][this.key]['name'];
                          s =   'Project: <b>'+this.series.name + '</b><br>' 
                                + 'Milestone: <b>' + chartMilestones[this.point.projectID][this.key]['name'] + '</b><br>'
                                + 'Date: <b>' + formatDateString(this.key) + '</b>';
	                    }
                      else {//projected workload line
                        return false;
                      }
	                    return s;
	                }
	            },
	            plotOptions: {
	                column: {
	                    stacking: 'normal',
	                    dataLabels: {
	                        //enabled: true,
	                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                    }
	                }
	            },
	            labels: {
	                items: [{
	                    style: {
	                        left: '40px',
	                        top: '8px',
	                        color: 'black'
	                    }
	                }]
	            },
	            series: chartSeries
	        });		
		}
	};
})(jQuery);

var months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
}

function formatDateString(date) {
  var year = date.substring(0,4);
  var month = date.substring(4,6);
  var day = date.substring(6,8);

  return months[parseInt(month)] + " " + day + ", " + year;
}
