<!-- start: FOOTER -->
       <div class="row">
		<div class="footer clearfix">
			<div class="footer-inner">
				 &copy; <?php echo date('Y')?> Fesco
			</div>
			<div class="footer-items">
				<span class="go-top"><i class="clip-chevron-up"></i></span>
			</div>
		</div>
        </div>
		<!-- end: FOOTER -->
		<div id="event-management" class="modal fade" tabindex="-1" data-width="760" style="display: none;">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Event Management</h4>
					</div>
					<div class="modal-body"></div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-light-grey">
							Close
						</button>
						<button type="button" class="btn btn-danger remove-event no-display">
							<i class='fa fa-trash-o'></i> Delete Event
						</button>
						<button type='submit' class='btn btn-success save-event'>
							<i class='fa fa-check'></i> Save
						</button>
					</div>
				</div>
			</div>
		</div>
        
		<script src="<?php echo base_url() ?>assets/admin/plugins/jquery-1.11.1/jquery-1.11.1.js"></script>
		
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap/js/bootstrap.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/perfect-scrollbar/src/jquery.mousewheel.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/perfect-scrollbar/src/perfect-scrollbar.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/less/less-1.5.0.min.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/jquery-cookie/jquery.cookie.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/js/main.js"></script>
        
        <script src="<?php echo base_url() ?>assets/admin/plugins/blockUI/jquery.blockUI.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/plugins/DataTables-master/media/js/jquery.dataTables.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/plugins/DataTables-master/media/js/dataTables.bootstrap.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/js/table-data.js"></script>
        
        <script src="<?php echo base_url() ?>assets/admin/plugins/moment-develop/moment.js"></script>
         <script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-datetimepicker-master/src/js/bootstrap-datetimepicker.js"></script>
      
        <script src="<?php echo base_url() ?>assets/admin/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/js/functions.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/js/parentcustomjs.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/plugins/select2-master/select2.js"></script>
       
        <script src="<?php echo base_url() ?>assets/admin/plugins/prettyPhoto/js/jquery.prettyPhoto.js"></script>
        <script src="<?php // echo base_url() ?>assets/admin/plugins/datetimepicker-master/jquery.datetimepicker.js"></script>
		 <script src="<?php echo base_url() ?>assets/admin/plugins/moment/moment.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/js/index.js"></script>
        
        <script src="<?php echo base_url() ?>assets/admin/plugins/iCheck-1.x/icheck.js"></script>
        <script src="<?php echo base_url() ?>assets/admin/plugins/bootstrap-fileupload/bootstrap-fileupload.js"></script>
        
        <script src="<?php echo base_url() ?>assets/admin/plugins/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/js/form-wizard.js"></script>
		<script src="<?php echo base_url() ?>assets/admin/plugins/print/jquery.PrintArea.js"></script>
		<!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
		<script>
			jQuery(document).ready(function() {
				Main.init();
				FormWizard.init();
			});
		</script>
		<script>
		 jQuery(document).ready(function() {
				Main.init();
			});	
		</script>
		</body>
	<!-- end: BODY -->
</html>