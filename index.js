function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json", 
            "Accept": "application/json"
          },
        body: JSON.stringify({
          name, email 
        }),
       
      })
      .then((response)=> response.json())
      .then((data)=>{
        console.log(data)
        document.body.innerHTML = data.id
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message
        console.log(error.message);
      });


}