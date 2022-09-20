# Challenge Oracle ONE - Sprint 02 : Jogo da Forca
Nomeado de "A Forca", este projeto é o resultado do segundo desafio proposto na 3ª turma da #OracleNextEducation. 

### Prévia no GitHub Pages:

⛓️: https://aquamouzinho.github.io/challenge-forca/

## 📋 Sobre
Desenvolvido apenas com HTML, CSS & Javascript esta aplicação é o famoso "Jogo da Forca" e tem por função principal entreter o usuário com um jogo simples e rápido com rodadas que possuem a quantidade máxima de *6* erros. Podendo ser jogado em qualquer dispositivo, desde o Notebook até o smartphone!

### 🛠 Como funciona?
Ao inicializar a aplicação, o jogo já inicializa uma nova rodada do jogo da forca com uma palavra *P* de tamanho *N*. Esta palavra é retirada de modo aleatório de uma lista de palavras base contendo 11 palavras de tamanhos diversos.

Para computar a sua tentativa em uma rodada basta clicar em um dos espaços "*_*" disponíveis na tela e digitar uma letra que você acha que está contida nesta palavra. 

![espaco_input](https://user-images.githubusercontent.com/42475699/191353983-3b12efc0-6849-4013-b553-575aad6962cd.png)

Caso a sua aposta não esteja contida na palavra o erro será computado e você perderá 1 vida *(do total de 6)*, além da representação visual do boneco na forca.

### 🔩 "*Game Over*"

![case_fim](https://user-images.githubusercontent.com/42475699/191354519-6d164bc1-3f4f-4c5c-85fe-20be0b95f9c4.png)

No caso de você perder todas as suas vidas na rodada atual o jogo irá declarar "*Game Over*"/"*Fim de Jogo*" e lhe apresentará a palavra correta na tela. Você poderá iniciar uma nova rodada ao pressionar o botão "*Novo Jogo*". 

### 🔧 Adição de palavras na lista
É possível adicionar uma nova palavra à lista base do jogo da forca apenas ao pressionar o botão "*Nova Palavra*". Com isso, irá aparecer um *pop-up* na tela com um espaço para inserir esta nova palavra.

*Obs.*: A palavra deve ter no máximo 8 caracteres e não deve possuir caracteres especiais!

## 🎨 Screenshots

| Tela Principal (*Noteboook*) | Tela Principal (*Smartphones*) | *Pop-up* de adição de palavra |
| ----- | ----- | ----- |
| ![tela_principal](https://user-images.githubusercontent.com/42475699/191351942-1aeb9039-3c78-421f-a283-bdc2f40d5455.png) | ![tela_smart](https://user-images.githubusercontent.com/42475699/191351985-a8aa0e5b-9be7-4b37-90c6-5c7bacc309f2.png) | ![pop_up](https://user-images.githubusercontent.com/42475699/191352487-2ae0b827-3d2b-4dc4-a181-df9bcc16332a.png) |

---
Desenvolvido com :heart: por [Marino Mouzinho](https://aquamouzinho.github.io)
