
		<!-- start: HEADER -->
		<div class="navbar navbar-inverse navbar-fixed-top">
			<!-- start: TOP NAVIGATION CONTAINER -->
			<div class="container">
				<div class="navbar-header">
					<!-- start: RESPONSIVE MENU TOGGLER -->
					<button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
						<span class="clip-list-2"></span>
					</button>
					<!-- end: RESPONSIVE MENU TOGGLER -->
					<!-- start: LOGO -->
					
					<?php if($this->session->userdata('admin_id')!=1){?>
                      <div class="row">
						<div class="gallery clearfix col-md-2" style="padding-top:4px">
                             <a href="<?php echo base_url() ?>assets/admin/images/school_logo/<?php  echo $this->session->userdata('admin_schoollogo') ?>" title="School Code : <?php echo $this->session->userdata('admin_schoolcode');?>" style="margin-bottom:2px;" rel="prettyPhoto">
                                       <img  src="<?php echo base_url() ?>assets/admin/images/school_logo/thumbs/<?php echo $this->session->userdata('admin_schoollogo') ?>" style="width:40px; height:40px" alt="<?php echo $this->session->userdata('admin_schoolname');?>" class="tooltips" data-placement="right" title="<?php echo $this->session->userdata('admin_schoolname');?>">
                                                             
                              </a>
                         </div>
                         <div class="col-md-10">
						  <a class="navbar-brand" href="<?php echo site_url('admin/dashboard') ?>"><?php echo $this->session->userdata('admin_schoolname'); ?></a>
					      </div>
                       </div>
					   <?php }else{?>
                        <div class="row">
                            <div class="gallery clearfix col-md-2">
                             <a href="<?php echo base_url() ?>assets/admin/images/school_logo/<?php  echo $this->session->userdata('admin_schoollogo') ?>" title="School Code : <?php echo $this->session->userdata('admin_schoolcode');?>" style="margin-bottom:2px;" rel="prettyPhoto[gallery<?php echo $this->session->userdata('admin_schoolid');?>]">
                                       <img  src="<?php echo base_url() ?>assets/admin/images/school_logo/thumbs/<?php echo $this->session->userdata('admin_schoollogo') ?>" style="width:40px; height:40px" alt="<?php echo $this->session->userdata('admin_schoolname');?>" class="tooltips gallerydiv" data-placement="top" title="<?php echo $this->session->userdata('admin_schoolname');?>">
                                                             
                              </a>
                         </div>
                             <div class="col-md-8">
                              <a class="navbar-brand" href="<?php echo site_url('admin/dashboard') ?>">Social School</a>
					        </div> 
                        </div>    
							 <?php }?>
					
					<!-- end: LOGO -->
				</div>
				<div class="navbar-tools">
					<!-- start: TOP NAVIGATION MENU -->
					<ul class="nav navbar-right">
						<!-- start: TO-DO DROPDOWN -->
						<?php /*?><li class="dropdown">
							<a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="#">
								<i class="clip-list-5"></i>
								<span class="badge"> 12</span>
							</a>
							<ul class="dropdown-menu todo">
								<li>
									<span class="dropdown-menu-title"> You have 12 pending tasks</span>
								</li>
								<li>
									<div class="drop-down-wrapper">
										<ul>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc" style="opacity: 1; text-decoration: none;">Staff Meeting</span>
													<span class="label label-danger" style="opacity: 1;"> today</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc" style="opacity: 1; text-decoration: none;"> New frontend layout</span>
													<span class="label label-danger" style="opacity: 1;"> today</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> Hire developers</span>
													<span class="label label-warning"> tommorow</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc">Staff Meeting</span>
													<span class="label label-warning"> tommorow</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> New frontend layout</span>
													<span class="label label-success"> this week</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> Hire developers</span>
													<span class="label label-success"> this week</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> New frontend layout</span>
													<span class="label label-info"> this month</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> Hire developers</span>
													<span class="label label-info"> this month</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc" style="opacity: 1; text-decoration: none;">Staff Meeting</span>
													<span class="label label-danger" style="opacity: 1;"> today</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc" style="opacity: 1; text-decoration: none;"> New frontend layout</span>
													<span class="label label-danger" style="opacity: 1;"> today</span>
												</a>
											</li>
											<li>
												<a class="todo-actions" href="javascript:void(0)">
													<i class="fa fa-square-o"></i>
													<span class="desc"> Hire developers</span>
													<span class="label label-warning"> tommorow</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="view-all">
									<a href="javascript:void(0)">
										See all tasks <i class="fa fa-arrow-circle-o-right"></i>
									</a>
								</li>
							</ul>
						</li><?php */?>
						<!-- end: TO-DO DROPDOWN-->
						<!-- start: NOTIFICATION DROPDOWN -->
						<li class="dropdown">
							<a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="#">
								<i class="clip-notification-2"></i>
								<span class="badge" id="displaynotification"> <?php echo $notification_record->num_rows() ?></span>
							</a>
							<ul class="dropdown-menu notifications">
								<li>
                                    <input type="hidden" id="countnotification" value="<?php echo $notification_record->num_rows() ?>" />
									<span class="dropdown-menu-title" id="notidationyouhave"> You have <?php echo $notification_record->num_rows() ?> notifications</span>
								</li>
								<li>
									<div class="drop-down-wrapper">
										<ul>
                                          <?php foreach($notification_record->result() as $notification){ ?>
                                          <?php if($notification->no_by==1){$recepient= 'School Admin';}else{$recepient='Branch Admin';} ?>
                                          <?php $before= $this->notification_lib->time_difference($notification->no_postdate) ?>
											<li id="notificationid<?php echo $notification->notificationid ?>">
												<a href="javascript:void(0)" onclick="parentnotificationreplyform_by('<?php echo $notification->notificationid ?>','<?php echo $notification->branchid ?>','<?php echo $notification->classid ?>','<?php echo $notification->studentid ?>','<?php echo $notification->st_fullname ?>','<?php echo $notification->st_registrationno ?>','<?php echo $notification->st_avator ?>','<?php echo $notification->parentid ?>','<?php echo $notification->pa_fathername ?>','<?php echo $notification->pa_fathername ?>','<?php echo $notification->no_subject ?>','<?php echo $notification->no_message ?>','<?php echo date('d/m/Y H:i:s', strtotime($notification->no_postdate)) ?>','<?php echo $recepient ?>')">
													<span class="label label-primary"><i class="fa fa-user"></i></span>
													<span class="message">Notification By <?php echo $recepient ?>  </span>
													<span class="time"> <?php echo $this->notification_lib->time_difference($notification->no_postdate) ?></span>
												</a>
											</li>
                                            <?php }?>
										</ul>
									</div>
								</li>
								<li class="view-all">
									<a href="javascript:void(0)">
										See all notifications <i class="fa fa-arrow-circle-o-right"></i>
									</a>
								</li>
							</ul>
						</li>
						<!-- end: NOTIFICATION DROPDOWN -->
						<!-- start: MESSAGE DROPDOWN -->
						<?php /*?><li class="dropdown">
							<a class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown" href="#">
								<i class="clip-bubble-3"></i>
								<span class="badge"> 9</span>
							</a>
							<ul class="dropdown-menu posts">
								<li>
									<span class="dropdown-menu-title"> You have 9 messages</span>
								</li>
								<li>
									<div class="drop-down-wrapper">
										<ul>
											<li>
												<a href="javascript:;">
													<div class="clearfix">
														<div class="thread-image">
															<img alt="" src="<?php echo base_url() ?>assets/admin/images/avatar-2.jpg">
														</div>
														<div class="thread-content">
															<span class="author">Nicole Bell</span>
															<span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
															<span class="time"> Just Now</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<div class="clearfix">
														<div class="thread-image">
															<img alt="" src="<?php echo base_url() ?>assets/admin/images/avatar-1.jpg">
														</div>
														<div class="thread-content">
															<span class="author">Peter Clark</span>
															<span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
															<span class="time">2 mins</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<div class="clearfix">
														<div class="thread-image">
															<img alt="" src="<?php echo base_url() ?>assets/admin/images/avatar-3.jpg">
														</div>
														<div class="thread-content">
															<span class="author">Steven Thompson</span>
															<span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
															<span class="time">8 hrs</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<div class="clearfix">
														<div class="thread-image">
															<img alt="" src="<?php echo base_url() ?>assets/admin/images/avatar-1.jpg">
														</div>
														<div class="thread-content">
															<span class="author">Peter Clark</span>
															<span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
															<span class="time">9 hrs</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<div class="clearfix">
														<div class="thread-image">
															<img alt="" src="<?php echo base_url() ?>assets/admin/images/avatar-5.jpg">
														</div>
														<div class="thread-content">
															<span class="author">Kenneth Ross</span>
															<span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
															<span class="time">14 hrs</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="view-all">
									<a href="pages_messages.html">
										See all messages <i class="fa fa-arrow-circle-o-right"></i>
									</a>
								</li>
							</ul>
						</li><?php */?>
						<!-- end: MESSAGE DROPDOWN -->
						<!-- start: USER DROPDOWN -->
						<li class="dropdown current-user">
                               <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="#">
								<img src="<?php echo base_url() ?>assets/admin/images/parent_avator/thumbs/<?php echo $this->session->userdata('parent_avator'); ?>" style="width:30px; height:30px" class="circle-img" alt="">
								<span class="username"><?php echo $this->session->userdata('parent_fathername') ?></span>
								<i class="clip-chevron-down"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="<?php echo site_url('dashboard/myaccount') ?>">
										<i class="clip-user-2"></i>
										&nbsp;My Account
									</a>
								</li>
								<?php /*?><li>
									<a href="pages_calendar.html">
										<i class="clip-calendar"></i>
										&nbsp;My Calendar
									</a>
								<li>
									<a href="pages_messages.html">
										<i class="clip-bubble-4"></i>
										&nbsp;My Messages (3)
									</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="<?php echo site_url('dashboard/lockscreen') ?>"><i class="clip-locked"></i>
										&nbsp;Lock Screen </a>
								</li><?php */?>
								<li>
									<a href="<?php echo site_url('parents/logout') ?>">
										<i class="clip-exit"></i>
										&nbsp;Log Out
									</a>
								</li>
							</ul>
						</li>
						<!-- end: USER DROPDOWN -->
					</ul>
					<!-- end: TOP NAVIGATION MENU -->
				</div>
				<!-- start: HORIZONTAL MENU -->
				<div class="horizontal-menu navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							<span class="clip-home-3"></span>&ensp;Home <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="<?php echo site_url('dashboard/home') ?>">
									<span class="fa fa-dashboard"></span>&ensp;	Dashboard
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('dashboard/myaccount') ?>">
										My Account
									</a>
								</li>
                                 <li>
									<a href="<?php echo site_url('parents/logout') ?>">
										Logout
									</a>
								</li>
							</ul>
						</li>
    <?php /*?>                <?php if($this->session->userdata('admin_id')==1){?>
						<li class="active">
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="clip-home"></span>&ensp;School <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
                           
								<li>
									<a href="<?php echo site_url('school/manageschool') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage School
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('school/addschool') ?>">
									<span class="clip-plus-circle"></span>&ensp;Add New School
									</a>
								</li>
                                <li>
									<a href="<?php echo site_url('discount/managediscounthead') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp;Manage Discount Head
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('discount/adddiscounthead') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp; Add New Discount Head
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('discount/managediscount') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp;Manage Discount
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('discount/adddiscount') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp; Add New Discount
									</a>
								</li>
                              
							</ul>
						</li>
                     <?php }?> <?php */?>
                     
                     
                    
                      <?php /*?> <?php if($this->session->userdata('parentlogged_in')){?>
						<li class="active">
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="clip-home"></span>&ensp;Student <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
                                 <li>
									<a href="<?php echo site_url('students/viewstudent') ?>">
									<span class="clip-minus-circle"></span>&ensp;View Student
									</a>
								</li>
                                 <li>
									<a href="<?php echo site_url('students/attendance') ?>">
									<span class="clip-minus-circle"></span>&ensp;View Attendance
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('students/studentfeedetail') ?>">
									<span class="clip-plus-circle"></span>&ensp;View Fee Detail
									</a>
								</li>
                                
                                <li>
									<a href="<?php echo site_url('students/viewdatesheet') ?>">
									<span class="clip-plus-circle"></span>&ensp;View Datesheet
									</a>
								</li>
                                 <li>
									<a href="<?php echo site_url('students/viewexamresult') ?>">
									<span class="clip-plus-circle"></span>&ensp;View Exam Result
									</a>
								</li>
								<li>
							</ul>
						</li>
                     <?php }?><?php */?>
                     
                     
                     
                     
                    <?php /*?> <?php if($this->session->userdata('admin_schooladmin')==1 || $this->session->userdata('admin_schooladmin')==2){?>
                        <li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="	clip-users-2 "></span>&ensp;User Right <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
								 <li>
									<a href="<?php echo site_url('userright/managegroup') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage Group
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('userright/addgroup') ?>">
									<span class="clip-plus-circle"></span>&ensp;Add New Group
									</a>
								</li>
                                <li>
									<a href="<?php echo site_url('userright/manageright') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp;Manage Right
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('userright/addright') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp; Add New Right
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('userright/managegroupright') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp;Manage Group Right
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('userright/addgroupright') ?>">
									<span class="glyphicon glyphicon-envelope"></span>&ensp; Add New Group Right
									</a>
								</li>
							</ul>
						</li>
                        <?php }?>
                         <?php if($this->session->userdata('admin_schooladmin')==1){?>
                        <li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="	clip-users-2 "></span>&ensp;Branch <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="<?php echo site_url('branch/managebranch') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage Branch
									</a>
								</li>
                                <li>
									<a href="<?php echo site_url('branch/addbranch') ?>">
									<span class="clip-minus-circle"></span>&ensp;Add New Branch
									</a>
								</li>
							</ul>
						</li> 
                         <?php }?>
                        
                      <?php if($this->session->userdata('admin_schooladmin')==1 || $this->session->userdata('admin_schooladmin')==2){?>
                        <li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="	clip-users-2 "></span>&ensp;Class <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
                          
								 <li>
									<a href="<?php echo site_url('branch/classes/manageclasse') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage Class
									</a>
								</li>
								<li>
									<a href="<?php echo site_url('branch/classes/addclass') ?>">
									<span class="clip-plus-circle"></span>&ensp;Add New Class
									</a>
								</li>
                                
							</ul>
						</li>
                      <?php }?>  
                        <?php if($this->session->userdata('admin_schooladmin')==1 || $this->session->userdata('admin_schooladmin')==2){?>
                        <li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="	clip-users-2 "></span>&ensp;User <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="<?php echo site_url('branch/user/manageuser') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage User
									</a>
								</li>
                                <li>
									<a href="<?php echo site_url('branch/user/adduser') ?>">
									<span class="clip-minus-circle"></span>&ensp;Add New User
									</a>
								</li>
							</ul>
						</li> 
                         <?php }?> 
                         
                        <?php if($this->session->userdata('admin_schooladmin')==1 || $this->session->userdata('admin_schooladmin')==2){?>
                        <li>
							<a href="javascript:void(0)" class="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown">
								<span class="selected"></span>
							 <span class="	clip-users-2 "></span>&ensp;Class Fee <i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu">
								 <li>
									<a href="<?php echo site_url('classfee/manageclassfee') ?>">
									<span class="clip-minus-circle"></span>&ensp;Manage Class Fee
									</a>
								</li>
								
							</ul>
						</li> 
                         <?php }?> <?php */?>
                        
                        
                        
					</ul>
				</div>
				<!-- end: HORIZONTAL MENU -->
			</div>
			<!-- end: TOP NAVIGATION CONTAINER -->
		</div>
		<!-- end: HEADER --> 
        
		<!-- start: MAIN CONTAINER -->
		<div class="main-container">
			<!-- start: PAGE -->
			<div class="main-content">
				<!-- start: PANEL CONFIGURATION MODAL FORM -->
				<div class="modal fade" id="panel-config" tabindex="-1" role="dialog" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
									&times;
								</button>
								<h4 class="modal-title">Panel Configuration</h4>
							</div>
							<div class="modal-body">
								Here will be a configuration form
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal-dialog -->
				</div>
				<!-- /.modal -->
				<!-- end: SPANEL CONFIGURATION MODAL FORM -->
				<div class="container">
					<!-- start: PAGE HEADER -->
					<div class="row">
						<div class="col-sm-12">
							<!-- start: STYLE SELECTOR BOX -->
							<?php /*?><div id="style_selector" class="hidden-xs">
								<div id="style_selector_container" style="display:block">
									<div class="style-main-title">
										Style Selector
									</div>
									<div class="box-title">
										Choose Your Layout Style
									</div>
									<div class="input-box">
										<div class="input">
											<select name="layout">
												<option value="default">Wide</option><option value="boxed">Boxed</option>
											</select>
										</div>
									</div>
									<div class="box-title">
										Choose Your Header Style
									</div>
									<div class="input-box">
										<div class="input">
											<select name="header">
												<option value="fixed">Fixed</option><option value="default">Default</option>
											</select>
										</div>
									</div>
									<div class="box-title">
										Choose Your Footer Style
									</div>
									<div class="input-box">
										<div class="input">
											<select name="footer">
												<option value="default">Default</option><option value="fixed">Fixed</option>
											</select>
										</div>
									</div>
									<div class="box-title">
										Backgrounds for Boxed Version
									</div>
									<div class="images boxed-patterns">
										<a id="bg_style_1" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/bg.png"></a>
										<a id="bg_style_2" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/bg_2.png"></a>
										<a id="bg_style_3" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/bg_3.png"></a>
										<a id="bg_style_4" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/bg_4.png"></a>
										<a id="bg_style_5" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/bg_5.png"></a>
									</div>
									<div class="box-title">
										5 Predefined Color Schemes
									</div>
									<div class="images icons-color">
										<a id="light" href="#"><img class="active" alt="" src="<?php echo base_url() ?>assets/admin/images/lightgrey.png"></a>
										<a id="dark" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/darkgrey.png"></a>
										<a id="black_and_white" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/blackandwhite.png"></a>
										<a id="navy" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/navy.png"></a>
										<a id="green" href="#"><img alt="" src="<?php echo base_url() ?>assets/admin/images/green.png"></a>
									</div>
									<div class="box-title">
										Style it with LESS
									</div>
									<div class="images">
										<div class="form-group">
											<label>
												Basic
											</label>
											<input type="text" value="#ffffff" class="color-base">
											<div class="dropdown">
												<a class="add-on dropdown-toggle" data-toggle="dropdown"><i style="background-color: #ffffff"></i></a>
												<ul class="dropdown-menu pull-right">
													<li>
														<div class="colorpalette"></div>
													</li>
												</ul>
											</div>
										</div>
										<div class="form-group">
											<label>
												Text
											</label>
											<input type="text" value="#555555" class="color-text">
											<div class="dropdown">
												<a class="add-on dropdown-toggle" data-toggle="dropdown"><i style="background-color: #555555"></i></a>
												<ul class="dropdown-menu pull-right">
													<li>
														<div class="colorpalette"></div>
													</li>
												</ul>
											</div>
										</div>
										<div class="form-group">
											<label>
												Elements
											</label>
											<input type="text" value="#007AFF" class="color-badge">
											<div class="dropdown">
												<a class="add-on dropdown-toggle" data-toggle="dropdown"><i style="background-color: #007AFF"></i></a>
												<ul class="dropdown-menu pull-right">
													<li>
														<div class="colorpalette"></div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div style="height:25px;line-height:25px; text-align: center">
										<a class="clear_style" href="#">
											Clear Styles
										</a>
										<a class="save_style" href="#">
											Save Styles
										</a>
									</div>
								</div>
								<div class="style-toggle open"></div>
							</div><?php */?>
							<!-- end: STYLE SELECTOR BOX --> 
                            
