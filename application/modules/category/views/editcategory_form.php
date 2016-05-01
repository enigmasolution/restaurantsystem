    <div class="page-head">
                        <!-- BEGIN PAGE TITLE -->
                        <div class="page-title">
                            <h1>Category
                                <small>cool, comfortable and easily customizable range slider with skins support</small>
                            </h1>
                        </div>
                        <!-- END PAGE TITLE -->
                    </div>
                    
   <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a href="#">Category</a>
                            <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        <li>
                            <a href="<?php echo site_url('category/addcategory') ?>">Add Category</a>
                            <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        <li>
                            <a href="<?php echo site_url('category/') ?>">Manage Category</a>
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        
                         <li>
                            <a href="<?php echo site_url('category/editcategory/'.$category_updation->categoryid) ?>">Edit Category</a>
                            
                        </li>
                    </ul>                 
                    
                   <div class="row">
                        <div class="col-md-12">
                            <!-- BEGIN VALIDATION STATES-->
                            <div class="portlet light portlet-fit portlet-form bordered">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-settings font-red"></i>
                                        <span class="caption-subject font-red sbold uppercase">Category</span> <small>Edit Category</small>
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
                                    <form role="form"  id="form_sample_2" action="<?php echo site_url('category/editcategory/'.$category_updation->categoryid) ?>"  method="post" novalidate="novalidate">
                                        <input type="hidden" name="categoryid" value="<?php echo $category_updation->categoryid ?>"  />
                                        <div class="form-body">
                                            <div class="alert alert-danger display-hide">
                                                <button data-close="alert" class="close"></button> You have some form errors. Please check below. </div>
                                            <div class="alert alert-success display-hide">
                                                <button data-close="alert" class="close"></button> Your form validation is successful! </div> 
                                       <div class="col-md-6">     
                                            <div class="form-group">
                                                <label>Restaurant Name <span class="required" aria-required="true"> * </span></label>
                                                   <select class="form-control" name="restaurantid">
                                                     <option value="">--- SELECT ---</option>
                                                    <?php foreach($restaurant_record->result() as $restaurant){?>
                                                       <option value="<?php echo $restaurant->restaurantid ?>" <?php if($category_updation->restaurantid == $restaurant->restaurantid){echo 'selected="selected"';} ?>><?php echo $restaurant->rest_name ?></option>
                                                    <?php }?>
                                                  </select>     
                                                <small><span class="font-red" style="float:right"><?php echo form_error('restaurantid'); ?></span></small>    
                                            </div>
                                            <div class="form-group">
                                                <label>
                                                Category Name <span class="required" aria-required="true"> * </span>
                                                </label>
                                                   <input name="cate_name" type="text" value="<?php echo $category_updation->cate_name ?>" class="form-control">
                                                  <small><span class="font-red" style="float:right"><?php echo form_error('cate_name'); ?></span></small>
                                            </div>
                                          
                                        </div>    
                                        <div class="col-md-6">      
                                             <div class="form-group">
                                                <label>Category Description <span class="required" aria-required="true"> * </span>
                                                </label>
                                                   <textarea name="cate_description" class="form-control" ><?php echo $category_updation->cate_description ?></textarea>
                                                  <small><span class="font-red" style="float:right"><?php echo form_error('cate_description'); ?></span></small>
                                            </div> 
                                                     
                                        </div>    
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-12 col-md-offset-9">
                                                    <button class="btn green" type="submit">Save Changes</button>&ensp;
                                                    <a href="<?php echo site_url('category/') ?>" class="btn white">Cancel<a>
                                                    
                                                    
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





