function callDictionaryApi() {
    document.getElementById('loader').style.display = "block"
    document.getElementById('request-button').disabled = true
    var input = document.getElementById('inputedWord').value
    axios.post('https://shabdo-ki-dictionary.herokuapp.com/createDictionaryPage', {'word': input})
    .then(function (response) {
        console.log('received----',response);
        if (response.data.data[0].definition) {
            document.getElementById('detail').innerHTML = response.data.data[0].definition
            document.getElementById('loader').style.display = "none"
            return document.getElementById('request-button').disabled = false

        }
        document.getElementById('detail').innerHTML = response.data.data[0].meaning
        document.getElementById('loader').style.display = "none"
        document.getElementById('request-button').disabled = false
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}