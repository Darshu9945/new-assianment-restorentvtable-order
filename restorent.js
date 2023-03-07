var amount=document.getElementById('amount')
var dish=document.getElementById('kb2')
var table=document.getElementById('kbda')
var myform=document.getElementById('my-form')
var table1=document.getElementById('table1')
var table2=document.getElementById('table2')
var table3=document.getElementById('table3')
myform.addEventListener('submit',adddatatoserver)
function adddatatoserver(e){
    e.preventDefault()
    var obj={
        'amount':amount.value,
        'dish':dish.value,
        'table':table.value
        
    }
    axios.post("https://crudcrud.com/api/be455f247fc94db3bdb524c4f9863c1a/orderdetails",obj)
    .then((res)=>{
        
    }).catch((err)=>{
        err='not added to the server'
        console.log(err)
    })
    location.reload()
}

axios.get("https://crudcrud.com/api/be455f247fc94db3bdb524c4f9863c1a/orderdetails")
    .then((response)=>{
        
        for (let i=0; i<response.data.length; i++){
            shownewuseronscreen(response.data[i])
        }
    })
    function shownewuseronscreen(user){
        if (user.table==='Table-1'){
            
        var li=document.createElement('li')
        li.id=user._id
        var deletedata=document.createElement('button')
        deletedata.textContent='delete'
        deletedata.id=user.dish
        li.textContent=user.dish+'-'+ user.amount+'-'+user.table
        table1.appendChild(li)
        li.appendChild(deletedata)
        const removedata=document.getElementById(user.dish)
        removedata.addEventListener('click',function(){
            removelist(user);
        },false)
        function removelist(user){
        
            axios.delete(`https://crudcrud.com/api/be455f247fc94db3bdb524c4f9863c1a/orderdetails/${user._id}`)
            .then((res)=>{
                var li =document.getElementById(user._id)
                table1.removeChild(li)
            }).catch((err)=>{
                err="not found"
                console.log(err)
            })
        }
    }
    if (user.table==='Table-2'){

    var li=document.createElement('li')
    li.id=user._id
    var deletedata=document.createElement('button')
    deletedata.textContent='delete'
    deletedata.id=user.dish
    li.textContent=user.dish+'-'+ user.amount+'-'+user.table
    table2.appendChild(li)
    li.appendChild(deletedata)
    const removedata=document.getElementById(user.dish)
    removedata.addEventListener('click',function(){
        removelist(user);
    },false)
    function removelist(user){
        
        axios.delete(`https://crudcrud.com/api/be455f247fc94db3bdb524c4f9863c1a/orderdetails/${user._id}`)
        .then((res)=>{
            var li =document.getElementById(user._id)
            table2.removeChild(li)
        }).catch((err)=>{
            err="not found"
            console.log(err)
        })
    }
}
if (user.table==='Table-3'){

var li=document.createElement('li')
li.id=user._id
var deletedata=document.createElement('button')
deletedata.textContent='delete'
deletedata.id=user.dish
li.textContent=user.dish+'-'+ user.amount+'-'+user.table
table3.appendChild(li)
li.appendChild(deletedata)
const removedata=document.getElementById(user.dish)
removedata.addEventListener('click',function(){
    removelist(user);
},false)
function removelist(user){
        
    axios.delete(`https://crudcrud.com/api/be455f247fc94db3bdb524c4f9863c1a/orderdetails/${user._id}`)
    .then((res)=>{
        var li =document.getElementById(user._id)
        table3.removeChild(li)
    }).catch((err)=>{
        err="not found"
        console.log(err)
    })
}
}
      
      }
      
    console