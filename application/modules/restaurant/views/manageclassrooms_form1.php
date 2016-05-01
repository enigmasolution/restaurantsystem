<?php
	$total=count($branch_record->result());
 ?>    
                      <ol class="breadcrumb">
								<li>
										Classroom
								</li>
                                <li>
                                 <a href="<?php echo site_url('classroom/addclassroom/'.$schoolid) ?>">
									Add Classroom
                                  </a>  
								</li>
								<li>
                                <a href="<?php echo site_url('classroom/manageclassroom/'.$schoolid) ?>">
									Manage Classroom
                                    </a>
								</li>
								
							</ol>
                            
                             <div style="float:right; position:relative; margin-top:-55px; height:10px">
                             <a href="<?php echo site_url('classroom/addclassroom/'.$schoolid); ?>">
                                      <i class="clip-plus-circle-2 circle-icon circle-bricky pulse tooltips" id="object" data-original-title="Add Classroom" data-placement="top"></i>
                                </a>
                            </div> 
                    
                    <br/>
                     <?php if($this->session->flashdata('msg')) {?>      
                                 <div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success !</strong>&emsp;<?php echo $this->session->flashdata('msg') ?></div>	 	
                                   <br/>
					            <?php } ?>
              <div class="row">
						<div class="col-md-12">
							<!-- start: DYNAMIC TABLE PANEL -->
							<div class="panel panel-default">
								<div class="panel-heading">
									<i class="fa fa-external-link-square"></i>
								<span class="glyphicon glyphicon-plus"></span>&ensp;Manage Classroom
								</div>
						   <div class="panel-body">
                             
                           
                             <div id="alertbox"></div>
                             <?php if($total>0){ ?>
                               <?php foreach($branch_record->result() as $branch){?>
                              <?php if($schoolid==0){ ?>
                                <div class="page-header">
								<h1> <?php echo $branch->sc_name; ?> <small>Branch</small></h1>
							    </div> 
                                <?php }?> 
		                      <div class="table-responsive">
                                <table class="display table-hover managetable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th> # </th>
                                                    <th style="width:200px">Classroom Name</th>
                                                    <th>Classroom Description</th>
                                                    <th style="width:90px">Post Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <?php if($schoolid==0){$branchid=$branch->schoolid;}else{$branchid= $schoolid;} ?>
                                                <?php  $classroom_record=$this->classroom_lib->all_classroom_bybranchid($branchid); ?>
                                            <?php $num=1; foreach($classroom_record->result() as $classroom){?>
                                                 <tr id="classroomid<?php echo $classroom->classroomid ?>">
                                                    <td align="center"><?php echo $num++; ?></td>
                                                    <td><?php echo $classroom->clro_name ?></td>
                                                    <td><?php echo $classroom->clro_description ?></td> 
                                                    <td><?php echo date('d/m/Y', strtotime($classroom->clro_postdate)) ?></td>
                                                    <td align="center" style="width:100px">
													<a href="<?php echo site_url('classroom/updateclassroom/'.$schoolid.'/'.$classroom->classroomid); ?>" data-original-title="Edit Classroom" data-placement="top" class="btn btn-xs btn-teal tooltips"><span class="glyphicon glyphicon-edit"></span></a>
													<a data-original-title="Remove" data-placement="top" class="btn btn-xs btn-bricky tooltips" href="javascript:void(0)" onclick="delete_classroom_byclassroomid(<?php echo $classroom->classroomid ?>)"><span class="glyphicon glyphicon-trash"></span></a>
                                                   <?php if($classroom->clro_systemstatus=='Enable'){ ?>   
                                                       <span id="systemstatus<?php echo $classroom->classroomid ?>"><a data-original-title="System Status Enable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classroom_byclassroomid(<?php echo $classroom->classroomid ?>, 'Disable')"><span class="clip-checkmark"></span></a></span>
                                                       <?php } else{?>
                                                       <span id="systemstatus<?php echo $classroom->classroomid ?>"><a data-original-title="System Status Disable" data-placement="top" class="btn btn-xs btn-blue tooltips" href="javascript:void(0)" onclick="enable_disable_classroom_byclassroomid(<?php echo $classroom->classroomid ?>, 'Enable')"><span class="clip-close-3"></span></a></span>
                                                   <?php }?>
                                                 </td>
                                                </tr>
                                            <?php }?>
                                            </tbody>
                                        </table>
                                 </div> 
                               <?php if($schoolid!=0){break;}  }  ?>
                              <?php   }  ?>  
								</div>
							</div>
							<!-- end: DYNAMIC TABLE PANEL -->
						</div>
					</div>
					<!-- end: PAGE CONTENT-->
                    
                     
                            