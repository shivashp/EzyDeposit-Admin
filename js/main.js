function generate_sidebar() {
  var str="";
  str += "<div class=\"logo\">";
  str += "                <a href=\"#\" class=\"simple-text\">";
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
  str += "                    <li class=\"active\">";
  str += "                        <a href=\"branch.html\">";
  str += "                            <i class=\"material-icons\">dashboard<\/i>";
  str += "                            <p>Branch Setup<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li>";
  str += "                        <a href=\"#\">";
  str += "                            <i class=\"material-icons\">people<\/i>";
  str += "                            <p>User Setup<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li>";
  str += "                        <a href=\"#\">";
  str += "                            <i class=\"material-icons\">note<\/i>";
  str += "                            <p>Logs<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                    <li>";
  str += "                        <a href=\"#\">";
  str += "                            <i class=\"material-icons\">settings<\/i>";
  str += "                            <p>Settings<\/p>";
  str += "                        <\/a>";
  str += "                    <\/li>";
  str += "                <\/ul>";
  str += "            <\/div>";
  $(".sidebar").html(str);
}



$(document).ready(function() {
  generate_sidebar();

  $(".sp-add-btn").click(function() {
    $(".form-input").slideDown("slow");
  });//sp-add-btn

  $(".sp-save-btn").click(function(){
    $(".form-input").slideUp("slow");
    demo.showNotification('top','right','Branch Added Successfully');
  })

})//Document
