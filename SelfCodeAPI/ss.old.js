async function getUsers() {
    //let url = 'https://sheetdb.io/api/v1/yugb89bqqwh3d';
	let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=5ZECn1-Fp8s0LCXrMo4KkH8CBc5CAqa0pX_cF2Tg308kgDJVcM_-TJCFq53EEt2hiXx83dO8gh2Ns5QgZLvrqWcBa4lY6-x4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ7dCk7dH9NfZAdF3lplW_kkWZ-SwTZ_-Y3emiP8Mqm6zVIzGZHTRez7fmsctoJvBhCs-oYOR7DjYp8n3dxYWd8zpm50RqvrZA&lib=M9cMWQx989ph-21kGgQTsParteZ-4Vjhy';
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
