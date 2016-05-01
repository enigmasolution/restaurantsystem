<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Category extends CI_Controller {
	
function __construct(){
		parent::__construct();		
		//$this->load->library('admin/classroom_lib');
		$this->load->model('category/category_model');
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
				
	               $this->data['category_record']=$this->category_model->get_all_category_by($where_array);
				  $this->data['flag']=true;
			
	      }
	 }

	  
	  
	  
	  
	 
	  $this->data['restaurant_record']=$this->category_model->get_all_restaurants_by();		
	  $this->data['page_title']="Manage Category";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('managecategory_form',$this->data);
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
function _check_category_is_unique_in_restaurant(){
  if($this->input->post('restaurantid')!=0){
	         $where_array=array(
			                    'restaurantid' => $this->input->post('restaurantid'),
								'cate_name'    => $this->input->post('cate_name'),
								'cate_deletionstatus' =>'No'
							    );
	        $this->data['category_record']=$this->category_model->check_category_is_unique_in_restaurant($where_array);
			if($this->data['category_record']->num_rows()>0){
				  $this->form_validation->set_message('_check_category_is_unique_in_restaurant', 'Category name is already existed !');
			       return FALSE;
			    }else{
			       return TRUE;
		      }
		}
					
}

function addcategory(){
	     $this->rememberme->recordOrigPage();
       	if ($this->input->post()){
		$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim|xss_clean');	 
		$this->form_validation->set_rules('cate_name', 'Category Name', 'required|trim|max_length[100]|callback__check_category_is_unique_in_restaurant');
		$this->form_validation->set_rules('cate_description', 'Category Description', 'required|trim|max_length[1000]');
		$this->form_validation->set_message('is_unique','The %s field must be unique');
		if ($this->form_validation->run() == TRUE){

			         $insert_category_record=array(
										  'restaurantid'      => $this->input->post('restaurantid'),
										  'cate_name'         => $this->input->post('cate_name'),
										  'cate_description'  => $this->input->post('cate_description'),
										  'cate_createdby'    => $this->session->userdata('admin_id'),
			                               );

                        $this->data['categoryid']=$this->category_model->add_new_category_record($insert_category_record);
					if(count($this->data['categoryid'])>0){
						   $this->session->set_flashdata('msg', 'Category record has been successfully saved.');
						   redirect('category/');
						}else{
							 $this->data['msg']='Category record has not been saved.';
							}	
							
					}
	   
	 }
	  $this->data['restaurant_record']=$this->category_model->get_all_restaurants_by();		
	  $this->data['page_title']="Add Category";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('addcategory_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');	
	 }

function _check_editcategory_is_unique_in_restaurant(){
  if($this->input->post('restaurantid')!=0){
	         $where_array=array(
			                    'restaurantid' => $this->input->post('restaurantid'),
								'categoryid !=' => $this->input->post('categoryid'),
								'cate_name'    => $this->input->post('cate_name'),
								'cate_deletionstatus' =>'No'
							    );
	        $this->data['category_record']=$this->category_model->check_category_is_unique_in_restaurant($where_array);
			if($this->data['category_record']->num_rows()>0){
				  $this->form_validation->set_message('_check_editcategory_is_unique_in_restaurant', 'Category name is already existed !');
			       return FALSE;
			    }else{
			       return TRUE;
		      }
		}
					
}

	 
function editcategory($categoryid=0){
	 $this->rememberme->recordOrigPage();
	if ($this->input->post()){
		    $this->form_validation->set_rules('categoryid', 'Category Name', 'required|trim|xss_clean');	
			$this->form_validation->set_rules('restaurantid', 'Restaurant Name', 'required|trim|xss_clean');	 
		    $this->form_validation->set_rules('cate_name', 'Category Name', 'required|trim|max_length[100]|callback__check_editcategory_is_unique_in_restaurant');
		    $this->form_validation->set_rules('cate_description', 'Category Description', 'required|trim|max_length[1000]');
		if ($this->form_validation->run() == TRUE){	  	  
			   $update_category_record=array(
										  'restaurantid'      => $this->input->post('restaurantid'),
										  'cate_name'         => $this->input->post('cate_name'),
										  'cate_description'  => $this->input->post('cate_description')
			                               );				   
                                   $this->data['categoryid']=$this->category_model->update_category_record($this->input->post('categoryid'), $update_category_record);
										if(count($this->data['categoryid'])>0){
											$this->session->set_flashdata('msg', 'Category has been successfully updated.');
											redirect('category/');
										}else{
											$this->data['msg']='Category record has not been updated !';
									     }
															
										
						     }
	     }
	  $this->data['restaurant_record']=$this->category_model->get_all_restaurants_by();		
	  $this->data['category_updation']=$this->category_model->get_category_record_forupdation_bycategoryid($categoryid);
      $this->data['page_title']="Edit Category";
      $this->load->view('admin/main/header',$this->data);
	  $this->load->view('admin/main/topleftnavbar');
	  $this->load->view('editcategory_form',$this->data);
	  $this->load->view('admin/main/rightnavbar',$this->data);
	  $this->load->view('admin/main/footer');		
}
function delete_category_bycategoryid_json(){
	$category_delete_record=array(
	                           'cate_deletionstatus'=> 'Yes'
	                             );
	$this->data['category_deletion']=$this->category_model->delete_category_record_bycategoryid($this->input->post('categoryid'), $category_delete_record);
	  if($this->data['category_deletion']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }
  }
function activated_deactivated_bycategoryid_json(){
	if($this->input->post('status')=='Activated'){
		$update_status=array(
		                     'cate_workingstatus'=> 'Activated'
		                      );
	  }else{
		$update_status=array(
		                     'cate_workingstatus'=> 'Deactivated'
		                      );  
		  
	  }
 $this->data['category_status']=$this->category_model->activated_deactivated_category_bycategoryid($this->input->post('categoryid'),$update_status);
	  if($this->data['category_status']){
	   echo json_encode(true);
	  }else{
		echo json_encode(false);  
	  }		
}
///////////////////////////////////////////////// END SCHOOL PART /////////////////////////////////////
}