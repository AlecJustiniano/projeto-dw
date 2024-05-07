const url = 'https://go-wash-api.onrender.com/api/login';

async function Login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == "" || password =="") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                
                "email": email,
                "password": password,
                "user_type_id": 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        let dataApi = await resposta.json();

        if(dataApi.data?.errors){
            alert(dataApi.data.errors);
            return false;
        }

        localStorage.setItem('user', JSON.stringify(dataApi));

        alert("Login feito com sucesso");

        window.location.href="home.html";
}