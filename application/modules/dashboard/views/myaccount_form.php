
							<ol class="breadcrumb">
								<li>
									Home
								</li>
								<li>
                                  <a href="<?php echo site_url('home/myaccount') ?>">
									My Account
                                   </a> 
								</li>
							</ol>
					
                    <br/>
                     <?php if(isset($msg)){echo $msg;}?>
                    <br/>
                    <br/>
                    <div class="row">
						<div class="col-sm-12">
							<!-- start: PANLEL TABS -->
                             
							<div class="panel panel-default">
								<div class="panel-heading">
									<i class="fa fa-external-link-square"></i>
								<span class="glyphicon glyphicon-user"></span>&ensp;Update Account
								</div>
								<div class="panel-body">
									<div class="tabbable panel-tabs">
										<ul class="nav nav-tabs">
											<li  <?php if(isset($hint)){ if($hint=='profile'){echo 'class="active"';} }else{ echo 'class="active"';}?>>
												<a href="#panel_tab_profile" data-toggle="tab">
													<span class="glyphicon glyphicon-edit"></span>&ensp;&ensp;Profile&ensp;&ensp;
												</a>
											</li>
											<li <?php if(isset($hint) && $hint=='password'){echo 'class="active"';} ?>>
												<a href="#panel_tab_password" data-toggle="tab">
												<span class="glyphicon glyphicon-lock"></span>&ensp;&ensp;Password
												</a>
											</li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane <?php if(isset($hint)){ if($hint=='profile'){echo 'active';} }else{ echo 'active';}?>" id="panel_tab_profile">

                                   <form id="updateprofileform" role="form" action="<?php echo site_url('home/myaccount') ?>" novalidate="novalidate" enctype="multipart/form-data"  method="post">
										<input type="hidden" name="hint" value="profile" class="form-control">
                                       
                                        <div class="row">
											<div class="col-md-12">
												<div class="errorHandler alert alert-danger no-display">
													<i class="fa fa-times-sign"></i> You have some form errors. Please check below.
												</div>
												<div class="successHandler alert alert-success no-display">
													<i class="fa fa-ok"></i> Your form validation is successful!
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label class="control-label">
														Full Name <span class="symbol required"></span>
													</label>
													<input type="text" name="fullname" id="fullname" value="<?php echo $this->session->userdata('admin_fullname');?>" class="form-control" placeholder="Full Name">
												</div>
                                               
												<div class="form-group">
													<label class="control-label">
														Email <span class="symbol required"></span>
													</label>
													<input type="email" name="email" id="email" value="<?php echo $this->session->userdata('admin_email');?>" class="form-control" placeholder="Email" >
												</div>
                                                <div class="form-group">
													<label class="control-label">
													  Confirm Email <span class="symbol required"></span>
													</label>
													<input type="email" name="confirmemail" id="confirmemail" value="<?php echo $this->session->userdata('admin_email');?>" class="form-control" placeholder="Confirm Email" >
												</div>
                                                <div class="form-group" >
                                                  <label class="control-label">
														Gender <span class="symbol required"></span>
													</label>
                                                  <select name="gender" class="form-control">
                                                    <option value="">--- SELECT ---</option>
                                                    <option value="Male"  <?php if($this->session->userdata('admin_gender')=='Male'){echo 'selected="selected"';} ?>>Male</option>
                                                    <option value="Female"  <?php if($this->session->userdata('admin_gender')=='Female'){echo 'selected="selected"';} ?>>Female</option>
                                                  </select>
                                                </div>
											</div>
                                            
                                            
											<div class="col-md-6">
												<div class="form-group">
													<label class="control-label">
														Contact No <span class="symbol required"></span>
													</label>
													<input type="text" name="contactno" id="email" value="<?php echo $this->session->userdata('admin_contactno') ?>" class="form-control" placeholder="Contact No" >
												</div>
                                                  <div class="form-group">
													<label class="control-label">
													 New User Avator 
													</label>
													<input type="file" name="avator" id="sc_logo"  class="form-control" style="padding: 0px 0px !important">
												    <span class="alertrequired"><?php echo form_error('avator'); ?></span>
                                                </div>
                                                <div class="form-group">
													<label class="control-label">
														Old User Avator
													</label>                                  
                                                    <div class="gallery clearfix">
                                                         <a href="<?php echo base_url() ?>assets/admin/images/user_avator/<?php echo $this->session->userdata('admin_avator') ?>" title="Email : <?php echo $this->session->userdata('admin_email');?>" style="margin-bottom:2px;" rel="prettyPhoto">
                                                            <img  src="<?php echo base_url() ?>assets/admin/images/user_avator//thumbs/<?php echo $this->session->userdata('admin_avator') ?>" style="width:40px; height:40px" alt="<?php echo $this->session->userdata('admin_fullname');?>" class="tooltips" data-placement="top" title="<?php echo $this->session->userdata('admin_fullname');?>"> 
                                                        </a>
                                                          <input type="hidden" name="us_oldavator" id="sc_address" value="<?php echo $this->session->userdata('admin_avator') ?>" class="form-control"> 
                                                   </div>
												</div>
                                                  
											</div>
										</div>
										<div class="row">
											<div class="col-md-4 col-md-offset-8">
												<button type="submit" class="btn btn-yellow btn-block">
													Update Profile &ensp;<i class="fa fa-arrow-circle-right"></i>
												</button>
											</div>
										</div>
									</form>
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
											</div>
											<div class="tab-pane <?php if(isset($hint) && $hint=='password'){echo 'active';} ?>" id="panel_tab_password">

                                                <form id="updatepasswordfor" role="form" action="<?php echo site_url('home/myaccount') ?>" novalidate="novalidate" method="post">
										         <input type="hidden" name="hint" value="password" class="form-control">
                       
                                        <div class="row">
											<div class="col-md-12">
												<div class="errorHandler alert alert-danger no-display">
													<i class="fa fa-times-sign"></i> You have some form errors. Please check below.
												</div>
												<div class="successHandler alert alert-success no-display">
													<i class="fa fa-ok"></i> Your form validation is successful!
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label class="control-label">
														Current Password <span class="symbol required"></span>
													</label>
													<input type="password" name="correntpassword" id="correntpassword" value="" class="form-control" placeholder="Current Password">
                                                </div>
                                               </div>
                                               <div class="col-md-6">
												<div class="form-group">
													<label class="control-label">
														New Password <span class="symbol required"></span>
													</label>
													<input type="password" name="newpassword" id="newpassword" value="" class="form-control" placeholder="New Password">
												</div>
                                                <div class="form-group">
													<label class="control-label">
													Confirm Password <span class="symbol required"></span>
													</label>
													<input type="password" name="confirmpassword" id="confirmpassword" value="" class="form-control" placeholder="Confirm New Password">
												</div>
											</div>	
										</div>
										<div class="row">
											<div class="col-md-4 col-md-offset-8">
												<button type="submit" class="btn btn-yellow btn-block">
													Update Password &ensp;<i class="fa fa-arrow-circle-right"></i>
												</button>
											</div>
										</div>
									</form>
                                                
                                                
                                                
											</div>
											
										</div>
									</div>
								</div>
							</div>
							<!-- end: PANLEL TABS -->
						</div>
					</div>