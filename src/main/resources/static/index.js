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