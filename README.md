# Desafio de automação de testes Mouts TI

Projeto de automação de testes desenvolvido com Cypress como parte do processo seletivo proposto pela Mouts TI

## ✨ Tecnologias

  * **Node.js**: Ambiente de execução JavaScript.
  * **Cypress**: Framework principal para automação de testes.
  * **Faker-JS**: Biblioteca para geração de dados dinâmicos.
  * **Git**: Sistema de controle de versão.

## ✅ Pré-requisitos

Antes de iniciar, certifique-se de que os seguintes softwares estão instalados em sua máquina:

  * **Node.js** (versão 22.14 foi a utilizada)
  * **Git** (versão 2.49.0.windows.1)
  * **Visual Studio Code** 

## 📦 Instalação

Siga os passos abaixo para configurar o ambiente do projeto localmente.

1.  **Clonar o repositório:**

    ```bash
    # Clone este repositório para a sua máquina
    git clone https://github.com/joaovictorrochaferreira/desafio-mouts-ti.git
    ```

2.  **Acessar a pasta do projeto:**

    ```bash
    # Navegue até o diretório raiz
    cd [..DESAFIO-MOUTS-TI]
    ```

3.  **Instalar dependências:**

    ```bash
    # Baixar as dependências do projeto (incluindo o Cypress)
    npm install
    ```

## 🚀 Execução dos testes

Os testes podem ser executados de duas maneiras: com a interface gráfica do Cypress (modo interativo) ou diretamente pelo terminal (modo headless).

### Modo interativo (interface gráfica)

Permite visualizar a execução em tempo real em um navegador.

1.  **Abra o Cypress Test Runner:**
    ```bash
    npx cypress open
    ```
2.  Na interface do Cypress, selecione o navegador e o arquivo de teste que deseja executar.
<img width="642" height="429" alt="image" src="https://github.com/user-attachments/assets/11474874-5dba-4527-9933-3abe0d47a7a3" />

3. Selecione um teste e espere a execução 
<img width="1919" height="713" alt="image" src="https://github.com/user-attachments/assets/274a0430-158b-4ace-8c7b-168d63128abf" />

<img width="1918" height="911" alt="image" src="https://github.com/user-attachments/assets/a849a239-0f23-49e2-b713-b343cb6be088" />

### Modo Headless (via terminal)

Executa todos os testes em segundo plano, sem abrir uma interface gráfica.

1.  **Execute o comando:**
    ```bash
    npx cypress run
    ```
<img width="731" height="278" alt="image" src="https://github.com/user-attachments/assets/d4d7cd0d-be5e-444f-b16c-f5c6c8fd9a9c" />
