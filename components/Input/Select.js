export default {
  name: "Select",

  props: {
    options: {
      type: Array,
      default: () => ["option 1", "option 2"]
    }
  },

  render(h) {
    const { options } = this;
    return (
      <select
        onChange={({target}) => {
          const { value } = target;
          this.$emit("change", value);
        }}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    );
  }
};
