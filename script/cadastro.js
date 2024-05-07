const url = 'https://go-wash-api.onrender.com/api/user';


async function cadastroUsuario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpf_cnpj = document.getElementById('cpf_cnpj').value;
    var birthday = document.getElementById('birthday').value;


    if (name =="" || email == "" || password =="" || cpf_cnpj ==""|| birthday =="") {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    try {
        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "email": email,
                "user_type_id": 1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday": birthday
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        let data = await resposta.json();


        if (resposta.status !== 200) {
          
          if (data.data.errors){
            alert("dados invalidos")
          }

          if (data.data.errors.cpf_cnpj){
            alert(data.errors ? data.errors[0] : "The cpf cnpj has already been used");
          }
           
          if(data.data.errors.email){
            alert(data.errors ? data.errors[0] : "The email has already been taken");
          }
        }
       
        else {
            alert("Cadastro feito com sucesso");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro durante o cadastro. Por favor, tente novamente mais tarde.");
    }
}
    
