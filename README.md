## Endpoints
## 📝 1. Obter o Menu
Método: GET
URL: /api/cafes
Códigos de Status:
200 OK
[
    {
        "id": "87dcc926-59db-4727-849e-5a7500c4ba9a",
        "tipo": "Com leite",
        "tamanho": "médio",
        "acompanhamento": "pão na chapa"
    },
    {
        "id": "1ef5999a-0c71-464e-acad-74ba6fcb03ca",
        "tipo": "Cafe preto",
        "tamanho": "Pequeno",
        "acompanhamento": "Pão de Queijo"
    }
]

## 📝 2. Fazer um Pedido
Método: POST
URL: /order
Cabeçalhos:
Content-Type: application/json
Accept: application/json
Corpo da Requisição (JSON):
json
Copiar
Editar
{
    "cafe": {
        "id": "e7f0f778-2ddb-4edd-a472-4d2cb4020080",
        "tipo": "Café Expresso",
        "tamanho": "Grande",
        "acompanhamento": "Biscoito"
    }
}
Códigos de Status:
200 Created: 
    "message": "Criado com sucesso".

## 📝 3. Consultar Pedido po Id
Método: GET
URL: /order/:id
Códigos de Status:
200 OK
{
    "id": "1ef5999a-0c71-464e-acad-74ba6fcb03ca",
    "tipo": "Cafe preto",
    "tamanho": "Pequeno",
    "acompanhamento": "Pão de Queijo"
}

## 📝 4. Cancelar Pedido
Método: DELETE
URL: /api/cafes/87dcc926-59db-4727-849e-5a7500c4ba9a
Códigos de Status:
200 OK
{
    "message": "cafe deletada com sucesso",
    "cafe": "87dcc926-59db-4727-849e-5a7500c4ba9a"
}
