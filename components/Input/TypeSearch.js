export default {
  name: "TypeSearch",

  functional: true,

  props: {
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: "input-search"
    },
    placeholder: {
      type: String,
      default: "Search"
    },
    label: {
      type: String
    }
  },

  render(h, { listeners, props }) {
    const { type, id, placeholder, label } = props;
    return (
      <div>
        <label for={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={event => {
            listeners.change && listeners.change(event.target.value);
          }}
        />
      </div>
    );
  }
};
