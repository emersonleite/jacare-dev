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
  const state = {};
  inject("monaco", value => {
    loader.init().then(monaco => {
      const editor = monaco.editor.create(document.querySelector("#app"), {
        value: /* getCodeFromLocalStorage() || */ value,
        lineNumbers: "on",
        language: "javascript",
        theme: "vs-dark"
      });

      editor.onDidChangeModelContent(() => {
        let code = editor.getValue();
        localStorage.setItem("code", code);
        addScript(code);
      });

      //editor.updateOptions({ lineNumbers: "off" });

      //state.editor = editor;
      //console.log(state.editor)
    });
    return state;
  });
};
