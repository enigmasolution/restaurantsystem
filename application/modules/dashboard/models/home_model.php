<?php 
class home_model extends CI_Model{
	
	function __construct(){
		parent::__construct();
	}
function get_notification_byparentid1($where_array1, $or_where_array, $where_array2){
	   $this->db->select('*');
	   $this->db->from('notifications');
	   $this->db->join('schools','notifications.branchid = schools.schoolid');
	   $this->db->join('students','notifications.studentid = students.studentid');
	   $this->db->join('parents','students.studentid = parents.studentid');
	   $this->db->where($where_array1);	
	   $this->db->or_where($or_where_array);
	   $this->db->where($where_array2);
	   $this->db->order_by('notifications.no_postdate', 'DESC');	
return $this->db->get();
// echo  $this->db->last_query();	
}
function get_notification_byparentid2($where_array1){
	   $this->db->select('*');
	   $this->db->from('notifications');
	   $this->db->join('schools','notifications.branchid = schools.schoolid');
	   $this->db->join('students','notifications.studentid = students.studentid');
	   $this->db->join('parents','students.studentid = parents.studentid');
	   $this->db->where($where_array1);	
	   $this->db->order_by('notifications.no_postdate', 'DESC');	
return $this->db->get();	
}
function yes_readstatus_of_school_by($where_notification_array, $update_notification_array){
	$this->db->update('notifications', $update_notification_array, $where_notification_array); 
	return $this->db->affected_rows();
	
}
////////////////////// NOTIFICATION TO PARENT //////////////
function add_notification_of_school_by($insert_notification_array){
	   $this->db->insert('notifications', $insert_notification_array); 
return $this->db->insert_id();		
}


function get_user_right_bygroupid($admin_groupid){
	  $this->db->select('*');
	  $this->db->from('grouprights');
	  $this->db->join('rights','grouprights.rightid=rights.rightid');
	  $this->db->where(array('grouprights.groupid'=>$admin_groupid,'grouprights.grri_deletionstatus'=>'No','rights.ri_deletionstatus'=>'No'));
return $this->db->get();	
}
	
/*public function get_login($username, $password){
		$hash_pass="password('".$password."')";	
		$this->db->select('admin.adminid, admin.fullname, admin.schooladmin, admin.createdby, admin.avator, schools.schoolid, schools.sc_name, schools.sc_code, schools.sc_logo, admin.groupid');
		$this->db->from('admin');
        $this->db->join('schools', 'admin.schoolid = schools.schoolid','left');
		$this->db->where('username',$username);		
		$this->db->where('password',$hash_pass, FALSE);		
		return $this->db->get()->row();	
	}
	
function update_password_byusername($username, $correntpassword, $newpassword){   
		$hash_passnew="password('".$newpassword."')";
		$hash_passold="password('".$correntpassword."')";		
		$this->db->where('password',$hash_passold, FALSE);
		$this->db->where('username',$username);
		$this->db->set('password',$hash_passnew, FALSE);
		$this->db->update('admin');
		return $this->db->affected_rows();	 
	      
}	*/
		
	
	/*public function add_news($news_data)
	{
		$this->db->set('date_published','NOW()',FALSE);
		$this->db->insert('news',$news_data);
		
		return $this->db->insert_id();
	}
	
	public function edit_event($event_data,$event_id)
	{
		$this->db->where('id',$event_id);
		$this->db->update('event',$event_data);
		return true;
	}
	
	public function add_event($event_data)
	{
		$this->db->set('post_date','NOW()',FALSE);
		$this->db->insert('event',$event_data);
		
		return $this->db->insert_id();
	}
	
	
	
	public function add_openday($openday)
	{
		$this->db->set('post_date','NOW()',FALSE);
		$this->db->insert('open_day',$openday);		
		return $this->db->insert_id();
	}
	*/
	
	
	/*
	public function delete_event($event_id)
	{
		$this->db->where('id',$event_id);
		$this->db->delete('event');
		
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	
	public function news_count()
	{	
		$this->db->select('count(*) as news_count');
		$this->db->where('status',1);	
		$query=$this->db->get('news');
		return $query->row();
	}
	
	public function event_count()
	{	
		$this->db->select('count(*) as event_count');
		$this->db->where('active_bit',1);		
		$query=$this->db->get('event');
		return $query->row();
	}*/
	
/***************************************************************************************/	
	public function user_info_count()
	{	
		$this->db->select('count(*) as user_info_count');		
		$query=$this->db->get('user_information');
		return $query->row();
	}
	
