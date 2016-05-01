<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<title>Social School/<?php echo $page_title ?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta content="" name="description" />
		<meta content="" name="author" />
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/plugins/bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/plugins/font-awesome/css/font-awesome.css">
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/fonts/style.css">
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/main.css">
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/main-responsive.css">
		<link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/theme_light.css" type="text/css" id="skin_color">
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/customstyle.css"/>
	</head>
    
	<body class="login example2">
           <div class="main-login col-md-4 col-md-offset-4">
              <?php if($this->session->flashdata('msg')) {?>      
                    <div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&ensp;<?php echo $this->session->flashdata('msg') ?></div>	 	
                    <?php } ?>
               <?php if(isset($msg)) {?>   
                               <div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&ensp;<?php echo $msg; ?></div>		
		                          <?php } ?>     
			<div class="logo">
           Social School
			</div>
          
                   
	                      
			<!-- start: LOGIN BOX -->
			<div class="box-login" <?php /*?>style="display:<?php if($hint=='setpassword' || $hint==''){echo 'block';}else{echo 'none';} ?>"<?php */?>>
				<h3>Set New Password</h3>
				<p>
					Please enter your New Password <?php if($activationkey ==''){echo 'and Activation Key';} ?> to log in.
				</p>
                <form class="form-login" action="<?php echo site_url('admin/setpassword')  ?>" method="post">
					<input type="hidden" name="adminid" value="<?php echo $adminid ?>">
                    <input type="hidden" name="hint" value="setpassword">
                    <div class="errorHandler alert alert-danger no-display">
						<i class="fa fa-remove-sign"></i> You have some form errors. Please check below.
					</div>
					<fieldset>
						
						<div class="form-group">
							<span class="input-icon">
								<input type="password"  name="password" id="password" class="form-control" placeholder="Password" >
								<i class="fa fa-lock"></i> 
                                <a href="javascript:void(0)" class="forgot">I forgot my password</a>
                                </span>
                                 <span class="alertrequired"><?php echo form_error('password'); ?></span>
						</div>
                        
                        
                        <div class="form-group">
							<span class="input-icon">
								<input type="password" placeholder="Password Again" name="password_again" class="form-control">
								<i class="fa fa-lock"></i> </span>
                                <span class="alertrequired"><?php echo form_error('password_again'); ?></span>
						</div>
                        
                         <div class="form-group">
							<span class="input-icon">
								<input type="text" name="activationkey" value="<?php echo $activationkey ?>"  class="form-control"  placeholder="Activation Key" <?php if($activationkey !=''){echo 'readonly'; } ?>>
								<i class="fa fa-user"></i> </span>
                                <span class="alertrequired"><?php echo form_error('activationkey'); ?></span>
						</div>
                         
						<div class="form-actions">
							<button type="submit" class="btn btn-bricky pull-right">
							Set New Password <i class="fa fa-arrow-circle-right"></i>
							</button>
						</div>
					</fieldset>
				</form>    
			</div>
            
            <!-- start: FORGOT BOX -->
			<div class="box-forgot" <?php /*?>style="display:<?php if($hint=='forgetpassword'){echo 'block';}else{echo 'none';} ?>"<?php */?>>
				<h3>Forget Password ?</h3>
				<p>
					Enter your e-mail address below to reset your password.
				</p>
				<form class="form-forgot" action="<?php echo site_url('admin/login')  ?>" method="post">
					<input type="hidden" name="hint" value="forgetpassword">
                    <div class="errorHandler alert alert-danger no-display">
						<i class="fa fa-remove-sign"></i> You have some form errors. Please check below.
					</div>
					<fieldset>
						<div class="form-group">
							<span class="input-icon">
								<input type="email" class="form-control" name="email" placeholder="Email">
								<i class="fa fa-envelope"></i> </span>
                                <span class="alertrequired"><?php echo form_error('email'); ?></span>
						</div>
						<div class="form-actions">
							<a class="btn btn-light-grey go-back">
								<i class="fa fa-circle-arrow-left"></i> Back
							</a>
							<button type="submit" class="btn btn-bricky pull-right">
								Submit <i class="fa fa-arrow-circle-right"></i>
							</button>
						</div>
					</fieldset>
				</form>
			</div>
			<!-- end: FORGOT BOX -->
   
			<div class="copyright">
				 &copy; <?php echo date('Y')?> Fesco
			</div>
			<!-- end: COPYRIGHT -->
 </div>
        
        <!--[if gte IE 9]><!-->
		<script src="<?php echo base_url() ?>assets/admin/plugins/jquery-1.11.1/jquery-1.11.1.js"></script>
		<!--<![endif]-->
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap/js/bootstrap.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/blockUI/jquery.blockUI.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/iCheck/jquery.icheck.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/perfect-scrollbar/src/jquery.mousewheel.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/perfect-scrollbar/src/perfect-scrollbar.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/less/less-1.5.0.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/jquery-cookie/jquery.cookie.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/js/main.js"></script>
		<!-- end: MAIN JAVASCRIPTS -->
		<!-- start: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
		<script src="<?php echo base_url() ?>assets/admin/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/js/login.js"></script>
		<!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
		<script>
			jQuery(document).ready(function() {
				Main.init();
				Login.init();
			});
		</script>
	</body>
	<!-- end: BODY -->
</html>