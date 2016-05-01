<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Services extends CI_Controller {
	
function __construct(){
		parent::__construct();
		$this->load->model('services/services_model');		
	}
	/*
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

	*/
	
	public function login(){	
	$array = array();
		$dataa="";
		//$user='razaali';
		//$pass='12345678';
		$user=$this->input->post('palo_username');
		$pass=$this->input->post('palo_password');	
		$devicetoken=$this->input->post('devicetoken');	
		$devicebit=$this->input->post('devicebit');	
		
		
		//$devicetoken='cnfIQ19e7KY:APA91bE1DD17zJcq78SxsCtZbdeVkzwT2ymE8IE6AIZP4tfXFo_KZdsMzL1RrvnZvCRRR453Wc8Hvr-21NmcqMrQL0WLESLe9CAOw4M1_ImMAYRsk72cLHDy8IhBGxJyLzLeOLXiGVG6';
		
			
	    if($result=$this->services_model->get_login($user,$pass)){
			  
			if(count($result)>0){
			      $dataa=array(
						  'parentlogin_id'=>$result->parentloginid,
						  'parent_fathername'=>$result->pa_fathername,			 
						  'parent_parentid'=>$result->parentid,
						  'parent_parentaccountno'=>$result->pa_parentaccountno,
						//  'parent_avator'=>$result->pa_avator,				
						  'parentlogged_in' =>true
						   );
				if($devicetoken != $result->palo_devicetoken){
					$this->services_model->update_devicetoken_byparentloginid($devicetoken, $devicebit, $result->parentloginid);
				}
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
/*
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
*/
	function viewtimetable(){	
					$data2="";					
					if($this->input->post('class_id'))
					{
					$calss_id=$this->input->post('class_id');
					
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
					 
					  $array = array(
		   		            'code' => '200',
				            'message'=>'Success',
				            'data'=> $final_data
			                ); 
					 
			     
					}
					else
					{
						 $array = array(
		   		            'code' => '201',
				            'message'=>'Failure',
				            'data'=> $data2
			                ); 
					}
					echo json_encode($array);
				 	exit;
				   				 		  
    }	   

/*****************************************************************************************************/

function viewresult(){
				$array = array();
	            $data="";
				$data2="";
	          $student_id=$this->input->post('student_id');				  
			  $class_id=$this->input->post('class_id');
			  $exam_result= $this->services_model->get_exam_id($class_id);
			  
			  //$examinationid=  $this->input->post('examinationid');	
			$examinationid=$exam_result->exam_id;	
			//$student_id=117;	
			//$examinationid=28;	
				
				
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
					        	'data'=>$data
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
				          'data'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }

/*****************************************************************************************************/

function viewdairy(){
				$array = array();
	            $data="";
				$data2="";
	          $classid=   $this->input->post('classid');	
			  $dadi_date=  $this->input->post('dairydate');	
				
			//$classid=110;	
			//$dadi_date='2016-02-24';	
				
				
					 $where_array=array(
					                   'dailydiary.classid'=>$classid,
									   'dailydiary.dadi_date'=>$dadi_date,
									   'dailydiary.dadi_deletionstatus'=> 'No'
				                       );
		
	    if( $data=$this->services_model->daily_dairy($where_array)){
			
			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'data'=>$data
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
				          'data'=>$data
			               );  
		}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }

/*********************************************/


function change_password(){
				$array = array();
	            $data="";				 	
			
			$old_password=$this->input->post('old_password');	
			$new_password=$this->input->post('new_password');		
			$parentloginid=$this->input->post('parentloginid');		
				
			//$old_password="123456";	
			//$new_password="testing";		
			//$parentloginid="106";	
				
					 $where_array=array(
					                   'parentid'=>$parentloginid,
									   'palo_password'=>$old_password,									  
				                       );
		
	    if($this->services_model->check_user($parentloginid,$old_password)){
		if($this->services_model->change_password($parentloginid,$new_password)){							
						$array = array(
									   'code' => '200',
									   'message'=>'Success',
										'data'=>"Password have been changed"
									   ); 
							
					}else
					{
						$array = array(
										   'code' => '201',
										   'message'=>'Failure',
										  'data'=>$data
										   );  
					}
							
							
						}else{
							$array = array(
										   'code' => '203',
										   'message'=>'Failure',
										  'data'=>'Old password is wronge'
										   );  
						}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }
/// parentid, pa_fathername, pa_fathercontactno, pa_email, cityid, pa_address
function show_profile(){
				$array = array();
	            $data="";
				$parent_id=$this->input->post('parentid');	
			//	$parent_id=137;	 	
		if($data=$this->services_model->show_profile($parent_id)){	
		       
						$array = array(
									   'code' => '200',
									   'message'=>'Success',
										'data'=>$data
									   ); 
							
					}else
					{
						$array = array(
										   'code' => '201',
										   'message'=>'Failure',
										  'data'=>$data
										   );  
					}
		//print_r($array);
		echo json_encode($array);
	 	exit;								
    }

/************************************************************************************************************/

function viewattendance(){
				$array = array();
	            $data="";
				$data2="";
	         
			
			
			$student_id=$this->input->post('studentid');	
			$class=$this->input->post('classid');	
			$start_date=$this->input->post('startdate');	
			$end_date=$this->input->post('enddate');					
			
			
			//$student_id=116;	
			//$class=103;	
			//$start_date='2016-01-15';	
			//$end_date='2016-01-25';					
					
		
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


/************************************************************************************************************/
/// parentid, pa_fathername, pa_fathercontactno, pa_email, cityid, pa_address
function change_profile(){
				$array = array();
	            $data="";
				
				
			$parentid=$student_id=$this->input->post('parentid');				 	
			$pa_fathername=$this->input->post('name');	
			$pa_fathercontactno=$this->input->post('cellno');			
			$pa_email=$this->input->post('email');	
			//$cityid="4";
			$pa_address=$this->input->post('address');
					 $update_profle_array=array(
					                   'pa_fathername'=>$pa_fathername,	
			                           'pa_fathercontactno'=>$pa_fathercontactno,		
			                           'pa_email'=>$pa_email,			                          
			                           'pa_address'=>$pa_address								  
				                       );
		if($this->services_model->change_profile($update_profle_array, $this->input->post('parentid'))){							
						$array = array(
									   'code' => '200',
									   'message'=>'Success',
										'data'=>"Profile have been changed"
									   ); 
							
					}else
					{
						$array = array(
										   'code' => '201',
										   'message'=>'Failure',
										  'data'=>$data
										   );  
					}
			//print_r($array);			
		echo json_encode($array);
	 	exit;								
    }






/**********************************************************************************************************************************************/

function special_note(){
				$array = array();
	            $data="";
				$data2="";
			$student_id=$this->input->post('studentid');			
			$date=$this->input->post('date');	
			//$subject=$this->input->post('subject');	
			
	    if( $data=$this->services_model->get_note($student_id,$date)){
			
			
			if(count($data)>0){
				$array = array(
					           'code' => '200',
					           'message'=>'Success',
					        	'special_note'=>$data
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


/**********************************************************************************************************************************************/

public function logout(){	
	$array = array();
		$dataa="";
		$paent_loginid=$this->input->post('parent_loginid');
		
			
	    if($result=$this->services_model->parent_logout($paent_loginid)){
			   
				$array = array(
		   		'code' => '200',
				'message'=>'Success',
				'data'=> $dataa
			    ); 
			 
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

/*******************************************************************************************************/	
function get_notifications(){	
	$array = array();
	/*$student_id="142";
	$start_date="2016-3-27";
	$end_date="2016-3-30";*/
	
	$student_id=$this->input->post('student_id');
	$start_date=$this->input->post('start_date');
	$end_date=$this->input->post('end_date');
	$no_by=$this->input->post('devicebit');
	
	
	$data="";	
	$account=$this->input->post('pa_parentaccountno');
	         			 			 
		if( $data=$this->services_model->get_notifications($student_id,$start_date,$end_date,$no_by)){
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

/******************************************************************************************************/			   	
}