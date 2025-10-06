//  =============================== ABOUT AINITIALIZING ELEMENTS ======================================
let crossbtn = document.getElementById('crossbtn');
let nav = document.querySelector('nav');
let home = document.getElementById('home');
let download = document.getElementById('d');
//  initializing the link elements 
let intro  = document.getElementById('intro');
let about  = document.getElementById('about');
let review = document.getElementById('review');
let contact = document.getElementById('contact');
// ======================== ABOUT  THE LINKS HOVER ======================================
intro.addEventListener('click',()=>{
    about.style.borderBottom = "none";
    review.style.borderBottom = "none";
    contact.style.borderBottom = "none";
    intro.style.borderBottom = "1px solid yellow";
});
about.addEventListener('click',()=>{
    intro.style.borderBottom = "none";
    review.style.borderBottom = "none";
    contact.style.borderBottom = "none";
    about.style.borderBottom = "1px solid yellow";
});
review.addEventListener('click',()=>{
    intro.style.borderBottom = "none";
    about.style.borderBottom = "none";
    contact.style.borderBottom = "none";
    review.style.borderBottom = "1px solid yellow";
});
contact.addEventListener('click',()=>{
    intro.style.borderBottom = "none";
    about.style.borderBottom = "none";
    review.style.borderBottom = "none";
    contact.style.borderBottom = "1px solid yellow";
});
// ====================== ABOUT HOME BUTTON ===============================
home.addEventListener('click',function(){
    home.style.display = "none";
    crossbtn.style.display = "block";
    nav.style.display = "block";
    download.style.display = "block";
    document.querySelector('ul').style.display = "block";
 
});

// ================  ABOUT CROSS BUTTON =============================
crossbtn.addEventListener('click',()=>{
    download.style.display = "none";
    crossbtn.style.display = "none";
    home.style.display = "block";
    nav.style.display = "flex";
});
// ======================== Gallery Image Button =========================
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let pr2 = document.querySelector('.pr2');
let pr1 = document.querySelector('.pr1');
btn1.addEventListener('click',function(){
    btn1.style.backgroundColor = 'yellow';
    pr1.style.display = 'flex';
    document.querySelector('.fimg').style.display = "block";
    pr2.style.display = 'none';
    btn2.style.backgroundColor = "gray";
    btn3.style.backgroundColor = "gray";
    btn4.style.backgroundColor = "gray";
    
});

btn2.addEventListener('click',function(){
    btn2.style.backgroundColor = 'yellow';
    pr2.style.display = 'flex';
    document.querySelector('.himg').style.display = "block";
    pr1.style.display = 'none';
    btn1.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    btn4.style.backgroundColor = 'gray';
   
});

// ============= ABOUT BTN3 AND BTN4 ==============================

btn3.addEventListener('click',function(){
    pr1.style.display = "block";
    pr2.style.display = "none";
    document.querySelector('.fimg2').style.display = "block";
    btn3.style.backgroundColor = "yellow";
    btn1.style.backgroundColor = "gray";
    btn2.style.backgroundColor = "gray";
    btn4.style.backgroundColor = "gray"
  
});
btn4.addEventListener('click',()=>{
    pr1.style.display = "none";
    pr2.style.display = "block";
    document.querySelector('.himg2').style.display = "block";
    btn3.style.backgroundColor = "gray";
    btn1.style.backgroundColor = "gray";
    btn2.style.backgroundColor = "gray";
    btn4.style.backgroundColor = "yellow"
});
// ============================== FORM ==========================
document.querySelector('input').addEventListener('focus',function(){
    document.querySelector('input').style.border = "none";
});

// ========================= ABOUT FTD CALSS & FREQUENTLY ASKED QUESTIONS ==============================
document.getElementById('ftd').addEventListener('mouseover',function(){
    document.querySelector('.ftd1').style.display = "block";
});
document.querySelector('.ftd1').addEventListener('click',function(){
    document.querySelector('.ftd1').style.display = "none";
});
