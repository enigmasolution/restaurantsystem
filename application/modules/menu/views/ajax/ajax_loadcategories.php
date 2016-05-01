<option value="">--- SELECT ---</option>
<?php foreach($categories_record->result() as $category){?>
      <option value="<?php echo $category->categoryid ?>"><?php echo $category->cate_name ?></option>
<?php }
   