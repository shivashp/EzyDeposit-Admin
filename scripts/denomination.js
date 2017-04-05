get_denominations();


function get_denominations() {
  $.ajax({
      url: basepath + "denominations",
      type: "GET",
      beforeSend: function() {
      },
      success: function(data) {
        console.log(data);
        var str="";
        for(var i = 0; i< data.data.length; i++){
          var id = data.data[i].id;
          var unit = data.data[i].denomination_unit;
          str += "<tr>";
          str += "                                                    <td>"+unit+"<\/td>";
          str += "                                                    <td class=\"text-right\">";
          str += "                                                        <a href=\"javascript:;\" data-id=\""+id+"\" class=\"edit btn btn-sm btn-success btn-icon like\"><i class=\"material-icons\">edit<\/i><\/a>";
          str += "                                                    <\/td>";
          str += "                                                <\/tr>";
        }
        $("#table-body").html(str);        
        $("#datatables").DataTable();
      },
      error: function(error) {
        console.log("Error");
      },
  });
}

$(".sp-save-btn").click(function() {
  var unit = $("#denomination-unit").val();
  $.ajax({
      url: basepath + "denominations",
      type: "POST",
      dataType: 'json',
      beforeSend: function() {
        //$(".loader").show();
        $(".button-text").attr("disable", "true");
      },
      data: JSON.stringify({
        "denomination_unit" : unit,
      }),
      success: function(data) {
        $("#denomination-unit").val("");
        $(".button-text").attr("disable", "false");
        console.log(data);
        if(data.status == 'fail'){
            if(data.code == 409){
              demo.showNotification('top','right','Denomination Already Exists!', 'danger');
            } else {
              demo.showNotification('top','right','Unknown Error Occurred', 'danger');
            }
        } else {
          get_denominations();
          $(".form-input").slideUp("slow");
          demo.showNotification('top','right','Denomination Added Successfully', 'primary');
        }


      },
      error: function(error) {
        $(".loader").hide();
        $(".button-text").attr("disable", "false");
        console.log("Error");
      },
  });// Ajax
})
