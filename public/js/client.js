
const btn = document.getElementById('btn_getData')
btn.addEventListener('click', function(e){

    console.log('button clicked')

    fetch('/getData', {method: 'GET'})
    .then(function(response) {
        console.log('button clicked1')
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });

    console.log('button clicked2')

})