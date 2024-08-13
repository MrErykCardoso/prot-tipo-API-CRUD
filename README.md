Tecnologias usadas:
WSL
Node
Json
JavaScript
Express
Typescript
Docker
node-postgres
Dotenv
Jest / SuperTest

WSL (Sistena linux integrado no Windows)
	> wsl --install (instala ubuntu por padrão)
	
Json (package Json)
	$- npm init

JavaScript (index.js)
	
Express
	$- npm i express
	$- npm @types/express --save-dev

	mod package.json 
		(para que a compilação do node entenda a formatação do ecma script)
		"type":"module"

Typescript
	$- npm i typescript
	$- npm i @types/typescript --save-dev
	$- npx tsc --init

Docker (Para uma instalação mais precisa, vitar o site "https://docs.docker.com/get-docker/")
    $- sudo apt install docker.io docker-compose (instalação docker e docker-compose)
    $- sudo systemctl --enable --now docker docker.socket containerd (inicialização automática)

node-postgres (pg)
	$- npm i pg
	$- npm i @types/pg --save-dev

DotEnv
	$ - npm i dotenv
	$ - npm i @types/dotenv --save-dev

Jest/SuperTest
	$ - npm i jest supertest
	$ - npm i @types/jest @types/supertest --save-dev
	$ - npm init jest

	mod package.json:
		(ajuste de inicialização)
		"test":"node --experimental-vm-modules node_modules/jest/bin/jest.js -verbose --detectOpenHandles --forceExit"