<?php 
class Login_lib {
	
	function __construct() {
		$this->ci =& get_instance();	
		$this->ci->load->model('admin/login_model');
	}
  public function validate_login($username,$password){	
		   $result=$this->ci->login_model->get_login($username,$password);
		   $array1=array();
		   if($result){
			    $array1=array(
							    'flag'=>true,
							   );  
						$array=array(
						'admin_id'=>$result->adminid,
						'admin_fullname'=>$result->fullname,
						'admin_email'=>$result->email,
						'admin_gender'=>$result->gender,
						'admin_contactno'=>$result->contactno,
						'admin_firstlogin'=>$result->firstlogin,
						'admin_schooladmin'=>$result->schooladmin,
						'admin_avator'=>$result->avator,
						'admin_schoolid'=>$result->schoolid,
						'admin_groupid'=>$result->groupid,
						'admin_branchcreatedby'=>$result->createdby,
						'logged_in'=>true
						 );
					   $this->ci->session->set_userdata($array);	    
			  }else{
				  $array1=array(
							   'flag'=>false,
								'message'=> 'Invalid Username / Password !',
							   );  			
						
			       }
				     
		  return $array1;   
			   		
	}	
}

