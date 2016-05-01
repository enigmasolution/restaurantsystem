<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function get_no_of_branches($schoolid){
	     $ci=& get_instance();
	    $ci->load->model('school/school_model');
		$where_array=array(
						   'sc_systemstatus'=>'Enable',
						   'sc_parentschoolid'=>$schoolid
		                   );
	    $no_of_branches=$ci->school_model->no_of_branches($where_array);
		if($no_of_branches->num_rows()>0){
			return $no_of_branches->num_rows();
		}else{
		    return '0';	
		}
}