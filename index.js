// side bar 
const menuItems = document.querySelectorAll('.menu-item');

// messages 
const messageNotification=document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')


// theme 
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

// fotn sizes 
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
 // change color
 const colorPalette = document.querySelectorAll('.choose-color span')
// background color 
const bg1= document.querySelector('.bg-1');
const bg2= document.querySelector('.bg-2');
const bg3= document.querySelector('.bg-3');


// remove class active
const changeActive =()=>{
    menuItems.forEach((item)=>{
        item.classList.remove('active');
    })
} 


// add class active 
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActive();
        item.classList.add('active');
        if(item.id != 'notifications'){
          document.querySelector('.notifications-popup').style.display='none'
        }else{
            document.querySelector('.notifications-popup').style.display='block'
           document.querySelector('#notifications .notifications-count').style.display='none'
        }
    })
})

// messsages 


// search chat 
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    // console.log(val)
     message.forEach( chat =>{
         let name = chat.querySelectorAll('h5');
        
            
        if(name.indexOf(val) != -1){
         chat.style.display ='flex';
        }else{
            chat.style.display='none';
        }
     })
}


// search message 

messageSearch.addEventListener('keyup', searchMessage)




// highlight message box when click 
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1em var(--color-primary)';
    document.querySelector('#messages-notifications .notifications-count').style.display='none'
    
    setTimeout(()=>{
      messages.style.boxShadow='none';
    },2000)
})  

// theme customization 

const openThemeModal = ()=>{
 themeModal.style.display='grid';
}
 const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
     themeModal.style.display='none';
    }
 }


 themeModal.addEventListener('click', closeThemeModal);
 theme.addEventListener('click', openThemeModal);


    



//  font size
fontSizes.forEach(size=>{
  let fontSize;
  size.addEventListener('click',()=>{
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left','5.4')
        root.style.setProperty('----sticky-top-right','5.4')
     }else if (size.classList.contains('font-size-2')){
         fontSize= '13px';
         root.style.setProperty('----sticky-top-left','5.4')
         root.style.setProperty('----sticky-top-right','-7')
     }else if(size.classList.contains('font-size-3')){
         fontSize = '16px';
         root.style.setProperty('----sticky-top-left','-2')
         root.style.setProperty('----sticky-top-right','-17')
     }else if (size.classList.contains('font-size-4')){
         fontSize = '19px';
         root.style.setProperty('----sticky-top-left','-5')
         root.style.setProperty('----sticky-top-right','-25')
     }else if (size.classList.contains('font-size-5')){
         fontSize = '22px';
         root.style.setProperty('----sticky-top-left','-12')
         root.style.setProperty('----sticky-top-right','-35')
       }
       size.classList.add('active');
       document.querySelector('html').style.fontSize= fontSize;
    })   
    
})
//remove active color class 
const removeActiveColor =()=>{
colorPalette.forEach(colorChange=>{
    colorChange.classList.remove('active')
})
}


// change primary color 
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        removeActiveColor();
        if(color.classList.contains('color-1')){
         primaryHue=252
        }else if (color.classList.contains('color-2')){
            primaryHue=52
        }else if (color.classList.contains('color-3')){
            primaryHue=352
        }else if(color.classList.contains('color-4')){
            primaryHue=152
        }else if(color.classList.contains('color-5')){
            primaryHue=202
        }
        color.classList.add('active');

        root.style.setProperty('--color-primary-hue', primaryHue);
    })
})


// background color theme 

let lightColorLightness;
let darkColorLightness;
let whitetColorLightness;




const changeBg =()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--white-color-lightness',whitetColorLightness);
}

bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whitetColorLightness='20%';
    lightColorLightness='15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBg();

})

bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whitetColorLightness='10%';
    lightColorLightness='0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBg();

})

bg1.addEventListener('click',()=>{
  

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();

    changeBg();

})