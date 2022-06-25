const btns=document.querySelectorAll(".btn");
const pages=document.querySelectorAll(".page");
const close=document.querySelector(".close");
const container=document.querySelector(".container");
btns.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        container.style.transition="1.5s";
        container.classList.remove("container-full");
        setTimeout(() => {
            callMe(index);
            container.classList.add("container-full");
        }, 1000);
    })
})

function callMe(index){
    pages[0].classList.remove("coverMode");
   pages.forEach((page,idx)=>{
    if(idx<=index){
        page.classList.add("page-open");
    }
    else{
        page.classList.remove("page-open"); 
    }
   })
   
}


close.addEventListener("click",()=>{
    contactBlock.style.transform=`scale(0)`;
    container.style.transition="0.3s";
    container.classList.remove("container-full");
        setTimeout(() => {
            callMe(index);
            container.classList.add("container-full");
        }, 2000);
    pages.forEach(page=>{
        page.classList.remove("page-open");
        
    })
pages[0].classList.add("coverMode");
})

const contactBlock=document.querySelector(".contact-block");
btns[4].addEventListener("click",()=>{
    setTimeout(() => {
        contactBlock.style.transform=`scale(1)`;
    }, 2000);
})
// Working when click btn click home
const homeContainer=document.querySelector(".home-container");
btns[0].addEventListener("click",()=>{
  setTimeout(() => {
    homeContainer.classList.add("home-container-show");
  }, 2000);
})
const aboutContainer=document.querySelector(".about-container");
btns[1].addEventListener("click",()=>{
    homeContainer.classList.remove("home-container-show");
    setTimeout(() => {
        aboutContainer.classList.add("about-container-show");
    }, 2000);
})

btns[2].addEventListener("click",()=>{
    aboutContainer.classList.remove("about-container-show");
})



const projectContainer=document.querySelector(".project-container");
btns[3].addEventListener("click",()=>{
    setTimeout(() => {
        projectContainer.classList.add("project-container-show");
    }, 2000);
})

btns[4].addEventListener("click",()=>{
        projectContainer.classList.remove("project-container-show");
})



// Slider block
const slides=document.querySelectorAll(".slide");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
prev.classList.add("wow");
slider();
function slider(){
    let i=0;
    let c=1000;
    next.addEventListener("click",()=>{
        c=c-500;
        slides.forEach(slide=>{
            slide.style.transform=`translateX(${c}px)`
        })
        i++;
        if(i===4) next.classList.add("wow");
        prev.classList.remove("wow");
        
    })
    console.log(i);
    
    prev.addEventListener("click",()=>{
        c=c+500;
        slides.forEach(slide=>{
            slide.style.transform=`translateX(${c}px)` 
        })
        i--;
        if(i===0) prev.classList.add("wow");
        next.classList.remove("wow");
    })
}

// End Slider