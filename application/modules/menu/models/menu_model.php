<?php 
class Menu_model extends CI_Model{
	
	function __construct(){
		parent::__construct();
	}
public function get_all_restaurants_by(){
	     $this->db->select('*');
		 $this->db->from('restaurants');
         $this->db->where(array('rest_workingstatus' =>'Activated','rest_deletionstatus' =>'No'));
 return $this->db->get();		 
}
function get_all_category_by($where_array){
         $this->db->select('*');
		 $this->db->from('categories');
		 $this->db->join('restaurants', 'categories.restaurantid=restaurants.restaurantid');
         $this->db->where($where_array);
  return $this->db->get();	
}

/*
public function get_all_branches_by($schoolid){
	    $this->db->select('*');
	    $this->db->from('schools');
        $this->db->where(array('sc_parentschoolid !=' =>0, 'sc_deletionstatus' =>'No', 'sc_parentschoolid'=>$schoolid));
return  $this->db->get(); 
}
function no_of_branches($where_array){
         $this->db->select('*');
		 $this->db->from('schools');
         $this->db->where($where_array);
 return $this->db->get();	
	
}*/
function get_all_menu_by($where_array){
         $this->db->select('*');
		 $this->db->from('menus');
		 $this->db->join('restaurants', 'menus.restaurantid=restaurants.restaurantid');
		 $this->db->join('categories', 'menus.categoryid=categories.categoryid');
         $this->db->where($where_array);
 return $this->db->get();			
}

	
function check_menu_is_unique_in_category($where_array){
	     $this->db->select('*');
		 $this->db->from('menus');
	     $this->db->where($where_array);
  return $this->db->get();
}
/*
public function get_all_schools(){
  return $this->db->get_where('schools', array('sc_parentschoolid' =>0, 'sc_deletionstatus' =>'No'));
}*/
function add_new_menu_record($insert_menu_record){								   
         $this->db->insert('menus', $insert_menu_record); 
		 return $this->db->insert_id();     	
}
function get_categories_by_brestaurantid($where_array){
	   $this->db->select('categoryid,cate_name');
       $this->db->from('categories');
       $this->db->where($where_array);
return   $this->db->get();
}
/*function add_schooladmin_logininfo($insert_schoollogininfo, $password){
        $this->db->set('password', 'PASSWORD("'.$password.'")', FALSE);
		$this->db->insert('admin',$insert_schoollogininfo);
	    return $this->db->insert_id();
}
*/
function get_menu_record_forupdation_bymenuid($menuid){
           $this->db->select('*');
		   $this->db->from('menus');
           $this->db->where(array('menuid' => $menuid));	   
    return $this->db->get()->row();
 }
 /*
function get_branch_record_forupdation_bybranchid($branchid){
	     $this->db->select('*');
	     $this->db->from('schools');
		 $this->db->join('cities', 'schools.cityid=cities.cityid');
	     $this->db->where(array('schoolid' => $branchid, 'sc_parentschoolid !=' =>0));
 return  $this->db->get()->row();
 }
 
*/
function update_menu_record($menuid,$menu_update_record){
       $this->db->update('menus', $menu_update_record, array('menuid' => $menuid)); 
       return $this->db->affected_rows();
}
function delete_menu_record_bymenuid($menuid, $menu_delete_record){
	$this->db->update('menus', $menu_delete_record, array('menuid' => $menuid)); 
	return $this->db->affected_rows();
 }
function activated_deactivated_menu_bymenuid($menuid,$update_status){
   $this->db->update('menus', $update_status, array('menuid' => $menuid)); 
   return $this->db->affected_rows();
  }
  /*
function enable_disable_school__byschoolid($schoolid,$update_status){
   $this->db->update('schools', $update_status, array('schoolid' => $schoolid)); 
   return $this->db->affected_rows();
  }
  
function update_password_byschoolid($schoolid,$newpassword){   
		$hash_passnew="password('".$newpassword."')";		
		$this->db->where('schoolid',$schoolid);
		$this->db->set('password',$hash_passnew, FALSE);
		$this->db->update('admin');
		return $this->db->affected_rows();	 
	      
}	  */
  ///////////////////////////////////// END SCHOOL PART /////////////////////////
}
