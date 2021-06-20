export default {
  name: "Codemirror",
  data() {
    return {
      code: `

alert(${this.numberEntered})

let c = "Ola"

const a = document.createElement("div")

console.log(a)
`,
      open: true,
      number: 15
    };
  },

  props: {
    numberEntered: {
      type: Number,
      default: 13
    },
    lineNumbers: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "ambiance"
    }
  },

  watch: {},

  mounted() {
    /* Criar função */
    let { code } = localStorage;
    if (!!code) {
      this.code = localStorage.getItem("code");
    }
    /*  */

    /* Criar função */
    this._editor = new CodeMirror(this.$refs.codemirror, {
      lineNumbers: this.lineNumbers,
      tabSize: 5,
      value: this.code,
      mode: "javascript",
      theme: this.theme,
      showHint: true
      //extraKeys: {"Crtl-Space":"autocomplete"}
    });

    console.log(this._editor);

    this._editor.on("changes", () => {
      this.code = this._editor.getValue();
      localStorage.setItem("code", this.code);
      this.addScript();
    });

    this.addScript();
  },
  /*  */

  methods: {
    resetCodeEditor() {
      localStorage.clear();
    },

    removeScript(script) {
      document.body.removeChild(script);
    },

    addScript() {
      let script = document.createElement("script");
      script.setAttribute("id", "script-injected");
      script.innerHTML = this.code
        .replaceAll("let", "var")
        .replaceAll("const", "var");
      document.body.appendChild(script);

      this.removeScript(script);
    }
  },

  render(h) {
    return (
      <div
        class={[this.open ? "open" : "close"]}
        onClick={() => {
          this.open = !this.open;
        }}
      >
        <div>Number of Characters: {this.code.length}</div>
        <div ref="codemirror"></div>
        <button onClick={() => this.addScript(this.code)}>Ok</button>
        <button onclick={() => this.$emit("resetEditor")}>Reset</button>
      </div>
    );
  }
};
