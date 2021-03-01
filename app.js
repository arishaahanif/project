function check(){
    var score = 0;
    var name = document.getElementById('name')
    var right_awnser_1= document.getElementById('right_1')
    var right_awnser_2= document.getElementById('right_2')
    var right_awnser_3= document.getElementById('right_3')
    if(right_awnser_1.checked == true){
        score++
    }
    if(right_awnser_2.checked == true){
        score++
    }
    if(right_awnser_3.checked == true){
        score++
    }
if(name.value===''){
    alert('please enter a name')
}
else{
    firebase.database().ref('name').set(name.value)
    firebase.database().ref('score').set(score)
    // firebase.database().ref('%').set(percentage)
    document.write('your score is'+score+'/3')

}
}