export default {
  name: "defaultLayout",

  render(h) {
    return (
      <div style="max-width: 1040px; margin: 0 auto;">
        <Logo />
        <h1 style="flex: 1; text-align: center;">Teste de layout</h1>
        <Nuxt />
      </div>
    );
  }
};
