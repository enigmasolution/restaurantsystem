 <option value="">--- SELECT ---</option>
<?php foreach($classes_record->result() as $class){?>
      <option value="<?php echo $class->classid ?>"><?php echo $class->cl_name ?></option>
<?php }
   