let spaceto = document.getElementById("NotificationSpace")
let ReadAll = document.getElementById("ReadAll")
let NotifactionNumber = document.getElementById("numberofnotification")

let NumberForView = 0
let Nots = [{type : "event",image : 'assets/images/avatar-mark-webber.webp' ,visu : "Nonvue",Pseudo : "Mark Webber", typeofevent : "Reacted to your recent post", nameofevent : "My first tournament today!",timetoadd : "1minute"},
{type : "follow" ,image : 'assets/images/avatar-angela-gray.webp' ,visu : "Nonvue" ,Pseudo : "Angela Gray", typeofevent : "followed you", timetoadd : "5minute"},
{type : "event",image : 'assets/images/avatar-jacob-thompson.webp' ,visu : "Nonvue",Pseudo : "Jacob Thompson", typeofevent : "has joined your group", nameofevent : "Chess Club",timetoadd : "1 day ago"},
{type : "message",image : 'assets/images/avatar-rizky-hasanuddin.webp' ,visu : "vue",Pseudo : "Rizky Hasanuddin", typeofevent : "sent you a private message", message : "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",timetoadd : "5 day ago"},
{type : "Commentaire",image : 'assets/images/avatar-kimberly-smith.webp' ,visu : "vue",Pseudo : "Kimberly smith", typeofevent : "commented on your picture", imagepicture : "assets/images/image-chess.webp",timetoadd : "1 week ago"},
{type : "event",image : 'assets/images/avatar-nathan-peterson.webp' ,visu : "vue",Pseudo : "Nathan peterson", typeofevent : "Reacted to your recent post", nameofevent : "5 end-game strategies to <br>increase you win rate",timetoadd : "1 day ago"},
{type : "event",image : 'assets/images/avatar-anna-kim.webp' ,visu : "vue",Pseudo : "Anna Kim", typeofevent : "left the group", nameofevent : "Chess club",timetoadd : "1 day ago"}
]

chargeNotification(Nots)
function chargeNotification(Nots){
    NumberForView = 0
    spaceto.innerHTML = ''
for(let i = 0; i < Nots.length; i++){
  console.log(Nots[i])
  if(Nots[i].visu === "vue"){
    
   if(Nots[i].type == "event"){
   spaceto.innerHTML += '<div class="NotificationCard"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +'&ensp; </div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><div class="evenementName">'+ Nots[i].nameofevent +'&ensp;</div></div>'
   }else if(Nots[i].type == "follow"){
    spaceto.innerHTML += '<div class="NotificationCard"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +'&ensp; </div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div></div>'

   }else if(Nots[i].type == "message"){
    spaceto.innerHTML += '<div class="NotificationCardforMessage"><div class="NormalCard"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +' &ensp;</div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div></div><div class="messagearea">'+ Nots[i].message +'&ensp;</div></div>'

   }else if(Nots[i].type == "Commentaire"){
    spaceto.innerHTML += '<div class="NotificationCard"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +' &ensp;</div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><img class="imagepicture" src="'+ Nots[i].imagepicture +'"></div>'
   }
}else{
    NumberForView += 1
    if(Nots[i].type == "event"){
        spaceto.innerHTML += '<div class="NotificationCardnotDiscorve"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +'&ensp; </div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><div class="evenementName">'+ Nots[i].nameofevent +'&ensp;</div><div class="pointtofocus" onclick="ReadthisNotifaction('+ i +')"></div></div>'
        }else if(Nots[i].type == "follow"){
         spaceto.innerHTML += '<div class="NotificationCardnotDiscorve"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +'&ensp; </div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><div class="pointtofocus" onclick="ReadthisNotifaction('+ i +')"></div></div>'
     
        }else if(Nots[i].type == "message"){
         spaceto.innerHTML += '<div class="NotificationCardforMessagenotdicorve"><div class="NormalCard"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +' &ensp;</div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><div class="pointtofocus" onclick="ReadthisNotifaction('+ i +')"></div></div><div class="messagearea">'+ Nots[i].message +'&ensp;</div></div>'
     
        }else if(Nots[i].type == "Commentaire"){
         spaceto.innerHTML += '<div class="NotificationCardnotDiscorve"><img class="imagepseudo" src="' + Nots[i].image +'"> <div class="pseudo">' + Nots[i].Pseudo +' &ensp;</div> <div class="subjet">'+ Nots[i].typeofevent +'&ensp;</div><div class="pointtofocus" onclick="ReadthisNotifaction('+ i +')"></div><img class="imagepicture" src="'+ Nots[i].imagepicture +'"></div>'
        }



}


}
NotifactionNumber.innerHTML = '' +NumberForView+''

}


function ReadthisNotifaction(thisNot)
{
   Nots[thisNot].visu = "vue"
   chargeNotification(Nots)

}




  function MarkallRead(Nots){
      for(let i = 0; i < Nots.length; i++){
        Nots[i].visu = "vue"
        chargeNotification(Nots);
      }
     // chargeNotification(Nots);
    }



function AddComment(Image,pseudo, imagecomment)
{
  Nots.push({type : "Commentaire",image : Image ,visu :  "Nonvue",Pseudo : pseudo, typeofevent : "commented on your picture", imagepicture : imagecomment,timetoadd : "1 week ago"})    
  chargeNotification(Nots);
}

function AddFollow(Image,pseudo)
{
    Nots.push({type : "follow" ,image : Image ,visu :  "Nonvue" ,Pseudo : pseudo, typeofevent : "followed you", timetoadd : "5minute"})
  chargeNotification(Nots);
}

function AddMessage(Image,pseudo,Message)
{
    Nots.push({type : "message",image : Image ,visu :  "Nonvue",Pseudo : pseudo, typeofevent : "sent you a private message", message : Message,timetoadd : "5 day ago"})
  chargeNotification(Nots);
}
function AddEvent(Image,pseudo,typeOF,TOelement)
{
    Nots.push({type : "event",image : Image ,visu :  "Nonvue",Pseudo : pseudo, typeofevent : typeOF, nameofevent : TOelement,timetoadd : "1 day ago"})
  chargeNotification(Nots);
}