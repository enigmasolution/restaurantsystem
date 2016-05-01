<?php 
class Notification_lib {
	function __construct() {
		$this->ci =& get_instance();	
		$this->ci->load->model('home/home_model');
	}
public function notification_byparentid(){	
            if($this->ci->session->userdata('admin_schooladmin')==1){
                                           $where_array1=array( 
										                       'notifications.no_by' =>'3',  
														       'notifications.no_readstatus' =>'No',
														       'schools.schoolid'=>$this->ci->session->userdata('admin_schoolid')
														     );
										  $or_where_array=array(
										                       'notifications.no_readstatus' =>'No',  
														       );
										    $where_array2=array( 
											                   'notifications.no_by' =>'3',
														       'schools.sc_parentschoolid'=>$this->ci->session->userdata('admin_schoolid')
														      );
				 	return  $this->ci->home_model->get_notification_byparentid1($where_array1, $or_where_array, $where_array2);										  			
	          }else if($this->ci->session->userdata('admin_schooladmin')==2){
		                                        $where_array1=array(
										                       'notifications.no_by' =>'3',  
														       'notifications.no_readstatus' =>'No',
														       'schools.schoolid'=>$this->ci->session->userdata('admin_schoolid')
														          );
			   													  
	                 return  $this->ci->home_model->get_notification_byparentid2($where_array1);
				 }			 	
		 
	}



function time_difference($no_postdate) {  
 
$currentdate = date('Y-m-d H:i:s'); 
$diff = abs(strtotime($currentdate) - strtotime($no_postdate)); 

$years   = floor($diff / (365*60*60*24)); 
$months  = floor(($diff - $years * 365*60*60*24) / (30*60*60*24)); 
$days    = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));

$hours   = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24)/ (60*60)); 

$minuts  = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24 - $hours*60*60)/ 60); 

$seconds = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24 - $days*60*60*24 - $hours*60*60 - $minuts*60)); 

//printf("%d years, %d months, %d days, %d hours, %d minuts\n, %d seconds\n", $years, $months, $days, $hours, $minuts, $seconds);

    $output   = '';

    if($years > 0){
        if ($years > 1){
            $output= $years." years "; 
			return $output;
			break;    
        } else {
            $output= $years." year ";
			return $output;
			break; 
        }
    }

    if($months > 0){
        if ($months > 1){
            $output= $months." months ";
			return $output;
			break;        
        } else {
            $output= $months." month ";
			return $output;
			break; 
        }
    }

    if($days > 0){
        if ($days > 1){
            $output= $days." days "; 
			return $output;
			break;       
        } else {
            $output= $days." day ";
			return $output;
			break; 
        }
    }

    if($hours > 0){
        if ($hours > 1){
            $output= $hours." hours "; 
			return $output;
			break;     
        } else {
            $output= $hours." hour ";
			return $output;
			break; 
        }
    }

    if($minuts > 0){
        if ($minuts > 1){
            $output= $minuts." minutes ";
			return $output;
			break;      
        } else {
            $output= $minuts." minute ";
			return $output;
			break; 
        }
    }

    if($seconds > 0){
        if ($seconds > 1){
            $output= $seconds." seconds"; 
			return $output;
			break;      
        } else {
            $output= $seconds." second";
			return $output;
			break; 
        }
    }
  }		
}