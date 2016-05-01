<?php 
class Login_lib {
	
  public function validate_login($palo_username,$palo_password){	
		   $result=$this->ci->login_model->get_login($palo_username,$palo_password);
		   if(count($result)>0){	
				$array=array(
				'parentlogin_id'=>$result->parentloginid,
				'parent_fathername'=>$result->pa_fathername,
				'parent_studentid'=>$result->studentid,
				'parent_parentid'=>$result->parentid,
				'parent_parentaccountno'=>$result->pa_parentaccountno,
				'parent_avator'=>$result->pa_avator,				
				'parentlogged_in' =>true
				 );
			$this->ci->session->set_userdata($array);
			      return true;
			}else{			
				  return false;			
			 }		
	}	
}

