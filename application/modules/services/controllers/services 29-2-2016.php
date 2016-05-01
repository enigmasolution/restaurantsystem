<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Services extends CI_Controller {
	
function __construct(){
		parent::__construct();
		$this->load->model('services/services_model');		
	}
public function login(){	
	$array = array();
		$dataa="";
		$user=$this->input->post('palo_username');
		$pass=$this->input->post('palo_password');		
	    if($result=$this->services_model->get_login($user,$pass)){
			  
			if(count($result)>0){
			      $dataa=array(
						  'parentlogin_id'=>$result->parentloginid,
						  'parent_fathername'=>$result->pa_fathername,			 
						  'parent_parentid'=>$result->parentid,
						  'parent_parentaccountno'=>$result->pa_parentaccountno,
						  
						  'parentlogged_in' =>true
						   );		 
				$array = array(
		   		'code' => '200',
				'message'=>'Success',
				'data'=> $dataa
			    ); 
			}else{
				$array = array(
		   		'code' => '202',
				'message'=>'Invalid Username or Password',
				'data'=> $dataa
				); 
			}	 		    
			   
         }else{
		   $array = array(
		   		'code' => '201',
				'message'=>'Failure',
				'data'=> $dataa
			);  			 
	      }
	 echo json_encode($array);
	 exit;
}

	
	
	function viewstudent(){	
	$array = array();
	$data="";	
	$account=$this->input->post('pa_parentaccountno');
	         $where_array=array(
								'parents.pa_parentaccountno'=> $account,
								'students.st_deletionstatus'=>'No',
								'academicsession.acse_deletionstatus'=>'No',
								'academicsession.acse_systemstatus'=>'Enable'
			                   );				 			 
		if( $data=$this->services_model->get_students_byparentaccountno($where_array)){
			$array = array(
		   		'code' => '200',
				'message'=>'Success',
				'data'=> $data
			); 
			
		}else{
			 $array = array(
		   		'code' => '201',
				'message'=>'Failure',
				'data'=> $data
			);  
		}
		echo json_encode($array);
	 	exit;

}

function viewstudentexam(){	
	$array = array();
	$data="";
	$classid= $this->input->post('classid');
	
	         $where_array=array(
			                    'examclass.classid'=>$classid,
								'examination.ex_deletionstatus'=>'No',
								'examination.ex_systemstatus'=>'Enable'
			                   );				 			 
		if( $data=$this->services_model->get_students_examdetail_byclassid($where_array)){
			
			if(count($data)>0)
			{
		
				$array = array(
					'code' => '200',
					'message'=>'Success',
					'data'=> $data
				); 
			}
			else
			{
				$array = array(
		   		'code' => '202',
				'message'=>'No exam',
				'data'=> 'No exam under this class'
				); 
			}
		}else{
			 $array = array(
		   		'code' => '201',
				'message'=>'Failure',
				'data'=> $data
			);  
		}
		echo json_encode($array);
	 	exit;

}	
///// datesheet by classid and examinationid	

function viewdatesheet(){
				$array = array();
	            $data="";
				$data2="";
	          $classid=   $this->input->post('classid');	
			  $examinationid=  $this->input->post('examinationid');	
				
			//$classid=112;	
			//$examinationid=33;	
				
				
					 $where_array=array(
					                   'datesheet.classid'=>$classid,
									   'datesheet.examinationid'=>$examinationid,
									   'datesheet.dash_deletionstatus'=> 'No'
				                       );
		
	    if( $data=$this->services_model->get_students_datesheetdetail_byids($where_array)){
			
			//$class_name=$data[0]['cl_name'];			
			/*foreach(array_keys($data) as $key) {
  			 unset($data[$key]['cl_name']);
			}
		*/
		
		
			
			
			//$data2=array('datesheet'=>$data);

			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'datesheet'=>$data
				               ); 
			}else{
				$array = array(
							   'code' => '202',
							   'message'=>'No exam',
							   'data'=> 'No datesheet under this class and exam'
				              ); 
			}
		}else{
			$array = array(
		   		           'code' => '201',
				           'message'=>'Failure',
				          'datesheet'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }

 function viewexamresult(){
	   $array = array();
	            $data="";
	            $studentid=   $this->input->post('studentid');	
				$examinationid=  $this->input->post('examinationid');	
					 $where_array=array(
									    'examresultdetail.studentid'=>$studentid,
									    'examresult.examinationid'=>$examinationid,
									    'examresult.exre_deletionstatus'=>'No' 
				                      );				  
		if( $data=$this->services_model->get_students_examresultdetail_byids($where_array)){
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					           'data'=> $data
				               ); 
			}else{
				$array = array(
							   'code' => '202',
							   'message'=>'No exam',
							   'data'=> 'No datesheet under this class and exam'
				              ); 
			}
		}else{
			 $array = array(
		   		            'code' => '201',
				            'message'=>'Failure',
				            'data'=> $data
			                );  
		}
		echo json_encode($array);
	 	exit;								  			   
			
  }  

	function viewtimetable(){	
				//$calss_id=$this->input->post('class_id'); 													   
		$calss_id=73; 													   
                      $data=$this->services_model->get_time_table($calss_id);
					  $total=count($data);
					  $days=array();
					  $result=array();
					  $day= $data[0]['dayid'];
					  $days[]=$data[0]['da_name']; 
					  for($i=0;$i<$total;$i++)
					  {						  	
					  	 if($data[$i]['dayid']==$day)
						  {
								
						  }
						  else
						  {
							$days[]=$data[$i]['da_name']; 	 
							$day= $data[$i]['dayid'];																																
						  }
					  }
					 for($i=0;$i<count($days);$i++)
					 {
					 	 $data2=$this->services_model->get_table($calss_id,$days[$i]);
						 
						 $final_data[]=array(
						 	"day"=>$days[$i],
							"other_details"=>$data2
						 );
					 } 
			      echo json_encode($final_data);
				 	exit;
				   				 		  
    }	   








