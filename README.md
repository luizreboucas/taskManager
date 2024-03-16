# Tast Manager Api

Api desenvolvida para a aplicação Task Manager com as seguintes funcionalidades:
 - cadastro
 - login
 - visualizar tarefas
 - adicionar tarefa
 - atualizar tarefa
 - remover tarefa

conforme o diagrama abaixo:

![image](https://github.com/luizreboucas/taskManager/assets/99728452/9fa6c542-1d6a-448d-bc7c-3c5a367e2c80)

## Cadastro
Cadastro é a primeira atividade exercida pelo cliente, uma vez que o cliente é cadastrado, ele pode fazer login e ser autenticado para realizar outras ações.


**Rota Cadastro**
>**POST => /medicos**


**Body**
```json
{
    "nome": "user",
	"email": "user@user",
	"senha": "1234"
}
```

**Resposta**
```json
{
	"message": "usuário criado com sucesso",
	"user": {
        "nome": "user",
		"email": "user@user",
		"senha": "$2a$08$IR2tRAjJWT1uchwPte6UzenpoPXpld3QH72buiTefmuNZWbOzlOhq",
		"tasks": [],
		"_id": "65f587fe8ddc887ea598726b"
	}
}
```

## Login
Login é a primeira atividade de um usuário já cadastrado, após o login é retornado um token com informações como o id de usuário. Este token é enviado em todas as requisições que necessitam de autenticação


**Rota Login**
>**POST => /login**


**Body**
```json
{
	"email": "user@user",
	"senha": "1234"
}
```
**Resposta**
```json
{
	"message": "usuário logado com sucesso",
	"result": {
		"user": {
			"_id": "65f588c68ddc887ea598726e",
			"nome": "user",
			"email": "neto@neo",
			"tasks": [],
			"__v": 0
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTAyMzQsImV4cCI6MTcxMDY3NjYzNCwic3ViIjoiNjVmNTg4YzY4ZGRjODg3ZWE1OTg3MjZlIn0.h37J2Z9JtOAupb_wVVGTB04TmVB0FxtXV9wAJOVgA9o"
	}
}
```

## Tasks
Esta rota é a responsável por retornar todas as task de um determinado usuário.

**Rota Tasks do Usuário**
>**Get => /task/{userID}**


**Body**
```json
```
**Header**
```
{
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTAyMzQsImV4cCI6MTcxMDY3NjYzNCwic3ViIjoiNjVmNTg4YzY4ZGRjODg3ZWE1OTg3MjZlIn0.h37J2Z9JtOAupb_wVVGTB04TmVB0FxtXV9wAJOVgA9o"
}
```

**Resposta**
```json
[
	{
		"_id": "65f0bd4241672c434ef12d2d",
		"nome": "desentupir pia",
		"prioridade": 2,
		"descricao": "aplicar os métodos necessários",
		"cor": "#FCA553",
		"usuario": {
			"_id": "65f0ada01ed5a9d85748f97f",
			"nome": "joaquim",
			"email": "joaquim@joaquim",
			"senha": "1234",
			"tasks": [],
			"__v": 0
		},
		"__v": 0
	},
	{
		"_id": "65f0bd7dbb899e4ac8910817",
		"nome": "lavar louça",
		"prioridade": 2,
		"descricao": "aplicar os métodos necessários",
		"cor": "#FCA553",
		"usuario": {
			"_id": "65f0ada01ed5a9d85748f97f",
			"nome": "joaquim",
			"email": "joaquim@joaquim",
			"senha": "1234",
			"tasks": [],
			"__v": 0
		},
		"__v": 0
	}
]
```

## Criar Task
Esta rota é a responsável por criar a task de um determinado usuário.

**Rota Create Task**
>**POST => /task**


**Body**
```json
{
	"usuario": "65f0c192ea3eca13804423d1",
	"nome": "primeira atividade",
	"descricao": "atividade realizada a pós a cronstrução",
	"prioridade": 1
}
```
**Header**
```
{
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTAyMzQsImV4cCI6MTcxMDY3NjYzNCwic3ViIjoiNjVmNTg4YzY4ZGRjODg3ZWE1OTg3MjZlIn0.h37J2Z9JtOAupb_wVVGTB04TmVB0FxtXV9wAJOVgA9o"
}
```

**Resposta**
```json
{
	"message": "task criada com sucesso",
	"task": {
		"nome": "primeira atividade",
		"prioridade": 1,
		"cor": "#FCA553",
		"descricao": "",
		"usuario": "65f0c192ea3eca13804423d1",
		"_id": "65f0c43d8c7eaf5c606b5e7d"
	}
}
```

## Atualizar Task
Esta rota é a responsável por atualizar a task de um determinado usuário.

**Rota Update Task**
>**PUT => /task/{taskID}**


**Body**
```json
{
	"nome": "lavar louça",
    	"prioridade": 2
}
```
**Header**
```
{
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTAyMzQsImV4cCI6MTcxMDY3NjYzNCwic3ViIjoiNjVmNTg4YzY4ZGRjODg3ZWE1OTg3MjZlIn0.h37J2Z9JtOAupb_wVVGTB04TmVB0FxtXV9wAJOVgA9o"
}
```

**Resposta**
```json
{
	"message": "tarefa atualizada com sucesso",
	"task": {
		"_id": "65f0bd7dbb899e4ac8910817",
		"nome": "lavar louça",
		"prioridade": 2,
		"cor": "#FCA553",
		"descricao": "aplicar os métodos necessários",
		"usuario": "65f0ada01ed5a9d85748f97f",
		"__v": 0
	}
}
```
## Deletar Task
Esta rota é a responsável por deletar a task de um determinado usuário.

**Rota Delete Tasks**
>**DELETE => /task/{taskID}**


**Body**
```json
```
**Header**
```
{
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTAyMzQsImV4cCI6MTcxMDY3NjYzNCwic3ViIjoiNjVmNTg4YzY4ZGRjODg3ZWE1OTg3MjZlIn0.h37J2Z9JtOAupb_wVVGTB04TmVB0FxtXV9wAJOVgA9o"
}
```

**Resposta**
```json
{
	"message": "tarefa deletada com sucesso"
}
```