<div id="parentnotificationreplyform" class="modal fade" style="display: none;">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title"><span class="glyphicon glyphicon-comment"></span>&ensp; New Notification</h4>
      </div>
     <div class="modal-body" style="padding-top:0px !important">
      <div id="alertbox1"></div>
				<div class="row">
					<div class="col-md-12">
                            <ol class="discussion">
												<li class="other">
													<div class="avatar">
														<img src="<?php echo base_url() ?>assets/admin/images/avatar-1.jpg" alt="">
													</div>
													<div class="messages">
                                                       <p id="subject">
															
														</p>
														<p id="message">
															
														</p>
														<span class="time" id="time"></span>
													</div>
												</li>
											</ol>
                                    
                           <form>
                              <div class="form-group">
                              <label for="recipient-name" class="control-label">Recipient : <span class="symbol required"></span></label>
                              <input type="text" class="form-control" id="recipient" readonly="readonly">
                              </div>
                               <div class="form-group">
                              <label for="recipient-name" class="control-label">Subject : <span class="symbol required"></span></label>
                              <input type="text" class="form-control" id="no_subject" value="" placeholder="Subject" >
                              </div>
                               <div class="form-group">
                               <label for="message-text" class="control-label">Message : <span class="symbol required"></span></label>
                              <textarea class="form-control" id="no_message" style="max-width:860px; min-height:110px" placeholder="Message"></textarea>
                               </div>
                              </form>           
                              <input type="hidden" id="nbranchid" />
                              <input type="hidden" id="nclassid" />
                              <input type="hidden" id="nstudentid" />
	                          <input type="hidden" id="nst_fullname" />
                              <input type="hidden" id="nst_registrationno" />
                              <input type="hidden" id="nst_avator" />
                              <input type="hidden" id="nparentid" />
                              <input type="hidden" id="npa_fathername" />
                              <input type="hidden" id="npa_email" />                   
					 </div>
				</div>
			</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span>&ensp;Close</button>
        <button type="button" onclick="sendnotification_toschool()" class="btn btn-primary"><span class="glyphicon glyphicon-envelope"></span>&ensp;Send</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->                                