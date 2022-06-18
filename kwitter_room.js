
//ADD YOUR FIREBASE LINKS 
const firebaseConfig = {
      apiKey: "AIzaSyBp5ZaEE9nXVKXfKVw_OkTB2MSpE5gv3zQ",
      authDomain: "kwitter-chat-6a7eb.firebaseapp.com",
      databaseURL: "https://kwitter-chat-6a7eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-chat-6a7eb",
      storageBucket: "kwitter-chat-6a7eb.appspot.com",
      messagingSenderId: "539188723186",
      appId: "1:539188723186:web:558cfa556bab385860ff6b",
      measurementId: "G-ENJTZDTBKE"
    };

    firebase.initializeApp(firebaseConfig);
     var userName = localStorage.getItem("user_Name");
     document.getElementById("name_display").innerHTML="Welcome :" + userName + ":)";
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("Room_names",Room_names);
row = "<div class='room_name' id="+Room_names +" onclick= 'redirectToRoomName(this.id)'> #" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row ;

      //End code
      });});}
getData();

function redirectToRoomName(Name){
      console.log("Name",Name)
      localStorage.setItem("room_name",Name);
      window.location= "kwitter_page.html";
};

function add_Rooms(){
      var room_Name = document.getElementById("add_Room").value ;
      localStorage.setItem("room_name",room_Name);
      firebase.database().ref("/").child(room_Name).update({
            purpose:"Adding The Room Name "
      });
      console.log("room_Name",room_Name);
 window.location="kwitter_page.html"; 
};

function logout(){
      localStorage.removeItem("user_Name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
};