# Shortly: URL shortening API Challenge solution

Esse é um [desafio do site Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) que tem a finalidade de encurtar link usando uma API externa

## Apresentação 🎉

### Funcionamento ⚙️

- A única funcionalidade da página é o uso de [API do shrtcode](https://shrtco.de/docs/)

### Preview 🖥️

#### Versão desktop

![Gif desktop](https://github.com/davifelix5/shortly/blob/main/assets/shortly-desktop.gif?raw=true)

#### Versão Mobile

<p align="center">
  <img src="https://github.com/davifelix5/shortly/blob/main/assets/shortly-mobile.gif?raw=true" alt="Gif mobile" />
</p>

## Processo de desenvolvimento ⌨️

### Site contruído com 🔧 

- HTML semântico
- CSS responsivo com `media queries`
- CSS Flexbox, usando propriedade como `flex-grow`
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - Styles in js

### O que eu aprendi 📚

- Aprendi mais mais sobre responsividade, uma vez que tive contato com o método de desenvolvimento `mobile first`
- Aprendi como gerenciar `timeouts` dentro dos componentes e pude perceber de forma prática a importância da componentização para o desenvolvimento de interfaces reativas
  - Pude aplicar essas ideias na maneira como cada botão leva um tempo para retornar ao seu estado incial
- Pratiquei o uso de um `custom hook` e do `localstorage` para a implementação de um estado persistente
  - `usePersistedState`
- Pratiquei o gerencimento de erros ao lidar com uma API externa
- Pratiquei o uso de um `Loader` animado para indicar o tempo
- Pratiquei os conceitos de `CSS flex blox` e a aplicação de imagens no `background`
  - Exemplo: uso da propriedade `flex-grow` no `Footer`
