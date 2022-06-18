function addUser(){
    user_name = document.getElementById("user_Name").value;
    localStorage.setItem("user_Name",user_name);
    window.location="kwitter_room.html";
};