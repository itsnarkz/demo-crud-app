document.getElementById('create').addEventListener("click",
    function (event) {
        event.preventDefault();
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        fetch('/api/v1/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                age: age
            }),
        })

        alert("Added " + name + " successfully");
    })

document.getElementById('update').addEventListener("click",
    function (event) {
        event.preventDefault();
        let id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        const url = `/api/v1/student/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                age: age
            }),
        })

        alert("Update " + name + " successfully");
    })

document.getElementById('show').addEventListener("click",
    function (event) {
        event.preventDefault();
        fetch('http://localhost:8080/api/v1/student')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('list');
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }
                data.forEach(student => {
                    let newList = document.createElement("ul");
                    list.appendChild(newList);
                    {
                        let span = document.createElement("span");
                        let li = document.createElement("li");

                        li.innerHTML = "ID: " + student.id;
                        newList.appendChild(li);
                        li.appendChild(span);

                        li = document.createElement("li");
                        li.innerHTML = "Name: " + student.name;
                        newList.appendChild(li);
                        li.appendChild(span);

                        li = document.createElement("li");
                        li.innerHTML = "Email: " + student.email;
                        newList.appendChild(li);
                        li.appendChild(span);

                        li = document.createElement("li");
                        li.innerHTML = "Age: " + student.age;
                        newList.appendChild(li);
                        li.appendChild(span);
                    }

                    const br = document.createElement("br");
                    newList.appendChild(br);
                })

                console.log(data);
            })
    })

document.getElementById('delete').addEventListener("click",
    function (event) {
        event.preventDefault();
        let id = document.getElementById('id').value;

        const url = `/api/v1/student/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
        })

        alert("Delete person with id " + id + " successfully");
    })