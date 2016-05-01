 <div class="page-head">
                        <!-- BEGIN PAGE TITLE -->
                        <div class="page-title">
                            <h1>Restaurant
                                <small>cool, comfortable and easily customizable range slider with skins support</small>
                            </h1>
                        </div>
                        <!-- END PAGE TITLE -->
                        <!-- BEGIN PAGE TOOLBAR -->
                        <div class="page-toolbar">
                            <!-- BEGIN THEME PANEL -->
                            <div class="btn-group">
                                   <a data-placement="left" data-original-title="Restaurant" class="btn btn-circle btn-icon-only green tooltips" href="<?php echo site_url('restaurant/addrestaurant'); ?>">
                                                                        <i class="fa fa-plus"></i>
                                                                    </a>
                            </div>
                            <!-- END THEME PANEL -->
                        </div>
                        <!-- END PAGE TOOLBAR -->
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
                        </li>
                    </ul>                 
                    

       <div id="alertbox"></div>
<div class="row" id="#blockui_sample_1_portlet_body">
    <div class="col-md-12">
       
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-cogs"></i>Manage Restaurant </div>
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
                            <th>Restaurant Name </th>
                            <th>Image</th>
                            <th> Contact Person </th>
                            <th> Contact # </th>
                            <th> City Name </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                     <?php $num=1; foreach($restaurant_record->result() as $restaurant){?>
                        <tr id="restaurantid<?php echo $restaurant->restaurantid ?>">
                            <th><?php echo $num++ ?> </th>
                            <td> <?php echo $restaurant->rest_name ?> </td>
                            <th><img  src="<?php echo base_url() ?>assets/images/restaurant_logo/thumbs/<?php echo $restaurant->rest_logo ?>" style="width:30px; height:30px" alt="" class="tooltips" data-placement="top" title="<?php echo $restaurant->rest_name;?>"></th>
                            <td><?php echo $restaurant->rest_contactperson ?></td>
                            <td><?php echo  $restaurant->rest_contactno ?></td>
                            <td><?php echo $restaurant->ci_name ?> </td>
                            <td align="center" style="width:160px">
                            <a href="<?php echo site_url('restaurant/editrestaurant/'.$restaurant->restaurantid); ?>" data-original-title="Edit Restaurant" data-placement="top" class="btn btn-xs btn-teal tooltips"><span class="glyphicon glyphicon-edit"></span></a>
                            <a data-original-title="Delete Restaurant" data-placement="top" class="btn btn-xs btn-bricky tooltips" href="javascript:void(0)" onclick="delete_restaurant_byrestaurantid(<?php echo $restaurant->restaurantid ?>)"><span class="glyphicon glyphicon-trash"></span></a>
                            <a data-original-title="View Detail" data-placement="top" class="btn btn-xs btn-bricky tooltips" href="javascript:void(0)" onclick="delete_classroom_byclassroomid(<?php echo $restaurant->restaurantid ?>)"><span class="glyphicon glyphicon-info-sign"></span></a>
                             <?php if($restaurant->rest_workingstatus=='Activated'){ ?>   
                                     <span id="workingstatus<?php echo $restaurant->restaurantid ?>"><a data-original-title="Working Status Activated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_restaurant_byrestaurantid(<?php echo $restaurant->restaurantid ?>, 'Deactivated')"><span class="glyphicon glyphicon-ok"></span></a></span>
                              <?php } else{?>
                                      <span id="workingstatus<?php echo $restaurant->restaurantid ?>"><a data-original-title="Working Status Deactivated" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="activated_deactivated_restaurant_byrestaurantid(<?php echo $restaurant->restaurantid ?>, 'Activated')"><span class="glyphicon glyphicon-remove"></span></a></span>
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
