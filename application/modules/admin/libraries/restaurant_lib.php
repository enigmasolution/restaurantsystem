<?php 
class Restaurant_lib {
  function __construct() {	
        $this->ci =& get_instance();
		$this->ci->load->model('restaurant/restaurant_model');
         }
public function get_restaurants_if_found(){
	 return	$this->ci->restaurant_model->get_all_restaurants();
	 	}	
}