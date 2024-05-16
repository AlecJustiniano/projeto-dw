const url = 'https://go-wash-api.onrender.com/api/user';

async function cadastroUsuario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpf_cnpj = document.getElementById('cpf_cnpj').value;
    var birthday = document.getElementById('birthday').value;

    
    if (name === "" || email === "" || password === "" || cpf_cnpj === "" || birthday === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (!isValidCPF(cpf_cnpj)) {
        alert("Por favor, insira um CPF válido.");
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

        let dataApi = await resposta.json();

        if (resposta.status !== 200) {
            if (dataApi.data?.errors) {
                alert(dataApi.data.errors);
                return false;
            }
        } else {
            alert("Cadastro feito com sucesso");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro durante o cadastro. Por favor, tente novamente mais tarde.");
    }
}

function validaEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validaCpf(cpf) {
    return /^[0-9]{11}$/.test(cpf);
}
