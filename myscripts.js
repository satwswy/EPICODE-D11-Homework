function changeH1Text()
{
    let firstH1Node = document.getElementsByTagName("h1")
    firstH1Node.innerText = "Hey JS changed my text :)"
    console.log(firstH1Node)
}