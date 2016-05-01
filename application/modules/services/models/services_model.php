<?php 
class Services_model extends CI_Model{
	
	function __construct(){
		parent::__construct();
	}



public function parent_logout($parentlogin_id)
{
	$this->db->set('palo_devicetoken',' ');
	$this->db->where('parentloginid',$parentlogin_id);
	$this->db->update('parentlogin');
	return true;
}

	
public function get_login($palo_username, $palo_password){
		$hash_pass="password('".$palo_password."')";	
		$this->db->select('parentlogin.parentloginid,parentlogin.palo_devicetoken, parents.pa_fathername,parents.parentid, parents.pa_parentaccountno');
		$this->db->from('parentlogin');
		$this->db->join('parents', 'parentlogin.parentid=parents.parentid');
		$this->db->where('palo_username',$palo_username);		
		$this->db->where('palo_password',$hash_pass, FALSE);		
		return $this->db->get()->row();	
		
	}
	
	
	
	function update_devicetoken_byparentloginid($token,$devicebit, $parentloginid){
	$this->db->set('palo_devicetoken',$token);
	$this->db->set('palo_devicebit',$devicebit);
	$this->db->where('parentloginid',$parentloginid);
	$this->db->update('parentlogin');
	return TRUE;
}
	
	
	
function get_students_byparentaccountno($where_array){
	   $this->db->select('students.st_fullname,students.studentid,students.st_avator,classes.cl_name,students.classid,students.st_registrationno');
	   $this->db->from('students');
	   $this->db->join('parents','students.studentid=parents.studentid');
	    $this->db->join('classes','students.classid=classes.classid');
	   $this->db->join('academicsession','students.academicsessionid=academicsession.academicsessionid');
       $this->db->where($where_array);
return $this->db->get()->result_array();
//return $this->db->get();	
//echo $this->db->last_query();		
}


function get_students_examdetail_byclassid($where_array){
	   $this->db->select('*');
	   $this->db->from('examclass');
	   $this->db->join('examination','examclass.examinationid=examination.examinationid','left');
	   $this->db->group_by('examclass.classid');
       $this->db->where($where_array);
return $this->db->get()->result_array();
}	


function get_students_datesheetdetail_byids($where_array){
       $this->db->select('datesheet.dash_date,datesheet.dash_starttime,datesheet.dash_endtime,subjects.su_name');
       $this->db->from('datesheet');
	  // $this->db->join('schools','datesheet.branchid = schools.schoolid','left');
	//   $this->db->join('examination','datesheet.examinationid = examination.examinationid','left');
	  // $this->db->join('classes','datesheet.classid = classes.classid');
	   $this->db->join('subjects','datesheet.subjectid = subjects.subjectid');
	  // $this->db->join('classrooms','datesheet.classroomid = classrooms.classroomid');
       $this->db->where($where_array);
	   return $this->db->get()->result_array();			
}


function get_students_examresultdetail_byids($where_array){
       $this->db->select('*');
       $this->db->from('examresult');
	   $this->db->join('schools','examresult.branchid = schools.schoolid','left');
	   $this->db->join('examination','examresult.examinationid = examination.examinationid','left');
	   $this->db->join('classes','examresult.classid = classes.classid','left');
	   $this->db->join('examresultdetail','examresult.examresultid = examresultdetail.examresultid','left');
	    $this->db->join('subjects','subjects.subjectid = examresultdetail.subjectid','left');
	   $this->db->join('students','examresultdetail.studentid = students.studentid','left');
	   $this->db->join('parents','students.studentid = parents.studentid','left');
       $this->db->where($where_array);
return $this->db->get()->result_array();			
}



function get_time_table($class_id)
{
	$query=$this->db->query("SELECT
    `days`.`da_name`
    , `days`.`dayid`
    
FROM
    `weekdays`
    INNER JOIN `classtimeslots` 
        ON (`weekdays`.`weekdayid` = `classtimeslots`.`weekdayid`)
    INNER JOIN `timetable` 
        ON (`classtimeslots`.`classtimeslotid` = `timetable`.`classtimeslotid`)
    INNER JOIN `days` 
        ON (`days`.`dayid` = `weekdays`.`dayid`)
    INNER JOIN `subjects` 
        ON (`subjects`.`subjectid` = `timetable`.`subjectid`)
    INNER JOIN `classrooms` 
        ON (`classrooms`.`classroomid` = `timetable`.`classroomid`) WHERE `timetable`.`classid`=".$class_id);
		
		return $query->result_array();
}


function get_table($class_id,$day)
{
	$query=$this->db->query("SELECT   
     `classtimeslots`.`cltisl_name`
    , `classtimeslots`.`cltisl_starttime`
    , `classtimeslots`.`cltisl_endtime`
    , `timetable`.`classid`
   
    , `classrooms`.`clro_name`
    , `subjects`.`su_name`
FROM
    `weekdays`
    INNER JOIN `classtimeslots` 
        ON (`weekdays`.`weekdayid` = `classtimeslots`.`weekdayid`)
    INNER JOIN `timetable` 
        ON (`classtimeslots`.`classtimeslotid` = `timetable`.`classtimeslotid`)
    INNER JOIN `days` 
        ON (`days`.`dayid` = `weekdays`.`dayid`)
    INNER JOIN `subjects` 
        ON (`subjects`.`subjectid` = `timetable`.`subjectid`)
    INNER JOIN `classrooms` 
        ON (`classrooms`.`classroomid` = `timetable`.`classroomid`) WHERE `timetable`.`classid`=".$class_id." AND  `days`.`da_name`='".$day."'");
		
		return $query->result_array();
}
/*********************************************************************************************/

function get_students_result($where_array){
	   $this->db->select('examresultdetail.exre_totalmarks,examresultdetail.exre_passmarks,subjects.su_name,examresultdetail.exre_obtainedmarks');
	   $this->db->from('examresult');
	   $this->db->join('examresultdetail','examresult.examresultid = examresultdetail.examresultid');
	   $this->db->join('subjects','subjects.subjectid = examresultdetail.subjectid');
       $this->db->where($where_array);
return $this->db->get()->result_array();
}	
/*********************************************************************************************/

/*********************************************************************************************/

function daily_dairy($where_array){
	   $this->db->select('dailydiary.dadi_detail,subjects.su_name');
	   $this->db->from('dailydiary');
	   $this->db->join('subjects','subjects.subjectid = dailydiary.subjectid');	  
       $this->db->where($where_array);
return $this->db->get()->result_array();
}	
/*********************************************************************************************/



public function check_user($parentloginid,$old_password){
		$hash_pass="password('".$old_password."')";	
		$this->db->select('parentlogin.parentloginid');
		$this->db->from('parentlogin');
		$this->db->where('palo_password',$hash_pass, FALSE);	
		$this->db->where('parentloginid',$parentloginid);	
		return $this->db->get()->row();
	}
/*************************************************************************************************/
public function change_password($parentloginid,$new_password)
{
	$this->db->set('palo_password',"PASSWORD('".$new_password."')",FALSE);
	$this->db->where('parentloginid',$parentloginid);
	$this->db->update('parentlogin');
	
	return TRUE;
}

/***************************************************************************************************/
public function show_profile($parentid){
	   $this->db->select('pa_fathername, pa_fathercontactno,pa_email, pa_address,ci_name');
	   $this->db->from('parents');  
	    $this->db->join('cities','cities.cityid = parents.cityid');
       $this->db->where(array('parentid'=>$parentid));
return $this->db->get()->result_array();
    }

public function change_profile($update_profle_array, $parentid){
	   $this->db->update('parents', $update_profle_array, array('parentid' => $parentid)); 
       return $this->db->affected_rows();
    }
	
	function get_attendance($student_id,$class,$start_date,$end_date){
	   $this->db->select('at_date,at_status,at_onleavereason');
	   $this->db->from('attendance');	   
       $this->db->where('classid',$class);
       $this->db->where('studentid',$student_id);
       $this->db->where("at_date BETWEEN '$start_date' AND '$end_date'");
return $this->db->get()->result_array();
}
	
	
	public function get_exam_id($class_id)
	{		
		$query=$this->db->query("select MAX(examinationid) as exam_id from examclass where classid=".$class_id);		
		return $query->row();
	}
	
	
	
	public function get_note($student_id,$date)
	{
	   $this->db->select('dailydiaryextranote.dadiex_note,subjects.su_name');
	   $this->db->from('dailydiaryextranote');
	    $this->db->join('subjects','subjects.subjectid = dailydiaryextranote.subjectid');
       $this->db->where('studentid',$student_id);
       $this->db->where('dadiex_date',$date);
	   return $this->db->get()->result_array();
	}
		
	function get_notifications($student_id,$start_date,$end_date, $no_by){
	   $this->db->select('no_postdate,no_message');
	   $this->db->from('notifications');	   
       $this->db->where(array('studentid'=>$student_id, 'no_by'=>$no_by));      
       $this->db->where("no_postdate BETWEEN '$start_date' AND '$end_date'");
return $this->db->get()->result_array();
}
	
}

?>