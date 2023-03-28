let information = document.querySelector("#information")

async function getData() {
    console.log("Console Log Running")
    let results = await fetch("http://127.0.0.1:5000/data").then((response) => response.json())
    console.log(results)

    information.innerHTML= `Name: ${results.name} and Month: ${results.month}`
    

}

getData()