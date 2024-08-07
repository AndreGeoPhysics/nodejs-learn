function hostname() {
    let protocol = 'https'
    if (location.hostname === '127.0.0.1' || location.hostname === 'localhost') {
        protocol = 'http'
    }
    return `${protocol}://${location.hostname}:3000`
};

function sendtoServer(){
    var form = document.getElementById('createUser');
    console.log(form)
    // var response = await axios.post(hostname + '/db/users', {
    //     headers: {}
    // })
}

async function renderTable(){
    var hostname = `http://127.0.0.1:3000`
    var response = await axios.get(hostname + '/db/users', {
    })
    data = response.data
    var container = document.getElementById('userTable');
    container.innerHTML = data;
    return
}