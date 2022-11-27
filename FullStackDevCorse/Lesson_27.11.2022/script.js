function fetchData() {
    let json = fetch("employees.json")
        .then(Response => Response.json())
        .then(data => console.log(data));

    console.log(json);
}

