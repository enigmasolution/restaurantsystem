/**
Custom module for you to write your own javascript functions
**/
var Custom = function () {

    // private functions & variables

    var myFunc = function(text) {
        alert(text);
    }

    // public functions
    return {

        //main function
        init: function () {
            //initialize here something.            
        },

        //some helper function
        doSomeStuff: function () {
            myFunc();
        }

    };

}();

jQuery(document).ready(function() {    
   Custom.init(); 
});

/***
Usage
***/
//Custom.doSomeStuff();

function get_imagesize(){
	  if (typeof($("#avator")[0].files) != "undefined") {
                var size =$("#avator")[0].files[0].size;
				$('#fakesize').val(size);
            } else {
                alert("This browser does not support HTML5.");
            }
			
			
			/* var fileUpload = document.getElementById("avator");
            if (typeof (fileUpload.files) != "undefined") {
                var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
                alert(size + " KB.");
            } else {
                alert("This browser does not support HTML5.");
            }*/
			
			
	 
/*var x = document.getElementById("avator");
   var txt = "";
   if ('files' in x) {
       if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
          for (var i = 0; i < x.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = x.files[i];
            if ('name' in file) {
                txt += "name: " + file.name + "<br>";
            }
            if ('size' in file) {
				alert(file.size);
                txt += "size: " + file.size + " bytes <br>";
            }
        }
    }
} */
	 
}

jQuery(document).ready(function(e) {
	jQuery(document).on('mouseenter','.tooltips', function(){
       jQuery(this).tooltip('show');
	  // alert('dsfsdfs');
     });
    jQuery(document).on('mouseleave','.tooltips', function(){
      jQuery(this).tooltip('hide');
     });
});
