## Controle de Estoque
Este é um aplicativo para controle de estoque construído em React Native. 

<p align="center">
<img src="https://user-images.githubusercontent.com/50818058/218195361-255e1e0d-30ff-44ce-9ef2-6692867aeab1.png" width="250">
</p>

Com ele, é possível gerenciar e monitorar estoques de maneira eficiente, adicionando, visualizando, editando e excluindo itens por meio de requisições HTTP para uma API, que está disponivel aqui:
[https://github.com/alanosms/myapp-server]

## Pré-requisitos
Para executar este aplicativo, você precisará ter o Expo CLI instalado em sua máquina.

## Instalação
Clone este repositório na sua máquina local

```
git clone https://github.com/alanosms/myapp.git
```
Navegue até o diretório do aplicativo
```
cd SEU_DIRETORIO
```
Instale as dependências
```
npm install
```
Altere o endpoint da API no arquivo ConnectAPI.js, conforme necessário
```
const ENDPOINT_API = 'http://SEU_IP:SUA_PORTA/products';
```
Execute o aplicativo
```
expo start
```
## Como Utilizar
Inicie o aplicativo executando o comando expo start no terminal.

Escaneie o QR code gerado pelo Expo CLI com o aplicativo do Expo no seu dispositivo móvel.

O aplicativo estará pronto para ser utilizado.

## Nota: Certifique-se de alterar o endpoint da API antes de iniciar o aplicativo, caso contrário, ele não conseguirá se conectar à API corretamente.

## Contribuição
Se você gostaria de contribuir para o desenvolvimento deste aplicativo, fique à vontade para criar uma nova branch e enviar um pull request.
