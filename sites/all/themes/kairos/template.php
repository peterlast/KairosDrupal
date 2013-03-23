<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
 
 /**
* Implements hook_preprocess_node().
*/
function kairos_preprocess_node(&$vars) {
  // Check for the content type = projects.
  if ($vars['node']->type == 'project') {
    // If it is... set the my_graph var.
    // This could/should be the output of your custom
    // graph function. kairos_dashboard_main_dashboard()
    // Like:
	//$vars['my_graph'] = print_r($vars['node'], TRUE);
	//$vars['my_graph'] = kairos_dashboard_project_dashboard($vars['vid']);
    //$vars['my_graph'] = 'STUFF';
  }
}
