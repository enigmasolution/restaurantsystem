   <div class="page-head">
                        <!-- BEGIN PAGE TITLE -->
                        <div class="page-title">
                            <h1>Restaurant
                                <small>cool, comfortable and easily customizable range slider with skins support</small>
                            </h1>
                        </div>
                        <!-- END PAGE TITLE -->
                    </div>
                    
   <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a href="#">Restaurant</a>
                            <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        <li>
                            <a href="<?php echo site_url('restaurant/addrestaurant') ?>">Add Restaurant</a>
                              <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                         <li>
                            <a href="<?php echo site_url('restaurnat/') ?>">Manage Restaurant</a>
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        
                         <li>
                            <a href="<?php echo site_url('restaurnat/editrestaurant/'.$restaurant_updation->restaurantid) ?>">Edit Restaurant</a>
                            
                        </li>
                    </ul>                 
                    
                    
                    
  <div class="row">
                        <div class="col-md-12">
                            <!-- BEGIN VALIDATION STATES-->
                            <div class="portlet light portlet-fit portlet-form bordered">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-settings font-red"></i>
                                        <span class="caption-subject font-red sbold uppercase">Restaurant</span> <small>Edit Restaurant</small>
                                    </div>
                                    <div class="actions">
                                        <div data-toggle="buttons" class="btn-group btn-group-devided">
                                            <label class="btn btn-transparent red btn-outline btn-circle btn-sm active">
                                                <input type="radio" id="option1" class="toggle" name="options">Actions</label>
                                            <label class="btn btn-transparent red btn-outline btn-circle btn-sm">
                                                <input type="radio" id="option2" class="toggle" name="options">Settings</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <!-- BEGIN FORM-->
                                    <form role="form"  id="form_sample_1" action="<?php echo site_url('restaurant/editrestaurant/'.$restaurant_updation->restaurantid) ?>" method="post" novalidate="novalidate" enctype="multipart/form-data">
                                        <input type="hidden" name="restaurantid" value="<?php echo $restaurant_updation->restaurantid ?>"  />
                                        <div class="form-body">
                                            <div class="alert alert-danger display-hide">
                                                <button data-close="alert" class="close"></button> You have some form errors. Please check below. </div>
                                            <div class="alert alert-success display-hide">
                                                <button data-close="alert" class="close"></button> Your form validation is successful! </div>
                                            
                                           
                                            
                                       <div class="col-md-6">     
                                            <div class="form-group">
                                                <label>Restaurant Name <span class="required" aria-required="true"> * </span></label>
                                                     <input name="rest_name" type="text" value="<?php echo $restaurant_updation->rest_name ?>" class="form-control">
                                                     <small><span class="font-red" style="float:right"><?php echo form_error('rest_name'); ?></span></small>
                                            </div>
                                            <div class="form-group">
                                                <label>
                                                Contact Person <span class="required" aria-required="true"> * </span>
                                                </label>
                                                    <input name="rest_contactperson" type="text" value="<?php echo $restaurant_updation->rest_contactperson ?>" class="form-control">
                                                   <small><span class="font-red" style="float:right"><?php echo form_error('rest_contactperson'); ?></span></small>
                                            </div>
                                            <div class="form-group">
                                                <label>Contact # <span class="required" aria-required="true"> * </span>
                                                </label>
                                                    <input name="rest_contactno" value="<?php echo $restaurant_updation->rest_contactno ?>" type="text" class="form-control">
                                                    <small><span class="font-red" style="float:right"><?php echo form_error('rest_contactno'); ?></span></small>
                                                    <span class="help-block"> e.g: http://www.demo.com or http://demo.com </span>
                                               
                                            </div>
                                            
                                            <div class="form-group">
                                             <label>Restaurant Current Logo</label>
                                            <div class="thumbnail">
                                                <input type="hidden" name="rest_oldavator"  value="<?php echo  $restaurant_updation->rest_logo ?>" class="form-control"> 
                                                <img style="width: 100%; height: 255px; display: block;" alt="100%x200" src="<?php echo base_url() ?>assets/images/restaurant_logo/<?php echo $restaurant_updation->rest_logo ?>" data-src="<?php echo base_url() ?>assets/images/restaurant_logo/<?php echo $restaurant_updation->rest_logo ?>">
                                            </div>
                                            </div>
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                        </div>    
                                        <div class="col-md-6">      
                                            <div class="form-group">
                                                <label>
                                                  City Name <span class="required" aria-required="true"> * </span>
                                                </label>
                                                <select class="form-control" name="cityid">
                                                  <option value="">--- SELECT ---</option>
                                                  <?php foreach($cities_record->result() as $city){?>
                                                     <option value="<?php echo $city->cityid ?>" <?php if($restaurant_updation->cityid==$city->cityid){echo 'selected="selected"';} ?>><?php echo $city->ci_name ?></option>
                                                  <?php }?>
                                              </select>
                                                <small><span class="font-red" style="float:right"><?php echo form_error('cityid'); ?></span></small>
                                            </div>
                                            <div class="form-group">
                                                <label >
                                                Restaurant Address <span class="required" aria-required="true"> * </span>
                                                </label>
                                                   <textarea name="rest_address" class="form-control" ><?php echo $restaurant_updation->rest_address ?></textarea>
                                                     <small><span class="font-red" style="float:right"><?php echo form_error('rest_address'); ?></span></small>
                                            </div>
                                            <div class="form-group">
                                                <label>
                                                 Restaurant Description <span class="required" aria-required="true"> * </span>
                                                </label>
                                                    <textarea name="rest_description" class="form-control" ><?php echo $restaurant_updation->rest_description ?></textarea>
                                                     <small><span class="font-red" style="float:right"><?php echo form_error('rest_description'); ?></span></small>
                                                    <span class="help-block"> e.g: 5500 0000 0000 0004 </span>
                                            </div>
                                            
                                            
                                            
                                           <div class="form-group">
                                                   <div class="clearfix margin-top-10">
                                                        <span class="label label-success">NOTE!</span> Logo (max image size allowed 5 mb (supported format jpg, png, jpeg)). 
                                                        </div>
                                                        
                                                    <div data-provides="fileinput" class="fileinput fileinput-new">
                                                        <div style="width: 200px; height: 150px;" data-trigger="fileinput" class="fileinput-preview thumbnail"> </div>
                                                        <div>
                                                            <span class="btn red btn-outline btn-file">
                                                                <span class="fileinput-new"> Select Logo </span>
                                                                <span class="fileinput-exists"> Change </span>
                                                                <input type="file" name="avator" id="avator" onchange="get_imagesize()"> </span>
                                                                <input type="hidden" value="fake"  name="fakeavator">
                                                            <a data-dismiss="fileinput" class="btn red fileinput-exists" href="javascript:;"> Remove </a>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix margin-top-10">
                                                        <span class="alertrequired"><?php echo form_error('fakeavator'); ?></span> 
                                                        </div>
                                                </div>
                                                  
                                        </div>    
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-12 col-md-offset-9">
                                                    <button class="btn green" type="submit">Save Changes</button>&ensp;
                                                    <a href="<?php echo site_url('restaurant/') ?>" class="btn white">Cancel<a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- END FORM-->
                                </div>
                            </div>
                            <!-- END VALIDATION STATES-->
                        </div>
                    </div>                  
  
