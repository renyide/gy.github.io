const ostGo=document.getElementById('ost_go');
const ostD=document.getElementById('ost_d');
ostGo.addEventListener('mouseenter',function(){
    ostGo.style.display='none';
    ostD.style.display='block';

});
ostGo.addEventListener('mouseleave',()=>{
    setTimeout(()=>{
        if(!ostD.matches(':hover')){
            ostD.style.display='none';
        }
    },100);
    
});
ostD.addEventListener('mouseleave',function(){
    ostGo.style.display='block';
    ostD.style.display='none';
});
const title=document.getElementById('ost_t');
const pop=document.getElementById('ost_p');
title.addEventListener('mouseenter',()=>{
    pop.style.display='block';
    

});
title.addEventListener('mouseleave',()=>{
    setTimeout(()=>{
        if(!pop.matches(':hover')){
            pop.style.display='none';
        }
    },100);
    
});
pop.addEventListener('mouseenter',()=>{
    pop.style.display='block';
    

});
pop.addEventListener('mouseleave',()=>{
    pop.style.display='none';
    

});
const ost_A=document.getElementById('ost_as');
const OST_B=document.getElementById('ost_af');
ost_A.addEventListener('mouseenter',function(){
    OST_B.style.display='block';

});
ost_A.addEventListener('mouseleave',function(){
    OST_B.style.display='none';

});


const ost_C=document.getElementById('ost_ba');
const OST_F=document.getElementById('ost_bb');
ost_C.addEventListener('mouseenter',function(){
    OST_F.style.display='block';

});
ost_C.addEventListener('mouseleave',function(){
    OST_F.style.display='none';

});

const ost_e=document.getElementById('ost_Ca');
const OST_h=document.getElementById('ost_Cb');
ost_e.addEventListener('mouseenter',function(){
    OST_h.style.display='block';

});
ost_e.addEventListener('mouseleave',function(){
    OST_h.style.display='none';

});


function changelmages(imageSrc){
    const mainlmage=document.getElementById('mainlmages');
    mainlmage.src=imageSrc;
}

function changelmage(imageSrc,newText,thumbnail){
    const mainlmage=document.getElementById('mainlmage');
    mainlmage.src=imageSrc;
    //const texd=document.getElementById('textCo');
    //texd.querySelector('.vitm_p2').textContent=newText;
    //const texc=document.getElementById('textCo');
    //texd.querySelector('.vitm_p1').textContent=newText;


    function changeImage(index) {
        // 获取所有图片
        const images = document.querySelectorAll('.image');
        
        // 移除所有图片的放大效果
        images.forEach((img) => {
            img.classList.remove('zoomed');
        });
        
        // 放大当前点击的图片
        images[index].classList.add('zoomed');
    }






    const thumbnails =document.querySelectorAll('.ldswiper .swiper-slide');
    thumbnails.forEach(item=>{
        item.classList.remove('active');
        
    });
    thumbnails.classList.add('active');
};




document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var originalDiv = document.getElementById('originalDiv');
    var newDiv = document.getElementById('newDiv');

    toggleButton.addEventListener('click', function() {
        originalDiv.style.display = originalDiv.style.display === 'none' ? 'block' : 'none';
        newDiv.style.display = newDiv.style.display === 'none' ? 'block' : 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.getElementById('toggleButtons');
    var originalDivs = document.getElementById('originalDivs');
    var newDivs = document.getElementById('newDivs');

    toggleButtons.addEventListener('click', function() {
        originalDivs.style.display = originalDivs.style.display === 'none' ? 'block' : 'none';
        newDivs.style.display = newDivs.style.display === 'none' ? 'block' : 'none';
    });
});





function toggleContent(element) {
    // 获取当前点击的元素
    const clickable = element;
    // 获取所有需要隐藏或显示的内容元素
    const contents = document.querySelectorAll('.js_item');
    
    // 遍历所有内容元素，隐藏它们
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 判断当前点击的元素是否是第一个内容元素
    if (clickable.id === 'content1') {
        // 如果是第一个内容元素，则显示第二个内容元素
        document.getElementById('content2').style.display = 'block';
    } else if (clickable.id === 'content2') {
        // 如果是第二个内容元素，则显示第一个内容元素
        document.getElementById('content1').style.display = 'block';
    }
}





function toggleDiv() {
    var mainDiv = document.getElementById("mainDiv");
    if (mainDiv.classList.contains("js_item")) {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("visible");
    } else {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("js_item");
    }
}




function toggleDivs() {
    var mainDiv = document.getElementById("mainDivs");
    if (mainDiv.classList.contains("js_item")) {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("visible");
    } else {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("js_item");
    }
}



function toggleDiva() {
    var mainDiv = document.getElementById("mainDiva");
    if (mainDiv.classList.contains("js_item")) {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("visible");
    } else {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("js_item");
    }
}




function toggleDivl() {
    var mainDiv = document.getElementById("mainDivl");
    if (mainDiv.classList.contains("js_item")) {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("visible");
    } else {
        mainDiv.classList.remove("js_item");
        mainDiv.classList.add("js_item");
    }
}






function scrollToRolesSection(){
    const section =document.getElementById('roles');
    if(section){
     section.scrollIntoView({
        behavior:'smooth'
    
    });
}
};


function scrollToRolesSectiona(){
    const section =document.getElementById('rol');
    if(section){
     section.scrollIntoView({
        behavior:'smooth'
    
    });
}
};

function scrollToRolesSections(){
    const rolesSection =document.getElementById('role');
    rolesSection.scrollIntoView({
        behavior:'smooth'
    })
};

document.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
    bullet.addEventListener('click', function() {
    const index = this.getAttribute('data-index');
    
    // 获取所有的图片
    const images = document.querySelectorAll('.slide-image');
    
    images.forEach((img, imgIndex) => {
    if (imgIndex == index) {
    img.classList.remove('dimmed');
    img.classList.add('bright');
    } else {
    img.classList.remove('bright');
    img.classList.add('dimmed');
    }
    });
    });
    });



        function changeOpacity() {
            // 获取所有具有特定类名的div元素
            var divs = document.querySelectorAll('.rwpic,.rwtxt');
            
            // 遍历这些div元素并设置它们的opacity为1
            divs.forEach(function(div) {
                div.style.opacity = '1';
            });
        }
