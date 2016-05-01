////////////start Restaurant //////////////
function delete_restaurant_byrestaurantid(restaurantid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"restaurant/delete_restaurant_byrestaurantid_json",
		  	data:({
				  'restaurantid':restaurantid
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#restaurantid'+restaurantid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Restaurant record has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Restaurant record has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});	
	
	
}

function activated_deactivated_restaurant_byrestaurantid(restaurantid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"restaurant/activated_deactivated_byrestaurantid_json",
		  	data:({
				  'restaurantid':restaurantid,
				  'status':status
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ restaurantid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_restaurant_byrestaurantid('+restaurantid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ restaurantid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_restaurant_byrestaurantid('+restaurantid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has been successfully changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});		
	
	
}
////////////// end restaurant ///////////////////////////////
////////////// start category //////////////////////////////
function delete_category_bycategoryid(categoryid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"category/delete_category_bycategoryid_json",
		  	data:({
				  'categoryid':categoryid
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#categoryid'+categoryid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Category record has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Category record has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});	
	
	
}

function activated_deactivated_category_bycategoryid(categoryid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"category/activated_deactivated_bycategoryid_json",
		  	data:({
				  'categoryid':categoryid,
				  'status':status
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ categoryid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_category_bycategoryid('+categoryid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ categoryid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_category_bycategoryid('+categoryid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has been successfully changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});		
	
	
}
////////////////// end category ///////////////////////////////

////////////// start menu //////////////////////////////
function addmenu_categories_for_menu_byrestaurantid(){
	 restaurantid=$('#restaurantid').val();
	 if(restaurantid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"menu/categories_for_menu_byrestaurantid_ajax",
		  	data:({
				  'restaurantid':restaurantid
				 }),
			beforeSend:function() {
				 App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			        $('#categoryid').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
                App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});	
	 }else{
		  $('#categoryid').html('<option value="">--- SELECT ---</option>');
	 }	
}

function delete_menu_bymenuid(menuid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"menu/delete_menu_bymenuid_json",
		  	data:({
				  'menuid':menuid
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#menuid'+menuid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Menu record has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Menu record has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});	
	
	
}

function activated_deactivated_menu_bymenuid(menuid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"menu/activated_deactivated_bymenuid_json",
		  	data:({
				  'menuid':menuid,
				  'status':status
				 }),
			beforeSend:function() {
				App.blockUI({
                    target: '#blockui_sample_1_portlet_body',
                    boxed: true
                    });
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ menuid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_menu_bymenuid('+menuid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ menuid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_menu_bymenuid('+menuid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has been successfully changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         App.unblockUI('#blockui_sample_1_portlet_body'); 
                }	   		  	   
	});		
	
	
}
////////////////// end menu ///////////////////////////////









































































































function delete_school_byschoolid(schoolid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"school/delete_school_byschoolid_json",
		  	data:({
				  'schoolid':schoolid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#schoolid'+schoolid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;School record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;School record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

/*function activated_deactivated_school_byschoolid(schoolid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"school/activated_deactivated_byschoolid_json",
		  	data:({
				  'schoolid':schoolid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ schoolid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_school_byschoolid('+schoolid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ schoolid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_school_byschoolid('+schoolid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
	
	
}*/

function enable_disable_school_byschoolid(schoolid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"school/enable_disable_byschoolid_json",
		  	data:({
				  'schoolid':schoolid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ schoolid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_school_byschoolid('+schoolid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ schoolid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_school_byschoolid('+schoolid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}

function display_detail_of_school(schoolid){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"school/display_schoolbranch_detail_byschoolid_json",
		  	data:({
				  'schoolid':schoolid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#schoolbranchdetail').modal('show');
			     $('#sc_logo').attr('src', base_path+'assets/admin/images/school_logo/thumbs/'+data.sc_logo);
				 $('#sc_logo').attr('title', data.sc_name);
				 $('#sc_logo').attr('alt', data.sc_name);
	 
				 $('#sc_name').html(data.sc_name);
				// $('#sc_parentschoolid').html(data.sc_parentschoolid);
				 $('#sc_address').html(data.sc_address);
				 $('#sc_email').html(data.sc_email);
				 $('#sc_phone').html(data.sc_phone);
				 $('#sc_mobile').html(data.sc_mobile); 
				 $('#sc_fax').html(data.sc_fax);
				 $('#sc_contactperson').html(data.sc_contactperson);
				 $('#sc_city').html(data.sc_city); 
				 $('#sc_medium').html(data.sc_medium);
				 $('#sc_code').html(data.sc_code);
				 $('#sc_codeasregistration').html(data.sc_codeasregistration);
				 $('#sc_workingstatus').html(data.sc_workingstatus);
				 $('#sc_systemstatus').html(data.sc_systemstatus);
				 $('#sc_registrationdate').html(data.sc_registrationdate);
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;School Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;School Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}


/////////////////////////// END SCHOOL PART  //////////////////////////////


///////////////// START BRANCH ///////////////////////

function delete_branch_bybranchid(branchid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/delete_branch_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#branchid'+branchid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

/*function activated_deactivated_branch_bybranchid(branchid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/activated_deactivated_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ branchid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_branch_bybranchid('+branchid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ branchid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_branch_bybranchid('+branchid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
	
	
}
*/
function enable_disable_branch_bybranchid(branchid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/enable_disable_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ branchid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_branch_bybranchid('+branchid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ branchid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_branch_bybranchid('+branchid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}

function display_detail_of_branch(branchid){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/display_branch_detail_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#branchdetail').modal('show');
			     $('#sc_logo').attr('src', base_path+'assets/admin/images/school_logo/thumbs/'+data.sc_logo);
				 $('#sc_logo').attr('title', data.sc_name);
				 $('#sc_logo').attr('alt', data.sc_name);
	 
				 $('#sc_name').html(data.sc_name);
				 $('#sc_address').html(data.sc_address);
				 $('#sc_email').html(data.sc_email);
				 $('#sc_phone').html(data.sc_phone);
				 $('#sc_mobile').html(data.sc_mobile); 
				 $('#sc_fax').html(data.sc_fax);
				 $('#sc_contactperson').html(data.sc_contactperson);
				 $('#sc_city').html(data.sc_city); 
				 $('#sc_medium').html(data.sc_medium);
				 $('#sc_code').html(data.sc_code);
				 $('#sc_codeasregistration').html(data.sc_codeasregistration);
				 $('#sc_workingstatus').html(data.sc_workingstatus);
				 $('#sc_systemstatus').html(data.sc_systemstatus);
				 $('#sc_registrationdate').html(data.sc_registrationdate);
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}
///////////////// START CLASSROOM ///////////////////////

function delete_classroom_byclassroomid(classroomid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"classroom/delete_classroom_byclassroomid_json",
		  	data:({
				  'classroomid':classroomid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#classroomid'+classroomid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Classroom has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Classroom has nor been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_classroom_byclassroomid(classroomid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"classroom/enable_disable_byclassroomid_json",
		  	data:({
				  'classroomid':classroomid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+classroomid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classroom_byclassroomid('+classroomid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+classroomid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classroom_byclassroomid('+classroomid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been successfully changed to '+status+'.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
////////////////////// END CLASSROOM ///////////////////






///////////////// START GRADESYSTEM ///////////////////////

function delete_grade_bygradesystemid(gradesystemid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"gradesystem/delete_grade_bygradesystemid_json",
		  	data:({
				  'gradesystemid':gradesystemid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#gradesystemid'+gradesystemid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Grade has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Grade has nor been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_grade_bygradesystemid(gradesystemid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"gradesystem/enable_disable_bygradesystemid_json",
		  	data:({
				  'gradesystemid':gradesystemid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+gradesystemid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_grade_byclassroomid('+gradesystemid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+gradesystemid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_grade_byclassroomid('+gradesystemid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been successfully changed to '+status+'.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
////////////////////// END GRADESYSTEM ///////////////////











///////////////// START TEACHER ///////////////////////
function addteacher_subject_for_teacher_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/subjects_for_teacher_bybranchid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     $('#subject11').val('').trigger("change");
			     $('#subject11').html(data.subjects);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		 $('#subject11').html('');
	 }	
}




function delete_teacher_byteacherid(teacherid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/delete_teacher_byteacherid_json",
		  	data:({
				  'teacherid':teacherid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#teacherid'+teacherid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_teacher_byteacherid(teacherid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/enable_disable_byteacherid_json",
		  	data:({
				  'teacherid':teacherid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+teacherid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_teacher_byteacherid('+teacherid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+teacherid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_teacher_byteacherid('+teacherid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}

function display_detail_of_teacher(teacherid){
	    $('#teacherdetail').modal('show'); 
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/display_teacher_detail_byteacherid_json",
		  	data:({
				  'teacherid':teacherid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#teacherdetail').modal('show');
				 $('#sc_logo').attr('src', base_path+'assets/admin/images/school_logo/thumbs/'+data.sc_logo);
				 $('#sc_logo').attr('title', data.sc_name);
				 $('#sc_logo').attr('alt', data.sc_name);
				
			     $('#te_avator').attr('src', base_path+'assets/admin/images/teacher_avator/thumbs/'+data.te_avator);
				 $('#te_avator').attr('title', data.te_name);
				 $('#te_avator').attr('alt', data.te_name);
				// $('#te_avatorlarge').attr('href', base_path+'assets/admin/images/teacher_avator/'+data.te_avator);
				// $('#te_avatorlarge').attr('title', 'Email : '+data.te_email);
				 $('#sc_name').html(data.sc_name);
				 $('#te_name').html(data.te_name);
				 $('#te_email').html(data.te_email);
				 $('#te_phone').html(data.te_phone); 
				 $('#te_cnic').html(data.te_cnic);
				 $('#te_city').html(data.te_city);
				 $('#te_address').html(data.te_address);
				 $('#te_subject').html(data.te_teachersubject);                             
				 $('#te_systemstatus').html(data.te_systemstatus);
				 $('#te_postdate').html(data.te_postdate);
				 $('#qualificationdetail').html(data.te_qualificationdetail);
				 $('#certificationdetail').html(data.te_certificationdetail);
				 $('#experiencedetail').html(data.te_experiencedetail);
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher Detail Profile has been Successfully Loaded and Viewed</div>');
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
		         $.unblockUI();
                }	   		  	   
	});		
}
$(document).ready(function(e) {
	$("#subject1").on("change", function (e) {
	  var branchid =$('#branchid1').val();
	  var subjectlist =$('#subject1').val();
	  var subject=''; 
	  if (subjectlist === undefined || subjectlist === null) {
            subject='undefined';
			}else{

			}
	  	
	  if(subject !='undefined'){
         $.ajax({
		  	type: "POST",
			url: base_path+"teacher/all_teacher_bybranchid_and_subjectlist_ajax",
		  	data:({
				  'branchid':branchid,
				  'subjectlist':subjectlist
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			$('#teacherid1').val('').trigger("change");
			$('#teacherid1').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	  });
	  }else{
		 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/all_subjectlist_teacherlist_bybranchid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			//$('#subject1').val('').trigger("change");  
			$('#teacherid1').val('').trigger("change");
			$('#subject1').html(data.subjects);
			$('#teacherid1').html(data.teachers);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	  }); 
	  }
   });
});  
$(document).ready(function(e) {
	$("#branchid1").on("change", function (e) {
	  var branchid =$('#branchid1').val();
	  if(branchid !=''){
		 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/all_subjectlist_teacherlist_bybranchid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			$('#subject1').val('').trigger("change");  
			$('#teacherid1').val('').trigger("change");
			$('#subject1').html(data.subjects);
			$('#teacherid1').html(data.teachers);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	  }); 
	  }else{
		 $('#subject1').val('').trigger("change");  
		 $('#teacherid1').val('').trigger("change");   
	  }
   });
});  

/////teacher attendance/
/*function addteacherattendance_byteacherid(){
	var  branchid=$('#branchid').val();
	var  teat_date=$('#teat_date').val();
	var  teacherid=$('#teacherid').val();
	 if(branchid!='' && teacherid!='' && teat_date!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"teacher/get_teacherrecord_for_addteacherattendance_by_ajax",
		  	data:({
				  'branchid':branchid,
				  'teat_date':teat_date,
				  'teacherid':teacherid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  
					$('#addteacherattendancebyteacherid').html(data); 
					 $('.onleavereason a').editable();
					// $('.onleavereason').editable({
	                //  placeholder:'Enter On Leave Reasons',
                    //  rows: 6,
	                 // emptytext:'Reason',
	                //  showbuttons: 'bottom'
                   //  }).hide();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
  }else{
// $('#teacherid option').eq(0).prop('selected', true); 
   $('#addteacherattendancebyteacherid').html('');  
  }
}*/

 //$('.onleavereason').on('save', function(e, params) {
       // alert('Saved value: ' + params.newValue);
	//   alert('dddd');
  //  });

	
/*$(function() {
$("#datetimepicker100").on("dp.change", function (e) {
    var  branchid=$('#branchid').val();
	var  teat_date=$('#teat_date').val();
	var  teacherid=$('#teacherid').val();
	 if(branchid!='' && teacherid!='' && teat_date!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"teacher/get_teacherrecord_for_addteacherattendance_by_ajax",
		  	data:({
				  'branchid':branchid,
				  'teat_date':teat_date,
				  'teacherid':teacherid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					$('#addteacherattendancebyteacherid').html(data);
					 $('.onleavereason a').editable();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	          });	
           }else{
             // $('#teacherid option').eq(0).prop('selected', true); 
           $('#addteacherattendancebyteacherid').html('');  
              }
        }); 	
});	*/
////////////////////////TEACHER ATTENDANCE /////////////
function check_addsingleteachrattendanceradiobox(option){
	if(option=='present'){
		//$('#onleavereason').editable().hide();
		$('.onleavereason').editable('setValue','');
		//alert(option)
		$('#leavereason').val('');
	}else if(option=='onleave'){
		$('.onleavereason').editable().show();
			//alert(option)
	}else if(option=='absent'){
			//alert(option)
		//$('#onleavereason').editable().hide();
		$('.onleavereason').editable('setValue','');
		$('#leavereason').val('');
		
	}
}
   
$(function() {
$("#datetimepicker101").on("dp.change", function (e) {
    var  branchid=$('#branchid').val();
	var  teat_date=$('#teat_date').val();
	 if(branchid!='' && teat_date!=''){
	   $.ajax({
			 url:base_path+"teacher/get_teachers_and_cnic_for_attendanceupdate_by",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'teat_date':teat_date
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#teacherid").select2("val","");
					$('#teacherid').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });
	   }
   }); 	
});	

    	
////// teacher payroll start ///////
/*function addteacherpayroll_byteacherid(){
	var  branchid=$('#branchid').val();
	var  tepasl_periodicdate=$('#tepasl_periodicdate').val();
	var  teacherid=$('#teacherid').val();
	 if(branchid!='' && teacherid!='' && tepasl_periodicdate!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"teacher/get_teacherrecord_for_addteacherpayroll_by_ajax",
		  	data:({
				  'branchid':branchid,
				  'tepasl_periodicdate':tepasl_periodicdate,
				  'teacherid':teacherid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					$('#addteacherpayrollbyteacherid').html(data); 
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	       });	
        }else{
           $('#addteacherpayrollbyteacherid').html('');  
        }
}*/





$(function() {
  $("#datetimepicker102").on("dp.change", function (e) {
	 $('#teacherid').select2().select2('val', $('.select2 option:eq(0)').val());
    }); 	
});	

function calculate_total_for_addteacherpayroll(){
	   var todaldays=$('#totaldays').val();
	   var tepasl_leavedays=$('#tepasl_leavedays').val();
	   var tepasl_detuctionamount=$('#tepasl_detuctionamount').val();
	   var tepasl_payableamount=$('#tepasl_payableamount').val();
	   var totalpayableamount = $('#totalpayableamount').val();
	   var perdaysalary=totalpayableamount/todaldays;
	   $('#tepasl_workingdays').val(todaldays - tepasl_leavedays);
	   $('#tepasl_detuctionamount').val(Number(perdaysalary * tepasl_leavedays).toFixed(2));
	   $('#tepasl_payableamount').val(Number(perdaysalary * (todaldays - tepasl_leavedays)).toFixed(2))
	   $('#tepasl_paidamount').val(Number(perdaysalary * (todaldays - tepasl_leavedays)).toFixed(2))
	   
	   
	  // alert(todaldays);
	  // alert(tepasl_leavedays);
	   // alert(tepasl_detuctionamount);
		// alert(tepasl_payableamount);
		  //alert(totalpayableamount);
	
}
$(function() {
  $("#datetimepicker103").on("dp.change", function (e) {
	var  branchid=$('#branchid').val();
	var  tepasl_periodicdate=$('#tepasl_periodicdate').val();
	 if(branchid!='' && tepasl_periodicdate!=''){
	   $.ajax({
			 url:base_path+"teacher/get_teachers_and_cnic_for_teacherpayroll_by",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'tepasl_periodicdate':tepasl_periodicdate
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#teacherid").select2("val","");
					$('#teacherid').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });
	   } 
    }); 	
});	


function delete_teacherpayroll_byteacherpayrollslipidid(teacherpayrollslipid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/delete_teacherpayroll_byteacherpayrollslipid_json",
		  	data:({
				  'teacherpayrollslipid':teacherpayrollslipid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#teacherpayrollslipid'+teacherpayrollslipid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher payroll record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher payroll record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function printout_bybranchid__teacherpayrollslipno(branchid, tepasl_slipno){
        $.ajax({
			 url:base_path+"teacher/get_teacherpayrollslipdetail_for_printout_bybranchid_tepasl_slipno",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'tepasl_slipno':tepasl_slipno
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#teacherpayrollslipdetail').modal('show');	
					$('#payrollslipdetail').html(result);   
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	 		
}

////// end ///////	
	
	
	
	
	
	
	


////// end /



////////////////////// END TEACHER ///////////////////////



















//////////////////////// START SUBJECT ///////////////////
function delete_subject_bysubjectid(subjectid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"subject/delete_subject_bysubjectid_json",
		  	data:({
				  'subjectid':subjectid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#subjectid'+subjectid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Subject record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Subject record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_subject_bysubjectid(subjectid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"subject/enable_disable_bysubjectid_json",
		  	data:({
				  'subjectid':subjectid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+subjectid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_subject_bysubjectid('+subjectid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+subjectid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_subject_bysubjectid('+subjectid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
//////////////////////// END SUBJECT /////////////////////

//////////////////////// START TIMETABLE ///////////////////
function load_weekdaysdetail_for_manageweekdays_byids(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/weekdaysdetail_for_manageweekdays_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				   }
			  
			  // get_recentlyenable_academicsesison_by(branchid,classid);
			  
			  
			//  $('#weekdaysdetail').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		 // $('#weekdaysdetail').html('');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
	 }						
}

function get_academicsession_withenablestatus_for_addtimetable_by(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/weekdaysdetail_for_manageweekdays_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				   }
			  
			  // get_recentlyenable_academicsesison_by(branchid,classid);
			  
			  
			//  $('#weekdaysdetail').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		 // $('#weekdaysdetail').html('');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
	 }						
}

function enable_disable_weekday_byweekdayid(weekdayid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/enable_disable_byweekdayid_json",
		  	data:({
				  'weekdayid':weekdayid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						       $('#systemstatus'+weekdayid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_weekday_byweekdayid('+weekdayid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					    }else{
						      $('#systemstatus'+weekdayid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_weekday_byweekdayid('+weekdayid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					          } 
					
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
		               if(status == 'Enable'){
					       $('#weekdayid'+ weekdayid).css('color','rgb(0,0,0)');
					   }else{
						  $('#weekdayid'+ weekdayid).css('color','rgb(255,0,0)');  
					    }
				 }else{
				       $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}

function load_classes_for_classtimeslot_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"timetable/classes_for_classtimeslot_bybranchid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data);
					  $('#weekdayid').html('<option value="">--- SELECT ---</option>');
					$('#timeslotdetailtable').html(''); 
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
				   $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
		   $('#weekdayid').html('<option value="">--- SELECT ---</option>');
		   $('#timeslotdetailtable').html(''); 
	 }	
}
function timeslot_opertion_for_classtimeslot_bybranchid_classid_weekdayid(){
	     operation= $('#operation').val();   
		 $("#weekdayid").select2("val","");
			if(operation=='EDIT_TIMESLOT'){
				// alert(operation)
				 $('#weekdayid').removeAttr('multiple');
				 $('#weekdayid').attr('name','weekdayid[]');
				 $('#labeloperation').html('Weekday')
			}else{
				 $('#weekdayid').attr('multiple','multiple');
				 $('#labeloperation').html('Weekdays (Multiple Selection)')
				  $('#weekdayid').attr('name','weekdayid[]');
			      }
			 
	      $('#classid option').eq(0).prop('selected', true);
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>'); 
		  $('#sectionid1').html(''); 
		  $("#weekdayid").select2("val","");
		  $("#weekdayid").select2();   
	     // $('#weekdayid').select2('val','<option value="">--- SELECT ---</option>');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
		  $('#timeslotdetailtable').html('');
}
function load_weekdays_and_section_for_classtimeslot_bybranchid_classid(){
  branchid=$('#branchid').val();
  classid=$('#classid').val();
  operation= $('#operation').val();
  $("#weekdayid").select2("val","");
  $("#weekdayid").select2();      
  $('#sectionid1').html(''); 
	 if(branchid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/weekdays_section_for_classtimeslot_bybranchid_classid_json",
		  	data:({
				  'branchid':branchid,
				  'operation':operation,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
					   $('#weekdayid').html(data.weekdays);
					   $('#timeslotdetailtable').html('');
				    }
				   // $('#weekdayid').html(data);
					
					 
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{ 
		  $("#weekdayid").select2("val","");
		  $("#weekdayid").select2();   
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
		  $('#timeslotdetailtable').html('');
	 }			
}


function load_weekdays_for_classtimeslot_bybranchid_classid(){
  branchid=$('#branchid').val();
  classid=$('#classid').val();
  sectionid=$('#sectionid').val();
   operation= $('#operation').val();   
	 if(branchid!='' && classid!='' && sectionid!=''){
	  $.ajax({
		    dataType:'json',
		  	type: "POST",
			url: base_path+"timetable/weekdays_for_classtimeslot_bybranchid_classid_ajax",
		  	data:({
				  'branchid':branchid,
				  'operation':operation,
				  'classid':classid,
				  'sectionid':sectionid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
			         $('#weekdayid').html(data.weekdays);
					 $('#timeslotdetailtable').html('');
				   }
					 
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#weekdayid").select2("val","");
		  $("#weekdayid").select2();   
		  $('#timeslotdetailtable').html('');
	 }			
}
function load_timeslotdetail_for_classtimeslot_bybranchid_classid_weekdayid(){
    operation= $('#operation').val(); 
	branchid=$('#branchid').val();
    classid=$('#classid').val();  
  if(operation=='EDIT_TIMESLOT'){
      weekdayid=$('#weekdayid').val();
	 if(branchid!='' && classid!='' && weekdayid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"timetable/timeslotdetail_for_classtimeslot_bybranchid_classid_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'weekdayid':weekdayid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#timeslotdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#timeslotdetailtable').html('');
	 }	
  }else if(operation=='ADD_TIMESLOT'){
	     $('#timeslotdetailtable').html('');
		weekdayid=$('#weekdayid').val();
		len=weekdayid.length;
		weekdayid=weekdayid[len-1];
	   if(branchid!='' && classid!='' && weekdayid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"timetable/timeslotdetail_for_addclasstimeslot_bybranchid_classid_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'weekdayid':weekdayid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#timeslotdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#timeslotdetailtable').html('');
	 }	
	  
  }
}
 
$('.subjectid').on('save', function(e, params) {
		$('#subjectidlist'+$(this).data('id')).val(params.newValue);
		var id = $(this).data('id');
		var subjectidlist =   $('#subjectidlist'+id).val();
		var branchid = $(this).data('branchid');
		subjectid = params.newValue;
	    if(branchid !='' && subjectid !='' && subjectidlist !=''){
			$.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/teachers_for_timetable_bybranchid_subjectid_ajax",
		  	data:({
				  'branchid':branchid,
				  'subjectid':subjectid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  //$('#teacherid'+id).editable('option','source',[{'value':'', 'text':'Select Teacher'},{'value':1, 'text':'Iqbal Channar'},{'value':2, 'text':'Irshad Channar'}]);
			  $('#teacherid'+id).editable('setValue', null);
			  $('#teacherid'+id).editable('option','source',data/*[{'value':'', 'text':'Select Teacher'},{'value':1, 'text':'Iqbal Channar'},{'value':2, 'text':'Irshad Channar'}]*/);
		      $('#teacherid'+id).editable();
			  $('#teacherid'+id).editable('toggle');
			   
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	      });		
	    }else{
			 $('#teacherid'+id).editable('setValue',null);
		    $('#teacherid'+id).editable('option','source',[{'value':'', 'text':'Select Teacher'}]);
	     }			
	
  });
 $('.teacherid').on('save', function(e, params) {
     $('#teacheridlist'+$(this).data('id')).val(params.newValue);
	// alert(params.newValue);
  });
$('.classroomid').on('save', function(e, params) {
      $('#classroomidlist'+$(this).data('id')).val(params.newValue);
  });    
  
function delete_timetable_bybranchid_classid(timetableid, branchid, classid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"timetable/delete_timetable_byclassid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#timetableid'+timetableid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Timetable record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Timetable record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}  
  
  
  
  
  
  
//////////////////////// END TIMETABLE /////////////////////



function display_detail_of_branch_for_superadmin(branchid){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"school/display_branch_detail_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#branchdetail').modal('show');
			     $('#sc_logo').attr('src', base_path+'assets/admin/images/school_logo/thumbs/'+data.sc_logo);
				 $('#sc_logo').attr('title', data.sc_name);
				 $('#sc_logo').attr('alt', data.sc_name);
				 $('#br_avatorlarge').attr('href', base_path+'assets/admin/images/school_logo/'+data.sc_logo);
				 $('#br_avatorlarge').attr('title', 'School Reg-No : '+data.sc_registrationdate);
	 
				 $('#sc_name').html(data.sc_name);
				 $('#sc_address').html(data.sc_address);
				 $('#sc_email').html(data.sc_email);
				 $('#sc_phone').html(data.sc_phone);
				 $('#sc_mobile').html(data.sc_mobile); 
				 $('#sc_fax').html(data.sc_fax);
				 $('#sc_contactperson').html(data.sc_contactperson);
				 $('#sc_city').html(data.sc_city); 
				 $('#sc_medium').html(data.sc_medium);
				 $('#sc_code').html(data.sc_code);
				 $('#sc_codeasregistration').html(data.sc_codeasregistration);
				 $('#sc_workingstatus').html(data.sc_workingstatus);
				 $('#sc_systemstatus').html(data.sc_systemstatus);
				 $('#sc_registrationdate').html(data.sc_registrationdate);
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Branch Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}



/////////////////////////// END BRANCH PART  //////////////////////////////









 
/////////////////////////// START CLASS PART ///////////////////////////////


function delete_class_byclassid(classid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/classes/delete_class_byclassid_json",
		  	data:({
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#classid'+classid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Class record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Class record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

/*function activated_deactivated_class_byclassid(classid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/classes/activated_deactivated_byclassid_json",
		  	data:({
				  'classid':classid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Activated'){
						  $('#workingstatus'+ classid).html('<a data-original-title="Working Status Activated"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_class_byclassid('+classid+',\'Deactivated\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#workingstatus'+ classid).html('<a  data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_class_byclassid('+classid+',\'Activated\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 }
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Working Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
	
	
}*/

function enable_disable_class_byclassid(classid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/classes/enable_disable_byclassid_json",
		  	data:({
				  'classid':classid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ classid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_class_byclassid('+classid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ classid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_class_byclassid('+classid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}



/////////////////////////// START CLASS FEE PART ///////////////////////////////


function delete_classfee_byclassfeeid(classfeeid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"classfee/delete_classfee_byclassfeeid_json",
		  	data:({
				  'classfeeid':classfeeid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#classfeeid'+classfeeid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Class Fee record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Class Fee record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

function enable_disable_classfee_byclassfeeid(classfeeid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"classfee/enable_disable_byclassfeeid_json",
		  	data:({
				  'classfeeid':classfeeid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ classfeeid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classfee_byclassfeeid('+classfeeid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ classfeeid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classfee_byclassfeeid('+classfeeid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}


//////////////////////// START FEEHEAD ///////////////////
function delete_feehead_byfeeheadid(feeheadid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/classes/delete_feehead_byfeeheadid_json",
		  	data:({
				  'feeheadid':feeheadid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#feeheadid'+feeheadid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Feehead record has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Feehead record has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_feehead_byfeeheadid(feeheadid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/classes/enable_disable_byfeeheadid_json",
		  	data:({
				  'feeheadid':feeheadid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+feeheadid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_feehead_byfeeheadid('+feeheadid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+feeheadid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_feehead_byfeeheadid('+feeheadid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System status has been successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
//////////////////////// END FEEHEAD /////////////////////



/////////////////// END CLASS FEE ////////////////////////////







//////////////////////// USER RIGHT PORTION ////////////////////////////

          ///////////////// START GROUP /////////////////////////////
		  
function delete_group_bygroupid(groupid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/delete_group_bygroupid_json",
		  	data:({
				  'groupid':groupid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#groupid'+groupid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

function enable_disable_group_bygroupid(groupid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/enable_disable_bygroupid_json",
		  	data:({
				  'groupid':groupid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ groupid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_group_bygroupid('+groupid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ groupid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_group_bygroupid('+groupid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}

		  ///////////////// END GROUP /////////////////////////////





		  ///////////////// START RIGHT //////////////////////////
		  		  
function delete_right_byrightid(rightid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/delete_right_byrightid_json",
		  	data:({
				  'rightid':rightid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#rightid'+rightid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Right record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Right record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

function enable_disable_right_byrightid(rightid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/enable_disable_byrightid_json",
		  	data:({
				  'rightid':rightid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ rightid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_right_byrightid('+rightid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ rightid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_right_byrightid('+rightid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
		  
		  
		  ////////////////// END RIGHT /////////////////////// 
		 
		  ///////////////// GROUP RIGHT ////////////////////////
function load_rights_for_userright_bygroupid(){
	var groupid=$('#groupid').val();
	if(groupid!=''){
	 $.ajax({
		  	type: "POST",
			url: base_path+"userright/get_rights_by_ajax",
		  	data:({
				  'groupid':groupid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   $("#rightid").select2("val","");
			    $('#rightid').html(data);
				$("#rightid").select2();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	}else{
	  $('#rightid').html('<option value="">--- SELECT ---</option>');		
	}
	
	
	
	
	
}
function delete_groupright_bygrouprightid(grouprightid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/delete_groupright_bygrouprightid_json",
		  	data:({
				  'grouprightid':grouprightid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#grouprightid'+grouprightid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group Right record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group Right record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

function enable_disable_groupright_bygrouprightid(grouprightid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/enable_disable_bygrouprightid_json",
		  	data:({
				  'grouprightid':grouprightid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ grouprightid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_groupright_bygrouprightid('+grouprightid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ grouprightid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_groupright_bygrouprightid('+grouprightid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
  
		  /////////////// END GROUP RIGHT //////////////////////

		  
//////////////////////// DELETE GROUP RIGHT //////////////////
function delele_groupright(){
	          var deletegrouprightlist=new Array(); 
              $( ".checkedmember").each(function( index , value ) {
				    if($(this).prop('checked')){
	                  	 deletegrouprightlist[index]=$(this).val();	 
	                   }  
                });
	if(deletegrouprightlist.length>0){			 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/deletegroupright",
		  	data:({
				  'deletegrouprightlist':deletegrouprightlist
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			     for (var i=0; i< data.length; i++){
					 if(data[i][0]){
					      $('#grouprightid'+data[i][1]).remove();
						  $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group Rights have been successfully Deleted </div>'); 
				          }else{
					       $('#grouprightid'+data[i][1]).css('color','rgb(233,158,133)');
				          }
					
				      }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }else{
	alert('Please checked any CHECKBOX to proceed');   
   }
}



///////////////////////// END DELETE GROUP RIGHT ////////////////
//////////////////////////  START DELETE GROUP TO USER ////////////
//////////////////////// DELETE GROUP RIGHT //////////////////
function deleteusergroup(){
	          var deletegrouprightlist=new Array(); 
              $( ".checkedmember").each(function( index , value ) {
				    if($(this).prop('checked')){
	                  	 deletegrouprightlist[index]=$(this).val();	 
	                   }  
                });
	if(deletegrouprightlist.length>0){			 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"userright/deletegroupright",
		  	data:({
				  'deletegrouprightlist':deletegrouprightlist
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			     for (var i=0; i< data.length; i++){
					 if(data[i][0]){
					      $('#grouprightid'+data[i][1]).remove();
						  $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Group Rights have been successfully Deleted </div>'); 
				          }else{
					       $('#grouprightid'+data[i][1]).css('color','rgb(233,158,133)');
				          }
					
				      }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }else{
	alert('Please checked any CHECKBOX to proceed');   
   }
}




//////////////////////// END DELETE GROUP TO USER ///////////////////

////////////////////////// START STUDENT REGISTRATION ///////////

function display_detail_of_student(studentid){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/display_student_detail_bystudentid_json",
		  	data:({
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#studentdetail').modal('show');
			     $('#st_avator').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+data.st_avator);
				 $('#st_avator').attr('title', data.st_fullname);
				 $('#st_avator').attr('alt', data.st_fullname);
				 $('#st_avatorlarge').attr('href', base_path+'assets/admin/images/student_avator/'+data.st_avator);
				 $('#st_avatorlarge').attr('title', 'Reg-No : '+data.st_registrationno);
				 $('#br_name').html(data.sc_name);
				 $('#cl_name').html(data.cl_name);
				
				 if(data.se_name != ''){
					   $('#sectionid').css('display' , 'block');
					   $('#se_name').html(data.se_name);
				   }
				 $('#st_registrationno').html(data.st_registrationno);
				 $('#st_fullname').html(data.st_fullname); 
				 $('#st_gender').html(data.st_gender);
				 $('#st_contactno').html(data.st_contactno);
				 $('#st_religion').html(data.st_religion);
				 $('#st_birthdate').html(data.st_birthdate);
				 $('#st_registrationdate').html(data.st_registrationdate); 
				 $('#pa_parentaccountno').html(data.pa_parentaccountno); 
				 $('#pa_fathername').html(data.pa_fathername); 
				 $('#pa_fathercontactno').html(data.pa_fathercontactno);
				 $('#pa_email').html(data.pa_email);
				 $('#pa_city').html(data.pa_city);
				 $('#pa_address').html(data.pa_address);
				
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}

function load_classes_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 $('#sectionid1').html('');
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"student/classes_for_student_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data);
					var validator = $( "#form" ).validate();
                        validator.form();
					studentregistation_registrationno_and_studentfee_invoiceno(branchid);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
		  $('#st_registrationno').val('');
		  $('#stfe_invoiceno').val('');
		  $('#sectionid1').html('');
		   $('#classfeediv').html('');
	 }	
}
function studentregistation_registrationno_and_studentfee_invoiceno(branchid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/get_registationno_and_studentfee_invoiceno_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				//overlay_ajax();
                  },		 		 
		  success:function(data){
			        if(data.flag){
					  $('#systemoptionid').val(data.systemoptionid);
					   $('#st_registrationno').val(data.st_registrationno);
					  $('#stfe_invoiceno').val(data.stfe_invoiceno);
					}else{
					  $('#systemoptionid').val('');	
					  $('#st_registrationno').val(data.st_registrationno);
					  $('#stfe_invoiceno').val(data.stfe_invoiceno);
							
					}
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		        // $.unblockUI();
                }	   		  	   
	});	
	
	
}
	
function load_selections_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid1').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/sections_for_student_bybranchid_userid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
			           $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessions);
					     var sectionid=$('#sectionid').attr('name');
	                     if (typeof(sectionid) != "undefined") {
                              var validator = $( "#form" ).validate();
                              validator.form();
                          } 	

					   get_classfee_for_studentregisration(branchid,classid);
				   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#sectionid1').html('');
		   $('#classfeediv').html('');
	 }	
}
function get_classfee_for_studentregisration(){
	 $.ajax({
		  	type: "POST",
			//dataType:'json',
			url: base_path+"student/get_classfee_for_student_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $('#classfeediv').html(data);
					    var validator = $( "#form" ).validate();
                        validator.form();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}
function validate_parentaccountno_for_addingstudent_by(){
      var parentaccountno=$('#parentaccountno').val();
	  var siblingchoice  =$('#siblingchoice').val();
	  /// $('#parentaccountno').attr('readonly',true);  
	if(siblingchoice =='No'){		 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/varify_parentaccountno_for_addingstudent_json",
		  	data:({
				  'pa_parentaccountno':parentaccountno
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			              if(data.flag){
							 // $('#parentaccountno').attr('readonly',false);
							$('#fakeaccountnoregisrationstatus').val(true);  
							 var validator = $( "#form" ).validate();
                                  validator.element("#parentaccountno");
						     $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;This is valid parent account # </div>'); 
						  }else{
							  $('#fakeaccountnoregisrationstatus').val(false);  
							  var validator = $( "#form" ).validate();
                                  validator.element( "#parentaccountno");
							 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Parent account no already existed.</div>');   
						  }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }else{
	  //  $('#parentaccountno').css('border-color','rgb(255,29,17)'); 
	//alert('Please checked any CHECKBOX to proceed');   
   }	
}
function printout(branchid, stfe_invoiceno){
        $.ajax({
			 url:base_path+"student/get_studentfeedetail_for_printout_byinvoiceno",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'stfe_invoiceno':stfe_invoiceno
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#studentfeedetail').modal('show');	
					$('#feedetail').html(result);   
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	 		
}

function printout_byparent_accountno_invoiceno(pa_parentaccountno, stfe_invoiceno){
        $.ajax({
			 url:base_path+"studentmonthlyfee/get_studentfeedetail_for_printout_byinvoiceno_pa_accountno",
			 type:'POST',
			 data:({
				   'pa_parentaccountno':pa_parentaccountno,
				   'stfe_invoiceno':stfe_invoiceno
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#studentfeedetail').modal('show');	
					$('#feedetail').html(result);   
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	 		
}
function printout_voucher(pa_parentaccountno,voac_voucherno){
        $.ajax({
			 url:base_path+"studentmonthlyfee/get_studentfeedetail_for_printout_byvoucherno",
			 type:'POST',
			 data:({
				   'pa_parentaccountno':pa_parentaccountno,
				   'voac_voucherno':voac_voucherno
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#studentfeedetail').modal('show');	
					$('#feedetail').html(result); 
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	 		
}


/*function getTags(){
  alert('Working 2');		
}*/
function addstudent_calculate_total_and_discount(feeheadid){
	         
			var discount= Number($('#discount'+feeheadid).val());
			var payablefee= Number($('#payablefee'+feeheadid).val());
			  $('#payablefeeinput'+feeheadid).val(Number(payablefee - discount).toFixed(2));
			 var sum=0;
              $( ".actualfee" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalactualfee').val(Number(sum).toFixed(2));  
			 var sum=0;
              $( ".totaldiscount" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totaldiscount').val(Number(sum).toFixed(2));  
				sum=0;
				 $( ".totalpayable" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalpayablefee').val(Number(sum).toFixed(2));  
				
}
function calculate_total_for_addstudent(feeheadid){
	    var addintotal=$('#addintotal'+feeheadid).val();
	if(addintotal=='Yes'){
	     $('#discount'+feeheadid).addClass('totaldiscount');
		 $('#payablefeeinput'+feeheadid).addClass('totalpayable');
		 $('#actualfee'+feeheadid).addClass('actualfee');
		 addstudent_calculate_total_and_discount(feeheadid);
	}else{
	     $('#discount'+feeheadid).removeClass('totaldiscount');
		 $('#payablefeeinput'+feeheadid).removeClass('totalpayable');
		  $('#actualfee'+feeheadid).removeClass('actualfee');
		 addstudent_calculate_total_and_discount(feeheadid);		
	}
}
function addsiblingdetail(){
	var siblingchoice=$('#siblingchoice').val();
	
	if(siblingchoice=='Yes'){
		$('#sibling').css('display', 'block');
		$('#logindetail').css('display','none');
		$('#parentaccountno').attr('readonly',true);
		 var validator = $( "#form" ).validate();
          validator.element( "#siblingregistrationno");
		
	}else if(siblingchoice=='No'){
		$('#parentaccountno').attr('readonly',false);
		$('#parentaccountno').val('');
		$('#logindetail').css('display','block');
		$('#addlogindetail').html('<option vaule="Yes">Yes</option>');
		$('#fathername').val('');
		$('#fathercontactno').val('')
		$('#email').val('')
		$('#city').val('')
		$('#address').val('');
		$('#sibling').css('display', 'none');
		$('#siblingregistrationno').val('');
      }
}
function do_you_want_to_add_logindetail(){
	var addlogindetail=$('#addlogindetail').val();
	if(addlogindetail=='No'){
		$('#logindetail').css('display','none');
	}else if(addlogindetail=='Yes'){
		$('#logindetail').css('display','block');
		var validator = $( "#form" ).validate();
            validator.form();
		
      }
}
function varify_sibling_parentaccountno(){
	var siblingregistrationno=$('#siblingregistrationno').val();
	if(siblingregistrationno !=''){		 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/varify_sibling_registrationno_for_discount_json",
		  	data:({
				  'pa_parnetaccountno':siblingregistrationno
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			              if(data.flag){
							  $('#parentaccountno').attr('readonly',true);
							$('#fakesiblingregisrationstatus').val(true);  
							 var validator = $( "#form" ).validate();
                                  validator.element("#siblingregistrationno");
						    $('#addlogindetail').html('<option vaule="No">No</option><option vaule="Yes">Yes</option>');  
						    display_detail_of_student(data.studentid);
							$('#parentaccountno').val(data.pa_parentaccountno);
							$('#fathername').val(data.pa_fathername);
							$('#fathercontactno').val(data.pa_fathercontactno);
							$('#email').val(data.pa_email);
							$('#city').html(data.pa_city);
							$('#address').val(data.pa_address);
							 $('#siblingregistrationno').css('border-color','#CCCCCC'); 
						     $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Sibling\'s Registration No has been Successfully Found </div>'); 
							 $('#logindetail').css('display','none');
							 $('#logindetail').css('display','none');
						  }else{
							  $('#fakesiblingregisrationstatus').val(false);  
							  var validator = $( "#form" ).validate();
                                  validator.element( "#siblingregistrationno");
							 $('#parentaccountno').attr('readonly',false);	
							 $('#parentaccountno').val('');	    
							 $('#addlogindetail').html('<option vaule="Yes">Yes</option>');  
							 $('#logindetail').css('display','block');
							 $('#fathername').val('');
							 $('#fathercontactno').val('')
							 $('#email').val('')
							 $('#city').val('')
							 $('#address').val('');
							 $('#siblingregistrationno').css('border-color','rgb(255,29,17)'); 
							 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Sibling\'s Registration No has not been Found </div>');   
						  }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }else{
	    $('#siblingregistrationno').css('border-color','rgb(255,29,17)'); 
	//alert('Please checked any CHECKBOX to proceed');   
   }	
}

function update_student_load_selections_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 oldsectionid=$('#oldsectionid').val();
	 studentid=$('#studentid').val();
	 $('#sectionid1').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/update_student_sections_for_student_bybranchid_userid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'oldsectionid':oldsectionid,
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $('#sectionid1').html('');
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
					   update_student_loadclassfee_by(branchid, classid, studentid );
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#sectionid1').html('');
	 }	
}
function update_student_loadclassfee_by(branchid, classid, studentid ){
   $.ajax({
		  	type: "POST",
			//dataType:'json',
			url: base_path+"student/update_student_loadclassfee_for_student_byajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $('#classfeediv').html(data);
					  // $('#classfeediv').html(update_student_loadclassfee_by(branchid, classid, studentid ));
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
	
	
	
}

function delete_student_bystudentid(studentid,pa_parentaccountno){
		   $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/check_student_fee_status_for_deletion_bystudentid_json",
		  	data:({
				  'pa_parentaccountno':pa_parentaccountno,
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			         if(data.flag){
						 $('#studentid').val(studentid);
						 $('#studentdeletiondetail').modal('show'); 
					 }else{
						$('#error_in_student_detetion').modal('show');
						$('#totalremainingfee').html(data.totalremainingfee); 
					 }
					  
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	

		 	
}
function delete_student_studentid(){
	var studentid = $('#studentid').val();
	var te_date = $('#te_date').val();
	var te_reason = $('#te_reason').val();
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/delete_student_bystudentid_json",
		  	data:({
				  'studentid':studentid,
				  'te_date':te_date,
				  'te_reason':te_reason
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#studentdeletiondetail').modal('hide'); 
					 $('#studentid'+studentid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
}





/////////////// student search //////////
function load_search_classes_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	  $('#classid').html('<option value="">--- SELECT ---</option>');
	 $('#sectionid1').html('');
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"student/classes_for_student_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
		  $('#sectionid1').html('');	 
	 }	
}

function load_search_selections_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/search_sections_for_student_bybranchid_userid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
					   get_registrationno_for_search_for_search();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#sectionid1').html('');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
		  get_registrationno_for_search_for_search();
	 }	
}

function load_search_regisrtaionno_for_student_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 sectionid=$('#sectionid').val();
	get_registrationno_for_search_for_search();
}

function get_registrationno_for_search_for_search(){
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val(); 
	  var academicsessionid=$('#academicsessionid').val(); 
	 var sectionidvar=$('#sectionid').attr('name');
	 var sectionid=$('#sectionid').val();
	 if (typeof(sectionidvar) == "undefined") {
            sectionid='';
        } 	
		
		$.ajax({
			 url:base_path+"student/search_get_registrationno_bybranchdata",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'sectionid':sectionid
				   
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#registrationno").select2("val","");
					$('#registrationno').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
    }

////////////////////// END STUDENT REGISTRATION ////////////////////

//// ///////////////// TRANSFORM STUDENT //////////////////////////
function load_academicsession_recentlydisable_for_transformstudent_bybranchid_classid(){
	 branchid=$('#branchid').val();
	 fromclassid=$('#fromclassid').val();
	// $('#sectionid1').html('');
	 if(branchid !='' && fromclassid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/academicsession_recentlydisable_for_transformstudent_by_json",
		  	data:({
				  'branchid':branchid,
				  'fromclassid':fromclassid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
			          
					   $('#fromacademicsessionid').html(data.fromacademicsessionid);
					    /* var sectionid=$('#sectionid').attr('name');
	                     if (typeof(sectionid) != "undefined") {
                              var validator = $( "#form" ).validate();
                              validator.form();
                          } 	

					   get_classfee_for_studentregisration(branchid,classid);*/
				   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		 $('#fromacademicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
}

function load_academicsession_recentlyenable_for_transformstudent_bybranchid_classid(){
	  branchid=$('#branchid').val();
	  fromclassid=$('#fromclassid').val();
	  fromacademicsessionid=$('#fromacademicsessionid').val();
	  branchid=$('#branchid').val();
	  toclassid=$('#toclassid').val();
  if(branchid !='' && fromclassid !='' && fromacademicsessionid !=''){
	  
	 
	 if(branchid !='' && toclassid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/academicsession_recentlyenable_for_transformstudent_by_json",
		  	data:({
				  'branchid':branchid,
				  'toclassid':toclassid,
				  'fromclassid':fromclassid,
				  'fromacademicsessionid':fromacademicsessionid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
			          
					   $('#toacademicsessionid').html(data.toacademicsessionid);
					   $('#studentdetail').html(data.studentdetail);
					    /* var sectionid=$('#sectionid').attr('name');
	                     if (typeof(sectionid) != "undefined") {
                              var validator = $( "#form" ).validate();
                              validator.form();
                          } 	

					   get_classfee_for_studentregisration(branchid,classid);*/
				   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		 $('#toacademicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
	 
  }else{
	 $('#toclassid option').eq(0).prop('selected', true); 
	 $('#transformstudentselectrequireddetail').modal('show');  
	  
  }
}
function addstudent_calculate_total_and_discount_for_transformstudent(feeheadid,num1){
	         
			var discount= Number($('#discount'+feeheadid).val());
			var payablefee= Number($('#payablefee'+feeheadid).val());
			  $('#payablefeeinput'+feeheadid).val(Number(payablefee - discount).toFixed(2));
			 var sum=0;
              $( ".actualfee"+num1 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalactualfee'+num1).val(Number(sum).toFixed(2));  
			 var sum=0;
              $( ".totaldiscount"+num1 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totaldiscount'+num1).val(Number(sum).toFixed(2));  
				sum=0;
				 $( ".totalpayable"+num1 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalpayablefee'+num1).val(Number(sum).toFixed(2));  
				
}
function calculate_total_for_addstudent_for_transformstudent(feeheadid,num1){
	    var addintotal=$('#addintotal'+feeheadid).val();
	if(addintotal=='Yes'){
	     $('#discount'+feeheadid).addClass('totaldiscount'+num1);
		 $('#payablefeeinput'+feeheadid).addClass('totalpayable'+num1);
		 $('#actualfee'+feeheadid).addClass('actualfee');
		 addstudent_calculate_total_and_discount_for_transformstudent(feeheadid, num1);
	}else{
	     $('#discount'+feeheadid).removeClass('totaldiscount'+num1);
		 $('#payablefeeinput'+feeheadid).removeClass('totalpayable'+num1);
		  $('#actualfee'+feeheadid).removeClass('actualfee'+num1);
		 addstudent_calculate_total_and_discount_for_transformstudent(feeheadid, num1);		
	}
}





///////////////////////// END ////////////////////////////////////

/////////////////////////// SIMPLE USER ///////////////////////////
      ///////////////// START GROUP /////////////////////////////
		  
function delete_user_byuserid(userid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/user/delete_user_byuserid_json",
		  	data:({
				  'userid':userid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#userid'+userid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;User record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;User record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

function enable_disable_user_byuserid(userid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/user/enable_disable_byuserid_json",
		  	data:({
				  'userid':userid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ userid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_user_byuserid('+userid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ userid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_user_byuserid('+userid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}


////////////////////////////// END SIMPLE USER /////////////////////////////////


 ///////////////// START ACADEMIC SESSION /////////////////////////////
		  
function delete_academicsession_byacademicsessionid(academicsessionid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"academicsession/delete_academicsession_byacademicsessionid_json",
		  	data:({
				  'academicsessionid':academicsessionid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#academicsessionid'+academicsessionid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Academic Session has been successfully deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Academic Session has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}

/*function enable_disable_academicsession_byacademicsessionid(branchid, academicsessionid, status){
	 $('#enableclassforacademicsession').modal('show'); 
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"academicsession/enable_disable_byacademicsessionid_json",
		  	data:({
				  'branchid':branchid,
				  'academicsessionid':academicsessionid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+ academicsessionid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+academicsessionid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ academicsessionid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+academicsessionid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}*/
function enable_disable_academicsession_byacademicsessionid(branchid, academicsessionid){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"academicsession/get_academicsessionclass_by_json",
		  	data:({
				  'branchid':branchid,
				  'academicsessionid':academicsessionid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data.flag){
					  $('#enableclassforacademicsession').modal('show');
					  $('#enableanddisableclassdetail').html(data.academicsessiondetail); 
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}




function enable_disable_academicsessionclass_by(classsacademicsessionid, branchid, classid, academicsessionid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"academicsession/enable_disable_academicsessionclass_by_json",
		  	data:({
				  'classsacademicsessionid':classsacademicsessionid,
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data.flag==0){	
				       $('#enableclasses'+academicsessionid).html(data.enableclasses);
					   
					   if(data.systemstatus == 'Enable'){
						 $('#systemstatus'+ academicsessionid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+branchid+','+academicsessionid+')"><span class="clip-checkmark"></span></a>');	 
					    }else{
					      $('#systemstatus'+ academicsessionid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+branchid+','+academicsessionid+')"><span class="clip-close-3"></span></a>');
					     } 
					   
					   
				    if(status == 'Enable'){
						  $('#systemstatus'+ classsacademicsessionid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsessionclass_by('+classsacademicsessionid+','+branchid+','+classid+','+academicsessionid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+ classsacademicsessionid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsessionclass_by('+classsacademicsessionid+','+branchid+','+classid+','+academicsessionid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox2').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been successfully changed to '+status+'</div>');
				  }else if(data.flag==1){
				     $('#alertbox2').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been changed to '+status+' Try Again !</div>');
				      }else if(data.flag==2){
						  $('#academicsessionalert').modal('show'); 
					  }else if(data.flag==3){
						 $('#academicsessionrecentlystatusalert').modal('show');     
					  }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}
function enable_disable_recentlystatus_academicsessionclass_by(classsacademicsessionid, branchid, classid, academicsessionid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"academicsession/enable_disable_recentlystatus_academicsessionclass_by_json",
		  	data:({
				  'classsacademicsessionid':classsacademicsessionid,
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data.flag==0){	
				 
				     $('#recentlydisableclasses'+academicsessionid).html(data.recentlydisableclasses);
					   
					   if(data.systemstatus == 'Enable'){
						 $('#systemstatus'+ academicsessionid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+branchid+','+academicsessionid+')"><span class="clip-checkmark"></span></a>');	 
					    }else{
					      $('#systemstatus'+ academicsessionid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_academicsession_byacademicsessionid('+branchid+','+academicsessionid+')"><span class="clip-close-3"></span></a>');
					     } 
				 
				 
				    if(status == 'Enable'){
						  $('#recentlystatus'+ classsacademicsessionid).html('<a data-original-title="Recenty Status Enable"  data-placement="top" class="btn btn-xs btn-info tooltips" href="javascript:void(0)" onclick="enable_disable_recentlystatus_academicsessionclass_by('+classsacademicsessionid+','+branchid+','+classid+','+academicsessionid+',\'Disable\')"><span class="glyphicon glyphicon-ok"></span></a>');	 
					 }else{
						  $('#recentlystatus'+ classsacademicsessionid).html('<a  data-original-title="Recently Status Disable" data-placement="top" class="btn btn-xs btn-info tooltips" href="javascript:void(0)" onclick="enable_disable_recentlystatus_academicsessionclass_by('+classsacademicsessionid+','+branchid+','+classid+','+academicsessionid+',\'Enable\')"><span class="glyphicon glyphicon-remove"></span></a>');
					 } 
					 $('#alertbox2').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Recently Status has been successfully changed to '+status+'</div>');
				  }else if(data.flag==1){
				     $('#alertbox2').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Recently Status has not been changed to '+status+' Try Again !</div>');
				      }else if(data.flag==2){
						  $('#academicsessionalertrecentlystatus').modal('show'); 
					  }else if(data.flag==3){
						    $('#academicsessionrecentlystatusalert').modal('show');   
					  }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}
///////////////////// END ACADEMIC SESSION /////////////////////



////////////////////////////////// CLASS FEE ////////////////////////
function addclassfee_classes_for_class_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"classfee/classes_for_class_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
	 }	
}
////////////////////////STUDENT ATTENDANCE /////////////



function check_attendanceradiobox(status, option){
	$( "#"+status).prop( "checked", true );
	var d=Number(status);
	if(option=='present'){
		$('#id'+(d+1)).editable().hide();
		$('#id'+(d+1)).editable('setValue','');
		$('#leavereason'+(d+1)).val('');
	}else if(option=='onleave'){
		$('#id'+d).editable().show();
		//var val=$('#id'+d).editable('getValue',true);
	}else if(option=='absent'){
		$('#id'+(d-1)).editable().hide();
		$('#id'+(d-1)).editable('setValue','');
		$('#leavereason'+(d-1)).val('');
		
	}
}
 $('.onleavereason').on('save', function(e, params) {
	$('#leavereason'+$(this).data('id')).val(params.newValue);
	// propName = $(this).data('id');
  });
  
function updatecheck_attendanceradiobox(status, option){
	$( "#"+status).prop( "checked", true );
	var d=Number(status);
	if(option=='present'){
		$('#id'+(d+1)).editable().hide();
		//$('#id'+(d+1)).editable('setValue','');
		$('#leavereason'+(d+1)).val('');
	}else if(option=='onleave'){
		$('#id'+d).editable().show();
		//var val=$('#id'+d).editable('getValue',true);
	}else if(option=='absent'){
		$('#id'+(d-1)).editable().hide();
		//$('#id'+(d-1)).editable('setValue','');
		//$('#leavereason'+(d-1)).val('');
		
	}
}
 $('.updateonleavereason').on('save', function(e, params) {
   // alert('Saved value: ' + params.newValue);
	$('#leavereason'+$(this).data('id')).val(params.newValue);
	//alert(params.newValue);
	// propName = $(this).data('id');
  });
    
function load_academicsession_recentlyenable_for_attendance_bybranchid_classid(){
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/academicsession_recentlyenable_for_attendance_by_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	       });	
	 }else{
		 
		 $('#academicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
}  
  
  
/*function addclass_classes_for_attendance_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"branch/classes_for_attendance_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $("#registrationno").select2("val","");
			        $('#classid').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#registrationno").select2("val","");
		  $('#classid').html('<option value="">--- SELECT ---</option>');
	 }	
}*/
function academicsession_regno_of_student_for_viewattendance_bybranchid_byclassid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/get_academicsession_regno_for_student_bybranchid_classid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){
			           $("#registrationno").select2("val","");
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
			           $('#registrationno').html(data.registrationno);
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#registrationno").select2("val","");
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
}
function all_regisrationnno_for_attendanceview_bybranchid_byjson(){
	 branchid=$('#branchid').val();
	 if(branchid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/registrationno_for_attendaceview_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $("#registrationno").select2("val","");
			           $('#registrationno').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#registrationno").select2("val","");
	 }	
	
	
}
function academicsession_regno_of_student_for_manageattendance_bybranchid_byclassid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"branch/get_academicsession_regno_for_student_bybranchid_classid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){
			           $("#registrationno").select2("val","");
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
			           $('#registrationno').html(data.registrationno);
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#registrationno").select2("val","");
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
}

function load_search_regisrtaionno_for_attendance_bybranchid_byuserid(){
	var branchid=$('#branchid').val();
	var classid=$('#classid').val();
	var academicsessionid=$('#academicsessionid').val(); 
	var sectionid=$('#sectionid').val();
	
		$.ajax({
			 type:'POST',
			 url:base_path+"branch/search_get_registrationno_for_attendance_by",
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'sectionid':sectionid
				   
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#registrationno").select2("val","");
					$('#registrationno').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });		
	
}





//////////////////////// END ///////////

///////////////////// PARENT NOTIFICATION ////////////////////////
function parentnotification_by(branchid, classid, studentid, st_fullname, st_registrationno, st_avator, pa_parentaccountno, pa_fathername, pa_email, pa_fathercontactno){
	 
	   
	  $('#no_subject111').val('');
	  $('#no_message111').val('');	
	  $('#parentnotification').modal('show'); 
	  $('#nst_avator').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
	  $('#nst_avator').attr('title', st_fullname);
	  $('#nst_avator').attr('alt', st_fullname);
	  $('#nst_avatorlarge').attr('href', base_path+'assets/admin/images/student_avator/'+st_avator);
	  $('#nst_avatorlarge').attr('title', 'Reg-No : '+st_registrationno);
	  $('#recipient111').val(pa_fathername);
	  $('#nbranchid').val(branchid);
	  $('#nclassid').val(classid);
	  $('#nstudentid').val(studentid);
	  $('#nst_fullname').val(st_fullname);
	  $('#nst_registrationno').val(st_registrationno);
	  $('#nst_avator').val(st_avator);
	  $('#npa_parentaccountno').val(pa_parentaccountno);
	  $('#npa_fathername').val(pa_fathername);
	  $('#npa_email').val(pa_email);
	  $('#npa_fathercontactno').val(pa_fathercontactno);
	   
	 
}
function sendnotification_toparent(){
	  var branchid=$('#nbranchid').val();
	  var classid =$('#nclassid').val();
	  var studentid= $('#nstudentid').val();
	  var st_fullname=$('#nst_fullname').val();
	  var st_registrationno= $('#nst_registrationno').val();
	  var st_avator=$('#nst_avator').val();
	  var pa_parentaccountno= $('#npa_parentaccountno').val();
	  var pa_fathername=$('#npa_fathername').val();
	  var pa_email=$('#npa_email').val();
	  var pa_fathercontactno =$('#npa_fathercontactno').val();
	  var no_subject=$('#no_subject111').val();
	  var no_message=$('#no_message111').val();
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/send_notification_toparentby",
		  	data:({
				   'branchid':branchid,
	               'classid':classid,
				   'studentid':studentid,
				   'st_fullname':st_fullname,
				   'st_registrationno':st_registrationno,
				   'st_avator':st_avator,
				   'pa_parentaccountno':pa_parentaccountno,
				   'pa_fathername':pa_fathername,
				   'pa_email':pa_email,
				   'pa_fathercontactno':pa_fathercontactno,
				   'no_subject':no_subject,
				   'no_message':no_message
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			            if(data){
			             $('#parentnotification').modal('hide'); 
						 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has been Successfully sent to '+pa_fathername+'</div>');	
						}else{
						 $('#alertbox1').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has not been sent to '+pa_fathername+' Try Again !</div>');
						}
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
}
function send_bulk_sms_to_parent(){
	   var bulksmslist=new Array(); 
              $( ".studentid").each(function( index , value ) {
				    if($(this).prop('checked')){
	                  	 bulksmslist[index]=$(this).val();	 
	                   }  
                });
	var bulkmessage=$('#bulkmessage').val();			
	if(bulksmslist.length>0 && bulkmessage !==''){			 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"student/send_bulk_sms_to_parent_by",
		  	data:({
				  'bulksmslist':bulksmslist,
				  'bulkmessage':bulkmessage
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			     $('#alertmsg').html(''); 
			     for (var i=0; i< data.length; i++){
					 if(data[i][0]){
					      $('#studentid'+data[i][1]).css('color','rgb(153,255,0)');
				          }else{
					       $('#studentid'+data[i][1]).css('color','rgb(255,102,0)');
				          }
					
				      }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }else{
	   if(bulksmslist.length < 1){
	     $('#alertmsg').html('Please checked any checkbox to proceed');  
	   }else if(bulkmessage ==''){
		 $('#alertmsg').html('Please write message to proceed');   
	   }
   }
}

//////////////////////// END ///////////////////////////////


////////////////////////// TEACHER ////////////////////////////
function dynamically_loadnotification(){
  setTimeout(function() {
       $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"home/dynamically_loadnotification_by",
		  	data:({
				   
				 }),
			beforeSend:function() {
				//overlay_ajax();
                  },		 		 
		  success:function(data){
					$('#displaynotification').html(data.countnotification);
					$('#notidationyouhave').html(' You have '+data.countnotification+' notifications');
					$('#displaynotificationdetail').html(data.result);
					$('#countnotification').val(data.countnotification); 
					dynamically_loadnotification();    
			   },       
		   error:function(){
                             // alert('ajax call failed...');
							 dynamically_loadnotification();   
                   }, 
		   complete: function(){ 
		       //  $.unblockUI();
                }	   		  	   
	});
	           
    }, 40000);

}

////////////// NOTIFICATION TO PARENT FROM HEADER /////////////
function schoolnotificationreplyform_byheader(notificationid, branchid, classid, studentid, st_fullname, st_registrationno, st_avator, pa_parentaccountno, pa_fathername, pa_email, no_subject, no_message, no_postdate, recepient){
	  $('#no_subject').val('');
	  $('#no_message').val('');	
	  yes_to_readstatus_bynotificationid(notificationid);
	  $('#schoolnotificationreplyform').modal('show'); 
	  $('#recipient').val(pa_fathername);
	  $('#nbranchid').val(branchid);
	  $('#nclassid').val(classid);
	  $('#nstudentid').val(studentid);
	  $('#nst_fullname').val(st_fullname);
	  $('nst_registrationno').val(st_registrationno);
	  $('#nst_avator').val(st_avator);
	  $('#npa_parentaccountno').val(pa_parentaccountno);
	  $('#npa_fathername').val(pa_fathername);
	  $('#npa_email').val(pa_email);
	  $('#subject').html(no_subject);
	  $('#message').html(no_message);
	  $('#time').html(no_postdate);	
}
function yes_to_readstatus_bynotificationid(notificationid){
		  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"home/add_yes_to_readstatus_by",
		  	data:({
				   'notificationid':notificationid
				 }),
			beforeSend:function() {
				//overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data){
					countnotification=Number($('#countnotification').val())-1;
					$('#displaynotification').html(countnotification);
					$('#notidationyouhave').html(' You have '+countnotification+' notifications');
					$('#notificationid'+notificationid).remove();
					$('#countnotification').val(countnotification);
				    }
			           
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		        // $.unblockUI();
                }	   		  	   
	});
	
}
function validate_cnicno_for_addteacher_by(){
      var te_cnic=$('#te_cnic').val();	 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/varify_teachercnicno_for_addingteacher_json",
		  	data:({
				  'te_cnic':te_cnic
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			              if(data.flag){
							$('#fakecnicstatus').val(true);  
							 var validator = $( "#form" ).validate();
                                  validator.element("#te_cnic");
						     $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;This is valid CNIC # </div>'); 
						  }else{
							  $('#fakecnicstatus').val(false);  
							  var validator = $( "#form" ).validate();
                                  validator.element( "#te_cnic");
							 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Teacher CNIC # is already existed.</div>');   
						  }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
}
function sendnotification_toparentbyheader(){
	  var branchid=$('#nbranchid').val();
	  var classid =$('#nclassid').val();
	  var studentid= $('#nstudentid').val();
	  var st_fullname=$('#nst_fullname').val();
	  var st_registrationno= $('nst_registrationno').val();
	  var st_avator=$('#nst_avator').val();
	  var pa_parentaccountno= $('#npa_parentaccountno').val();
	  var pa_fathername=$('#npa_fathername').val();
	  var pa_email=$('#npa_email').val();
	 
	  var no_subject=$('#no_subject').val();
	  var no_message=$('#no_message').val();
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"home/send_notification_toschoolby",
		  	data:({
				   'branchid':branchid,
	               'classid':classid,
				   'studentid':studentid,
				   'st_fullname':st_fullname,
				   'st_registrationno':st_registrationno,
				   'st_avator':st_avator,
				   'pa_parentaccountno':pa_parentaccountno,
				   'pa_fathername':pa_fathername,
				   'pa_email':pa_email,
				   'no_subject':no_subject,
				   'no_message':no_message
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			            if(data){
			             $('#schoolnotificationreplyform').modal('hide'); 
						 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has been Successfully sent</div>');
						}else{
						 $('#alertbox1').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has not been sent Try Again !</div>');
						}
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
}

//////////////////////// START  ALLOWNCE & SECURITY ///////////////////
function delete_allowncesecurity_byallowncesecurityid(allowncesecurityid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/delete_allowncesecurity_byallowncesecurityid_json",
		  	data:({
				  'allowncesecurityid':allowncesecurityid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#allowncesecurityid'+allowncesecurityid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Allownce & Security record has been successfully deleted.</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Allownce & Security record has not been deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_allowncesecurity_byallowncesecurityid(allowncesecurityid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"teacher/enable_disable_byallowncesecurityid_json",
		  	data:({
				  'allowncesecurityid':allowncesecurityid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+allowncesecurityid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_allowncesecurity_byallowncesecurityid('+allowncesecurityid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+allowncesecurityid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_allowncesecurity_byallowncesecurityid('+allowncesecurityid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System status has been successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System status has not been changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
		
	
	
}
//////////////////////// END ALLOWNCE & SECURITY /////////////////////


//////////////// STUDENT MONTHLY FEE //////////////
function load_studentdetail_for_studentmonthlyfee_byids(){
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	  $('#sectionid').html('');
	 if(branchid!='' && classid!='' && voac_priodicdate!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/studentdetail_for_studentmonthlyfee_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'voac_priodicdate':voac_priodicdate
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			if(data.flag){  
			  // get_recentlyenable_academicsesison_classfeeheads_by(branchid,classid);
			    $("#academicsessionid").html(data.academicsessionid);
				$('#sectionid1').html(data.sections);
			    $('#studentdetailforcreatingvoucher').html(data.students);
				 $("#classfeeheadsforstudentmonthlyfee").html(data.classfeeheads);
			    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:''});
			  }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#studentdetailforcreatingvoucher').html('');
		  $("#classfeeheadsforstudentmonthlyfee").html('');
	 }						
}

function get_studentdetail_for_createvoucher_by(){   
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  academicsessionid=$('#academicsessionid').val();
	  sectionid=$('#sectionid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	 if(branchid!='' && classid!='' && voac_priodicdate!='' && academicsessionid !='' && sectionid !=''){
	 $.ajax({
		    type: "POST",
			url: base_path+"studentmonthlyfee/studentdetail_for_studentmonthlyfee_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'sectionid':sectionid,
				  'voac_priodicdate':voac_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   $('#studentdetailforcreatingvoucher').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	}else{
	 $('#studentdetailforcreatingvoucher').html('');	
	}
	
}






/*function get_recentlyenable_academicsesison_classfeeheads_by(branchid,classid){   
	 $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/get_recentlyenable_academicsesison_classfeeheads_by_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){  
					// $("#academicsessionid").html(data.academicsessionid);
					 $("#classfeeheadsforstudentmonthlyfee").html(data.classfeeheads);
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}*/




function load_recetlyenable_academicsession_invoiceno_for_managestudentmonthlyfeeinvoice_byids(){   
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  stfe_priodicdate=$('#stfe_priodicdate').val();
	  $('#sectionid').html(''); 
	 if(branchid!='' && classid!='' && stfe_priodicdate!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/get_recentlyenable_academicsesison_invoicenoes_studentmonthlyfeeinvoices_by_json",
		  	data:({
				   'branchid':branchid,
				  'classid':classid,
				  'stfe_priodicdate':stfe_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){  
					 $("#academicsessionid").html(data.academicsessionid);
					 $('#sectionid1').html(data.sections);
					 $("#stfe_invoiceno1").select2("val","");
					 $("#stfe_invoiceno1").html(data.invoicenoes);
					 $("#stfe_invoiceno1").select2();
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
   }else{
	   $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
	   $('#stfe_invoiceno1').html('<option value="">--- SELECT ---</option>');
	   $("#stfe_invoiceno1").select2("val","");    
   }
	
	
}

function get_invoices_for_manageinvoices_by(){
	 branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  academicsessionid=$('#academicsessionid').val();
	  sectionid=$('#sectionid').val();
	  stfe_priodicdate=$('#stfe_priodicdate').val();
	 if(branchid!='' && classid!='' && stfe_priodicdate!='' && academicsessionid !='' && sectionid !=''){
	 $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/invoices_for_manageinvoices_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'sectionid':sectionid,
				  'stfe_priodicdate':stfe_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data.flag){
			        $('#stfe_invoiceno1').html(data.invoicenoes);
				}
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	}else{
	  $('#stfe_invoiceno1').html('<option value="">--- SELECT ---</option>');
	   $("#stfe_invoiceno1").select2("val","");
	}
	
	
}






function load_recetlyenable_academicsession_voucherno_for_managestudentmonthlyfeevoucher_byids(){   
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	  $('#sectionid').html('');
	 if(branchid!='' && classid!='' && voac_priodicdate!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/get_recentlyenable_academicsesison_vouchernoes_studentmonthlyfeevouchers_by_json",
		  	data:({
				   'branchid':branchid,
				  'classid':classid,
				  'voac_priodicdate':voac_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){  
					 $("#academicsessionid").html(data.academicsessionid);
					 $('#sectionid1').html(data.sections);
					 $("#voac_voucherno").select2("val","");
					 $("#voac_voucherno").html(data.vouchernoes);
					 $("#voac_voucherno").select2();
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
   }else{
	   $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
	   $('#voac_voucherno').html('<option value="">--- SELECT ---</option>');
	   $("#voac_voucherno").select2("val","");    
   }
	
	
}


function get_vouchers_for_managevouchers_by(){   
	  branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  academicsessionid=$('#academicsessionid').val();
	  sectionid=$('#sectionid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	 if(branchid!='' && classid!='' && voac_priodicdate!='' && academicsessionid !='' && sectionid !=''){
	 $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/vouchers_for_managevouchers_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'sectionid':sectionid,
				  'voac_priodicdate':voac_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data.flag){
			        $('#voac_voucherno').html(data.vouchernoes);
				}
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	}else{
	  $('#voac_voucherno').html('<option value="">--- SELECT ---</option>');
	   $("#voac_voucherno").select2("val","");
	}
	
}


function load_recetlyenable_academicsession_voucherno_for_addstudentmonthlyfeeinvoice_byids(){ 
      branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	  $('#sectionid').html('');
	 if(branchid!='' && classid!='' && voac_priodicdate!=''){		 
	 $.ajax({
			 type:'POST',
			 dataType:'json',
			 url:base_path+"studentmonthlyfee/get_recentlyenable_academicsesison_vouchernoes_studentmonthlyfeeinvoices_by_json",
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'voac_priodicdate':voac_priodicdate
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
		             $("#academicsessionid").html(data.academicsessionid);
					 $('#sectionid1').html(data.sections);
					 $("#voac_voucherno").select2("val","");
					 $("#voac_voucherno").html(data.vouchernoes);
					 $("#voac_voucherno").select2();
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });
	   }else{
	   $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
	   $('#voac_voucherno').html('<option value="">--- SELECT ---</option>');
	   $("#voac_voucherno").select2("val","");    
   }
}

function get_vouchers_for_addinvoices_by(){
	 branchid=$('#branchid').val();
	  classid=$('#classid').val();
	  academicsessionid=$('#academicsessionid').val();
	  sectionid=$('#sectionid').val();
	  voac_priodicdate=$('#voac_priodicdate').val();
	 if(branchid!='' && classid!='' && voac_priodicdate!='' && academicsessionid !='' && sectionid !=''){
	 $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"studentmonthlyfee/vouchers_for_addinvoices_byids_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'sectionid':sectionid,
				  'voac_priodicdate':voac_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data.flag){
			        $('#voac_voucherno').html(data.vouchernoes);
				}
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	}else{
	  $('#voac_voucherno').html('<option value="">--- SELECT ---</option>');
	   $("#voac_voucherno").select2("val","");
	}
	
	
}
////////////////////////// END /////////////////////



///////////////// REPORT ///////////////////////
function academicsession_regno_of_student_for_yetnotcreatedmonthlyfeevouchers_bybranchid_byclassid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $('#sectionid').html('');
	  voac_priodicdate=$('#voac_priodicdate').val();
	 if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"report/get_academicsession_regno_for_student_bybranchid_classid_json",
		  	data:({
				  'branchid':branchid,
				  'voac_priodicdate':voac_priodicdate,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){
			           $("#registrationno").select2("val","");
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
			           $('#registrationno').html(data.registrationno);
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#registrationno").select2("val","");
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');
	 }	
}
function get_student_registrationno_voucher_created_or_not_bysection(){
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val(); 
	 var academicsessionid=$('#academicsessionid').val(); 
	 var sectionid=$('#sectionid').val();
		$.ajax({
			 type:'POST',
			 dataType:'json',
			 url:base_path+"report/get_registrationno_vouchers_created_or_not_bysection",
			
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'sectionid':sectionid
				   
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
					          if(data.flag){
		                  $('#registrationno').select2("val","");
					      $('#registrationno').html(data.registrationno);
							  }
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
	
	
}
function load_dates_and_datesheetdetail_for_viewbyexam_bybranchid_examinationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"report/examination_dates_for_viewdatesheetbyexam_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			          $('#classid').html(data.classes)
					 $('#datesheetdetailtable').html(data.datesheetdetail);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		    $('#classid').html('<option value="">--- SELECT ---</option>');
		   $('#datesheetdetailtable').html('');
	 }			
}

function load_datesheetdetail_for_viewbyclass_datesheet_byids(){
	  branchid=$('#branchid').val();
	  examinationid=$('#examinationid').val();
	  classid=$('#classid').val();
	 if(branchid!='' && examinationid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"report/datesheetdetail_for_viewbyclass_datesheet_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#datesheetdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#datesheetdetailtable').html('');
		  load_dates_and_datesheetdetail_for_viewbyexam_bybranchid_examinationid();
	 }						
}

function load_examresultdetail_for_viewexamresult_byclass_byids(){
	  branchid=$('#branchid').val();
	  examinationid=$('#examinationid').val();
	  classid=$('#classid').val();
	  $('#sectionid').html('');
	 if(branchid!='' && examinationid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"report/examresultdetail_for_viewexamresult_by_class_byids_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
				 $('#sectionid1').html(data.sections);
			     $('#studentid').html(data.studentid);
			     $('#academicsessionid').html(data.academicsessionid);
			  // $('#viewexamresultdetailtable').html(data.examresultdetail);
			       }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		    $('#studentid').html('<option value="">--- SELECT ---</option>');
		    $('#academicsessionid').html('<option value="">--- SELECT ---</option>');
		  // $('#examresultdetailtable').html('');
	 }						
}
function get_student_registrationno_bysection(){
	 var branchid=$('#branchid').val(); 
	 var examinationid=$('#examinationid').val(); 
	 var classid=$('#classid').val(); 
	 var academicsessionid=$('#academicsessionid').val(); 
	 var sectionid=$('#sectionid').val();
		$.ajax({
			 type:'POST',
			 dataType:'json',
			 url:base_path+"report/viewexamresult_get_registrationno_bysection",
			
			 data:({
				   'branchid':branchid,
				   'examinationid':examinationid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'sectionid':sectionid
				   
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
					          if(data.flag){
		                  $("#studentid").select2("val","");
					      $('#studentid').html(data.studentid);  
							  }
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
    }

function load_search_selections_for_receivables_btw_dates_bybranchid_byuserid(){
 var branchid=$('#branchid').val();
 var classid=$('#classid').val();
 var fromstfe_priodicdate = $('#fromstfe_priodicdate').val();
 var tostfe_priodicdate = $('#tostfe_priodicdate').val();
	 $('#sectionid').html('');
	 if(branchid !='' && classid !='' && fromstfe_priodicdate!='' && tostfe_priodicdate!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"report/search_sections_for_student_bybranchid_userid_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'fromstfe_priodicdate':fromstfe_priodicdate,
				  'tostfe_priodicdate':tostfe_priodicdate
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
					   get_registrationno_for_receivable_btw_dates_by();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#sectionid1').html('');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
		  get_registrationno_for_receivable_btw_dates_by();
	 }	
}
function get_registrationno_for_receivable_btw_dates_by(){
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val(); 
	 var academicsessionid=$('#academicsessionid').val(); 
	 var fromstfe_priodicdate = $('#fromstfe_priodicdate').val();
     var tostfe_priodicdate = $('#tostfe_priodicdate').val();
	 var sectionidvar=$('#sectionid').attr('name');
	 var sectionid=$('#sectionid').val();
	 if (typeof(sectionidvar) == "undefined") {
		
            sectionid='';
        } 	
		
		$.ajax({
			 url:base_path+"report/registrationno_for_receivable_btw_dates__byclass_ajax",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'sectionid':sectionid,
				   'fromstfe_priodicdate':fromstfe_priodicdate,
				   'tostfe_priodicdate':tostfe_priodicdate
				   
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#registrationno").select2("val","");
					$('#registrationno').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
    }



////////////////// END  REPORT///////////////////////







/////////////// STUDENT FEE ///////////////////////

function load_classes_for_studentfee_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"student/classes_for_student_bybranchid_userid_ajax",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
		   $("#registrationno").select2("val","");
	 }	
}
function load_search_regisrtaionno_for_studentfee_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $("#registrationno").select2("val","");
	  if(branchid!='' && classid!=''){
	     get_registrationno_for_search();
	  }
}
function get_registrationno_for_search(){
	 var stfe_priodicdate=$('#stfe_priodicdate1').val();
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val();
		$.ajax({
			 url:base_path+"studentfee/search_get_registrationno_bybranchdata",
			 type:'POST',
			 data:({
				   'stfe_priodicdate':stfe_priodicdate,
				   'branchid':branchid,
				   'classid':classid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#registrationno").select2("val","");
					$('#registrationno').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
    }
	
function display_detail_of_fee_head(branchid, classid, academicsessionid, studentid, feeheadid){
		$.ajax({
			 url:base_path+"studentmonthlyfee/get_discounted_classfee_for_studentmonthlyfee_by",
			 type:'POST',
			 dataType:'json',
			 data:({
				   'branchid':branchid,
				   'classid':classid,
				   'academicsessionid':academicsessionid,
				   'studentid':studentid,
				   'feeheadid':feeheadid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
					$('#feeheaddetail').modal('show');
					$('#acse_name1').html(data.acse_name);
					$('#fehe_head1').html(data.fehe_head);
					$('#st_name1').html(data.st_name);
					$('#br_name1').html(data.sc_name);
					$('#cl_name1').html(data.cl_name);
					$('#amount1').html(data.amount);
					$('#discount1').html(data.discount);
					$('#feeamount1').html(data.feeamount);
					
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
	
}
function display_account_remaining_fee_detail(pa_parentaccountno, pa_fathername, pa_fathercontactno, pa_email, branchid, pa_feecompletedate, stfe_priodicdate){
	 $.ajax({
			 url:base_path+"studentfee/get_account_remaining_fee_detail_by",
			 type:'POST',
			 dataType:'json',
			 data:({
				   'pa_parentaccountno':pa_parentaccountno,
				   'pa_fathername':pa_fathername,
				   'pa_fathercontactno':pa_fathercontactno,
				   'pa_email':pa_email,
				   'branchid':branchid,
				   'pa_feecompletedate':pa_feecompletedate,
				   'stfe_priodicdate':stfe_priodicdate,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
					$('#accountremainingfeedetail').modal('show');
					$('#accountremainingfee').html(data);
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
	
}
	
function load_search_regisrtaionnowithinvoiceno_for_studentfee_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $("#registrationno").select2("val","");
	 if(branchid!='' && classid!=''){
	 get_registrationnowithinvoiceno_for_search();
	 }
}
function get_registrationnowithinvoiceno_for_search(){
	 var stfe_priodicdate=$('#stfe_priodicdate1').val();
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val();
		$.ajax({
			 url:base_path+"studentfee/search_get_registrationnowithinvoiceno_bybranchdata",
			 type:'POST',
			 data:({
				   'stfe_priodicdate':stfe_priodicdate,
				   'branchid':branchid,
				   'classid':classid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#registrationno").select2("val","");
					$('#registrationno').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
    }	
////////// student fee status /////////
/*function load_search_accountno_for_studentfeestatus_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 $("#pa_parentaccountno1").select2("val","");
	  if(branchid!='' && classid!=''){
	     get_accountno_forstudentfeestatus_for_search();
	  }
}*/
/*function get_accountno_forstudentfeestatus_for_search(){
	 var branchid=$('#branchid').val(); 
	 var classid=$('#classid').val();
		$.ajax({
			 url:base_path+"studentmonthlyfee/search_get_accounto_forstudentfeestatus_bybranchdata",
			 type:'POST',
			 data:({
				   'branchid':branchid,
				   'classid':classid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $("#pa_parentaccountno1").select2("val","");
					$('#pa_parentaccountno1').html(result);  
			 },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });
		   	
    }	
*/

/*function get_classfee_by(studentid){
	 var branchid=$('#addbranchid').val();
	 var classid =$('#addclassid').val();
	 var feeheadid=$('#feeheadid'+studentid).val();
	 if(feeheadid!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"studentfee/get_discounted_classfee_for_studentfee_by",
		  	data:({
				   'branchid':branchid,
	               'classid':classid,
				   'studentid':studentid,
				   'feeheadid':feeheadid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){
			           $('#amount'+studentid).val(data.amount);
					   $('#feeamount'+studentid).val(data.feeamount);
					   $('#discount'+studentid).val(data.discount);
					   }else{
						   $('#amount'+studentid).val('0.00');
	                       $('#feeamount'+studentid).val('0.00');
	                       $('#discount'+studentid).val('0.00')    
					   }
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	   });	
 }else{
	  $('#amount'+studentid).val('0.00');
	  $('#feeamount'+studentid).val('0.00');
	  $('#discount'+studentid).val('0.00') 
 }
	
}*/
function addstudentfee_calculate_total_and_discount(feeheadid){  
			var discount= Number($('#discount'+feeheadid).val());
			var payablefee= Number($('#payablefee'+feeheadid).val());
			  $('#payablefeeinput'+feeheadid).val(Number(payablefee - discount).toFixed(2));
			 var sum=0;
              $( ".actualfee" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalactualfee').val(Number(sum).toFixed(2));  
			 var sum=0;
              $( ".totaldiscount" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totaldiscount').val(Number(sum).toFixed(2));  
				sum=0;
				 $( ".totalpayable" ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				
				
				 var alreadypaidfeevar=$('#alreadypaidfee').attr('name');
	             var alreadypaidfee=Number($('#alreadypaidfee').val());
	           if (typeof(alreadypaidfeevar) == "undefined") {
                    alreadypaidfee='';
                  } 	
				//alert(alreadypaidfee);
				
				
				
				$('#totalpayablefee').val(Number(sum).toFixed(2)); 
				var totalpayablefee = Number($('#totalpayablefee').val()); 
				var totalpaidfee = Number($('#totalpaidfee').val());
				var total=totalpaidfee + alreadypaidfee;
				//alert(total)
				$('#totalremainingfee').val(Number(totalpayablefee - total).toFixed(2));
				var totalpayablefee = Number($('#totalpayablefee').val()); 
				var totalpaidfee = Number($('#totalpaidfee').val()).toFixed(2);
				
				if(totalpayablefee==total){
					$('#feeremainingstatus').html('<option value="No">--- No ---</option>');
				}else if(totalpayablefee > totalpaidfee){
					$('#feeremainingstatus').html('<option value="Yes">--- Yes ---</option>');
				}else{
					$('#feeremainingstatus').html('<option value="">--- SELECT ---</option>');
				  }
				
				
}
function calculate_total_for_addstudentfee(feeheadid){
	   var addintotal = $('#addintotal'+feeheadid).val();
	if(addintotal=='Yes'){
	     $('#discount'+feeheadid).addClass('totaldiscount');
		 $('#payablefeeinput'+feeheadid).addClass('totalpayable');
		 $('#actualfee'+feeheadid).addClass('actualfee');   
		 addstudentfee_calculate_total_and_discount(feeheadid);
	}else{
	     $('#discount'+feeheadid).removeClass('totaldiscount');
		 $('#payablefeeinput'+feeheadid).removeClass('totalpayable');
		 $('#actualfee'+feeheadid).removeClass('actualfee');
		 addstudentfee_calculate_total_and_discount(feeheadid);	
		 var totalpayablefee = $('#totalpayablefee').val();
		 if(totalpayablefee==0.00){
			$('#feeremainingstatus').html('<option value="">--- SELECT ---</option>');
		 } 	
	}
}


///new

function addstudentfee_calculate_total_and_discount1(feeheadid, num2){  
			var discount= Number($('#discount'+feeheadid).val());
			var payablefee= Number($('#payablefee'+feeheadid).val());
			  $('#payablefeeinput'+feeheadid).val(Number(payablefee - discount).toFixed(2));
			 var sum=0;
              $( ".actualfee"+num2 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totalactualfee'+num2).val(Number(sum).toFixed(2));  
			 var sum=0;
              $( ".totaldiscount"+num2 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				$('#totaldiscount'+num2).val(Number(sum).toFixed(2));  
				sum=0;
				 $( ".totalpayable"+num2 ).each(function( index , value ) {
			         sum=Number(sum) + Number($( this ).val());
                 });
				
				
				 var alreadypaidfeevar=$('#alreadypaidfee'+num2).attr('name');
	             var alreadypaidfee=Number($('#alreadypaidfee'+num2).val());
	           if (typeof(alreadypaidfeevar) == "undefined") {
                    alreadypaidfee='';
                  } 	
				//alert(alreadypaidfee);
				
				
				
				$('#totalpayablefee'+num2).val(Number(sum).toFixed(2)); 
				var totalpayablefee = Number($('#totalpayablefee'+num2).val()); 
				var totalpaidfee = Number($('#totalpaidfee'+num2).val());
				var total=totalpaidfee + alreadypaidfee;
				//alert(total)
				$('#totalremainingfee'+num2).val(Number(totalpayablefee - total).toFixed(2));
				var totalpayablefee = Number($('#totalpayablefee'+num2).val()); 
				var totalpaidfee = Number($('#totalpaidfee'+num2).val()).toFixed(2);
				
				if(totalpayablefee==total){
					$('#feeremainingstatus'+num2).html('<option value="No">--- No ---</option>');
				}else if(totalpayablefee > totalpaidfee){
					$('#feeremainingstatus'+num2).html('<option value="Yes">--- Yes ---</option>');
				}else{
					$('#feeremainingstatus'+num2).html('<option value="">--- SELECT ---</option>');
				  }
				
				
}
function calculate_total_for_addstudentfee1(feeheadid, num2){
	   var addintotal = $('#addintotal'+feeheadid).val();
	if(addintotal=='Yes'){
	     $('#discount'+feeheadid).addClass('totaldiscount'+num2);
		 $('#payablefeeinput'+feeheadid).addClass('totalpayable'+num2);
		 $('#actualfee'+feeheadid).addClass('actualfee'+num2);   
		 addstudentfee_calculate_total_and_discount1(feeheadid, num2);
	}else{
	     $('#discount'+feeheadid).removeClass('totaldiscount'+num2);
		 $('#payablefeeinput'+feeheadid).removeClass('totalpayable'+num2);
		 $('#actualfee'+feeheadid).removeClass('actualfee'+num2);
		 addstudentfee_calculate_total_and_discount1(feeheadid, num2);	
		 var totalpayablefee = $('#totalpayablefee'+num2).val();
		 if(totalpayablefee==0.00){
			$('#feeremainingstatus'+num2).html('<option value="">--- SELECT ---</option>');
		 } 	
	}
}
///end







////////////////// END  /////////////////////////

////////////////// EXAMINATION /////////////////////////
  function delete_examination_byexaminationid(examinationid){
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"examination/delete_examination_byexaminationid_json",
		  	data:({
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 $('#examinationid'+examinationid).remove();
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Subject record has been Successfully Deleted</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Subject record has nor been Deleted Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}
function enable_disable_examination_byexaminationid(examinationid, status){
    $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"examination/enable_disable_byexaminationid_json",
		  	data:({
				  'examinationid':examinationid,
				  'status':status
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data){
					 if(status == 'Enable'){
						  $('#systemstatus'+examinationid).html('<a data-original-title="System Status Enable"  data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_examination_byexaminationid('+examinationid+',\'Disable\')"><span class="clip-checkmark"></span></a>');	 
					 }else{
						  $('#systemstatus'+examinationid).html('<a  data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_examination_byexaminationid('+examinationid+',\'Enable\')"><span class="clip-close-3"></span></a>');
					 } 
					 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has been Successfully Changed to '+status+'</div>');
				 }else{
				     $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;System Status has not been Changed to '+status+' Try Again !</div>');
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});			
}

function load_examinations_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"examination/classes_for_examination_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#examinationid").html(data);
					 $("#dash_startdate").val('');
		             $("#dash_enddate").val('');
					// $('#examresultdetailtable').html('');
					// $('#datesheetdetailtable').html('');
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#examinationid").html('<option value="">---SELECT---</option>');
		  $("#dash_startdate").val('');
		  $("#dash_enddate").val('');
		  $("#classid").html('<option value="">---SELECT---</option>');
		//  $('#examresultdetailtable').html('');
		//  $('#datesheetdetailtable').html('');  
		  }			
}
function load_examination_dates_and_classes_byexaminationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"examination/examination_dates_and_classes_for_examination_byid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){  
					 $("#dash_startdate").val(data.ex_startdate);
		             $("#dash_enddate").val(data.ex_enddate);
					 $("#classid").html(data.classes);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#dash_startdate").val('');
		   $("#dash_enddate").val('');
		   $("#classid").html('<option value="">---SELECT---</option>');
		   //$('#datesheetdetailtable').html('');
		  // $('#examresultdetailtable').html('');
	 }			
}
function load_subjects_for_exmination_byid(){
     branchid=$('#branchid').val();
	 classid = $('#classid').val();
	 if(branchid!='' && examinationid!='' && classid !=''){
	  $.ajax({
		     type: "POST",
			 url: base_path+"examination/subjects_for_examination_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){  
					 $('#subjectlist').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $('#subjectlist').html('');
	 }			
    }
/////////////// END ///////////////////////



/////////////// RESULT ////////////////////
function load_examinations_for_result_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"examination/classes_for_examination_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#examinationid").html(data);
					 $('#examresultdetailtable').html('');
					 $("#academicsessionid").html('<option value="">---SELECT---</option>');
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#examinationid").html('<option value="">---SELECT---</option>');
		  $("#classid").html('<option value="">---SELECT---</option>');
		  $("#academicsessionid").html('<option value="">---SELECT---</option>');
		  $('#examresultdetailtable').html('');
		  }			
}
function load_examination_dates_and_classes_for_result_byexaminationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"examination/examination_dates_and_classes_for_examination_byid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){  
					 $("#classid").html(data.classes);
					 $('#examresultdetailtable').html('');
					 $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
					
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#classid").html('<option value="">---SELECT---</option>');
		   $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
		   $('#examresultdetailtable').html('');
	 }			
}
///// new //////////////
function load_examresultdetail_for_examresult_byids(){
	  branchid=$('#branchid').val();
	  examinationid=$('#examinationid').val();
	  classid=$('#classid').val();
	  $('#sectionid').html('');
	  academicsessionid=$('#academicsessionid').val();
	 if(branchid!='' && examinationid!='' && classid!=''){
	     $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"examination/academicsession_recentlyenable_sections_for_addexamresult_by_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			       if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	       });	
	
	
	
	
	
	 /* $.ajax({
		  	type: "POST",
			url: base_path+"examination/examresultdetail_for_examresult_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid,
				  'academicsessionid':academicsessionid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data.flag){
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				       }
			 // get_recentlyenable_academicsesison_by(branchid,classid);
			 // $('#examresultdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	*/
	 }else{
		 // $('#examresultdetailtable').html('');
		   $("#academicsessionid").html('<option value="">--- SELECT ---</option>');
	 }						
}

/////////// end new /////////////
function all_regisrationnno_for_viewexamresultbystudent_byjson(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 classid=$('#classid').val();
	  if(branchid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"examination/regisrationnno_for_examresultviewbystudent_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           $("#registrationno").select2("val","");
			           $('#academicsessionid').html(data.academicsessionid);
			           $('#studentid').html(data.studentid);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }
	    
	     });	
	  }else{
		  $("#studentid").html('<option value="">--- SELECT ---</option>');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');  
		  }
}
/*function load_examresultdetail_for_viewexamresultbystudent_byids(){
	  branchid=$('#branchid').val();
	  examinationid=$('#examinationid').val();
	  classid=$('#classid').val();
	  academicsessionid=$('#academicsessionid').val();
	  studentid=$('#studentid').val();
	 if(branchid!='' && examinationid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"examination/examresultdetail_for_viewexamresultbystudent_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid,
				  'academicsessionid':academicsessionid,
				  'studentid':studentid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#viewexamresultbystudentdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#viewexamresultbystudentdetailtable').html('');
	 }						
}*/
//////////////// END /////////////////

/////////////////// DATESHEET //////////////



function load_examinations_for_datesheet_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"datesheet/examinations_for_datesheet_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#examinationid").html(data);
					// $('#examresultdetailtable').html('');
					 $('#datesheetdetailtable').html('');
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#examinationid").html('<option value="">---SELECT---</option>');
		  $("#dash_startdate").val('');
		  $("#dash_enddate").val('');
		  $("#classid").html('<option value="">---SELECT---</option>');
		 // $('#examresultdetailtable').html('');
		  $('#datesheetdetailtable').html('');  
		  }			
}

function load_examination_dates_classes_byexaminationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"datesheet/examination_dates_classes_for_datesheet_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){  
					 $("#classid").html(data.classes);
					 $('#datesheetdetailtable').html('');
					// $('#examresultdetailtable').html('');
					/* if(classid !=''){
						load_examresultdetail_for_examresult_byids(); 
					 }*/
					
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#classid").html('<option value="">---SELECT---</option>');
		   $('#datesheetdetailtable').html('');
		   $('#academicsessionid').html('<option value="">--- SELECT ---</option>');  
		  // $('#examresultdetailtable').html('');
	 }			
}

/*function load_examination_dates_for_datesheet_byexaminationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 classid=$('#classid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"datesheet/examination_dates_for_datesheet_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){  
					 $("#dash_startdate").val(data.ex_startdate);
		             $("#dash_enddate").val(data.ex_enddate);
					 $('#datesheetdetailtable').html('');
					 if(classid !=''){
						load_datesheetdetail_for_datesheet_byids(); 
					 }
					
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#dash_startdate").val('');
		   $("#dash_enddate").val('');
		   $('#datesheetdetailtable').html('');
	 }			
}
*/




function load_classes_for_datesheet_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"datesheet/classes_for_datesheet_bybranchid_userid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			        $('#classid').html(data.class);
					 $("#subject11").select2("val","");
					$('#subject11').html(data.subject);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#classid').html('<option value="">--- SELECT ---</option>');
 
		  $("#subject11").select2("val","");
	 }	
}

/*function load_subject_for_datesheet_bybranchid_byuserid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 if(branchid!='' && classid!=''){
	  $.ajax({
			url: base_path+"datesheet/subjects_for_datesheet_bybranchid_userid_ajax",
		    type: "POST",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#subject11").select2("val","");
					 $('#subject11').html(data);
					 $("#subject11").select2();
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#subject11").select2("val","");
		  $("#subject11").select2();
	 }		
}*/

function load_datesheetdetail_for_datesheet_byids(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 examinationid=$('#examinationid').val();
	  $('#sectionid').html('');
	 if(branchid !='' && examinationid !='' && classid !=''){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"datesheet/datesheetdetail_for_datesheet_byids_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid,
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			     if(data.flag){
					   $("#dash_startdate").val(data.ex_startdate);
		               $("#dash_enddate").val(data.ex_enddate);
					   $('#sectionid1').html(data.sections);
					   $('#academicsessionid').html(data.academicsessionid);
				   }
			  
			 //  get_recentlyenable_academicsesison_by(branchid,classid);
			//  $('#datesheetdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#dash_startdate").val('');
		   $("#dash_enddate").val('');
		//  $('#datesheetdetailtable').html('');
		  $('#academicsessionid').html('<option value="">--- SELECT ---</option>');   
	 }						
}
function get_recentlyenable_academicsesison_by(branchid,classid){
	   
	 $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"datesheet/get_recentlyenable_academicsesison_by_json",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			           if(data.flag){  
					 $("#academicsessionid").html(data.academicsessionid);
					   }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	
	
}




function load_datesheetdetail_for_manage_datesheet_byids(){
	  branchid=$('#branchid').val();
	  examinationid=$('#examinationid').val();
	  classid=$('#classid').val();
	 if(branchid!='' && examinationid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"datesheet/datesheetdetail_for_manage_datesheet_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid,
				  'classid':classid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#datesheetdetailtable').html(data);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#datesheetdetailtable').html('');
	 }						
}

function load_viewdatesheets_bybranchid(){
	 branchid=$('#branchid').val();
	 if(branchid!=''){
	  $.ajax({
		    type: "POST",
			dataType:'json',
			url: base_path+"datesheet/viewdatesheets_for_datesheet_bybranchid_json",
		  	data:({
				  'branchid':branchid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#examinationid").html(data.examination);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $("#examinationid").html('<option value="">---SELECT---</option>');
		  $("#dash_startdate").val('');
		  $("#dash_enddate").val('');
		  }			
}

function load_dates_and_datesheetdetail_for_view_bybranchid_examinationid(){
	 branchid=$('#branchid').val();
	 examinationid=$('#examinationid').val();
	 if(branchid!='' && examinationid!=''){
	  $.ajax({
		     type: "POST",
			 dataType:'json',
			 url: base_path+"datesheet/examination_dates_for_viewdatesheet_bybranchid_json",
		  	data:({
				  'branchid':branchid,
				  'examinationid':examinationid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					 $("#dash_startdate").val(data.ex_startdate);
		             $("#dash_enddate").val(data.ex_enddate);
					 $('#datesheetdetailtable').html(data.datesheetdetail);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		   $("#dash_startdate").val('');
		   $("#dash_enddate").val('');
		   $('#datesheetdetailtable').html('');
	 }			
}


///////by exam







/////////////////// END /////////////////////////////

///////////// PARENT ACCOUNT UPDATION //////////////
/*function do_you_want_to_add_logindetail_or_change_password(){
	var addlogindetail=$('#addlogindetail').val();
	if(addlogindetail=='No'){
		$('#changepassword').css('display','block');
		$('#logindetail').css('display','none');
		$('#submitbtn').html('Change Password &ensp;<i class="fa fa-arrow-circle-right"></i>');
	}else if(addlogindetail=='Yes'){
		$('#submitbtn').html('Add Login Detail &ensp;<i class="fa fa-arrow-circle-right"></i>');
		$('#logindetail').css('display','block');
		$('#changepassword').css('display','none');
		var validator = $( "#form" ).validate();
            validator.form();
		
      }
}*/


/////////////////////////// END ////////////////


/*function get_subject_bybrachid_classid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 if(branchid!='' && classid!=''){
	  $.ajax({
			url: base_path+"datesheet/subjects_for_datesheet_bybranchid_userid_ajax",
		    type: "POST",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
					return data;
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  return '<option value="">--- SELECT ---</option>';
	 }		
	
	
}*/


/*function all_get_subject_bybrachid_classid(){
	 branchid=$('#branchid').val();
	 classid=$('#classid').val();
	 if(branchid!='' && classid!=''){
	  $.ajax({
			url: base_path+"datesheet/subjects_for_datesheet_bybranchid_ajax",
		    type: "POST",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			    alert(data);
					return data;
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  return '<option value="">--- SELECT ---</option>';
	 }		
	
	
}*/
/////////////////////////// END //////////////////////////////////

////////////////// DO PRINT OUT OF PURCHASE DETAIL INVOICE /////////////
function make_printout_of_registration(){
  $("#printoutdivregistration").printArea( );
}
/////////////////////// END  ////////////////////////////

function make_printout_of_studentdetail(){
  $("#studentdetailforprint").printArea( );
}
function make_printout_of_branchdetail(){
	 $("#branchdetailforprint").printArea( );
	}
function make_printout_of_attendance(){
	 $("#printoutattendancediv").printArea( );
}

function make_printout_of_datesheetbyexam(){
	 $("#printoutofdatesheetbyexamdiv").printArea( );
}

function make_printout_of_examresultbyclass(){
	$("#printoutofexamresultbyclassdiv").printArea( );
	
}
function make_printout_of_examresultbystudent(){
	$("#printoutofexamresultbystudentdiv").printArea( );
}
function make_printout_of_datesheetbyclass(){
	$("#printoutdivofdatesheetbyclass").printArea( );
}
function make_printout_of_teacherdetail(){
		$("#teacherdetail").printArea( );	
}
function make_printout_of_studentfee_voucher(){
	$("#printoutofstudentvoucherdiv").printArea( );	
}
function make_printout_of_all_voucherbyclass(){
   $("#printoutdivvoucherbyclass").printArea( );
   }
function make_printout_schooldetail(){
   $("#printoutschooldetaildiv").printArea( );
   }
function make_printout_of_teacherpayrollslip(){
   $("#printoutdivteacherpayrollslip").printArea( );	
}
////////////////// DO PRINT OUT OF PURCHASE DETAIL INVOICE /////////////
function make_printout(){
  $("#printoutdivparent").printArea( );
}
/////////////////////// END  ////////////////////////////


function make_printout_of_timetable(){
  $("#printoutdiv").printArea( );
}





///////////////////// PARENT PART IS STARTED //////////////////
///////////////////// PARENT NOTIFICATION ////////////////////////
function display_detail_of_student_parentpart(studentid){
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"parents/display_student_detail_bystudentid_json",
		  	data:({
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#studentdetail').modal('show');
			     $('#st_avator').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+data.st_avator);
				 $('#st_avator').attr('title', data.st_fullname);
				 $('#st_avator').attr('alt', data.st_fullname);
				// $('#st_avatorlarge').attr('href', base_path+'assets/admin/images/student_avator/'+data.st_avator);
				// $('#st_avatorlarge').attr('title', 'Reg-No : '+data.st_registrationno);
				 $('#br_name').html(data.sc_name);
				 $('#cl_name').html(data.cl_name);
				 $('#acse_name').html(data.acse_name);
				
				 if(data.se_name != ''){
					   $('#sectionid').css('display' , 'block');
					   $('#se_name').html(data.se_name);
				   }
				 $('#st_registrationno').html(data.st_registrationno);
				 $('#pa_parentaccountno').html(data.pa_parentaccountno);
				 $('#st_fullname').html(data.st_fullname); 
				 $('#st_gender').html(data.st_gender);
				 $('#st_religion').html(data.st_religion);
				 $('#st_birthdate').html(data.st_birthdate);
				 $('#st_registrationdate').html(data.st_registrationdate); 
				 $('#pa_fathername').html(data.pa_fathername); 
				 $('#pa_fathercontactno').html(data.pa_fathercontactno);
				 $('#pa_email').html(data.pa_email);
				 $('#pa_city').html(data.pa_city);
				 $('#pa_address').html(data.pa_address);
				
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
}

function parentnotificationreplyform_by(notificationid, branchid, classid, studentid, st_fullname, st_registrationno, st_avator, parentid, pa_fathername, pa_email, no_subject, no_message, no_postdate, recepient){
	  $('#no_subject').val('');
	  $('#no_message').val('');	
	  add_yes_to_readstatus_bynotificationid(notificationid);
	  $('#parentnotificationreplyform').modal('show'); 
	  $('#recipient').val(recepient);
	  $('#nbranchid').val(branchid);
	  $('#nclassid').val(classid);
	  $('#nstudentid').val(studentid);
	  $('#nst_fullname').val(st_fullname);
	  $('nst_registrationno').val(st_registrationno);
	  $('#nst_avator').val(st_avator);
	  $('#nparentid').val(parentid);
	  $('#npa_fathername').val(pa_fathername);
	  $('#npa_email').val(pa_email);
	  $('#subject').html(no_subject);
	  $('#message').html(no_message);
	  $('#time').html(no_postdate);	
}
function add_yes_to_readstatus_bynotificationid(notificationid){
		  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"parentdashboard/add_yes_to_readstatus_by",
		  	data:({
				   'notificationid':notificationid
				 }),
			beforeSend:function() {
				//overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data){
					countnotification=Number($('#countnotification').val())-1;
					$('#displaynotification').html(countnotification);
					$('#notidationyouhave').html(' You have '+countnotification+' notifications');
					$('#notificationid'+notificationid).remove();
					$('#countnotification').val(countnotification);
				    }
			           
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		        // $.unblockUI();
                }	   		  	   
	});
	
}
function sendnotification_toschool(){
	  var branchid=$('#nbranchid').val();
	  var classid =$('#nclassid').val();
	  var studentid= $('#nstudentid').val();
	  var st_fullname=$('#nst_fullname').val();
	  var st_registrationno= $('nst_registrationno').val();
	  var st_avator=$('#nst_avator').val();
	  var parentid= $('#nparentid').val();
	  var pa_fathername=$('#npa_fathername').val();
	  var pa_email=$('#npa_email').val();
	  var no_subject=$('#no_subject').val();
	  var no_message=$('#no_message').val();
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"parentdashboard/send_notification_toschoolby",
		  	data:({
				   'branchid':branchid,
	               'classid':classid,
				   'studentid':studentid,
				   'st_fullname':st_fullname,
				   'st_registrationno':st_registrationno,
				   'st_avator':st_avator,
				   'parentid':parentid,
				   'pa_fathername':pa_fathername,
				   'pa_email':pa_email,
				   'no_subject':no_subject,
				   'no_message':no_message
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			            if(data){
			             $('#parentnotificationreplyform').modal('hide'); 
						 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has been Successfully sent</div>');
						}else{
						 $('#alertbox1').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has not been sent Try Again !</div>');
						}
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
}

function display_studentfeedetail_of_student_parentpart(stfe_invoiceno, branchid, classid){
		$.ajax({
			 url:base_path+"parents/get_studentfeedetail_for_student_bybranchid_userid_ajax",
			 type:'POST',
			 data:({
				   'stfe_invoiceno':stfe_invoiceno,
				   'branchid':branchid,
				   'classid':classid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#studentfeedetail').modal('show');	
					$('#feedetail').html(result);   
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
}


function display_datesheetdetail_for_parent_datesheet_byids(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){
	 if(branchid!='' && studentid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"parents/datesheetdetail_for_datesheet_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			      $('#viewdatesheetdetail').modal('show');
			      $('#viewdatesheet').html(data);	
			      $('#st_avatoraa').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
				  $('#st_avatoraa').attr('title', st_fullname);
				  $('#st_avatoraa').attr('alt', st_fullname);
				  $('#fullname').html(st_fullname);
				  $('#registrationno').html(st_registrationno);
				  
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#viewdatesheet').html('');
	 }						
}




function display_detail_of_attendance_for_attendance_parentpart(){
	  var previous_date=$('#previous_date').val();
	  var current_date=$('#current_date').val();
	  var studentid=$('#studentid').val();
	$.ajax({
		     type:'POST',
			 url:base_path+"parents/attendancedetail_for_viewattendance_bystudentid_ajax",
			 data:({
				   'studentid':studentid,
				   'previous_date':previous_date,
				   'current_date':current_date,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
		         $('#viewattendancedetail').modal('show');	
				 $('#viewattendance').html(data); 
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
}
function display_detail_of_viewexamresult_parentpart(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){
	 if(branchid!='' && studentid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"parents/examresultdetail_for_viewexamresultbystudent_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'studentid':studentid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#examresultdetail').modal('show');	
			  $('#examresult').html(data); 
			 // $('#st_avator3').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
			 // $('#st_avator3').attr('title', st_fullname);
			 // $('#st_avator3').attr('alt', st_fullname);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#examresult').html(''); 
	 }						
}

function display_detail_of_timetable_parentpart(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){
	$.ajax({
		     type:'POST',
			 url:base_path+"parents/viewtimetable_bystudentid_classid_ajax",

			 data:({
				   'branchid':branchid,
				   'studentid':studentid,
				   'classid':classid
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
		          $('#viewtimetabledetail').modal('show');	
				  $('#viewtimetable').html(data); 
			     $('#st_avatora').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
				 $('#st_avatora').attr('title', st_fullname);
				 $('#st_avatora').attr('alt', st_fullname);
				  $('#fullname').html(st_fullname);
				  $('#registrationno').html(st_registrationno);
				
						  
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
}

//////////////////////// END ///////////////////////////////
/////////////////////// STUDENT SIDE START /////////////////
///////////////////// STUDENT NOTIFICATION ////////////////////////
function stu_display_detail_of_student_studentpart(studentid){/*
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"students/display_student_detail_bystudentid_json",
		  	data:({
				  'studentid':studentid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			   if(data.flag){
			    $('#studentdetail').modal('show');
			     $('#st_avator').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+data.st_avator);
				 $('#st_avator').attr('title', data.st_fullname);
				 $('#st_avator').attr('alt', data.st_fullname);
				// $('#st_avatorlarge').attr('href', base_path+'assets/admin/images/student_avator/'+data.st_avator);
				// $('#st_avatorlarge').attr('title', 'Reg-No : '+data.st_registrationno);
				 $('#br_name').html(data.sc_name);
				 $('#cl_name').html(data.cl_name);
				 $('#acse_name').html(data.acse_name);
				
				 if(data.se_name != ''){
					   $('#sectionid').css('display' , 'block');
					   $('#se_name').html(data.se_name);
				   }
				 $('#st_registrationno').html(data.st_registrationno);
				 $('#pa_parentaccountno').html(data.pa_parentaccountno);
				 $('#st_fullname').html(data.st_fullname); 
				 $('#st_gender').html(data.st_gender);
				 $('#st_religion').html(data.st_religion);
				 $('#st_birthdate').html(data.st_birthdate);
				 $('#st_registrationdate').html(data.st_registrationdate); 
				 $('#pa_fathername').html(data.pa_fathername); 
				 $('#pa_fathercontactno').html(data.pa_fathercontactno);
				 $('#pa_email').html(data.pa_email);
				 $('#pa_city').html(data.pa_city);
				 $('#pa_address').html(data.pa_address);
				
					$('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has been Successfully Loaded and Viewed</div>');
		            prettyPhotoLoad();
		         }else{
					 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Student Detail Profile has Not been Loaded due to Error !</div>');
				      }
			   },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});		
*/}

function studentnotificationreplyform_by(notificationid, branchid, classid, studentid, st_fullname, st_registrationno, st_avator, parentid, pa_fathername, pa_email, no_subject, no_message, no_postdate, recepient){
	  $('#no_subject').val('');
	  $('#no_message').val('');	
	  stu_add_yes_to_readstatus_bynotificationid(notificationid);
	  $('#parentnotificationreplyform').modal('show'); 
	  $('#recipient').val(recepient);
	  $('#nbranchid').val(branchid);
	  $('#nclassid').val(classid);
	  $('#nstudentid').val(studentid);
	  $('#nst_fullname').val(st_fullname);
	  $('nst_registrationno').val(st_registrationno);
	  $('#nst_avator').val(st_avator);
	  $('#nparentid').val(parentid);
	  $('#npa_fathername').val(pa_fathername);
	  $('#npa_email').val(pa_email);
	  $('#subject').html(no_subject);
	  $('#message').html(no_message);
	  $('#time').html(no_postdate);	
}
function stu_add_yes_to_readstatus_bynotificationid(notificationid){
		  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"studentdashboard/add_yes_to_readstatus_by",
		  	data:({
				   'notificationid':notificationid
				 }),
			beforeSend:function() {
				//overlay_ajax();
                  },		 		 
		  success:function(data){
			    if(data){
					countnotification=Number($('#countnotification').val())-1;
					$('#displaynotification').html(countnotification);
					$('#notidationyouhave').html(' You have '+countnotification+' notifications');
					$('#notificationid'+notificationid).remove();
					$('#countnotification').val(countnotification);
				    }
			           
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		        // $.unblockUI();
                }	   		  	   
	});
	
}
function stu_sendnotification_toschool(){
	  var branchid=$('#nbranchid').val();
	  var classid =$('#nclassid').val();
	  var studentid= $('#nstudentid').val();
	  var st_fullname=$('#nst_fullname').val();
	  var st_registrationno= $('nst_registrationno').val();
	  var st_avator=$('#nst_avator').val();
	  var parentid= $('#nparentid').val();
	  var pa_fathername=$('#npa_fathername').val();
	  var pa_email=$('#npa_email').val();
	  var no_subject=$('#no_subject').val();
	  var no_message=$('#no_message').val();
	  $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"studentdashboard/send_notification_toschoolby",
		  	data:({
				   'branchid':branchid,
	               'classid':classid,
				   'studentid':studentid,
				   'st_fullname':st_fullname,
				   'st_registrationno':st_registrationno,
				   'st_avator':st_avator,
				   'parentid':parentid,
				   'pa_fathername':pa_fathername,
				   'pa_email':pa_email,
				   'no_subject':no_subject,
				   'no_message':no_message
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			            if(data){
			             $('#parentnotificationreplyform').modal('hide'); 
						 $('#alertbox').html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has been Successfully sent</div>');
						}else{
						 $('#alertbox1').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Notification has not been sent Try Again !</div>');
						}
			   },       
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
}

function display_studentfeedetail_of_student_studentpart(stfe_invoiceno, branchid, classid){
		$.ajax({
			 url:base_path+"students/get_studentfeedetail_for_student_bybranchid_userid_ajax",
			 type:'POST',
			 data:({
				   'stfe_invoiceno':stfe_invoiceno,
				   'branchid':branchid,
				   'classid':classid,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(result){
		            $('#studentfeedetail').modal('show');	
					$('#feedetail').html(result);   
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
}


function display_datesheetdetail_for_student_datesheet_byids(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){
	 if(branchid!='' && studentid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"students/datesheetdetail_for_datesheet_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			      $('#viewdatesheetdetail').modal('show');
			      $('#viewdatesheet').html(data);	
			      $('#st_avatoraa').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
				  $('#st_avatoraa').attr('title', st_fullname);
				  $('#st_avatoraa').attr('alt', st_fullname);
				  $('#fullname').html(st_fullname);
				  $('#registrationno').html(st_registrationno);
				  
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#viewdatesheet').html('');
	 }						
}




function display_detail_of_attendance_for_attendance_studentpart(){/*
	  var previous_date=$('#previous_date').val();
	  var current_date=$('#current_date').val();
	$.ajax({
		     type:'POST',
			 url:base_path+"students/attendancedetail_for_viewattendance_bystudentid_ajax",
			 data:({
				   'previous_date':previous_date,
				   'current_date':current_date,
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
		         $('#viewattendancedetail').modal('show');	
				 $('#viewattendance').html(data); 
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
*/}
function display_detail_of_viewexamresult_studentpart(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){
	 if(branchid!='' && studentid!='' && classid!=''){
	  $.ajax({
		  	type: "POST",
			url: base_path+"students/examresultdetail_for_viewexamresultbystudent_byids_ajax",
		  	data:({
				  'branchid':branchid,
				  'classid':classid,
				  'studentid':studentid
				  
				 }),
			beforeSend:function() {
				overlay_ajax();
                  },		 		 
		  success:function(data){
			  $('#examresultdetail').modal('show');	
			  $('#examresult').html(data); 
			 // $('#st_avator3').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
			 // $('#st_avator3').attr('title', st_fullname);
			 // $('#st_avator3').attr('alt', st_fullname);
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   		  	   
	});	
	 }else{
		  $('#examresult').html(''); 
	 }						
}

function display_detail_of_timetable_studentpart(branchid, studentid, classid, st_fullname, st_registrationno, st_avator){/*
	$.ajax({
		     type:'POST',
			 url:base_path+"students/viewtimetable_bystudentid_classid_ajax",

			 data:({
				   'branchid':branchid,
				   'studentid':studentid,
				   'classid':classid
			      }),
				beforeSend:function() {
				    overlay_ajax();
                  },	
			    success:function(data){
		          $('#viewtimetabledetail').modal('show');	
				  $('#viewtimetable').html(data); 
			     $('#st_avatora').attr('src', base_path+'assets/admin/images/student_avator/thumbs/'+st_avator);
				 $('#st_avatora').attr('title', st_fullname);
				 $('#st_avatora').attr('alt', st_fullname);
				  $('#fullname').html(st_fullname);
				  $('#registrationno').html(st_registrationno);
				
						  
			     },
			  error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){ 
		         $.unblockUI();
                }	   	
		   });	
	
*/}
/////////////// Eend //////////////////



/////////////////////// END STUDENT SIDE ///////////////////








////////////////////////// END //////////////////////////////



////////////////// FORMS VALIDATION PORTION /////////////////////
function validate_form(hint){
	if(hint=='addstudentfee'){
	     if($.trim( $("#totalpaidfee").val() ) == "" ){
			 $('#alertbox').html('<div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;Some thing going wrong Try Again !</div>');
			 return false;
		 }else{
			 return true; 
			 }
	}
	
}





////////////////////////////END//////////////////////////////////////




/*$(document).ready(function(e) {
$('#resendverificationcode').click(function(e) {
		e.preventDefault();
		var username=$('#username').val();
		var email=$('#email').val();
	var l = Ladda.create(this);
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"admin/auth/resendverificationcode_json",
		  	data:({
				  'username':username,
				  'email':email
				 }),
			beforeSend:function() {
				  l.start();
                  },		 		 
		  success:function(data){
			     if(data.result){
					 $('#resendverificationcode').css('display','none');
					 $('#alertbox').html(data.alertbox);
				 }else{
				     $('#alertbox').html(data.alertbox);	 
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
				 l.stop();   
                }	   		  	   
	});	
   });
});
/////////////////////////////// okay  /////////////////////////////////





















function singlechecked(){
	var fla=true;
	 $( ".checkedmember" ).each(function( index , value ) {
	       if(! $(this).prop('checked')){
	           $('#checkedmember1').prop('checked', false);
			    fla=false;       	  
	         }
      });	
	  
	   $( ".checkedmember" ).each(function( index , value ) {
	       if($(this).prop('checked') && fla){
	           $('#checkedmember1').prop('checked', true);       	  
	         }
      });	
}


function sendemailtomembers(){
	          var arrmember_id=new Array(); 
              $( ".checkedmember" ).each(function( index , value ) {
				    if($(this).prop('checked')){
	                  	 arrmember_id[index]=$(this).val();	 
	                   }  
                });
			var user_from=$('#user_from').val();
			var subject=$('#subject').val();
			var message=$('#message').val();
			 valid = $("#sendemailform").valid();	
		if(valid){	 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"admin/sendemail/sendemailtomembers",
		  	data:({
				  'user_from':user_from,
				  'arrmember_id':arrmember_id,
				  'subject':subject,
				  'message':message
				  
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			     for (var i=0; i< data.length; i++){
					 if(data[i][0]){
					      $('#memberid'+data[i][1]).css('color','rgb(0,255,0)'); 
				          }else{
					       $('#memberid'+data[i][1]).css('color','rgb(233,158,133)');
				          }
					
				      }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }
}

function singlechecked(){
	var fla=true;
	 $( ".checkedmember" ).each(function( index , value ) {
	       if(! $(this).prop('checked')){
	           $('#checkedmember2').prop('checked', false);
			    fla=false;       	  
	         }
      });	
	  
	   $( ".checkedmember" ).each(function( index , value ) {
	       if($(this).prop('checked') && fla){
	           $('#checkedmember2').prop('checked', true);       	  
	         }
      });	
}
function sendmessagetomembers(){
	          var arrmember_id=new Array(); 
              $( ".checkedmember" ).each(function( index , value ) {
				    if($(this).prop('checked')){
	                  	 arrmember_id[index]=$(this).val();	 
	                   }  
                });
			var user_from=$('#user_from').val();
			var subject=$('#subject').val();
			var message=$('#message').val();
			 valid = $("#sendmessageform").valid();	
		if(valid){	 
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"admin/sitemessage/sendmessagetomembers",
		  	data:({
				  'user_from':user_from,
				  'arrmember_id':arrmember_id,
				  'subject':subject,
				  'message':message
				  
				 }),
			beforeSend:function() {
                  overlay_ajax();
                  },		 		 
		  success:function(data){
			     for (var i=0; i< data.length; i++){
					 if(data[i][0]){
					      $('#memberid'+data[i][1]).css('color','rgb(0,255,0)'); 
				          }else{
					       $('#memberid'+data[i][1]).css('color','rgb(233,158,133)');
				          }
					
				      }
		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
                 $.unblockUI();    
                }	   		  	   
	});	
   }
}

$(document).ready(function(e) {
$('#resendverificationcode').click(function(e) {
		e.preventDefault();
		var username=$('#username').val();
		var email=$('#email').val();
	var l = Ladda.create(this);
	 $.ajax({
		  	type: "POST",
			dataType:'json',
			url: base_path+"admin/auth/resendverificationcode_json",
		  	data:({
				  'username':username,
				  'email':email
				 }),
			beforeSend:function() {
				  l.start();
                  },		 		 
		  success:function(data){
			     if(data.result){
					 $('#resendverificationcode').css('display','none');
					 $('#alertbox').html(data.alertbox);
				 }else{
				     $('#alertbox').html(data.alertbox);	 
				 }

		       },
		   error:function(){
                              alert('ajax call failed...');
                   }, 
		   complete: function(){
				 l.stop();   
                }	   		  	   
	});	
   });
});

*/