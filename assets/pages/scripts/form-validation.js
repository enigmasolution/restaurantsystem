var FormValidation = function () {

    // basic validation
    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#form_sample_1');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);
            
	$.validator.addMethod("imageSize", function (value, element) {
		if (element.files.length== 0) {	
		         return true;
		       }else{
				 
		for (var i = 0; i < element.files.length; i++) {
            var file = element.files[i];
				if ('size' in file) {
                       file.size   
                   }
			    }   
			   }

			if (element.files.length != 0) {	 
			 if (file.size < 5242880) {
                return true;
            } else {
                return false;
            }
			}
			 
			  
        }, 'Logo size <= 5MB.');
			
			
			
			
            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
               rules: {
       rest_name: {
                    maxlength:50,
                    required: true
                },
       rest_contactperson: {
			        maxlength:50,
                    required: true
                },
       rest_contactno: {
		            maxlength:50,
                    required: true
                },
       cityid: {
                    required: true
                },
       rest_address: {
		             maxlength:500,
                    required: true
                },
       rest_description: {
		             maxlength:500,
                    required: true
                },
	   avator :{
		          accept: "image/*",
	              imageSize:true
				  },					
            },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
					 form[0].submit();
                }
            });


    }


 var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_sample_2');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);
            
            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
      rules: {
	   restaurantid: {
                    required: true
                      },	
       cate_name: {
                    maxlength:50,
                    required: true
                },
       cate_description: {
		             maxlength:500,
                     required: true
                },				
            },
                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
					 form[0].submit();
                }
            });


    }
	
	 var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#form_sample_3');
            var error3 = $('.alert-danger', form3);
            var success3 = $('.alert-success', form3);
            
            form3.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
     rules: {
	   restaurantid: {
                    required: true
                      },
	   categoryid: {
                    required: true
                      },					  	
       menu_name: {
                    maxlength:50,
                    required: true
                },
	    menu_price: {
                    number: true,
					maxlength:6,
					required: true
                },			
       menu_description: {
		             maxlength:500
                }				
            },
                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success3.hide();
                    error3.show();
                    App.scrollTo(error3, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success3.show();
                    error3.hide();
					 form[0].submit();
                }
            });


    }
	

    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation2();
            handleValidation3();

        }

    };

}();

jQuery(document).ready(function() {
    FormValidation.init();
});