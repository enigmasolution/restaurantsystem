<?php 
class Menu_lib {
	
	function __construct() {
		$this->ci =& get_instance();	
		$this->ci->load->model('menu/menu_model');
	}
function get_categories_byrestaurantid($restaurantid){
	          $where_array=array(
					             'restaurantid'=>$restaurantid,
					             'cate_deletionstatus'=>'No',
								 'cate_workingstatus'=> 'Activated'
				                 );  
  return $result=$this->ci->menu_model->get_categories_by_brestaurantid($where_array);	 
 }

function get_menus_byrestaurantid_categoryid($restaurantid, $categoryid){
	          $where_array=array(
					             'menus.restaurantid'=>$restaurantid,
								 'menus.categoryid'=>$categoryid,
					             'categories.cate_deletionstatus' =>'No',
								 'restaurants.rest_workingstatus' =>'Activated',
								 'restaurants.rest_deletionstatus' =>'No',
								 'menus.menu_deletionstatus' =>'No'
				                 );  
  return $result=$this->ci->menu_model->get_all_menu_by($where_array);	 
 }
		
	
}