	/*public function get_all_users($limit)
	{	
		$this->db->order_by('id','desc');
		$query=$this->db->get('user_information',20,$limit);		
		return $query->result_array();
	}
	
	public function get_all_user_detail($user_id)
	{	
		$this->db->where('id',$user_id);		
		$query=$this->db->get('user_information');		
		return $query->row();
	}
	
	
	
	
	public function enquiry_forms_count()
	{	
		$this->db->select('count(*) as enquiry_forms_count');		
		$query=$this->db->get('enquiry');
		return $query->row();
	}
	
	public function get_all_forms($limit)
	{	
		$this->db->order_by('post_date','desc');				
		$query=$this->db->get('enquiry',20,$limit);		
		return $query->result_array();
	}*/
/*
	public function get_form_detail($form_id)
	{	
		$this->db->select('f_name');
		$this->db->select('l_name');
		//$this->db->select('birth_date');
		$this->db->select('type');
		$this->db->select('english_level');
		$this->db->select('course');
		$this->db->select('hear_about');
		$this->db->select('subject');
		$this->db->select('email');
		$this->db->select("start_month,Date_Format(start_month,'%b %Y') as start_month",false);
		$this->db->select("birth_date,Date_Format(birth_date,'%d %b %Y') as birth_date",false);
		$this->db->where('id',$form_id);		
		$query=$this->db->get('enquiry');		
		return $query->row();
	}
*/	
	
	
	
	
/******************************************************************************************/	
	
	/*public function get_all_news($limit)
	{	
		$this->db->where('status',1);	
		$this->db->order_by('id','desc');	
		$this->db->order_by('date_published','desc');	
		$query=$this->db->get('news',20,$limit);	
		return $query->result_array();
	}
	
	
	public function get_all_events($limit)
	{	
		$this->db->where('active_bit',1);	
		$this->db->order_by('id','desc');	
		$query=$this->db->get('event',20,$limit);		
		return $query->result_array();
	}
	
	
	public function remove_openday_event($openda_id)
	{
		$this->db->set('openday',0);
		$this->db->where('openday',$openda_id);
		$this->db->update('event');
		
		$this->db->set('status',0);
		$this->db->where('id',$openda_id);
		$this->db->update('open_day');
		
	}
	
	
	public function get_event($event_id)
	{
		$this->db->where('id',$event_id);
		$this->db->where('active_bit',1);
		$query=$this->db->get('event');
		return $query->row();
	}*/
	
	
	/*public function get_news($news_id)
	{
		$this->db->where('id',$news_id);
		$this->db->where('status',1);
		$query=$this->db->get('news');
		return $query->row();
	}
	
	public function edit_news($news_id, $news_data)
	{
		$this->db->where('id',$news_id);
		$this->db->update('news',$news_data);

		return true;
	}
	
	public function delete_news($news_id)
	{
		$this->db->where('id',$news_id);
		$this->db->delete('news');
		
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}*/
	
