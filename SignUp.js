var mins =2; 
var secs = mins*60; 

var qusetions;
var randomList=[];
var result=0;
var answers=[];
var index=0;
var d="";
var sum=0;
var studentdata;
var scapedQuestion=[];
var n=0;
var matchechedPassword=false;
function validatePassword(confirm_password )
{
    confirm_password.setCustomValidity("Passwords Don't Match");
     
    
}



class Student{
   

    constructor(fname,lname,Email,gender,password) {
     
    this.fname=fname;
    this.lname=lname;
    this.password=password;
    this.Email=Email;
    this.gender=gender;
    this.grades=0;
    debugger;
    
}
getstudentdata(){
    return this;
}
}



var Datacontroller=(function(){
var fname,lname,Email,gender,password;
    
 var questionList={
     1:{
         question:"I'm very happy _____ in India. I really miss being there.",
         choices:{
             1:"a. to live",
             2:"b. to have lived",
             3:"c. to be lived",
             4:"d. to be living"
         },
         answer:2
     },
     2:{
        question:"They didn't reach an agreement ______ their differences.",
        choices:{
            1:"a. on account of",
            2:"b. due",
            3:"c. because",
            4:"d. owing"
        },
        answer:1
    },
    3:{
        question:"I wish I _____ those words. But now it's too late.",
        choices:{
            1:"a. not having said",
            2:"b. have never said",
            3:"c. never said",
            4:"d. had never said"
        },
        answer:4
    },
    4:{
        question:"The woman, who has been missing for 10 days, is believed _____.",
        choices:{
            1:"a. to be abducted",
            2:"b. to be abducting",
            3:"c. to have been abducted",
            4:"d. to have been abducting"
        },
        answer:3
    },
    5:{
        question:"She was working on her computer with her baby next to _____.",
        choices:{
            1:"a. herself",
            2:"b. her",
            3:"c. her own",
            4:"d. hers"
        },
        answer:2
    },
    6:{
        question:"_____ to offend anyone, she said both cakes were equally good.",
        choices:{
            1:"a. Not wanting",
            2:"b. As not wanting",
            3:"c. She didn't want",
            4:"d. Because not wanting"
        },
        answer:1
    },
    7:{
        question:"_____ in trying to solve this problem. It's clearly unsolvable.",
        choices:{
            1:"a. There's no point",
            2:"b. It's no point",
            3:"c. There isn't point",
            4:"d. It's no need"
        },
        answer:1
    },
    8:{
        question:"Last year, when I last met her, she told me she _____ a letter every day for the last two months.",
        choices:{
            1:"a. had written",
            2:"b. has written",
            3:"c. had been writing",
            4:"d. wrote"
        },
        answer:3
    },
    9:{
        question:"He _____ robbed as he was walking out of the bank.",
        choices:{
            1:"a. had",
            2:"b. did",
            3:"c. got",
            4:"d. were"
        },
        answer:3
    },
    10:{
        question:"_____ forced to do anything. He acted of his own free will.",
        choices:{
            1:"a. In no way was he",
            2:"b. No way he was",
            3:"c. In any way he was",
            4:"d. In any way was he"
        },
        answer:1
    },




 }
 return{
    getquestion:function(){
        return questionList;
    },
    getstudentdata:function (fname,lname,Email,gender,password) {
        return new Student(fname,lname,Email,gender,password);
        
    }

 }
 
  
    

    //debugger;
})();
var UIcontroller=(function(){
var num=9;
    var signUpFields = {
        fname: '#fname',
        lname: '#lname',
        Email: '#Email',
        password: '#password',
        confirmPassword: '#confirmPassword',
        rd1: '#rd1',
        rd2: '#rd2',
        
    }
    var questionfiled={
        questionHead:'#questionHead',
        choice1:'#rd1',
        choice2:'#rd2',
        choice3:'#rd3',
        choice4:'#rd4',
    }


    
    return{
        setIntoMarklist:function (index) {
            //const li = new Node('')
            document.querySelector("#marklist").insertAdjacentHTML('beforeend', "<li id='"+(index)+"' style=' cursor: pointer;'>Question "+(index+1)+"</li>");
        },
        getFieldsData:function(){
            return{
               
            fname:document.querySelector('#fname').value,
            lname:document.querySelector('#lname').value,
            Email:document.querySelector('#Email').value,
            password: document.querySelector( '#password').value,
            confirmPassword: document.querySelector('#confirmPassword').value,
            
            rd1 : document.querySelector('#rd1').value,
            rd2: document.querySelector('#rd2').value,
            }
       
        },
        setquestionn:function(questionHead,choice1,choice2,choice3,choice4 ){
           
            
            document.querySelector('#questionHead').textContent=((index+1)+"- "+questionHead);
            document.querySelector('#r1').textContent=choice1;
            document.querySelector('#r2').textContent=choice2;
            document.querySelector('#r3').textContent=choice3;
            document.querySelector('#r4').textContent=choice4;
           
        },
        getQuestionAnswer:function(){
            return{
                choice1:document.querySelector('#rdi1').value,
                choice2:document.querySelector('#rdi2').value,
                choice3:document.querySelector('#rdi3').value,
                choice4:document.querySelector('#rdi4').value,
               
            
            }
           
        }
        

    }



})();

