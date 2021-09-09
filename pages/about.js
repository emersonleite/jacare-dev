import testek from "../components/Vheader";

export default {
  name: "teste",
  data() {
    return {
      name: "Emerson Leite"
    };
  },
  components: {
    testek
  },

  render(h) {
    return <testek name={this.name} />;
  }
};
