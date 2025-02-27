let item_1={id:101,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YQ-XOZxnZ8uH0qnG9_1iYs61Yxko6AuGWg&s",name:"iphone",price:50000,qty:1}
let item_2={id:102,imgUrl:'https://images.jdmagicbox.com/quickquotes/images_main/sara-30-liters-polyester-black-school-bag-black-178207114-ksaft.jpg',name:"bag",price:1000,qty:1}
let item_3={id:103,imgUrl:"https://m.media-amazon.com/images/I/71zkMUBbcWL._AC_UF1000,1000_QL80_.jpg",name:"iwatch",price:40000,qty:1}
let item_4={id:104,imgUrl:"https://m.media-amazon.com/images/I/61BRKVOc4QL.jpg",name:'toy',price:1000,qty:1}

let items=[item_1,item_2,item_3,item_4];
let displayProdcutsEle=document.getElementById('display-products')

function displayProducts(products){

    if(products.length==0) return;

     let eachItem=''   
    for(let item of products){
        eachItem+=`<div class="col-3">
                <div class="card mt-4">
                    <div class="card-header">
                        <img class="product-image" src=${item.imgUrl} alt="">
                    </div>
                    <div class="card-body">
                        <h3>${item.name}</h3>
                        <h4>${item.price}</h4>
                        <span><i onclick="decQty(${item.id})" class="bi bi-file-minus-fill"></i></span>
                        <span>${item.qty}</span>
                        <span><i onclick="incQty(${item.id})" class="bi bi-file-plus-fill"></i></span>
                    </div>
                </div>
            </div>`
    }
    displayProdcutsEle.innerHTML=eachItem
}
displayProducts(items);

function incQty(id){
    let upadatedArr=items.map((item)=>{
        if(item.id==id) return {...item,qty:++item.qty   }
            return item
    })
    displayProducts(upadatedArr);
}

function decQty(id){
    let upadatedArr=items.map((item)=>{
        if(item.id==id) return {...item,qty: item.qty>1?--item.qty:1   }
            return item
    })
    displayProducts(upadatedArr);
}