	public function change_password($user_id, $username, $new_password)
	{
		$hash_pass="password('".$new_password."')";	
		$this->db->where('id',$user_id);
		$this->db->where('username',$username);
		$this->db->set('password',$hash_pass, FALSE);
		$this->db->update('admin');
		
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	/*
	public function add_page($page_data)
	{
		$this->db->set('creation_date','NOW()',FALSE);
		$this->db->insert('static_pages',$page_data);	
		$insert_id=	$this->db->insert_id();		
		if($page_data['parent_bit']>0)
		{
			$this->db->where('id',$page_data['parent_bit']);
			$this->db->set('sub_page_count','sub_page_count+1', FALSE);
			$this->db->update('static_pages');
			return $insert_id;
		}	
		else
		{
			return $insert_id;
		}
	}
	
	public function get_page_details($page_id)
	{
		$this->db->where('id',$page_id);
		$query=$this->db->get('static_pages');
		
		return $query->row();
	}
	
	public function update_page_details($page_id, $page_data)
	{
		$this->db->where('id',$page_id);
		$this->db->update('static_pages',$page_data);
		
		return true;
	
	}
	
	public function check_page_name($page_name)
	{
		$this->db->select('name');
		$this->db->select('title');
		$this->db->where('LOWER(title)', strtolower($page_name));
		$this->db->order_by('id','desc');
		$this->db->limit(1);	
		$query=$this->db->get('static_pages');
		
		if(count($query->row())>0)
		{
			return $query->row();
		}
		else
		{
			return false;
		}
	}
	*/
	
	
	
	/*
	public function check_page_name_edit($page_id, $page_name)
	{
		$this->db->select('name');
		$this->db->where('LOWER(title)', strtolower($page_name));
		$this->db->where('id !=',$page_id);
		$query=$this->db->get('static_pages');
		
		if(count($query->row())>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}*/
	/*
	public function get_slider()
	{
		$query=$this->db->get('slider');
		return $query->result_array();
	}
	
	public function get_slide_info($slide_id)
	{
		$this->db->where('id',$slide_id);
		$query=$this->db->get('slider');
		return $query->row();
	}
	
	public function update_slide($slide_id, $slide_data)
	{
		$this->db->where('id',$slide_id);
		$this->db->update('slider',$slide_data);
		
		return true;
	
	}
	*/
	/*public function add_staff_member($user_data)
	{
		$this->db->insert('staff',$user_data);
		return $this->db->insert_id();
	
	}
	
	public function get_staff_member($staff_id)
	{
		$this->db->where('id',$staff_id);
		$query=$this->db->get('staff');
		
		return $query->row();
	
	}
	
	public function update_staff_detail($staff_id, $staff_data)
	{
		$this->db->where('id',$staff_id);
		$this->db->update('staff',$staff_data);
		
		return true;
	
	}
	
	public function get_all_staff()
	{
		$query=$this->db->get('staff');
		
		return $query->result_array();	
	}
	
	public function get_all_openday_users($start_date,$end_date)
	{
		$this->db->select('id as sno');		
		$this->db->select('post_date as Date');
		$this->db->select('first_name as "First Name"');
		$this->db->select('last_name as "Surname"');		
		$this->db->select('email as Email');
		$this->db->select('phone as Phone');
		$this->db->select('school as School');		
		$this->db->select('interest as "Course Interested"');	
		$this->db->where('post_date >= ',$start_date);
		$this->db->where('post_date <= ',$end_date);
		$this->db->order_by('post_date','desc');
		$query=$this->db->get('openday_users');		
		return $query->result_array();
	}
	
	
	public function get_all_openday()
	{
		
		$this->db->select('id as sno');		
		$this->db->select('post_date as Date');
		$this->db->select('first_name as "First Name"');
		$this->db->select('last_name as "Surname"');		
		$this->db->select('email as Email');
		$this->db->select('phone as Phone');
		$this->db->select('school as School');		
		$this->db->select('interest as "Course Interested"');	
		$this->db->order_by('post_date','desc');
		$query=$this->db->get('openday_users');		
		return $query->result_array();
	}
	
	
	public function get_openday_user_detail($user_id)
	{
		$this->db->select('first_name');
		$this->db->select('last_name');
		$this->db->select('email');
		$this->db->select('phone');
		$this->db->select('school');
		$this->db->select('interest');		
		$this->db->select("post_date,Date_Format(post_date,'%d %b %Y') as post_date",false);		
		$this->db->where('id',$user_id);
		$query=$this->db->get('openday_users');		
		return $query->row();
	}
	
	public function user_rights_for_page($group_id,$right_id)
	{
		$this->db->select('id');
		$this->db->where('right_id', $right_id);
		$this->db->where('group_id',$group_id);
		$query=$this->db->get('group_rights');
		
		if(count($query->row())>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}*/
	
/********************************************************************************/

public function get_icons($group_id)
{
		$this->db->select('rights.icons');
		$this->db->select('rights.link');
		$this->db->select('rights.right_name');		
		$this->db->where('group_rights.group_id',$group_id);
		$this->db->from('rights');
		$this->db->join('group_rights', 'group_rights.right_id = rights.id');
		$query = $this->db->get();
		return $query->result_array();
		//$query=$this->db->get('admin');		
}	
	
	/*
	public function make_admin($username, $password)
	{
	
		$hash_pass="password(".$password.")";
		$this->db->set('username',$username);
		$this->db->set('password',$hash_pass, FALSE);
		$this->db->insert('admin');
		
		return $this->db->insert_id();
	
	}
	*/
}

?>