jQuery(function() {
  jQuery('.error').hide();//类对象隐藏
  var messagetext = jQuery("textarea#msg");
  messagetext.focusout(function(){
		if (messagetext.val() == ''){messagetext.text('请输入团队口号'); }
  });
  messagetext.focus(function(){
		if (messagetext.val() == '请输入团队口号') {messagetext.text(''); }					   
  });
  jQuery(".myButton").click(function() {//点击确认按钮
    jQuery('.error').hide();//类对象隐藏
	  var name = jQuery("input#name").val();
		if (name=="请输入团队名称" || name == "") {
      jQuery("span#name_error").show();
      jQuery("input#name").focus();
      return false;
    }
	  var names = jQuery("input#names").val();
	  if (names == "请输入团队组员姓名" || names == "") {
      jQuery("span#names_error").show();
      jQuery("input#names").focus();
      return false;
    }

	
	  var numbers = jQuery("input#numbers").val();
	  if (numbers == "请输入团队组员学号" || numbers == "") {
      jQuery("span#numbers_error").show();
      jQuery("input#numbers").focus();
      return false;
    }
	  var msg = jQuery("textarea#msg").val();
	  if (msg == "请输入团队口号" || msg == "") {
		  jQuery("span#msg_error").show();
		  jQuery("textarea#msg").focus();
		  return false;
	  }
	});
	jQuery(".myResetButton").click(function() {//点击确认按钮
		jQuery('.error').hide();//类对象隐藏
		jQuery("input#name").val();
		jQuery("input#names").val();
		jQuery("input#numbers").val();
		jQuery("textarea#msg").text("请输入团队口号");
	});
});