var Controller=(function(){
   
  
      var password=document.querySelector('#password');
      var confirmPassword=document.querySelector('#confirmPassword');
      var gender="";
      var inputData;
      document.querySelector('#signUpBtn').addEventListener('click',function(){
       
       // debugger;
        //check password & confirm password eqality
      if(password.value=="" ||confirmPassword.value=="" ||password.value!=confirmPassword.value){
         //   debugger;
        validatePassword(confirmPassword);
        }
        //get data from UI controlls
        inputData=UIcontroller.getFieldsData();
        
       if(document.querySelector('#rd1').checked){
          gender=inputData.rd1;
       }
       else if(document.querySelector('#rd2').checked){
        gender=inputData.rd2;
       }
       
        //fill student data
       studentdata=Datacontroller.getstudentdata(inputData.fname,inputData.lname,inputData.Email,gender,inputData.password);
       sessionStorage.setItem("student",JSON.stringify( studentdata));
        //studentdata=new Student(inputData.fname,inputData.lname,inputData.Email,gender,inputData.password);
       // sessionStorage.setItem("student", studentdata);
        //debugger;
      
       if(password.value==confirmPassword.value && password.value!="" && confirmPassword.value!=""){
        event.preventDefault();
        window.location="examPage.html";
       }
        
            
       
    
        //console.log(s);
        

    },false);
    



    ///generate random 5 question

    var random=Math.floor(   Math.random()*10+1);
    console.log(random);
    qusetions=Datacontroller.getquestion();
    for(var i=1;i<=5;i++){
        randomList.push(qusetions[Math.floor(   Math.random()*10+1)]) ; 
    }

    /// display question in exam
    UIcontroller.setquestionn(randomList[0]["question"],randomList[0]["choices"][1],randomList[0]["choices"][2],randomList[0]["choices"][3],randomList[0]["choices"][4])
    debugger;
    
   
    

    
   





})();

