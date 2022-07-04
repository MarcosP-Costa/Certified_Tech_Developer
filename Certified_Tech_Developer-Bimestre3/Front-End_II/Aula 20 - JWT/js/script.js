let tokenJwt;

onload = function (){
    tokenJwt = this.sessionStorage.getItem("jwt");
    if (!tokenJwt){
        alert("Você não tem permissão de acesso.")
        this.location.href = "index.html"
    }else{

    }
}