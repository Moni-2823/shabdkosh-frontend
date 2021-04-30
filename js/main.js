function callDictionaryApi() {
    var input = document.getElementById('inputedWord').value
    axios.post('http://localhost:3000/createDictionaryPage', {'word': input})
    .then(function (response) {
        console.log('received----',response);
        if (response.data.data[0].definition) {
            return document.getElementById('detail').innerHTML = response.data.data[0].definition
        }
        document.getElementById('detail').innerHTML = response.data.data[0].meaning
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}