function getProductsData(){
    //create a XMLHttpRequest object

    let xhr=new XMLHttpRequest();

    //create a request  xhr.open(http method,"URl",async/sync,usn,pw)

    xhr.open("GET","products.json",true);

    //send the request to url

    xhr.send();
    
    //once request had sent ,it may take some time to load the data

    xhr.addEventListener('progress',function(){
        document.getElementById('load-data').innerHTML='Loading data.....';
    })

    setTimeout(function(){
        document.getElementById('load-data').innerHTML='';
    },2000)

    //once the data is loaded

    xhr.addEventListener('load',function(){
        let getData=JSON.parse(xhr.responseText);
        console.log(getData)
        let {productsItem}=getData;
        let data=productsItem;

       
        let eachItem=''  
        let displayItem=document.getElementById('display-products')
        for(let item of data){
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
        displayItem.innerHTML=eachItem ;
    })
    
}
getProductsData()

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
