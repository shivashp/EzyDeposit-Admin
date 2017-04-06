get_branches();
var branch_json;

//Get all the branches and place them in table
function get_branches() {
  $.ajax({
      url: basepath + "branches",
      type: "GET",
      beforeSend: function() {
      },
      success: function(data) {

        branch_json = data.data;
        var str= BRANCH_TOP;
        for(var i = 0; i< data.data.length; i++){
          var id = data.data[i].id;
          var name = data.data[i].name;
          var code = data.data[i].branch_code;
          var address = data.data[i].address;
          var verified = data.data[i].verified;
          str += "<tr>";
          str += "                                                    <td>"+name+"<\/td>";
          str += "                                                    <td>"+code+"<\/td>";
          if(!verified){
            str += "                                                    <td><span class = \"label label-danger\">Unverified<\/span><\/td>";
          } else {
            str += "                                                    <td><span class = \"label label-success\">verified<\/span><\/td>";
          }

          str += "                                                    <td class=\"text-right\">";
          if(!verified) {
            str += "                                                        <a href=\"#\" data-id = \""+i+"\" class=\"verify btn btn-sm btn-info btn-icon \">verify<\/a>";
            str += "                                                        <a href=\"#\" data-id = \""+i+"\" class=\"edit btn btn-sm btn-success btn-icon \"><i class=\"material-icons\">edit<\/i><\/a>";
          } else {
            str += "                                                        <a href=\"#\" data-id = \""+i+"\" class=\"edit btn btn-sm btn-success btn-icon \"><i class=\"material-icons\">edit<\/i><\/a>";
          }

          str += "                                                    <\/td>";
          str += "                                                <\/tr>";

        }
        str += BRANCH_BOTTOM;
        $(".content").html(str);
        $("#datatables-branch").DataTable();
      },
      error: function(error) {
        console.log("Error");
      },
  });
}

// Add Single Branch
function add_branch() {
  var name = $("#branch-name").val();
  var code = $("#branch-code").val();
  var address = $("#branch-address").val();
  $.ajax({
      url: basepath + "branches",
      type: "POST",
      dataType: 'json',
      beforeSend: function() {
        $(".button-text").attr("disable", "true");
      },
      data: JSON.stringify({
        "name" :name,
        "branch_code": code,
        "address": address,
        "remarks": ''
      }),
      success: function(data) {
        $(".button-text").attr("disable", "false");
        $("#main-form")[0].reset();
        if(data.status == 'fail'){
            if(data.code == 409){
              demo.showNotification('top','right','Branch Already Exists!', 'danger');
            } else {
              demo.showNotification('top','right','Unknown Error Occurred', 'danger');
            }
        } else {
          toggle_top_menu(get_branches());
          demo.showNotification('top','right','Branch Added Successfully', 'success');
        }
      },
      error: function(error) {
        $(".loader").hide();
        $(".button-text").attr("disable", "false");
        console.log("Error");
      },
  });// Ajax
}

// Prepares the data to be updated
function edit_branch(i){
  $("#branch-name").val(branch_json[i].name);
  $("#branch-code").val(branch_json[i].branch_code);
  $("#branch-address").val(branch_json[i].address);
  $("#sp-save-btn").html("Update Branch");
  $("#sp-save-btn").attr("id","sp-edit-btn");
  $("#sp-edit-btn").attr("data-id", branch_json[i].id)
  toggle_top_menu();
}

//Updates the branche
function update_branch(id) {
  var id = $("#sp-edit-btn").attr("data-id");
  var name = $("#branch-name").val();
  var code = $("#branch-code").val();
  var address = $("#branch-address").val();
  $.ajax({
      url: basepath + "branches/"+id,
      type: "PUT",
      contentType: 'application/json',
      beforeSend: function() {
        $(".button-text").attr("disable", "true");
      },
      data: JSON.stringify({
        "name" :name,
        "branch_code": code,
        "address": address,
        "remarks": ''
      }),
      success: function(data) {
        $(".button-text").attr("disable", "false");
        $("#main-form")[0].reset();
        $("#sp-edit-btn").html("Add Branch");
        $("#sp-edit-btn").attr("id", "sp-save-btn");
        if(data.status == 'fail'){
            if(data.code == 409){
              demo.showNotification('top','right','Branch Update Unsuccessful!', 'danger');
            } else {
              demo.showNotification('top','right','Unknown Error Occurred', 'danger');
            }
        } else {
          get_branches();
          toggle_top_menu();
          demo.showNotification('top','right','Branch Updated Successfully', 'success');
        }


      },
      error: function(error) {
        $(".button-text").attr("disable", "false");
        console.log("Error");
      },
  });// Ajax
}

//Handles Refresh click event
$(document).delegate("#refresh", "click", function () {
  get_branches();
  demo.showNotification('top','right','Refresh Successful!', 'primary');
})
// Handles add button click
$(document).delegate("#sp-save-btn", "click", function () {
  add_branch();
})

// Handles edit button click
$(document).delegate(".edit", "click", function() {
  var i = $(this).attr("data-id")
  edit_branch(i);
})

$("#sp-edit-btn").click(function() {
  update_branch();
})
