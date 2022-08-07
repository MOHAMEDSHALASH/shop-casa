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
// -------------------------------------------------------------------------------------
// btn x close card page
document.querySelector('.close-card').addEventListener("click",()=>{
    document.querySelector('.card').classList.toggle("card-show")
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
let animation3=document.querySelectorAll('#features-products section');
let animation7=document.getElementById('banner4');
let animation8=document.querySelectorAll(".ss");
let btnScrollDown=document.querySelector('.scroll-down');
btnScrollDown.onclick=function(){
    scrollTo(100,200);
    btnScrollDown.style.display="none"
}
window.onscroll=()=>{
    animation3.forEach((eo)=>{
        if(scrollY>= eo.offsetTop - 300){
            eo.style.opacity="1";eo.style.transform="translateY(0cm)"
            btnScrollDown.style.display="none"

        }
    })
    if(scrollY>= animation7.offsetTop - 400){
        animation7.style.opacity="1";animation7.style.transform="translateY(0cm)"
    }
    animation8.forEach((eo)=>{
        if(scrollY>= eo.offsetTop - 450){
            eo.style.opacity="1";eo.style.transform="translateY(0cm)"
        }
    })
}
// SECOND PAGE SHOP
let btnInBoxProduct=document.querySelectorAll('.features-products-box .shop-icon');
let body=document.getElementById('body');
console.log(btnInBoxProduct);
btnInBoxProduct.forEach((eo)=>{
    eo.addEventListener("click",(e)=>{
        // create the container
        let shop=document.createElement("div")
        shop.className="shop-hero"
        body.appendChild(shop)
        console.log(shop)
        // create div in container
        let productBoxImg=document.createElement("div");
        productBoxImg.className="left";
        let productBoxpara=document.createElement("div");
        productBoxpara.className="right";
        // set this to in shop 
        shop.appendChild(productBoxImg);
        shop.appendChild(productBoxpara);
        // in the left shop 
        let mainImg=document.createElement("img");
        mainImg.className="main-img";
        mainImg.src=e.target.parentElement.parentElement.querySelector("img").src;
        // set main img to left
        productBoxImg.appendChild(mainImg);
        // othor imgs
        let arrOtherImg=["img/products/f2.jpg","img/products/f3.jpg","img/products/f4.jpg","img/products/f5.jpg"];
        let otherImg=document.createElement("section");
        let otherImg1=document.createElement("img");
        otherImg1.src=arrOtherImg[0];
        let otherImg2=document.createElement("img");
        otherImg2.src=arrOtherImg[1];
        let otherImg3=document.createElement("img");
        otherImg3.src=arrOtherImg[2];
        let otherImg4=document.createElement("img");
        otherImg4.src=arrOtherImg[3];
        // set imgs in section
        otherImg.appendChild(otherImg1);otherImg.appendChild(otherImg2);otherImg.appendChild(otherImg3);
        otherImg.appendChild(otherImg4);
        // set section otherImg in left
        productBoxImg.appendChild(otherImg);
        let vv=document.querySelectorAll('.shop-hero section img');
        vv.forEach((eo)=>{
            eo.addEventListener("click",(e)=>{
                let changeMainImg=e.target.parentElement.parentElement.querySelector(".main-img")
                changeMainImg.src=e.target.src
            })
        })
        //  IN the right shop
        // title 
        let titleShop=document.createElement("h3");
        titleShop.innerHTML=e.target.parentElement.parentElement.querySelector("h3").dataset.title;
        // price
        let priceShop=document.createElement("h2");
        priceShop.innerHTML=`$ ${e.target.parentElement.parentElement.querySelector("h2").dataset.price}`;
        // number input
        numberShop=document.createElement("input");
        numberShop.type="number"
        numberShop.setAttribute("max","10")
        numberShop.setAttribute("min","1")
        numberShop.value="1"
        // when input any value change price
        numberShop.addEventListener("input",()=>{
            priceShop.innerHTML=`$ ${e.target.parentElement.parentElement.querySelector("h2").dataset.price*numberShop.value}`
        })
        // select input
        let select=document.createElement("select")
        let option1=document.createElement("option")
        option1.innerHTML="select size"
        let option2=document.createElement("option")
        option2.innerHTML="XL"
        let option3=document.createElement("option")
        option3.innerHTML="Small"
        let option4=document.createElement("option")
        option4.innerHTML="Large"
        select.appendChild(option1);select.appendChild(option2);select.appendChild(option3);select.appendChild(option4);
        // Button
        let btnShop=document.createElement("button");
        btnShop.type="submit";
        btnShop.innerText="Add to Cart"
        // button close 
        let closeShop=document.createElement("div")
        closeShop.classList="close-shop"
        closeShop.innerHTML=`<span class="material-symbols-outlined">close</span>`
        shop.appendChild(closeShop)
        closeShop.addEventListener("click",()=>{
            shop.remove()
        })
        productBoxpara.appendChild(titleShop);
        productBoxpara.appendChild(priceShop);
        productBoxpara.appendChild(numberShop);
        productBoxpara.appendChild(select);
        productBoxpara.appendChild(btnShop)
        // --------------------
// ------------------------- CARD PAGE ALL THINGS ABOUT IT ------------------------------
        btnShop.addEventListener("click",(eo)=>{
            // CRETE CONTAINER TO IMG
            let imgpop=document.createElement("div");
            imgpop.className="card-section";
            // create img in container
            let imgphoto=document.createElement("img");
            imgphoto.src=eo.target.parentElement.parentElement.querySelector(' img').src;
            // console.log(eo.target.parentElement.parentElement.querySelector('img').src)
            imgpop.appendChild(imgphoto);
            // // GET BUTTON AND HIDE It
            // let changeBTN=eo.target.parentElement.parentElement.parentElement.querySelector('.shop-icon');
            // changeBTN.innerHTML=`<span class="material-symbols-outlined">check</span>`
            // changeBTN.style.cursor="no-drop"
            // changeBTN.style.opacity=".5"
            // create input num
            let imgNum=document.createElement("input");
            imgNum.className="input-img";
            imgNum.type="number";
            imgNum.setAttribute("value",eo.target.parentElement.parentElement.querySelector("input").value);
            imgNum.setAttribute("min","1");
            imgNum.setAttribute("max","10");
            imgpop.appendChild(imgNum);
            // create price img
            let imgPrice=document.createElement("h2");
            imgPrice.innerHTML=`Price : <span>${e.target.parentElement.parentElement.querySelector("h2").dataset.price*numberShop.value}</span> $`;
            imgpop.appendChild(imgPrice);
            imgNum.addEventListener("input",()=>{
            imgPrice.innerHTML=`Price :  <span>${imgNum.value*e.target.parentElement.parentElement.querySelector("h2").dataset.price}</span> $`;
            })
            // create delete icon
            let del=document.createElement("p");
            del.className="delete-in-card"
            del.innerHTML=`<span class="material-symbols-outlined">delete</span>`;
            imgpop.appendChild(del);
            // when click icon delete
            del.addEventListener("click",()=>{
                imgpop.remove()
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
})

// ------------------------- CARD PAGE ALL THINGS ABOUT IT ------------------------------
