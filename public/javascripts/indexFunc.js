function hostname() {
    let protocol = 'https'
    if (location.hostname === '127.0.0.1' || location.hostname === 'localhost') {
        protocol = 'http'
    }
    return `${protocol}://${location.hostname}:3000`
};

function create(){
    var dialog = document.getElementById("dialogEditUser")
    var close = document.getElementById("exitEdit").addEventListener("click",()=>{
        dialog.close()
    })
    dialog.showModal()
}

function edit(id){
    var table = document.getElementById("userTable").querySelector("table")
    var user = document.getElementById("userEdit")
    var admin = document.getElementById("isAdminEdit")
    for (i=1;i<table.rows.length;i++){
        if (table.rows[i].cells[0].innerHTML === id){            
            user.value = table.rows[i].cells[1].innerHTML
            admin.value = table.rows[i].cells[2].innerHTML
        }
    }
    var dialog = document.getElementById("dialogEditUser")
    var close = document.getElementById("exitEdit").addEventListener("click",()=>{
        dialog.close()
    })
    dialog.showModal()

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