var basepath = 'http://139.59.37.232:4000/'
function generate_sidebar(choice) {
  let branch = user = log = setting = denomination = '';
  switch (choice) {
    case 'branch':
      branch = 'active'
      break;
    case 'user':
      user = 'active'
      break;
    case 'log':
      log = 'active'
      break;
    case 'setting':
      setting = 'active'
      break;
    case 'denomination':
      denomination = 'active'
      break;
  }
  var str="";
  str += "<div class=\"logo\">";
  str += "                <a href=\"javascript:;\" class=\"simple-text\">";
  str += "                    EzyDeposit";
  str += "                <\/a>";
  str += "            <\/div>";
  str += "            <div class=\"logo logo-mini\">";
  str += "                <a href=\"#\" class=\"simple-text\">";
  str += "                    ED";
  str += "                <\/a>";
  str += "            <\/div>";
  str += "            <div class=\"sidebar-wrapper\">";
  str += "                <ul class=\"nav\">";
  str += "                    <li class=\" "+branch+"\">";
  str += "                        <a href=\"branch.html\">";
  str += "                            <i class=\"material-icons\">dashboard<\/i>";
  str += "                            <p>Branch Setup<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li class=\""+denomination+"\">";
  str += "                        <a href=\"denomination.html\">";
  str += "                            <i class=\"material-icons\">note<\/i>";
  str += "                            <p>Denomination<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li class=\""+user+"\">";
  str += "                        <a href=\"user.html\">";
  str += "                            <i class=\"material-icons\">people<\/i>";
  str += "                            <p>User Setup<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li class=\""+log+"\">";
  str += "                        <a href=\"#\">";
  str += "                            <i class=\"material-icons\">note<\/i>";
  str += "                            <p>Logs<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li class=\""+setting+"\">";
  str += "                        <a href=\"#\">";
  str += "                            <i class=\"material-icons\">settings<\/i>";
  str += "                            <p>Settings<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                <\/ul>";
  str += "            <\/div>";
  $(".sidebar").html(str);
}

function toggle_top_menu() {
  $(".form-input").slideToggle("slow");
  $('.sp-add-btn').html($('.sp-add-btn').text() == 'Add' ? 'Close' : 'Add');
}


$(document).ready(function() {
  $(".sp-add-btn").click(function() {
    toggle_top_menu();
  });//sp-add-btn

})//Document
