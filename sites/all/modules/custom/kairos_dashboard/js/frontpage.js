/**
 * This file contains behaviours for clickable links on the frontpage.
 */

(function($) {
	Drupal.behaviors.kairosFrontpage = {
		attach: function(context, settings) {
			// Open the add project form in the main content area.
			$('#add-project').click(function (clickEvent) {
				clickEvent.preventDefault();
				$('#region-content .region-content-inner').load(
					$(clickEvent.target).attr('href'),
					{},
					function() {
						Drupal.attachBehaviors($('#region-content .region-content-inner'));
					}
				);
			});
			
			// Open the add milestone form in sidebar first.
			$('.add-milestone').click(function (clickEvent) {
				clickEvent.preventDefault();
				$('#region-sidebar-first .region-sidebar-first-inner').load(
					'kairos-form-ajax/' + $(clickEvent.target).data('node-type'),
					{},
					function() {
						Drupal.attachBehaviors($('#region-sidebar-first .region-sidebar-first-inner'));
					}
				);
			});
		}

	};

})(jQuery);