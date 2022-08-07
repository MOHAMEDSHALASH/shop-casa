// when hover card the msg show !
document.querySelector('.icon-cart').addEventListener("mouseover",()=>{
    document.querySelector('.msg-card-hover').style.display="block"
})
document.querySelector('.icon-cart').addEventListener("mouseout",()=>{
    document.querySelector('.msg-card-hover').style.display=""
})
// WHEN click card icon in head show card page
document.querySelector('.icon-cart').addEventListener("click",()=>{
    document.querySelector('.card').classList.toggle("card-show")
    document.querySelector('.point-active').classList.remove("point-active-show")
})
// EMAIL VALID IN HOME PAGE  -----
let email1=document.querySelector(".banner4 form input");
let regExEmail=/\w{0,}@(gmail|yahoo).(com|net)/ig;
let msgErrorEmail=document.querySelector('.email-error');
let btn1=document.getElementById("btnFORM1-HOME");
email1.addEventListener("input",()=>{
    if(regExEmail.test(email1.value)===false){
        msgErrorEmail.style.display="block"
        btn1.setAttribute("disabled","disabled")
    }
    else{
        msgErrorEmail.style.display=""
        btn1.removeAttribute("disabled")
    }
})
email1.addEventListener("blur",()=>{
        msgErrorEmail.style.display=""
})
// ------------- ANIMATION IN PAGE WHEN SCROLL ------------
let animation1=document.getElementById('mainPage');
let animation2=document.getElementById('features');
let animation3=document.querySelectorAll('#features-products section');
let animation4=document.querySelectorAll('#features-products2 section');
let animation5=document.getElementById('banner1');
let animation6=document.getElementById('banner2');
let animation7=document.getElementById('banner4');
let animation8=document.querySelectorAll(".ss")
window.onscroll=()=>{
    if(scrollY>= animation2.offsetTop - 400){
        animation2.style.opacity="1";animation2.style.transform="translateY(0cm)"
    }
    animation3.forEach((eo)=>{
        if(scrollY>= eo.offsetTop - 400){
            eo.style.opacity="1";eo.style.transform="translateY(0cm)"
        }
    })
    animation4.forEach((eo)=>{
        if(scrollY>= eo.offsetTop - 400){
            eo.style.opacity="1";eo.style.transform="translateY(0cm)"
        }
    })
    if(scrollY>= animation5.offsetTop - 400){
        animation5.style.opacity="1";animation5.style.transform="translateY(0cm)"
    }
    if(scrollY>= animation6.offsetTop - 400){
        animation6.style.opacity="1";animation6.style.width="100%"
    }
    if(scrollY>= animation7.offsetTop - 400){
        animation7.style.opacity="1";animation7.style.transform="translateY(0cm)"
    }
    animation8.forEach((eo)=>{
        if(scrollY>= eo.offsetTop - 450){
            eo.style.opacity="1";eo.style.transform="translateY(0cm)"
        }
    })
}
// -------------------------------------------------------------------------------------
// btn x close card page
document.querySelector('.close-card').addEventListener("click",()=>{
    document.querySelector('.card').classList.toggle("card-show")
})
// ------------------------- CARD PAGE ALL THINGS ABOUT IT ------------------------------
let price1=78;
let mo=document.querySelectorAll(".features-products-box .shop-icon");
// console.log(mo)
    mo.forEach((e)=>{
        e.addEventListener("click",(eo)=>{
            // CRETE CONTAINER TO IMG
            let imgpop=document.createElement("div");
            imgpop.className="card-section";
            // create img in container
            let imgphoto=document.createElement("img");
            imgphoto.src=eo.target.parentElement.parentElement.querySelector(' img').src;
            // console.log(eo.target.parentElement.parentElement.querySelector('img').src)
            imgpop.appendChild(imgphoto);
            // GET BUTTON AND HIDE It
            let changeBTN=eo.target.parentElement.parentElement.querySelector('.shop-icon');
            changeBTN.innerHTML=`<span class="material-symbols-outlined">check</span>`
            changeBTN.style.cursor="no-drop"
            changeBTN.style.opacity=".5"
            // create input num
            let imgNum=document.createElement("input");
            imgNum.className="input-img";
            imgNum.type="number";
            imgNum.setAttribute("value","1");
            imgNum.setAttribute("min","1");
            imgNum.setAttribute("max","10");
            imgpop.appendChild(imgNum);
            // create price img
            let imgPrice=document.createElement("h2");
            imgPrice.innerHTML=`Price : <span>${price1}</span> $`;
            imgpop.appendChild(imgPrice);
            imgNum.addEventListener("input",()=>{
            imgPrice.innerHTML=`Price :  <span>${imgNum.value*price1}</span> $`;
            })
            // create delete icon
            let del=document.createElement("p");
            del.className="delete-in-card"
            del.innerHTML=`<span class="material-symbols-outlined">delete</span>`;
            imgpop.appendChild(del);
            // when click icon delete
            del.addEventListener("click",()=>{
                imgpop.remove()
                changeBTN.innerHTML=`<span class="material-symbols-outlined">shopping_cart</span>`
                changeBTN.style.cursor=""
                changeBTN.style.opacity=""
                let msgDel=document.createElement("div")
                msgDel.className="msg-del"
                msgDel.innerHTML="Delete Successfully"
                console.log(msgDel)
                cardElements.appendChild(msgDel)
                let moo2=setInterval(()=>{
                    msgDel.remove()
                },1000)
            })
            // Point green active
            document.querySelector('.point-active').classList.add("point-active-show")
            // msg CONFIRM that item add
            let msgConfirm=document.createElement("div");
            msgConfirm.className="msg-confirm";
            msgConfirm.innerHTML="Add Successfully";
            document.body.appendChild(msgConfirm);
            let moo=setInterval(()=>{
                msgConfirm.remove()
            },1000)
            // sET imgpop in card page
            let cardElements=document.querySelector(".card");
            cardElements.appendChild(imgpop);
        })
    })