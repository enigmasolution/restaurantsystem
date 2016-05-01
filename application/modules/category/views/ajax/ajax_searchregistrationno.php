<option value=""></option>
<?php foreach($registrationno_record->result() as $registrationno){ ?>
     <option value="<?php echo  $registrationno->st_registrationno ?>"><?php echo  $registrationno->st_registrationno ?></option>
  <?php   } ?>
  