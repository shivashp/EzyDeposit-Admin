function get_users() {  
  var str = USER_TOP + USER_BOTTOM;
  $(".content").html(str);
  $("datatables-user").DataTable();
}
