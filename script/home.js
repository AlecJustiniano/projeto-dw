const url = 'https://go-wash-api.onrender.com/api/auth/address'

async function listarEndereco(){

    let token = JSON.parse(localStorage.getItem('user')).access_token;

    let responseApi = await fetch( url,{
        method:"GET",
        headers:{
            "Authorization": "Bearer "+token,
            'Content-Type': 'application/json'
        },
       
    })

    let response = await responseApi.json();

    if (typeof response === 'object' && response !== null) {
        const corpoTabela = document.getElementById("corpo-tabela");

        if (response.hasOwnProperty('data')) {
          response.data.forEach(item => {
            const row = document.createElement("tr");
            let dadosApi = ['title', 'cep', 'address', 'number']
            dadosApi.forEach(key => {
                const cell = document.createElement("td");
                cell.textContent = item[key] || ''; // Se o valor for nulo ou indefinido, exibe uma string vazia
                row.appendChild(cell);
            });

            corpoTabela.appendChild(row);
          });
        }
    } else 
    {
        console.error('A resposta não é um objeto ou está vazia.', response);
    }
}

listarEndereco();