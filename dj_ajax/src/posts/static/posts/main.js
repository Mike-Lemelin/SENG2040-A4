console.log('hello world')

const hellowWorldBox = document.getElementById('hello-world')

hellowWorldBox.innerHTML = 'hello <b>world'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success', response)
        hellowWorldBox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})