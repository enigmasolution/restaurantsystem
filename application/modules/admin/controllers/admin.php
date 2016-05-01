<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {
	
function __construct(){
		parent::__construct();		
		$this->load->library('admin/login_lib');
		$this->load->model('admin/login_model');
		$this->data='';
		//redirect($this->rememberme->getOrigPage());
		/*if ($this->session->userdata('admin_id') !=1){
			redirect('admin/dashboard');
		}	*/
/*$cookie_user = $this->rememberme->verifyCookie();
if ($cookie_user) {
    // find user id of cookie_user stored in application database
    $user = User::findUser($cookie_user);
    // set session if necessary
    if (!$this->session->userdata('admin_id')) {
        $this->session->set_userdata('admin_id', $user);
    }
    $this->user = $user;
}else if ($this->session->userdata('admin_id')) {
    $this->user = $this->session->userdata('admin_id');
}
		
		*/
		
		
		
	}

public function index(){
	     
	     redirect('admin/login');
 }
	   
public function login(){
	//echo $this->session->userdata('admin_id');
	//die;
	if($this->session->userdata('logged_in') && $this->session->userdata('remember')){
		redirect($this->rememberme->getOrigPage());
	}
	
	  if($this->input->post()){ 
	  if($this->input->post('hint')=='login'){
		$this->form_validation->set_rules('username', 'Username', 'required|trim|min_length[6]|max_length[20]');
		$this->form_validation->set_rules('password', 'Password', 'required|trim|min_length[6]|max_length[20]');
		if ($this->form_validation->run() == TRUE){
			$arr=array();
			$arr=$this->login_lib->validate_login($this->input->post('username'), $this->input->post('password'));
			//echo $arr['flag'];
			//die;
			if($arr['flag']){
			    $this->session->set_flashdata('msg', 'Welcome to Restaurant Admin Panel !');
                        $rememberme = $this->input->post('rememberme');
						  if(isset($rememberme) && $rememberme=='remember me') {
							    $this->session->set_userdata('remember','remeber me');
                              $this->rememberme->setCookie($this->session->userdata('admin_id'));
						    }else{
								$this->session->unset_userdata('remember');	
							}
					   redirect('dashboard');  
		      }else{
				$this->data['msg']= $arr['message'];
		     }
		}
	  }else if($this->input->post('hint')=='forgetpassword'){
		  $this->form_validation->set_rules('email', 'Email', 'required|trim|valid_email');
		if ($this->form_validation->run() == TRUE){
			 $activationkey = uniqid(mt_rand(), true);
			 $keyexpairedate=date('Y-m-d h:i:s',(strtotime ('+3 day' , strtotime(date("Y-m-d H:i:s")))));
			 
			 $update_array=array(
			                      'activationkey'=>$activationkey,
								  'keyexpairedate'=>$keyexpairedate
			                    );
								
			 $where_array=array(
			                      'email'=>$this->input->post('email')
			                    );
			$this->data['login_record'] = $this->login_model->verify_username_byemail($where_array);					
	if(count($this->data['login_record'])> 0 && $this->data['login_record']->emailcountlimit>$this->data['login_record']->emailcount){
			$this->data['forgetpassword_record'] = $this->login_model->update_username_byemail($where_array,$update_array);
		    
		if(count($this->data['forgetpassword_record'])> 0){
		   $activationurl=site_url('admin/setpassword/'.$this->data['login_record']->adminid.'/'.$activationkey);
		   $activationurl2=site_url('admin/setpassword/'.$this->data['login_record']->adminid);
		     
			$message = 'Dear'.$this->data['login_record']->fullname.',';
			$message .= '
			            Please visit the following link to reset your password:
						';
			$message .= "
			             -----------------------
						 ";
			$message .= '
			             '.$activationurl.'
						 ';;
			$message .= "-----------------------";
			$message .='
			             If the above URL does not work, please use your Web browser to go to:
						 ';
             $message .= '
			               '.$activationurl2.'
						   ';
			 $message .= "
			              -----------------------
						  ";
             $message .= '
			              Your Activation Key is :'.$activationkey.'
						  ';
			 $message .= "
			              Please be sure to copy the entire link into your browser. The link will expire after 3 days for security reasons.";
			 $message .= "
			              If you did not request this forgotten password email, no action is needed, your password will not be reset as long as the link above is not visited.
						  
						     ";
			 $message .= "Thanks";
			 $message .= "-- Our site team";
			 $headers  = "From: Our Site <webmaster@oursite.com>";
			 $headers .= "To-Sender: ";
			 $headers .= "X-Mailer: PHP"; // mailer
			 $headers .= "Reply-To: webmaster@oursite.com"; // Reply address
			 $headers .= "Return-Path: webmaster@oursite.com"; //Return Path for errors
			 $headers .= "Content-Type: text/html; charset=iso-8859-1"; //Enc-type
			 $subject = "Your Lost Password";
    $this->email->from($headers, $this->data['login_record']->fullname);
    $this->email->to($this->input->post('email'));
    $this->email->subject($subject);
    $this->email->message($message);
    if($this->email->send()){
	                 $this->data['login_record'] = $this->login_model->verify_username_byemail($where_array);
	                 $this->data['msg']='Sent,Password reset link on your email('.$this->data['login_record']->emailcount.'/'.$this->data['login_record']->emailcountlimit.')/24H';
	   }else{
		    $this->data['msg']='Reset password link has not been sent on your email, try again !'; 
	   }
				}else{
					  $this->data['msg']='Reset password link has not been sent on your email, try again !';
				    }
			   }else{ 
				    if(count($this->data['login_record'])> 0 && $this->data['login_record']->emailcountlimit<=$this->data['login_record']->emailcount){
				        $this->data['msg']='You have email Limit, try again after 24 hour !'; 
					}else{
						$this->data['msg']='Invaild email, try again !'; 
					}
			   }
		    }
  
	     }
	}
$this->data['page_title']="Login";
if($this->input->post('hint')){
        $this->data['hint']=$this->input->post('hint');	
	}else{
		$this->data['hint']='login';
	}
if($this->input->post('hint')=='forgetpassword'){	
     $this->data['page_title']="Forget Password"; 
  } 
 $this->load->view('login_form',$this->data);
}

function setpassword($adminid='',$activationkey=''){
	 $this->rememberme->recordOrigPage();	
      if($this->input->post()){
		$this->form_validation->set_rules('adminid', 'Username', 'required|trim');
		$this->form_validation->set_rules('password', 'Password', 'required|trim|matches[password_again]|xss_clean');
		$this->form_validation->set_rules('password_again', 'Password Again', 'required|trim|xss_clean');
		$this->form_validation->set_rules('activationkey', 'Activation Key', 'required|trim|min_length[32]|max_length[33]');
		$this->data['activationkey'] = $this->input->post('activationkey');
		 $this->data['adminid'] = $this->input->post('adminid');
		if ($this->form_validation->run() == TRUE){
			       $keyexpairedate=date('Y-m-d h:i:s');
				   $where_array=array(
				                     'keyexpairedate >'=>$keyexpairedate,
									 'adminid'=>$this->input->post('adminid'),
									 'activationkey'=>$this->input->post('activationkey'),
									 'activationkeystatus'=>'Unused'
				                      );
					$update_array=array(
					                   'activationkey'=>'',
									   'emailcount'=>0,
					                   'activationkeystatus'=>'Used'

                    					);				  
		           $this->data['setpassword_record'] = $this->login_model->set_new_password_by($where_array, $update_array, $this->input->post('password'));
				if($this->data['setpassword_record']>0){
				        $this->session->set_flashdata('msg', 'We have set your new password, Please Login');  
		                redirect('admin/login'); 	
					 }else{
						$this->data['msg']='Activation Key/Key Used/Expaired Date Wrong !';   
					 }
		          }	
	       }else{
			   
	$this->data['adminid'] = $adminid;
	 if ($activationkey !=''){
              $this->data['activationkey'] = $activationkey;
    }else{
              $this->data['activationkey'] = '';
      }
	 if($adminid=='' && $activationkey==''){
		 $this->session->set_flashdata('msg', 'Invalid Access, Try Again !');  
		 redirect('admin/login');
		  
	  }   
			   
			   
}
      
	   
  $this->data['page_title']="Set Password";
  $this->load->view('admin/setpassword_form', $this->data);			   
	
}
function logout(){
	      $this->rememberme->recordOrigPage();
		 $this->session->sess_destroy();
		 redirect('admin/login');
    }
	
	
	/////////////////////////// notify /////////////////////////
 function ajax_get_sales_notify(){
	 $this->data['debit_sales_notify']=$this->login_model->ajax_get_credit_sales_notification();
	 $arrnotifycreditsales=array();
	 foreach($this->data['debit_sales_notify']->result() as $row_sales_notify){
		$arrnotifycreditsales[]=array( 'customername'=>$row_sales_notify->fullname.'&ensp;('.$row_sales_notify->fullname.')', 'invoiceno'=>$row_sales_notify->fullname, 'invoicedate'=>$row_sales_notify->fullname, 'duedate'=>$row_sales_notify->fullname, 'receiveable'=>$row_sales_notify->fullname,'aging'=>$row_sales_notify->fullname); 
	 }
	  echo json_encode(array('status'=>'Yes', 'notifycreditsales'=>$arrnotifycreditsales),JSON_NUMERIC_CHECK);
  }	

 
 function ajax_get_recently_sales_notify(){
	 $this->data['recently_sales_notify']=$this->login_model->ajax_get_recently_sales_notification();
	 $arrnotifyrecentlysales=array();
	 foreach($this->data['recently_sales_notify']->result() as $row_sales_notify){
		$arrnotifyrecentlysales[]=array( 'customername'=>$row_sales_notify->fullname.'&ensp;('.$row_sales_notify->fullname.')', 'invoiceno'=>$row_sales_notify->fullname, 'invoicedate'=>$row_sales_notify->fullname, 'duedate'=>$row_sales_notify->fullname, 'receiveable'=>$row_sales_notify->fullname); 
	 }
	  echo json_encode(array('status'=>'Yes', 'notifyrecentlysales'=>$arrnotifyrecentlysales),JSON_NUMERIC_CHECK);
  }		
/////////////////////////////////// end /////////////////////////////////	
	
	
	
	
	
	
	
	
	
	
	
	
		   
	   
}