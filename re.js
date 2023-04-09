
var text=document.getElementsByClassName('text1')
var image=document.getElementsByClassName('column1')
for(let i=0;i<image.length;i++){
image[i].addEventListener("mouseover",function(){
  console.log('kb')
  text[i].style.opacity=1;
  text[i].style.transition='0.9s'

})

image[i].addEventListener('mouseout',function(){
  text[i].style.opacity=0;
//   text[i].style.backgroundColor='rgba(0,0,0,0.6)'
//   text[i].style.Color='white'
})
}






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
    var tablesvalue=document.getElementById('kbda').value
    var obj={
        'amount':amount.value,
        'dish':dish.value,
        'table':tablesvalue
        
     }
     
        async function postdata(){
            try{
                let post1= await axios.post("https://crudcrud.com/api/79a2ed6933b342bf8b4d17d69e22366d/orderdetails",obj)
                console.log(post1)
            }
         catch(e){
            console.log(e)
        }
     
    
}
location.reload()
postdata()
}
window.addEventListener('DOMContentLoaded',()=>{
    async function getdata(){
        try{
            let response=await  axios.get("https://crudcrud.com/api/79a2ed6933b342bf8b4d17d69e22366d/orderdetails")
            for (let i=0; i<response.data.length; i++){
                shownewuseronscreen(response.data[i])
            }
        } catch(e){
            console.log(e)
        }
         
    }
    getdata()



    function shownewuseronscreen(user){
        document.getElementById('amount').value=23
        
                document.getElementById('kb2').value=user.dish
                document.getElementById('kbda').value=user.table
        if (user.table==='Table-1'){
            
        var li=document.createElement('li')
        li.id=user._id
        var deletedata=document.createElement('button')
        deletedata.textContent='delete'
        deletedata.id=user.dish
        li.textContent=user.dish+'-'+ user.amount+'-'+user.table+' '
        li.style.color='white'
        li.style.fontSize='25px'
        deletedata.style.fontSize='25px'
        li.style.listStyleType='none'
        table1.appendChild(li)
        
        li.appendChild(deletedata)
        const removedata=document.getElementById(user.dish)
        removedata.addEventListener('click',function(){
            removelist(user);
        },false)
        function removelist(user){
            
                async function deletedata(user){
                    try{
                        let response = await axios.delete(`https://crudcrud.com/api/79a2ed6933b342bf8b4d17d69e22366d/orderdetails/${user._id}`)
                        var li =document.getElementById(user._id)
                        table1.removeChild(li)
                    } catch(e){
                        console.log(e)
                    }
                     
                }
           deletedata(user) 
        }
    }
    if (user.table==='Table-2'){

    var li=document.createElement('li')
    li.id=user._id
    var deletedata=document.createElement('button')
    deletedata.textContent='delete'
    deletedata.id=user.dish
    li.textContent=user.dish+'-'+ user.amount+'-'+user.table+' '
    table2.appendChild(li)
    li.appendChild(deletedata)
    li.style.color='white'
    li.style.fontSize='25px'
    deletedata.style.fontSize='25px'
    li.style.listStyleType='none'
    const removedata=document.getElementById(user.dish)
    removedata.addEventListener('click',function(){
        removelist(user);
    },false)
    function removelist(user){
        
            async function deletedata1(user){
                try{
                    let response=await axios.delete(`https://crudcrud.com/api/79a2ed6933b342bf8b4d17d69e22366d/orderdetails/${user._id}`)
                    var li =document.getElementById(user._id)
                    table2.removeChild(li)
                } catch(e){
                    console.log(e)
                }
                 
            }
        deletedata1(user)
    }
}
if (user.table==='Table-3'){

var li=document.createElement('li')
li.id=user._id
console.log(li)
var deletedata=document.createElement('button')
deletedata.textContent='delete'
deletedata.id=user.dish
li.textContent=user.dish+'-'+ user.amount+'-'+user.table+' '
table3.appendChild(li)
li.appendChild(deletedata)
li.style.color='white'
li.style.fontSize='25px'
deletedata.style.fontSize='25px'
li.style.listStyleType='none'
const removedata=document.getElementById(user.dish)

removedata.addEventListener('click',function(){
    removelist(user);
},false)


function removelist(user){
    
        async function deletedata2(user){
            try{
                let response=await axios.delete(`https://crudcrud.com/api/79a2ed6933b342bf8b4d17d69e22366d/orderdetails/${user._id}`)
                let li1 =document.getElementById(user._id)
                table3.removeChild(li1)
            } catch(e){
                console.log(e)
            }
             
        }
        deletedata2(user) 
}
}
      }

})
   

    

  
