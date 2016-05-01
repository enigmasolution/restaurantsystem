 <option value="">--- SELECT ---</option>
 <option value="0">--- NEW CLASS ---</option>
<?php foreach($classes_record->result() as $class){?>
      <option value="<?php echo $class->classid ?>"><?php echo $class->cl_name ?></option>
<?php }
   