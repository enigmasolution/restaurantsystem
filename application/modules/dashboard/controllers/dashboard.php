<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller {
	
function __construct(){
		parent::__construct();		
		$this->load->library('admin/login_lib');
		$this->load->library('admin/do_upload_imgs_lib');
		$this->load->model('dashboard/home_model');
		$this->load->helper('dashboard/template');
		$this->data='';
		
		if (! $this->session->userdata('logged_in')){
			redirect('admin/login');
		}
		//$this->data['notification_record']=$this->notification_lib->notification_byparentid($this->session->userdata('admin_id'));
	}
	
public function index($branchid=0){
	$this->rememberme->recordOrigPage();
	$this->data['page_title']="Dashboard";	
	$this->load->view('admin/main/header',$this->data);
	$this->load->view('admin/main/topleftnavbar');
	$this->load->view('dashboard_form',$this->data);
	$this->load->view('admin/main/rightnavbar',$this->data);
	$this->load->view('admin/main/footer');	
    }		
function dynamically_loadnotification_by(){
	$this->data['notification_record']=$this->notification_lib->notification_byparentid();
	if($this->data['notification_record']->num_rows()>0){
		$result=get_notification_dynamically($this->data['notification_record']);
		$countnotification=$this->data['notification_record']->num_rows();
	 }else{
		$result=''; 
		$countnotification='0';
	 }
	 $arrresult=array(
					 'countnotification'=> $countnotification,
					 'result'=> $result
				     );
   echo json_encode($arrresult);
}
function add_yes_to_readstatus_by(){
	 $where_notification_array=array(
	                                'notificationid'=>$this->input->post('notificationid')
	                               );
	 $update_notification_array=array(
	                                'no_readstatus'=>'Yes'
	                               );							   
	  $this->data['notification_record']=$this->home_model->yes_readstatus_of_school_by($where_notification_array, $update_notification_array);
	  if(count($this->data['notification_record'])>0){
	             echo json_encode(true);
	       }else{
			    echo json_encode(false);     
		   }
}
///////////////// NOTIFICATION TO PARENT ///////////////
function send_notification_toschoolby(){
	  $branchid=$this->input->post('branchid');
	  $classid =$this->input->post('classid');
	  $studentid=$this->input->post('studentid');
	  $st_fullname=$this->input->post('st_fullname');
	  $st_registrationno=$this->input->post('st_registrationno');
	  $st_avator=$this->input->post('st_avator');
	  $pa_parentaccountno=$this->input->post('pa_parentaccountno');
	  $pa_fathername=$this->input->post('pa_fathername');
	  $pa_email=$this->input->post('pa_email');
	  $no_subject=$this->input->post('no_subject');
	  $no_message=$this->input->post('no_message');
	   if($this->session->userdata('admin_schooladmin')==1){
		    $no_by=1;
			$who_is='School Admin';
	  }else if($this->session->userdata('admin_schooladmin')==2){
		    $no_by=2;
			$who_is='Branch Admin';
	       }
	  $insert_notification_array=array(
	                                    'branchid'=>$branchid,
										'classid'=>$classid,
										'studentid'=>$studentid,
										'no_createdby'=>$this->session->userdata('parentlogin_id'),
										'pa_parentaccountno'=>$pa_parentaccountno,
										'no_subject'=>$no_subject,
										'no_message'=>$no_message,
										'no_by'=>$no_by
	                                    );
	  $this->data['notification_record']=$this->home_model->add_notification_of_school_by($insert_notification_array);
	  if(count($this->data['notification_record'])>0){
		            $this->email->clear();
					$this->email->from($pa_email,'Email by '.$pa_fathername);
					$this->email->to($pa_email);
					$this->email->subject($no_subject);
					$addparentdetail='Aslam O Alikum '.$pa_fathername.' F/O '.$st_fullname.' whose Reg-No is '.$st_registrationno.'\n\n';
					$this->email->message($addparentdetail.$no_message);
					if($this->email->send()){
	                  echo json_encode(true);
					}else{
					  echo json_encode(false); 
					   }
	       }else{
			    echo json_encode(false);     
		   }
  }	  
function myaccount(){
	$this->rememberme->recordOrigPage();
	if($this->input->post()){
	$this->data['hint']=$this->input->post('hint');
	    if($this->input->post('hint')=='profile'){
		$this->form_validation->set_rules('fullname', 'Full name', 'required|trim|min_length[2]|max_length[50]|xss_clean');
		$this->form_validation->set_rules('email', 'Email', 'required|trim||valid_email|matches[confirmemail]|max_length[70]');
		$this->form_validation->set_rules('confirmemail', 'Confirm Email', 'required|trim||valid_email');
		$this->form_validation->set_rules('gender', 'Gender', 'required|trim|xss_clean');
		$this->form_validation->set_rules('contactno', 'Contact No', 'required|trim|numeric|xss_clean');
		if ($this->form_validation->run() == TRUE){
			     	$us_avator=$_FILES['avator']['name'];
		     if($us_avator !=''){
			       $path='user_avator/';
				   $user_avator=$this->do_upload_imgs_lib->function_for_storing_img($path);
				   if($user_avator!=''){
					   $avator= $this->input->post('us_oldavator');
					   if($avator !='default_avator.jpg'){ 
				           $this->do_upload_imgs_lib->function_for_removing_img($path, $avator);
					      }
				   }
			       }else{
				
				  $user_avator= $this->input->post('us_oldavator'); 
			       }
				if($user_avator !='' && $user_avator !=false){
			          $update_array=array(
					                      'fullname'=>ucwords($this->input->post('fullname')),
										  'email'=> $this->input->post('email'),
										  'gender'=> $this->input->post('gender'),
										  'contactno'=>$this->input->post('contactno'),
										  'avator'=> $user_avator
					                       );
			
			                 
		    $this->data['updateprofile_record'] = $this->login_model->update_profile_byuserid($this->session->userdata('admin_id'), $update_array);
			if($this->data['updateprofile_record']){
				      $array=array(
						'admin_fullname'=>ucwords($this->input->post('fullname')),
						'admin_email'=>$this->input->post('email'),
						'admin_gender'=>$this->input->post('gender'),
						'admin_contactno'=>$this->input->post('contactno'),
						'admin_avator'=>$user_avator,
						 );
					   $this->session->set_userdata($array);	  
			           $this->session->set_flashdata('msg', 'Profile has been Successfully Updated');
					   redirect('home/dashboard');
				}else{
				     $data['msg']='Profile has not been Updated';
			         $this->data['msg']='<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;'.$data['msg'].'</div>';
			        }
					
			 }else{
				 $data['msg']='User Record has not been Updated due to Invalid Upload File Type Try Again !';
				 $this->data['msg']='<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;'.$data['msg'].'</div>';
			     }		
					
					
		    }else{
			       $this->data['msg']=validation_errors('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning !</strong>&emsp;', '</div>');
		        }
				
		}else if($this->input->post('hint')=='password'){
		$this->form_validation->set_rules('correntpassword', 'Corrent Password', 'required|trim');
		$this->form_validation->set_rules('newpassword', 'New Password', 'required|trim|matches[confirmpassword]|xss_clean');
		$this->form_validation->set_rules('confirmpassword', 'Confirm Password', 'required|trim|xss_clean');
		if ($this->form_validation->run() == TRUE){
		    $this->data['updatepassword_record'] = $this->login_model->update_password_byadminid($this->session->userdata('admin_id'), $this->input->post('correntpassword'), $this->input->post('newpassword'));
			if($this->data['updatepassword_record']){
				     redirect('admin/logout');
			    }else{
				     $data['msg']='Password has not been Updated';
			         $this->data['msg']='<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;'.$data['msg'].'</div>';
			        }
		    }else{
			       $this->data['msg']=validation_errors('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning !</strong>&emsp;', '</div>');
		        }
				
		}
	}
	
	$this->data['page_title']="My Account";	
    $this->load->view('admin/main/header',$this->data);
	$this->load->view('admin/main/topmenu');
	$this->load->view('myaccount_form');
	$this->load->view('admin/main/footer');			
   }
 
 public function lockscreen(){
	$this->rememberme->recordOrigPage();	
	$this->load->view('lockscreen_form');
    }	
	  	 
	
	      
}