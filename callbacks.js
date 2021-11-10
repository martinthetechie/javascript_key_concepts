// Callbacks is a function passed into another function as a argument

// Synchronous Callbacks
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);

//   Asynchronous Callbacks
fetch(url)//Promise which resolves with the json object
.then(res=>{
    return res.json();
})
.then(data=>{
     setData(data);
     setIsPending(false);
     console.log(data);
})
.catch(err=>{
    setIsPending(false);
    setError(err.message);
    setError(null);
})
}, []);