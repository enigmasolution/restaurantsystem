    <div class="page-head">
                        <!-- BEGIN PAGE TITLE -->
                        <div class="page-title">
                            <h1>Menu Item
                                <small>cool, comfortable and easily customizable range slider with skins support</small>
                            </h1>
                        </div>
                        <!-- END PAGE TITLE -->
                    </div>
                    
   <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a href="#">Menu</a>
                            <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        <li>
                            <a href="<?php echo site_url('menu/addmenu') ?>">Add Menu Item</a>
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                          <li>
                            <a href="<?php echo site_url('menu/') ?>">Manage Menu Item</a>
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </li>
                        
                         <li>
                            <a href="<?php echo site_url('menu/editmenu/'.$menu_updation->menuid) ?>">Edit Menu</a>
                            
                        </li>
                    </ul>                 
                    
                    
            <div class="row" id="blockui_sample_1_portlet_body">
                        <div class="col-md-12">
                            <!-- BEGIN VALIDATION STATES-->
                            <div class="portlet light portlet-fit portlet-form bordered">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-settings font-red"></i>
                                        <span class="caption-subject font-red sbold uppercase">Menu Item</span> <small>Edit Menu</small>
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
                                    <form role="form"  id="form_sample_3" action="<?php echo site_url('menu/editmenu/'.$menu_updation->menuid) ?>"  method="post" novalidate="novalidate">
                                        <input type="hidden" name="menuid" value="<?php echo $menu_updation->menuid ?>">
                                        <div class="form-body">
                                            <div class="alert alert-danger display-hide">
                                                <button data-close="alert" class="close"></button> You have some form errors. Please check below. </div>
                                            <div class="alert alert-success display-hide">
                                                <button data-close="alert" class="close"></button> Your form validation is successful! </div>
                                                
                                       <div class="col-md-6">     
                                            <div class="form-group">
                                                <label>Restaurant Name <span class="required" aria-required="true"> * </span></label>
                                                   <select class="form-control" name="restaurantid" id="restaurantid" onchange="addmenu_categories_for_menu_byrestaurantid()">
                                                     <option value="">--- SELECT ---</option>
                                                    <?php foreach($restaurant_record->result() as $restaurant){?>
                                                       <option value="<?php echo $restaurant->restaurantid ?>" <?php if($menu_updation->restaurantid == $restaurant->restaurantid){echo 'selected="selected"';} ?>><?php echo $restaurant->rest_name ?></option>
                                                    <?php }?>
                                                  </select>     
                                                <small><span class="font-red" style="float:right"><?php echo form_error('restaurantid'); ?></span></small>    
                                            </div>
                                            
                                            <div class="form-group">
                                                <label>Category Name <span class="required" aria-required="true"> * </span></label>
                                                  <select class="form-control" name="categoryid" id="categoryid">
                                                   <option value="">--- SELECT ---</option>
                                                   <?php $category_record=$this->menu_lib->get_categories_byrestaurantid($menu_updation->restaurantid); ?>
                                                    <?php foreach($category_record->result() as $category){?>
                                                       <option value="<?php echo $category->categoryid ?>" <?php if($menu_updation->categoryid == $category->categoryid){echo 'selected="selected"';} ?>><?php echo $category->cate_name ?></option>
                                                    <?php }?>
                                                 </select>
                                               <small><span class="font-red" style="float:right"><?php echo form_error('categoryid'); ?></span></small>
                                            </div>
                                            
                                            
                                            
                                            <div class="form-group">
                                                <label>
                                                Menu Item Name <span class="required" aria-required="true"> * </span>
                                                </label>
                                                 <input name="menu_name" type="text" value="<?php echo $menu_updation->menu_name ?>" class="form-control">
                                                 <small><span class="font-red" style="float:right"><?php echo form_error('menu_name'); ?></span></small>
                                            </div>
                                          
                                        </div>    
                                        <div class="col-md-6">
                                              <div class="form-group">
                                                <label>Menu Item Price <span class="required" aria-required="true"> * </span>
                                                </label>
                                                    <input name="menu_price" type="text" value="<?php echo $menu_updation->menu_price ?>" class="form-control">
                                                    <small><span class="font-red" style="float:right"><?php echo form_error('menu_price'); ?></span></small>
                                            </div> 
                                                  
                                             <div class="form-group">
                                                <label>Menu Item Description
                                                </label>
                                                    <textarea name="menu_description" class="form-control" ><?php echo $menu_updation->menu_description ?></textarea>
                                                    <small><span class="font-red" style="float:right"><?php echo form_error('menu_description'); ?></span></small>
                                            </div> 
                                                     
                                        </div>    
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-12 col-md-offset-9">
                                                    <button class="btn green" type="submit">Save Changes</button>&ensp;
                                                    <a href="<?php echo site_url('menu/') ?>" class="btn white">Cancel<a>
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
