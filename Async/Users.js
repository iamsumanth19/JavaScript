function getProductsData(){
    //create a XMLHttpRequest object

    let xhr=new XMLHttpRequest();

    //create a request  xhr.open(http method,"URl",async/sync,usn,pw)

    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);

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
        let {users}=getData;
        let data=getData;

       
        let eachItem=''  
        let displayItem=document.getElementById('display-products')
        for(let item of data){
            eachItem+=`<tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.username}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>${item.website}</td>
                        </tr>`
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
