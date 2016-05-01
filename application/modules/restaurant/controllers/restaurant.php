<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Restaurant extends CI_Controller {
	
function __construct(){
		parent::__construct();		
		//$this->load->library('admin/classroom_lib');
		$this->load->library('admin/do_upload_imgs_lib');
		$this->load->model('restaurant/restaurant_model');
		$this->data='';
		if (! $this->session->userdata('logged_in')){
			redirect('admin/login');
		}
		
		
	}
     

function index(){
	  $this->rememberme->recordOrigPage();
	  $this->data['restaurant_record']=$this->restaurant_model->get_all_restaurant_by();
	  $this->data['page_title']="Manage Restaurant";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('managerestaurant_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');	
}

function display_schoolbranch_detail_byschoolid_json(){
	    $flag=false;
		$this->data['schoolbranch_record']=$this->school_model->get_school_record_forupdation_byschoolid($this->input->post('schoolid')); 
         if(count($this->data['schoolbranch_record'])>0){
			$arrresult=array(
			                 'flag'=> true,
			                 'sc_name'=> $this->data['schoolbranch_record']->sc_name,
							// 'sc_parentschoolid'=> ($this->data['schoolbranch_record']->sc_parentschoolid==0) ? 'School' : 'Branch',
							 'sc_address'=> $this->data['schoolbranch_record']->sc_address,
							 'sc_email'=> $this->data['schoolbranch_record']->sc_email,
							 'sc_phone'=> $this->data['schoolbranch_record']->sc_phone,
							 'sc_mobile'=> $this->data['schoolbranch_record']->sc_mobile, 
							 'sc_fax'=> $this->data['schoolbranch_record']->sc_fax,
							 'sc_contactperson'=> $this->data['schoolbranch_record']->sc_contactperson,
							 'sc_city'=> $this->data['schoolbranch_record']->ci_name,
							 'sc_medium'=> $this->data['schoolbranch_record']->sc_medium, 
							 'sc_code'=> $this->data['schoolbranch_record']->sc_code,
							 'sc_codeasregistration'=> $this->data['schoolbranch_record']->sc_codeasregistration,
							 'sc_workingstatus'=> $this->data['schoolbranch_record']->sc_workingstatus,
							 'sc_systemstatus'=> $this->data['schoolbranch_record']->sc_systemstatus,
							 'sc_registrationdate'=> date('d/m/Y', strtotime($this->data['schoolbranch_record']->sc_registrationdate)),
							 'sc_logo'=> $this->data['schoolbranch_record']->sc_logo
							 );
				 echo json_encode($arrresult);
		 }else{
			 $arrresult=array(
			                 'flag'=> true
							 );
			     echo json_encode($arrresult);
		      }
 
  }
function display_branch_detail_bybranchid_json(){
	    $flag=false;
	    $this->data['branch_record']=$this->school_model->get_branch_record_forupdation_bybranchid($this->input->post('branchid'));  
         if(count($this->data['branch_record'])>0){
			$arrresult=array(
			                 'flag'=> true,
			                 'sc_name'=> $this->data['branch_record']->sc_name,
							 'sc_address'=> $this->data['branch_record']->sc_address,
							 'sc_email'=> $this->data['branch_record']->sc_email,
							 'sc_phone'=> $this->data['branch_record']->sc_phone,
							 'sc_mobile'=> $this->data['branch_record']->sc_mobile, 
							 'sc_fax'=> $this->data['branch_record']->sc_fax,
							 'sc_contactperson'=> $this->data['branch_record']->sc_contactperson,
							 'sc_city'=> $this->data['branch_record']->ci_name,
							 'sc_medium'=> $this->data['branch_record']->sc_medium, 
							 'sc_code'=> $this->data['branch_record']->sc_code,
							 'sc_codeasregistration'=> $this->data['branch_record']->sc_codeasregistration,
							 'sc_workingstatus'=> $this->data['branch_record']->sc_workingstatus,
							 'sc_systemstatus'=> $this->data['branch_record']->sc_systemstatus,
							 'sc_registrationdate'=> date('d/m/Y', strtotime($this->data['branch_record']->sc_registrationdate)),
							 'sc_logo'=> $this->data['branch_record']->sc_logo
							 );
				 echo json_encode($arrresult);
		 }else{
			 $arrresult=array(
			                 'flag'=> true
							 );
			     echo json_encode($arrresult);
		      }
 
  }  
function _check_branch_is_unique_in_school(){
  if($this->input->post('sc_parentschoolid')!=0){
	        $this->data['school_record']=$this->school_model->check_branch_is_unique_in_school($this->input->post('sc_parentschoolid'), $this->input->post('sc_name'));
			if($this->data['school_record']->num_rows()>0){
				  $this->form_validation->set_message('_check_branch_is_unique_in_school', 'Branch Name is Already Existed !');
			       return FALSE;
			    }else{
			       return TRUE;
		      }
		}
					
}

function _function_for_checking_img_format(){	             
			$image_type=$_FILES['avator']['type'];
			$fakesize= $this->input->post('fakesize');    
				     if ( $image_type=='image/jpg' || $image_type=='image/jpeg' || $image_type=='image/png' || $image_type=='image/gif' || $image_type==''){
					          if( $fakesize < 5242880){
								  return TRUE;  
							 }else{
								 $this->form_validation->set_message('_function_for_checking_img_format', 'Selected image size greater 5MB, Try again !');
					               return FALSE;   
							 }
						 }else{
							 $this->form_validation->set_message('_function_for_checking_img_format', 'Invalid restaurant logo format. Try again !');
					          return FALSE; 
				           }			 
	}
function addrestaurant(){
	     $this->rememberme->recordOrigPage();
       	if ($this->input->post()){
		//$this->form_validation->set_rules('sc_parentschoolid', 'School Name', 'required|trim|xss_clean|callback__check_branch_is_unique_in_school');	 
		$this->form_validation->set_rules('rest_name', 'Restaurant Name', 'required|trim|max_length[100]|min_length[0]|is_unique[restaurants.rest_name]');
		$this->form_validation->set_rules('rest_contactperson', 'Contact Person', 'required|trim');
		$this->form_validation->set_rules('rest_contactno', 'Contact No', 'required|trim|min_length[6]|numeric');		
		$this->form_validation->set_rules('cityid', 'City Name', 'required|trim');
		$this->form_validation->set_rules('rest_address', 'Restaurant Address', 'required|trim|max_length[200]');
		$this->form_validation->set_rules('rest_description', 'Restaurant Description', 'required|trim|max_length[2000]');
		$this->form_validation->set_rules('fakeavator', 'Restaurant Logo', 'required|trim|callback__function_for_checking_img_format');
		$this->form_validation->set_message('is_unique','The %s field must be unique');
		if ($this->form_validation->run() == TRUE){
			$rest_logo=$_FILES['avator']['name'];
		     if($rest_logo !=''){
				       $path='restaurant_logo/';
				       $restaurant_logo=$this->do_upload_imgs_lib->function_for_storing_img($path); 
			 }else{
				       $restaurant_logo = "default_logo.jpg"; 
			       }

               	if($restaurant_logo !='' && $restaurant_logo !=false){	
                    
			         $insert_restaurant_record=array(
										  'rest_name'=> $this->input->post('rest_name'),
										  'rest_contactperson'=> $this->input->post('rest_contactperson'),
										  'rest_contactno'=> $this->input->post('rest_contactno'),
										  'cityid'=> $this->input->post('cityid'),
										  'rest_address'=> $this->input->post('rest_address'),
										  'rest_description'=> $this->input->post('rest_description'),
										  'rest_createdby' => $this->session->userdata('admin_id'),
										  'rest_logo'=> $restaurant_logo
			                               );

                        $this->data['restaurantid']=$this->restaurant_model->add_new_restaurant_record($insert_restaurant_record);
					if(count($this->data['restaurantid'])>0){
						   $this->session->set_flashdata('msg', 'Restaurant record has been successfully saved.');
						   redirect('dashboard/');
						}else{
							 $this->data['msg']='Restaurant record has not been saved.';
							}
							
					 }else{
						 $this->data['msg']='Restaurant record has not been saved due to wrong school logo. Try Again !';
						  }			
							
							
					}
	   
	 }
	  $this->data['cities_record']=$this->restaurant_model->get_all_cities_record();		
	  $this->data['page_title']="Add Restaurant";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('addrestaurant_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');	
	 }
	 
	 
	 
	 
	 
function editrestaurant($restaurantid=0){
	 $this->rememberme->recordOrigPage();
	if ($this->input->post()){
		$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim');
		$this->form_validation->set_rules('rest_name', 'Restaurant Name', 'required|trim|max_length[100]|min_length[0]');
		$this->form_validation->set_rules('rest_contactperson', 'Contact Person', 'required|trim');
		$this->form_validation->set_rules('rest_contactno', 'Contact No', 'required|trim|min_length[6]|numeric');		
		$this->form_validation->set_rules('cityid', 'City Name', 'required|trim');
		$this->form_validation->set_rules('rest_address', 'Restaurant Address', 'required|trim|max_length[200]');
		$this->form_validation->set_rules('rest_description', 'Restaurant Description', 'required|trim|max_length[2000]');
		$this->form_validation->set_rules('fakeavator', 'Restaurant Logo', 'required|trim|callback__function_for_checking_img_format');
		$this->form_validation->set_message('is_unique','The %s field must be unique');
		if ($this->form_validation->run() == TRUE){
			$rest_logo=$_FILES['avator']['name'];	  
				 if($rest_logo !=''){
			       $path='restaurant_logo/';
				   $restaurant_logo=$this->do_upload_imgs_lib->function_for_storing_img($path);
				   if($restaurant_logo!=''){
					   $avator= $this->input->post('rest_oldavator'); 
					   if($avator !='default_logo.jpg'){ 
				       $this->do_upload_imgs_lib->function_for_removing_img($path, $avator);
					   }
				   }
			     }else{
				      $restaurant_logo= $this->input->post('rest_oldavator'); 
			        }	  	  
			 if($restaurant_logo !='' && $restaurant_logo !=false){	
			
			     $update_restaurant_record=array(
										  'rest_name'=> $this->input->post('rest_name'),
										  'rest_contactperson'=> $this->input->post('rest_contactperson'),
										  'rest_contactno'=> $this->input->post('rest_contactno'),
										  'cityid'=> $this->input->post('cityid'),
										  'rest_address'=> $this->input->post('rest_address'),
										  'rest_description'=> $this->input->post('rest_description'),
										  'rest_createdby' => $this->session->userdata('admin_id'),
										  'rest_logo'=> $restaurant_logo
			                               );				   
			
                                   $this->data['restaurantid']=$this->restaurant_model->update_restaurant_record($this->input->post('restaurantid'), $update_restaurant_record);
										if(count($this->data['restaurantid'])>0){
												   $this->session->set_flashdata('msg', 'Restaurant has been successfully updated.');
													redirect('dashboard/');
												}else{
													 $this->data['msg']='Restaurant record has not been updated !';
													 }
															
										 }else{
											  $this->data['msg']='Restaurant record has not been uploaded due to wrong foramt logo Try Again !';
											  }		
						     }
	     }
		 
	  $this->data['cities_record']=$this->restaurant_model->get_all_cities_record();	
	  $this->data['restaurant_updation']=$this->restaurant_model->get_restaurant_record_forupdation_byrestaurantid($restaurantid);
      $this->data['page_title']="Edit Restaurant";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('editrestaurant_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');		
}
function delete_restaurant_byrestaurantid_json(){
	$restaurant_delete_record=array(
	                           'rest_deletionstatus'=> 'Yes'
	                             );
	$this->data['restaurant_deletion']=$this->restaurant_model->delete_restaurant_record_byrestaurantid($this->input->post('restaurantid'), $restaurant_delete_record);
	  if($this->data['restaurant_deletion']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }
  }
function activated_deactivated_byrestaurantid_json(){
	if($this->input->post('status')=='Activated'){
		$update_status=array(
		                     'rest_workingstatus'=> 'Activated'
		                      );
	  }else{
		$update_status=array(
		                     'rest_workingstatus'=> 'Deactivated'
		                      );  
		  
	  }
 $this->data['restaurant_status']=$this->restaurant_model->activated_deactivated_restaurant__byrestaurantid($this->input->post('restaurantid'),$update_status);
	  if($this->data['restaurant_status']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }		
}

function enable_disable_byschoolid_json(){
	if($this->input->post('status')=='Enable'){
		$update_status=array(
		                     'sc_systemstatus'=> 'Enable'
		                      );
	  }else{
		$update_status=array(
		                     'sc_systemstatus'=> 'Disable'
		                      );  
		  
	  }
 $this->data['school_status']=$this->school_model->enable_disable_school__byschoolid($this->input->post('schoolid'),$update_status);
	  if($this->data['school_status']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }	
	
  }
function changepassword($schoolid=0){
	 $this->rememberme->recordOrigPage();
	if ($this->input->post()){
	    $this->form_validation->set_rules('schoolid', 'School', 'required|trim');
		$this->form_validation->set_rules('newpassword', 'New Password', 'required|trim|matches[confirmpassword]|xss_clean');
		$this->form_validation->set_rules('confirmpassword', 'Confirm Password', 'required|trim|xss_clean');
		$schoolid=$this->input->post('schoolid');
		if ($this->form_validation->run() == TRUE){
		    $this->data['updatepassword_record'] = $this->school_model->update_password_byschoolid($this->input->post('schoolid'), $this->input->post('newpassword'));
			if($this->data['updatepassword_record']){
				      $this->session->set_flashdata('msg', 'School Admin Password has been Successfully Updated');
				      redirect('home/dashboard');
			    }else{
				     $data['msg']='School Admin Password has not been Updated';
			        
			        }
		         }
	         }
	  $this->data['schoolid']=$schoolid;		
      $this->data['page_title']="Change Password";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topmenu');
	  $this->load->view('school/changepassword_form',$this->data);
	  $this->load->view('admin/main/footer');			
	
}
///////////////////////////////////////////////// END SCHOOL PART /////////////////////////////////////
}