const ComponenteA = {
    template: `
      <div class="login">
        <h1>Login</h1>
        <input class="input" type="text" placeholder="Nome">
        <br><br>
        <input class="input" type="password" placeholder="Senha">
        <br><br>
        <a href="index.html">
            <button class="button">Enviar</button>
        </a>
    </div>
    `
}

const ComponenteB = {
    template: `
    <main class="container">
    <h1 class="title"> Cadastrar-se </h1>

    <form class="form">
        <input type="text" class="input" placeholder="Nome completo">
        <input type="email" class="input" placeholder="E-mail">
        <input type="number" class="input" placeholder="Idade" >
        <input type="password" class="input" placeholder="Senha">
        <input type="password" class="input" placeholder="Confirmar senha">
        <button type="button" class="btn" > Cadastrar </button>
    </form>
</main>
    `
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            componenteAtual: "ComponenteA"
        }
    },
    methods: {
        alterarComponentes() {
            this.componenteAtual = (this.componenteAtual === "ComponenteA") ? "ComponenteB" : "ComponenteA"
        }
    },
    components: {
        ComponenteA,
        ComponenteB
    }
}).mount("#app")