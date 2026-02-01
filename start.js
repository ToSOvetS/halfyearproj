let a = localStorage.getItem("isLogged");
if (!a){
    window.location.href = '/reg.html';
}