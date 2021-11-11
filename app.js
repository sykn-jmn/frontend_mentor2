function selectItem(index){
    var items = document.getElementsByClassName("preview_selector_item");
    for(var i = 0; i<4; i++){
        items[i].classList.remove("selected");
    }
    selected = items[index];
    selected.classList.add("selected");
    var highlighted_image = document.getElementById("highlight");
    highlighted_image.setAttribute("src",`./images/image-product-${(index+1)}.jpg`)
}

var lb_curr_idx = 0;

function lb_close(){
    var lightbox = document.getElementsByClassName("lightbox")[0];
    lightbox.style.display="none";
}

function lb_open(){
    var lightbox = document.getElementsByClassName("lightbox")[0];
    lightbox.style.display="flex";
}

function lb_selectItem(index){
    var items = document.getElementsByClassName("light_box_preview_selector_item");
    for(var i = 0; i<4; i++){
        items[i].classList.remove("selected");
    }
    selected = items[index];
    selected.classList.add("selected");
    var highlighted_image = document.getElementById("lightbox_highlight");
    highlighted_image.setAttribute("src",`./images/image-product-${(index+1)}.jpg`)
    lb_curr_idx = index;
}

function lb_next(){
    if(lb_curr_idx < 3){
        lb_selectItem(lb_curr_idx + 1);
    }else{
        lb_selectItem(0);
    }
}

function lb_prev(){
    console.log(lb_curr_idx)
    if(lb_curr_idx > 0){
        lb_selectItem(lb_curr_idx - 1);
    }else{
        lb_selectItem(3);
    }
}

function addCount(){
    var count = document.getElementById("count");
    count.innerText = parseInt(count.innerText) + 1;
}

function subtractCount(){
    var count = document.getElementById("count");
    var number = parseInt(count.innerText);
    if(number>0){
        count.innerText = parseInt(count.innerText) - 1;
    }
}

var cartShown = false;
function hideCart(){
    var cart = document.getElementById("cart_card");
    cart.style.display="none";
    cartShown = false;    
    return;
}

function toggleCart(event){
    var cart = document.getElementById("cart_card");
    console.log("cartShown: "+cartShown);
    if(cartShown){
        cart.style.display="none";
        cartShown = false;    
        return;
    }
    cart.style.display="flex";
    cartShown = true;
    event.stopPropagation();
    return;
}