const url = "https://go-wash-api.onrender.com/api/auth/address"
async function cadastrarEndereco(){

    let apelido = document.getElementById("apelido").value
    let cep = document.getElementById("cep").value
    let endereco = document.getElementById("address").value
    let numero = document.getElementById("numero").value
    let complemento = document.getElementById("complemento").value
    
    
    if (apelido =="" || cep == ""|| endereco =="" || numero =="" ) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    
    
    let token = JSON.parse(localStorage.getItem('user')).access_token;

    let responseApi = await fetch( url,{
        method:"POST",
        
        body: JSON.stringify({
            "title": apelido,
            "cep": cep,
            "address": endereco,
            "number": numero,
            "complement": complemento 
        }),
        headers:{
            "Authorization": "Bearer "+token,
            'Content-Type': 'application/json'
        },

       
    })

    let response = await responseApi.json();

    if (responseApi.status != 200){
        alert ("Dados inválidos")
    }

    else {
        alert("Cadastro feito com sucesso");
        window.location.href = "home.html";
    }

    console.log(response);
}