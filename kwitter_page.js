//YOUR FIREBASE LINKS
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
    userName = localStorage.getItem("user_Name");
    roomName = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("Chat_input").value; 
          firebase.database().ref(roomName).push({
                name : userName,
                message : msg ,
                likes : 0
          });
          document.getElementById("Chat_input").value = "";
    }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id,message_data);
names = message_data["name"];
msg   = message_data["message"];
like  = message_data["likes"]

name_with_tag   =  "<h4>"+names+"<img class='user_tick' scr='tick.png'> </h4>";
msg_with_tag    =  "<h4 class='message_h4'>"+msg+"</h4>";

hit             =  "<button class='btn btn-warning'id="+firebase_message_id+" values="+like+" onclick='updateLike(this.id)'>";

span_tag        =  "<span class='glyphicon glyphicon-thumbs-up'>LIKE:"+like+"</span></button> <hr>";

row             =  name_with_tag+msg_with_tag+hit+span_tag
                   document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_Name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
};
function updateLike(message_id){
      console.log("You Have Given A Like",message_id);
      likes= document.getElementById(message_id).value;
      updatelike = Number(likes)+1
      console.log("Added 1 Like",updateLike);
      firebase.database().ref(roomName).child(message_id).update({
            likes : updateLike
      });
};