export default {
  name: "PrevNext",

  functional: true,

  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },

  render(h, { props }) {
    const { prev, next } = props;

    return (
      <div>
        {prev ? (
          <NuxtLink to={{ path: prev.path }}>{prev.title}</NuxtLink>
        ) : (
          <span>&nbsp;</span>
        )}

        {next ? (
          <NuxtLink to={{ path: next.path }}>{next.title}</NuxtLink>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    );
  }
};
