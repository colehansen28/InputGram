// Follow Button

 
const followBtn = document.querySelector(".followbtn");
let followtext = document.querySelector(".followtext");

followBtn.addEventListener("click", function(){
    myFollowerCount = document.getElementById("count").innerHTML = "1257"
    followtext.innerText = "unfollow"
    if(followtext.innerText = "unfollow"){
        followBtn.addEventListener("click", function(){
            myFollowerCount = document.getElementById("count").innerHTML = "1256"
            followtext.innerText = "follow"
        })
       
    }
})

// Modal Variables

// modal-1
const modal1= document.querySelector('.modal-1');
const openModal1 = document.querySelector('.open-1-modal');
const closeModal1 = document.querySelector('.close-1-modal');

openModal1.addEventListener('click', function(){
    modal1.show();
})

closeModal1.addEventListener('click', function(){
    modal1.close();
})

// modal-2
const modal2 = document.querySelector('.modal-2');
const openModal2 = document.querySelector('.open-2-modal');
const closeModal2 = document.querySelector('.close-2-modal');

openModal2.addEventListener('click', function(){
    modal2.show();
})

closeModal2.addEventListener('click', function(){
    modal2.close();
})

// modal-3
const modal3 = document.querySelector('.modal-3');
const openModal3 = document.querySelector('.open-3-modal');
const closeModal3 = document.querySelector('.close-3-modal');

openModal3.addEventListener('click', function(){
    modal3.show();
})

closeModal3.addEventListener('click', function(){
    modal3.close();
})

// modal-4
const modal4 = document.querySelector('.modal-4');
const openModal4 = document.querySelector('.open-4-modal');
const closeModal4 = document.querySelector('.close-4-modal');

openModal4.addEventListener('click', function(){
    modal4.show();
})

closeModal4.addEventListener('click', function(){
    modal4.close();
})

// modal-5
const modal5 = document.querySelector('.modal-5');
const openModal5 = document.querySelector('.open-5-modal');
const closeModal5 = document.querySelector('.close-5-modal');

openModal5.addEventListener('click', function(){
    modal5.show();
})

closeModal5.addEventListener('click', function(){
    modal5.close();
})

// modal-6
const modal6 = document.querySelector('.modal-6');
const openModal6 = document.querySelector('.open-6-modal');
const closeModal6 = document.querySelector('.close-6-modal');

openModal6.addEventListener('click', function(){
    modal6.show();
})

closeModal6.addEventListener('click', function(){
    modal6.close();
})

// modal-7
const modal7 = document.querySelector('.modal-7');
const openModal7 = document.querySelector('.open-7-modal');
const closeModal7 = document.querySelector('.close-7-modal');

openModal7.addEventListener('click', function(){
    modal7.show();
})

closeModal7.addEventListener('click', function(){
    modal7.close();
})

// modal-8
const modal8 = document.querySelector('.modal-8');
const openModal8 = document.querySelector('.open-8-modal');
const closeModal8 = document.querySelector('.close-8-modal');

openModal8.addEventListener('click', function(){
    modal8.show();
})

closeModal8.addEventListener('click', function(){
    modal8.close();
})

// modal-9
const modal9 = document.querySelector('.modal-9');
const openModal9 = document.querySelector('.open-9-modal');
const closeModal9 = document.querySelector('.close-9-modal');

openModal9.addEventListener('click', function(){
    modal9.show();
})

closeModal9.addEventListener('click', function(){
    modal9.close();
})
