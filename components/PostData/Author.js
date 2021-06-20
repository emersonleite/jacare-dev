export default {
  name: "AuthorData",

  functional: true,

  props: {
    author: {
      type: Object,
      default: () => {}
    }
  },

  render(h, { props }) {
    const { author } = props;
    return (
      <div>
        <img src={author.img} />
        <div>
          <p>{author.name}</p>
          <p>{author.bio}</p>
        </div>
      </div>
    );
  }
};
