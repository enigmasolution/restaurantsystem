<?php 
class Do_upload_imgs_lib {
	 function __construct() {				  
		     $this->ci =& get_instance();
		     $avator='';
		 }
		 
public function function_for_storing_img($path){	             
			 $config=array(
				          'allowed_types' => 'jpg|jpeg|png|gif',
				          'upload_path' => './assets/images/'.$path,
				          'max_filename' => 300
					       );
			             $this->ci->load->library('upload',$config);	
			         if ( ! $this->ci->upload->do_upload('avator')){
					      return false;
						 }else{
					            $image_info=$this->ci->upload->data();
					            $avator=$image_info['file_name'];
                                     $config = array(
													 'source_image' => $image_info['full_path'],
													 'new_image' => './assets/images/'.$path.'thumbs/',
													 'maintain_ratio' => true,
													 'width' => 60,
													 'height' =>60		 
													  );
				                $this->ci->load->library('image_lib',$config); 
				                $this->ci->image_lib->resize();
				            }			
     	return $avator;
	}
	
	
		
public function function_for_removing_img($path, $avator){
	                 $path_large='./assets/images/'.$path.$avator;   
		             $path_thumb='./assets/images/'.$path.'thumbs/'.$avator; 
						 if(file_exists($path_large)){
							  @unlink($path_large);
							 }
						 if(file_exists($path_thumb)){
							  @unlink($path_thumb);	 
						  }
     	return true;
	}	
	
		
}