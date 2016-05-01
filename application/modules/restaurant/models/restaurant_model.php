<?php 
class restaurant_model extends CI_Model{
	
	function __construct(){
		parent::__construct();
	}
/*public function get_all_schools_for_superuser(){
	     $this->db->select('*');
		 $this->db->from('schools');
         $this->db->where(array('sc_deletionstatus' =>'No', 'sc_parentschoolid' =>0));
 return $this->db->get();		 
}
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
function get_all_restaurant_by(){
         $this->db->select('*');
		 $this->db->from('restaurants');
		 $this->db->join('cities', 'restaurants.cityid=cities.cityid');
         $this->db->where(array('rest_deletionstatus' =>'No'));
 return $this->db->get();			
}


function get_all_cities_record(){
	    $this->db->select('*');
	    $this->db->from('cities');
		$this->db->order_by('ci_name','asc');
return	$this->db->get();
	
}
/*	
function check_branch_is_unique_in_school($sc_parentschoolid, $sc_name){
	return $this->db->get_where('schools', array('sc_parentschoolid'=>$sc_parentschoolid, 'sc_name' =>$sc_name));
}
public function get_all_schools(){
  return $this->db->get_where('schools', array('sc_parentschoolid' =>0, 'sc_deletionstatus' =>'No'));
}*/
function add_new_restaurant_record($insert_restaurant_record){								   
         $this->db->insert('restaurants', $insert_restaurant_record); 
		 return $this->db->insert_id();     	
}
/*function add_schooladmin_logininfo($insert_schoollogininfo, $password){
        $this->db->set('password', 'PASSWORD("'.$password.'")', FALSE);
		$this->db->insert('admin',$insert_schoollogininfo);
	    return $this->db->insert_id();
}
*/
function get_restaurant_record_forupdation_byrestaurantid($restaurantid){
           $this->db->select('*');
		   $this->db->from('restaurants');
           $this->db->where(array('restaurantid' => $restaurantid,'rest_deletionstatus' =>'No'));	   
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
function update_restaurant_record($restaurantid,$restaurant_update_record){
       $this->db->update('restaurants', $restaurant_update_record, array('restaurantid' => $restaurantid)); 
       return $this->db->affected_rows();
} 

function delete_restaurant_record_byrestaurantid($restaurantid, $restaurant_delete_record){
	$this->db->update('restaurants', $restaurant_delete_record, array('restaurantid' => $restaurantid)); 
	return $this->db->affected_rows();
 }

function activated_deactivated_restaurant__byrestaurantid($restaurantid,$update_status){
   $this->db->update('restaurants', $update_status, array('restaurantid' => $restaurantid)); 
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
