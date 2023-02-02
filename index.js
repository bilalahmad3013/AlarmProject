var audio=document.getElementById('audio');
var alarmList=document.getElementById('upcoming-alarm-list');

var alarmListArray=[];

//Updating Time
setInterval(updateTime,1000);

function updateTime(){
    var time=new Date();

var HH=time.getHours();
if(HH>=0 && HH<10){
 HH=formatTime(HH);
}
var MM=time.getMinutes();
if(MM>=0 && MM<10){
    MM=formatTime(MM);
}

var SS=time.getSeconds();
if(SS>=0 && SS<10){
    SS=formatTime(SS);
}
const presentTime=HH + ":" + MM + ":" +SS;
  var set=document.getElementById('currTime');
  
    set.innerText=HH + ":" + MM + ":" +SS;
    
    if(alarmListArray.includes(presentTime)){
        playaudio();
        alert("Hey Wake up BUDDY!!!!");
    }
}
// Updating Time done per Second


//format Time 

function formatTime(time){
    if(time<10 && time.length !=2){
        return "0"+time;
    }
    return time;
}

//format time done

//play Alarm
function playaudio(){
 
  console.log(audio);
  audio.play();
}

//play Alarm

//Stop Alarm
function stopAlarm(){
    
  audio.pause();
}

//Stop Alarm


//to add new alarm

function addNewAlarm(newAlarm){
    
const html=
`<li class="listItem" style="margin-top:20px">
    <span>${newAlarm}&nbsp&nbsp </span>
    <button class="delAlarm" onclick="remove(this.value)" value="${newAlarm}">Delete Alarm</button>
</li>`

alarmList.innerHTML+=html;
}

// new alarm addition done


let formDetail=document.getElementById('addAlarm');


var setAlarm=document.getElementById('submit');

//  Adding alarm time in my array  when SET button is clicked

setAlarm.addEventListener('click' , function(){
    let hr=formatTime(formDetail.hour.value);
    if(hr==='0'){
        hr='00';
    }
    let min=formatTime(formDetail.minute.value);
    if(min==='0' || min===""){
        min='00';
    }
    let sec=formatTime(formDetail.second.value);
    if(sec==='0' || sec===""){
        sec='00';
    }
    console.log(hr , min, sec);
    
    const newAlarmTime=hr+":"+min+":"+sec;

  
     if((hr >0 && hr<25) &&(min>-1 && min<60) &&(sec>-1 && sec<60)){

    if(!alarmListArray.includes(newAlarmTime)){
        alarmListArray.push(newAlarmTime);
        addNewAlarm(newAlarmTime);
        formDetail.reset();

    }
    else{
        alert(`Alarm for ${newAlarmTime} aleady set`);
    }
    }
    
   

    else{
        alert("Invalid time");
        formDetail.reset();
    }
})


   


// addition done into the array


//Remove alarm from the upcoming-alarm-list when delete is clicked

alarmList.addEventListener('click', e=>{
   
    if(e.target.classList.contains("delAlarm")){
        e.target.parentElement.remove();
    }
    
})


//Remove alarm time from the array list


function remove(value){
   var newList=[] ;
   for(var i=0;i<alarmListArray.length;i++){
       if(alarmListArray[i]!=value){
        newList.push(alarmListArray[i]);
       }
   }
 alarmListArray=newList;
}