async function getUsers() {
    //let url = 'https://sheetdb.io/api/v1/yugb89bqqwh3d';
	let url = 'https://script.google.com/macros/s/AKfycbxFjga3suJ8oWtUWyLA1l-ApcU4laVeOf4MwLRtkMNsFWMy05V0KL1X12Y5KgyX_rw/exec'
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users = (users['data']);
	users.forEach(user => {
        let htmlSegment = `<div class="title">
                            <h1 style="color:red">${user.title}</h1>
                            <p style="color:green">${user.content}</p>
                            <h4>${user.day}</h4>
                        </div>`;

        html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();