import "./style.css";

const THEMES = ["dracula", "material-ocean", "ambiance"];

export default {
  data() {
    return {
      lineNumbers: true,
      keyComponent: 0,
      theme: "ambiance",
      textSearch: "",
      editor: "",
      code: `// another comment
//other`
    };
  },

  /* Puxando Posts */
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();

    const [prev, next] = await $content("posts")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { post, prev, next };
  },

  /* Provisório */
  async mounted() {
    this.$hello("mounted");

    //let a = await this.$monaco("let a = 11");

    console.log(this.$teste1().setValue("ola blz?").mostraValor())

    console.log(await this.$teste1().editor().editorO())
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-br", options);
    },

    setCurrentDate(currentDate) {
      this.currentDate = currentDate;
    },

    setValue(event) {
      this.theme = event;
      this.keyComponent = Math.random();
    },

    addScript() {
      let script = document.createElement("script");
      script.setAttribute("id", "script-injected");
      script.innerHTML = this.code
        .replaceAll("let", "var")
        .replaceAll("const", "var");
      document.body.appendChild(script);

      this.removeScript(script);
    },

    removeScript(script) {
      document.body.removeChild(script);
    }
  },

  render(h) {
    const { post } = this;

    return (
      <article>
        <div>
          <div style="margin: 0 auto;" id="app"></div>

          <button onClick={() => this.$monaco("const a = 10")}>Lines</button>
        </div>

        <h1>Conteúdo</h1>
        <ul>
          {post.toc.map(item => (
            <li key={item.id}>
              <NuxtLink to={`#${item.id}`}>{item.text}</NuxtLink>
            </li>
          ))}
        </ul>
        <nuxtContent document={post} />

        {/* EDITOR */}
        <InputSelect
          options={THEMES}
          onChange={event => this.setValue(event)}
        />
        <codeBox
          key={this.keyComponent}
          lineNumbers={this.lineNumbers}
          theme={this.theme}
          onResetEditor={() => {
            this.keyComponent = Math.random();
            localStorage.clear();
          }}
        />
        {/* EDITOR FIM */}

        {/* Dados do post */}
        <p>Atualizado em {this.formatDate(post.updatedAt)}</p>
        <PostDataAuthor author={post.author} />
        <PostDataPrevNext prev={this.prev} next={this.next} />
        {/* Dados do post - fim */}

        <InputTypeSearch
          type="search"
          placeholder="Procure"
          id="search-query"
          onChange={event => {
            console.log(event);
            this.textSearch = event;
          }}
        />

        <label for="lines">Número de linhas</label>
        <InputTypeCheckbox
          checked={this.lineNumbers}
          id="lines"
          onClick={event => {
            this.lineNumbers = event;
            this.keyComponent = Math.random();
          }}
        />
      </article>
    );
  }
};
