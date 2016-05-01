<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<title>Fesco/Login</title>
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
	<body class="login example1">
		<div class="main-login col-sm-4 col-sm-offset-4">
              <?php if($this->session->flashdata('msg')) {?>      
                    <div class="alert alert-danger alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;<?php echo $this->session->flashdata('msg') ?></div>	 	
                    <?php } ?>
			<div class="logo">
           Social School
			</div>
			<!-- start: LOGIN BOX -->
			<div class="box-login">
				<h3>Sign in to your account</h3>
				<p>
					Please enter your username and password to log in.
				</p>
                <form class="form-login" action="<?php echo site_url('parents/login')  ?>" method="post">
					<div class="errorHandler alert alert-danger no-display">
						<i class="fa fa-remove-sign"></i> You have some form errors. Please check below.
					</div>
					<fieldset>
						<div class="form-group">
							<span class="input-icon">
								<input type="text" name="palo_username" class="form-control"  placeholder="Username">
								<i class="fa fa-user"></i> </span>
                                <span class="alertrequired"><?php echo form_error('palo_username'); ?></span>
						</div>
						<div class="form-group">
							<span class="input-icon">
								<input type="password"  name="palo_password" id="password" class="form-control" placeholder="Password">
								<i class="fa fa-lock"></i> 
                                <a href="javascript:void(0)" class="forgot">I forgot my password</a>
                                </span>
                                 <span class="alertrequired"><?php echo form_error('palo_password'); ?></span>
						</div>
						<div class="form-actions">
							<label for="remember" class="checkbox-inline">
								<input type="checkbox" class="grey remember" id="remember" name="remember" value="remember">
								Keep me signed in
							</label>
							<button type="submit" class="btn btn-bricky pull-right">
								Login <i class="fa fa-arrow-circle-right"></i>
							</button>
						</div>
					</fieldset>
				</form>    
			</div>
            
            <!-- start: FORGOT BOX -->
			<div class="box-forgot">
				<h3>Forget Password?</h3>
				<p>
					Enter your e-mail address below to reset your password.
				</p>
				<form class="form-forgot">
					<div class="errorHandler alert alert-danger no-display">
						<i class="fa fa-remove-sign"></i> You have some form errors. Please check below.
					</div>
					<fieldset>
						<div class="form-group">
							<span class="input-icon">
								<input type="email" class="form-control" name="email" placeholder="Email">
								<i class="fa fa-envelope"></i> </span>
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
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
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