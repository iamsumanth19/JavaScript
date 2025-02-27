products={id:1,image:'"../images/apple watch.jpeg" alt="" width="50px" height="50px"',name:"Apple watch",price:40000,qty:1}
productDetails=`<tr>
                    <td >${products.id}</td>
                    <td>
                        <img src=${products.image}></img>
                    </td>
                    <td>${products.name}</td>
                    <td>&#8377;<span>${products.price}</span></td>
                    <td>
                        <span onclick="qtyDec()"><i class="bi bi-file-minus-fill"></i></i></span>
                        <span id="display-qty">${products.qty}</span>
                        <span onclick="qtyInc()"><i class="bi bi-file-plus-fill"></i></i></span>
                    </td>
                    <td  >&#8377; <span id="t-display" >${products.price*products.qty}</span></td>
                </tr>`;

let displayTag=document.getElementById('display-pro')
displayTag.innerHTML=productDetails;

let qtyDisplay=document.getElementById('display-qty')
qtyDisplay.textContent=products.qty

let tDisplay=document.getElementById('t-display')
tDisplay.textContent=products.price*products.qty

function qtyInc(){
    products.qty++
    qtyDisplay.textContent=products.qty
    tDisplay.textContent=products.price*products.qty
}

function qtyDec(){
    if (products.qty>1){
        products.qty--
        qtyDisplay.textContent=products.qty
        tDisplay.textContent=products.price*products.qty
    }
    else{
        qtyDisplay.textContent=products.qty
        tDisplay.textContent=products.price*products.qty
    }
}