
// In case if the promise is fullfilled = we got the random quote = then()

// json() = will read the JSON data and automatically convert in to a Javascript object

// We cannot acces JSON data

fetch("https://api.quotable.io/random").then(function(output)
{
    return output.json()
})
.then(function(result)
{
    console.log(result.content)
})
.catch(function(error)
{
    console.log(error)
})