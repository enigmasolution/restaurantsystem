<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menu extends CI_Controller {
	
function __construct(){
		parent::__construct();		
		//$this->load->library('admin/classroom_lib');
		$this->load->library('menu/Menu_lib');
		$this->load->model('menu/menu_model');
		$this->data='';
		if (! $this->session->userdata('logged_in')){
			redirect('admin/login');
		}
		
		
	}
     

function index(){
	  $this->rememberme->recordOrigPage();
	   if ($this->input->post()){
		$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim|xss_clean');	 
		if ($this->form_validation->run() == TRUE){	
							  $where_array=array(
											'categories.restaurantid'=> $this->input->post('restaurantid'),
						                    'categories.cate_deletionstatus' =>'No',
											'restaurants.rest_workingstatus' =>'Activated',
											'restaurants.rest_deletionstatus' =>'No'
						                     );  
				
	               $this->data['category_record']=$this->menu_model->get_all_category_by($where_array);
				  $this->data['flag']=true;
			
	      }
	 }
	  
	  
	  
	  
	  $this->data['restaurant_record']=$this->menu_model->get_all_restaurants_by();			
	  $this->data['page_title']="Manage Menu";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('managemenu_form',$this->data);
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
function _check_menu_is_unique_in_category(){
  if($this->input->post('restaurantid')!=0){
	         $where_array=array(
			                    'restaurantid' => $this->input->post('restaurantid'),
			                    'categoryid' => $this->input->post('categoryid'),
								'menu_name'    => $this->input->post('menu_name'),
								'menu_deletionstatus' =>'No'
							    );
	        $this->data['menu_record']=$this->menu_model->check_menu_is_unique_in_category($where_array);
			if($this->data['menu_record']->num_rows()>0){
				  $this->form_validation->set_message('_check_menu_is_unique_in_category', 'Menu name is already existed !');
			       return FALSE;
			    }else{
			       return TRUE;
		      }
		}
					
}

function addmenu(){
	     $this->rememberme->recordOrigPage();
       	if ($this->input->post()){
		$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim|xss_clean');
		$this->form_validation->set_rules('categoryid', 'Category Name', 'required|trim|xss_clean');	 
		$this->form_validation->set_rules('menu_name', 'Menu Name', 'required|trim|max_length[100]|callback__check_menu_is_unique_in_category');
		$this->form_validation->set_rules('menu_price', 'Menu Price', 'required|trim|number');
		$this->form_validation->set_rules('menu_description', 'Menu Description', 'trim|max_length[1000]');
		$this->form_validation->set_message('is_unique','The %s field must be unique');
		if ($this->form_validation->run() == TRUE){

			         $insert_menu_record=array(
										  'restaurantid'      => $this->input->post('restaurantid'),
										  'categoryid'      => $this->input->post('categoryid'),
										  'menu_name'         => $this->input->post('menu_name'),
										  'menu_price'         => $this->input->post('menu_price'),
										  'menu_description'  => $this->input->post('menu_description'),
										  'menu_createdby'    => $this->session->userdata('admin_id'),
			                               );

                        $this->data['menuid']=$this->menu_model->add_new_menu_record($insert_menu_record);
					if(count($this->data['menuid'])>0){
						   $this->session->set_flashdata('msg', 'Menu record has been successfully saved.');
						   redirect('menu/');
						}else{
							 $this->data['msg']='Menu record has not been saved.';
							}	
							
					}
	   
	 }
	  $this->data['restaurant_record']=$this->menu_model->get_all_restaurants_by();		
	  $this->data['page_title']="Add Menu";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('addmenu_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');	
	 }
function categories_for_menu_byrestaurantid_ajax(){
	     if($this->input->post('restaurantid')!=''){
				     $where_array=array(
					              'restaurantid'=>$this->input->post('restaurantid'),
					             'cate_deletionstatus'=>'No',
								 'cate_workingstatus'=> 'Activated'
				               );  
			            }
		$this->data['categories_record']=$this->menu_model->get_categories_by_brestaurantid($where_array);
		$this->load->view('ajax/ajax_loadcategories', $this->data);		   
}	 	 
	 
function _check_editmenu_is_unique_in_category(){
  if($this->input->post('restaurantid')!=0){
	         $where_array=array(
			                    'restaurantid' => $this->input->post('restaurantid'),
			                    'categoryid' => $this->input->post('categoryid'),
								'menuid !=' => $this->input->post('menuid'),
								'menu_name'    => $this->input->post('menu_name'),
								'menu_deletionstatus' =>'No'
							    );
	        $this->data['menu_record']=$this->menu_model->check_menu_is_unique_in_category($where_array);
			if($this->data['menu_record']->num_rows()>0){
				  $this->form_validation->set_message('_check_editmenu_is_unique_in_category', 'Menu name is already existed !');
			       return FALSE;
			    }else{
			       return TRUE;
		      }
		}
					
}	 
	 
function editmenu($menuid=0){
	 $this->rememberme->recordOrigPage();
	if ($this->input->post()){
		$this->form_validation->set_rules('menuid', 'Menu Name', 'required|trim|xss_clean');
		$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim|xss_clean');
		$this->form_validation->set_rules('categoryid', 'Category Name', 'required|trim|xss_clean');	 
		$this->form_validation->set_rules('menu_name', 'Menu Name', 'required|trim|max_length[100]|callback__check_editmenu_is_unique_in_category');
		$this->form_validation->set_rules('menu_price', 'Menu Price', 'required|trim|number');
		$this->form_validation->set_rules('menu_description', 'Menu Description', 'trim|max_length[1000]');
		if ($this->form_validation->run() == TRUE){
			
			    $update_menu_record=array(
										  'restaurantid'      => $this->input->post('restaurantid'),
										  'categoryid'      => $this->input->post('categoryid'),
										  'menu_name'         => $this->input->post('menu_name'),
										  'menu_price'         => $this->input->post('menu_price'),
										  'menu_description'  => $this->input->post('menu_description'),
			                               );				   
			
                                   $this->data['menuid']=$this->menu_model->update_menu_record($this->input->post('menuid'), $update_menu_record);
										if(count($this->data['menuid'])>0){
											$this->session->set_flashdata('msg', 'Menu has been successfully updated.');
											redirect('menu/');
											}else{
											$this->data['msg']='Menu record has not been updated !';
										 }
															
										
						     }
	     }
	  $this->data['restaurant_record']=$this->menu_model->get_all_restaurants_by();		
	  $this->data['menu_updation']=$this->menu_model->get_menu_record_forupdation_bymenuid($menuid);
      $this->data['page_title']="Edit Menu";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('editmenu_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');		
}
function delete_menu_bymenuid_json(){
	$menu_delete_record=array(
	                           'menu_deletionstatus'=> 'Yes'
	                             );
	$this->data['menu_deletion']=$this->menu_model->delete_menu_record_bymenuid($this->input->post('menuid'), $menu_delete_record);
	  if($this->data['menu_deletion']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }
  }
function activated_deactivated_bymenuid_json(){
	if($this->input->post('status')=='Activated'){
		$update_status=array(
		                     'menu_workingstatus'=> 'Activated'
		                      );
	  }else{
		$update_status=array(
		                     'menu_workingstatus'=> 'Deactivated'
		                      );  
		  
	  }
 $this->data['menu_status']=$this->menu_model->activated_deactivated_menu_bymenuid($this->input->post('menuid'),$update_status);
	  if($this->data['menu_status']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }		
}
///////////////////////////////////////////////// END SCHOOL PART /////////////////////////////////////
}