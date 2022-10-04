const usersDOM = document.querySelector("#users") // ul DOM
fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        // Generating HTML Structure for each item
        let divDOM = document.createElement("div")
        usersDOM.appendChild(divDOM)
        divDOM.classList.add("container")
        let contentDOM = document.createElement("div")
        divDOM.appendChild(contentDOM)
        contentDOM.classList.add("content")
        let nameDivDOM = document.createElement("div")
        contentDOM.appendChild(nameDivDOM)
        nameDivDOM.classList.add("person-name")
        let emailDivDOM = document.createElement("div")
        contentDOM.appendChild(emailDivDOM)
        emailDivDOM.classList.add("person-email")
        let commentDivDOM = document.createElement("div")
        contentDOM.appendChild(commentDivDOM)
        commentDivDOM.classList.add("person-comment")
        let h1DOM = document.createElement("h1")
        nameDivDOM.appendChild(h1DOM)
        let addresDOM = document.createElement("address")
        emailDivDOM.appendChild(addresDOM)
        let pDOM = document.createElement("p")
        commentDivDOM.appendChild(pDOM)
        // Transferring data of each item
        h1DOM.innerHTML = item.name
        addresDOM.innerHTML = item.email
        pDOM.innerHTML = item.body

    })
})