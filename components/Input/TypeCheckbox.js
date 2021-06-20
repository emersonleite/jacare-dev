export default {
  name: "TypeCheckbox",

  functional: true,

  props: {
    id: {
      type: String,
      default: "input-search"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean
    }
  },

  render(h, { listeners, props }) {
    const {checked, id, disabled } = props;
    return (
      <input
        id={id}
        checked={checked}
        type="checkbox"
        disabled={disabled}
        onClick={event => {
          console.log(event);
          listeners.click && listeners.click(event.target.checked);
        }}
      />
    );
  }
};
