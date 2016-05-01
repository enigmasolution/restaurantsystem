 <div class="page-head">
                        <!-- BEGIN PAGE TITLE -->
                        <div class="page-title">
                            <h1>Category
                                <small>cool, comfortable and easily customizable range slider with skins support</small>
                            </h1>
                        </div>
                        <!-- END PAGE TITLE -->
                        <!-- BEGIN PAGE TOOLBAR -->
                        <div class="page-toolbar">
                            <!-- BEGIN THEME PANEL -->
                            <div class="btn-group">
                                   <a data-placement="left" data-original-title="Category" class="btn btn-circle btn-icon-only green tooltips" href="<?php echo site_url('category/addcategory'); ?>">
                                                                        <i class="fa fa-plus"></i>
                                                                    </a>
                            </div>
                            <!-- END THEME PANEL -->
                        </div>
                        <!-- END PAGE TOOLBAR -->
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
                        </li>
                    </ul>                 
                    
  <?php if($this->session->flashdata('msg')) {?>      
           <div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;<?php echo $this->session->flashdata('msg') ?></div>	 	
  <?php } ?>       
    <div id="alertbox"></div>
    



  
   <div class="row ">
                        <div class="col-md-12">
                            <!-- BEGIN SAMPLE FORM PORTLET-->
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption">
                                       <span class="glyphicon glyphicon-search"></span>
                                        <span class="caption-subject font-red sbold uppercase">SEARCH</span>
                                    </div>
                                    <div class="actions">
                                        <a href="javascript:;" class="btn btn-circle btn-icon-only btn-default">
                                            <i class="icon-cloud-upload"></i>
                                        </a>
                                        <a href="javascript:;" class="btn btn-circle btn-icon-only btn-default">
                                            <i class="icon-wrench"></i>
                                        </a>
                                        <a href="javascript:;" class="btn btn-circle btn-icon-only btn-default">
                                            <i class="icon-trash"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <form role="form" id="form_sample_2" action="<?php echo site_url('category/') ?>"  method="post">
                                    <div class="form-body">
                                            <div class="alert alert-danger display-hide">
                                                <button data-close="alert" class="close"></button> You have some form errors. Please check below. </div>
                                            <div class="alert alert-success display-hide">
                                                <button data-close="alert" class="close"></button> Your form validation is successful! </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail2" >Restaurant <span class="required" aria-required="true">*</span></label>&ensp;
                                          
                                               
                                                   <select class="form-control" name="restaurantid">
                                                     <option value="">--- SELECT ---</option>
                                                    <?php foreach($restaurant_record->result() as $restaurant){?>
                                                       <option value="<?php echo $restaurant->restaurantid ?>" <?php if(set_value('restaurantid')==$restaurant->restaurantid){echo 'selected="selected"';} ?>><?php echo $restaurant->rest_name ?></option>
                                                    <?php }?>
                                                  </select>     
                                                <small><span class="font-red"><?php echo form_error('restaurantid'); ?></span></small>
                                                
                                            </div>
                                       </div>     
                                          
                                        
                                       
                                       
                                         <div class="form-group">
                                            <label for="exampleInputEmail2" style="margin-top:30px"> <span class="required" aria-required="true"></span></label>
                                        <button class="btn green" type="submit"><span class="glyphicon glyphicon-search"></span>&ensp;SEARCH</button>&ensp;
                                        <button type="reset" class="btn dark">Reset</button>&ensp;
                                        </div>
                                        
                                    </div>
                                    </form>
                                   <br/>
                                </div>
                            </div>
                            <!-- END SAMPLE FORM PORTLET-->
                        </div>
                    </div>
   
      

<?php if(isset($flag)){?>    
		<?php if($category_record->num_rows()>0){?>       
<div class="row">
    <div class="col-md-12">
       
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-cogs"></i>Manage Category of <?php echo $category_record->row()->rest_name ?></div>
                <div class="tools">
                    <a class="collapse" href="javascript:;" data-original-title="" title=""> </a>
                    <a class="config" data-toggle="modal" href="#portlet-config" data-original-title="" title=""> </a>
                    <a class="reload" href="javascript:;" data-original-title="" title=""> </a>
                    <a class="remove" href="javascript:;" data-original-title="" title=""> </a>
                </div>
            </div>
            <div class="portlet-body flip-scroll" style="display: block;">
                <table class="table table-bordered table-striped flip-content table-hover">
                    <thead class="flip-content">
                        <tr class="font-red-flamingo" style="background-color:#E7ECF1">
                            <th> # </th>
                            <th>Category Name </th>
                            <th>Category Description </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                     <?php $num=1; foreach($category_record->result() as $category){?>
                        <tr id="categoryid<?php echo  $category->categoryid ?>">
                            <th><?php echo $num++ ?> </th>
                            <td><?php echo $category->cate_name ?></td>
                            <td><?php echo  $category->cate_description ?></td>
                            <td align="center" style="width:160px">
                            <a href="<?php echo site_url('category/editcategory/'.$category->categoryid); ?>" data-original-title="Edit Category" data-placement="top" class="btn btn-xs btn-teal tooltips"><span class="glyphicon glyphicon-edit"></span></a>
                            <a data-original-title="Delete Category" data-placement="top" class="btn btn-xs btn-bricky tooltips" href="javascript:void(0)" onclick="delete_category_bycategoryid(<?php echo $category->categoryid ?>)"><span class="glyphicon glyphicon-trash"></span></a>
                            <?php if($category->cate_workingstatus=='Activated'){ ?>   
                                     <span id="workingstatus<?php echo  $category->categoryid ?>"><a data-original-title="Working Status Activated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_category_bycategoryid(<?php echo $category->categoryid ?>, 'Deactivated')"><span class="glyphicon glyphicon-ok"></span></a></span>
                              <?php } else{?>
                                      <span id="workingstatus<?php echo $category->categoryid ?>"><a data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_category_bycategoryid(<?php echo $category->categoryid ?>, 'Activated')"><span class="glyphicon glyphicon-remove"></span></a></span>
                              <?php }?>
                         </td>
                        </tr> 
                     <?php }?>   
                    </tbody>
                </table>
            </div>
           </div>
        <!-- END SAMPLE TABLE PORTLET-->
        </div>
     </div>
 <?php }else{?>
          <table class="table table-bordered table-striped" style="margin-top: 0 !important; margin-bottom: 0 !important;">
           <tr>
           <th>
            <div class="page-header">
                   <center>
                       <h1><span class="glyphicon glyphicon-alert"></span>&ensp;Category record has not been found ! Try Again</h1>
                   </center>
            </div>
            </th>
            </tr>
          </table>
           <?php }?>
      <?php }?>