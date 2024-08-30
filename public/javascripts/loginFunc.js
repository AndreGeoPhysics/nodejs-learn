function loginDialog(){
    var dialog = document.getElementById("dialogLogin")
    var close = document.getElementById("exitLogin").addEventListener("click",()=>{
        dialog.close()
    })
    dialog.showModal()
}