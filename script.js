'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnsCloseModal=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show-modal');

const openmodal=function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    };
const closemodal=function(){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    };
for(let i=0;i<btnsOpenModel.length;i++)
    btnsOpenModel[i].addEventListener('click',openmodal);

// for closing the modal
btnsCloseModal.addEventListener('click',closemodal);
overlay.addEventListener('click',closemodal);

// for escape key
document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closemodal();
    }
})




