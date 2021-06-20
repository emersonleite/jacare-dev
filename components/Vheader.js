export default {
  name: "VHeader",

  functional: true,

  props: {
    name: {
      type: String
    }
  },

  render(h, { props }) {
    let { name } = props;
    return <div>Esse é um Componente {name}.</div>;
  }
};
