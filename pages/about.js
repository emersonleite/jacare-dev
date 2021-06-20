import testek from "../components/Vheader";

export default {
  name: "teste",
  data() {
    return {
      name: "Emerson"
    };
  },
  components: {
    testek
  },

  render(h) {
    return <testek name={this.name} />;
  }
};
