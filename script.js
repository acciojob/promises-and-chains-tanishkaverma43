document.getElementById("btn").addEventListener("click", function(event){
  event.preventDefault()
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000)
  });

  promise.then(data => {
    alert(data);
  }).catch(error => {
    alert(error);
  });
});