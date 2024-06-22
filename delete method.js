//app.js

useEffect(()=>{
  getList()
},[]);

function getList(){
  fetch(url).then((result))=>{
    result.json().then((resp)=>{
      setUser(resp)
    })
  })
}

function deleteUser(id){
  fetch(`url/${id}`,{
    mwthod:"DELETE"
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp);
    })
  })
}
