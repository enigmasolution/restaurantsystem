<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function get_notification_dynamically($notification_record){
	    $result='';
	    $ci=& get_instance();
	    foreach($notification_record->result() as $notification){
			   if($notification->no_by==3){$recepient= 'Parent';}else{$recepient='Teacher';}
				   $result.='<li id="notificationid'.$notification->notificationid.'">';
				         $result.='<a href="javascript:void(0)" onclick="schoolnotificationreplyform_byheader(\''.$notification->notificationid.'\',\''.$notification->branchid.'\',\''.$notification->classid.'\',\''.$notification->studentid.'\',\''.$notification->st_fullname.'\',\''.$notification->st_registrationno.'\',\''.$notification->st_avator.'\',\''.$notification->parentid.'\',\''.$notification->pa_fathername.'\',\''.$notification->pa_email.'\',\''.$notification->no_subject.'\',\''.$notification->no_message.'\',\''.date("d/m/Y H:i:s".'\', \''.strtotime($notification->no_postdate)).'\',\''.$recepient.'\')">';
						//$result.='<a href="javascript:void(o)" onclick="schoolnotificationreplyform_byheader(\''.$notification->notificationid.'\',\''.$notification->branchid.'\',\''.$notification->classid.'\',\''.$notification->studentid.'\',\''.$notification->st_fullname.'\',\''.$notification->st_registrationno.'\',\''.$notification->st_avator.'\',\''.$notification->parentid.'\',\''.$notification->pa_fathername.'\',\''.$notification->pa_email.'\',\''.$notification->no_subject.'\',\''.$notification->no_message.'\',\''.date("d/m/Y H(idea)(worry").'\', \''.strtotime($notification->no_postdate)).'\',\''.$recepient.'\')">';
						// $result.='<a href="javascript:void(0)" onclick="schoolnotificationreplyform_byheader('.$notification->notificationid.','.$notification->branchid.','.$notification->classid.','.$notification->studentid.','.$notification->st_fullname.','.$notification->st_registrationno.',\''.$notification->st_avator.'\','.$notification->parentid.','.$notification->pa_fathername.','.$notification->pa_email.','.$notification->no_subject.','.$notification->no_message.','.date("d/m/Y H:i:s", strtotime($notification->no_postdate)).','.$recepient.')">';
						 $result.='<span class="label label-primary"><i class="fa fa-user"></i></span>';
						 $result.='<span class="message">Notification By '.$recepient.'</span>';
						 $result.='<span class="time">'.$ci->notification_lib->time_difference($notification->no_postdate).'</span>';
						 $result.='</a>';
					$result.='</li>';
              }
return $result;					
}
