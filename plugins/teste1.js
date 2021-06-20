import loader from "@monaco-editor/loader";

loader.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs"
  },
  "vs/nls": {
    availableLanguages: {
      "*": "de"
    }
  }
});

function addScript(code) {
  let script = document.createElement("script");
  script.setAttribute("id", "script-injected");
  script.innerHTML = code.replaceAll("let", "var").replaceAll("const", "var");
  document.body.appendChild(script);

  removeScript(script);
}

function removeScript(script) {
  document.body.removeChild(script);
}

function getCodeFromLocalStorage() {
  let { code } = localStorage;
  if (!!code) {
    return code;
  }
  return null;
}

export default ({ app }, inject) => {
  inject("teste1", () => {
    let state = { editor: {} };

    function mostraValor() {
      console.log(state.value);
    }

    function setValue(value) {
      state.value = value;
      return this;
    }

    function load() {
      return loader.init();
    }

    function editor() {
      load().then(monaco => {
        state.editor = monaco.editor.create(document.querySelector("#app"), {
          value: /* getCodeFromLocalStorage() || */ "let w = 10",
          lineNumbers: "on",
          language: "javascript",
          theme: "vs-dark"
        });
      });
      return this;
    }

    function editorO() {
      return state.editor;
    }

    return { mostraValor, setValue, load, editor, editorO };
  });
};