function resetRadioButton() {
    document.querySelector('#rdi1').checked=false;
document.querySelector('#rdi2').checked=false;
document.querySelector('#rdi3').checked=false;
document.querySelector('#rdi4').checked=false;
    
}
var stdata={};
function getQuestion(index){
    debugger;
    UIcontroller.setquestionn(randomList[index]["question"],randomList[index]["choices"][1],randomList[index]["choices"][2],randomList[index]["choices"][3],randomList[index]["choices"][4])
    e.preventDefault;
};
    function getquestions(){

    // console.log(sessionStorage.getItem("student"));
    //Student.getstudentdata;
   // debugger;
    var random=Math.floor(   Math.random()*10+1);
    console.log(random);
    qusetions=Datacontroller.getquestion();
    for(var i=1;i<=5;i++){
        randomList.push(qusetions[Math.floor(   Math.random()*10+1)]) ; 
    }
    //debugger;
    //set question and choises
    UIcontroller.setquestionn(randomList[0]["question"],randomList[0]["choices"][1],randomList[0]["choices"][2],randomList[0]["choices"][3],randomList[0]["choices"][4]);
    //get student answer
    //answers=UIcontroller.getQuestionAnswer();
    document.getElementById('radiobtns').addEventListener("click",function(e) {
        //answers=UIcontroller.getQuestionAnswer();
        d=UIcontroller.getQuestionAnswer();
        if(document.querySelector('#rdi1').checked){
            answers[index]=d.choice1;
            console.log("ssssssss"+randomList[0].answer,answers[0]);
            if(answers[0]==randomList[0].answer)
            {
                sum++;
            }
         }
         else if(document.querySelector('#rdi2').checked){
            answers[index]=d.choice2;
            console.log("ssssssss"+randomList[1].answer,answers[1]);
            if(answers[1]==randomList[1].answer)
            {
                sum++;
            }
         }
         else if(document.querySelector('#rdi3').checked){
            answers[index]=d.choice3;
           console.log("ssssssss"+randomList[2].answer,answers[2]);
            if(answers[2]==randomList[2].answer)
            {
                sum++;
            }
           }
           else if(document.querySelector('#rdi4').checked){
            answers[index]=d.choice4;
            console.log("ssssssss"+randomList[3].answer,answers[3]);
            if(answers[3]==randomList[3].answer)
            {
                sum++;
            }
           }
        //debugger;
        //answers.push(e.target.id)
        e.stopPropagation();
       e.cancelBubble=true;
       e.stopImmediatePropagation();
       
              
        
        
        
            })
            document.getElementById("marklist").addEventListener('click',function (e) {
                debugger;
                var questionIndex=e.target.id;
                index=(Number(questionIndex));
                UIcontroller.setquestionn(randomList[questionIndex]["question"],randomList[questionIndex]["choices"][1],randomList[questionIndex]["choices"][2],randomList[questionIndex]["choices"][3],randomList[questionIndex]["choices"][4])
                console.log(e.target.id);
                e.preventDefault;
            })
    

}

function next(){
    index++;
    if(index<5){
        resetRadioButton();

    UIcontroller.setquestionn(randomList[index]["question"],randomList[index]["choices"][1],randomList[index]["choices"][2],randomList[index]["choices"][3],randomList[index]["choices"][4])
debugger    
}
if(index===5){
    index=4;
}

}
function previous(){
    index--;
    if(index>-1){
    UIcontroller.setquestionn(randomList[index]["question"],randomList[index]["choices"][1],randomList[index]["choices"][2],randomList[index]["choices"][3],randomList[index]["choices"][4])
    }
    if(index==-1){
        index=0;
    }


}
function submit() {
    var name=JSON.parse(sessionStorage.getItem('student')).fname+JSON.parse(sessionStorage.getItem('student')).lname
    alert( "hello      "+ name +"    your grade :   "+sum);
    
    
}
function mark() {
    UIcontroller.setIntoMarklist(index);
    scapedQuestion.push(randomList[index]);
    
    
}






//countdown function is evoked when page is loaded 
function countdown() { 

    setTimeout('Decrement()', 60); 

    //document.getElementById("titlell").textContent=seconds.value;
} 

//Decrement function decrement the value. 
function Decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds"); 

        //if less than a minute remaining 
        //Display only seconds value. 
        if (seconds < 59) { 
            seconds.value = secs; 
        } 

        //Display both minutes and seconds 
        //getminutes and getseconds is used to 
        //get minutes and seconds 
        else { 
            minutes.value = getminutes(); 
            seconds.value = getseconds(); 
        } 
        //when less than a minute remaining 
        //colour of the minutes and seconds 
        //changes to red 
        if (mins < 1) { 
            minutes.style.color = "red"; 
            seconds.style.color = "red"; 
        } 
        //if seconds becomes zero, 
        //then page alert time up 
        if (mins < 0) { 
            var name=JSON.parse(sessionStorage.getItem('student')).fname+JSON.parse(sessionStorage.getItem('student')).lname
    
            alert('time up  '+name+'  your grades '+sum); 
            minutes.value = 0; 
            seconds.value = 0; 
        } 
        //if seconds > 0 then seconds is decremented 
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
        } 
    } 
} 

function getminutes() { 
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60); 
    return mins; 
} 

function getseconds() { 
    //take minutes remaining (as seconds) away  
    //from total seconds remaining 
    return secs - Math.round(mins * 60); 
} 

