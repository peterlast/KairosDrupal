/**
 * This file contains behaviours for taking milestones data and rendering it using JS Fiddle
 */

(function($) {
	Drupal.behaviors.kairosDashboard = {
		attach: function(context, settings) {
			console.log(settings);
			// Initialize the data array.
			var series = [];
			$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {
			
			});

			// Create the data array for milestones. Create an entry for each
			// project and each date.
			for (i = 0; i < 90; i++) {
				$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {

				});	
			}


	    	var chart;
	    	var chartSeries = settings.kairosDashboardSeries;
	    	var chartXaxis = settings.kairosDashboardXaxis;
	    	console.log(series);
	        chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'foobar'
	            },
	            title: {
	                text: ' '
	            },
	            xAxis: {
	                categories: chartXaxis
	            },
	            tooltip: {
	                formatter: function() {
	                    var s;
	                    if (this.point.name) { // the pie chart
	                        s = ''+
	                            this.point.name +': '+ this.y +' fruits';
	                    } else {
	                        s = ''+
	                            this.x  +': '+ this.y;
	                    }
	                    return s;
	                }
	            },
	            plotOptions: {
	                column: {
	                    stacking: 'normal',
	                    dataLabels: {
	                        enabled: true,
	                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                    }
	                }
	            },
	            labels: {
	                items: [{
	                    html: 'label',
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