/*****************************************************************************************************/
function viewresult(){
				$array = array();
	            $data="";
				$data2="";
	         // $student_id=   $this->input->post('student_id');	
			//  $examinationid=  $this->input->post('examinationid');	
				
			$student_id=117;	
			$examinationid=28;	
				
				
					 $where_array=array(
					                   'examresult.examinationid'=>$examinationid,
									   'examresultdetail.studentid'=>$student_id,
									   'examresult.exre_deletionstatus'=> 'No'
				                       );
		
	    if( $data=$this->services_model->get_students_result($where_array)){
			
			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'datesheet'=>$data
				               ); 
			}else{
				$array = array(
							   'code' => '202',
							   'message'=>'No exam',
							   'data'=> 'No datesheet under this class and exam'
				              ); 
			}
		}else{
			$array = array(
		   		           'code' => '201',
				           'message'=>'Failure',
				          'datesheet'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }


/*****************************************************************************************************/
function viewattendance(){
				$array = array();
	            $data="";
				$data2="";
	         
			$student_id=116;	
			$class=103;	
			$start_date='2016-01-15';	
			$end_date='2016-01-25';					
					
		
	    if( $data=$this->services_model->get_attendance($student_id,$class,$start_date,$end_date)){
			
			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'datesheet'=>$data
				               ); 
			}else{
				$array = array(
							   'code' => '202',
							   'message'=>'No exam',
							   'data'=> 'No datesheet under this class and exam'
				              ); 
			}
		}else{
			$array = array(
		   		           'code' => '201',
				           'message'=>'Failure',
				          'datesheet'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }


/*****************************************************************************************************/
/*function viewdairy(){
				$array = array();
	            $data="";
				$data2="";
	         
			
			$class=28;	
			$date=2016-02-23;	
							
					
		
	    if( $data=$this->services_model->get_dairy($class,$date)){
			,
			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'datesheet'=>$data
				               ); 
			}else{
				$array = array(
							   'code' => '202',
							   'message'=>'No exam',
							   'data'=> 'No datesheet under this class and exam'
				              ); 
			}
		}else{
			$array = array(
		   		           'code' => '201',
				           'message'=>'Failure',
				          'datesheet'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }


*/



			   	
}