const THEMES = ["dracula", "material-ocean", "ambiance"];
const themesSourcesList = THEMES.map(theme => {
  return {
    rel: "stylesheet",
    type: "text/css",
    href: `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/theme/${theme}.min.css`
  };
});

const stylingMonaco = {
  rel: "stylesheet",
  type: "text/css",
  href:
    "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs/editor/editor.main.min.css"
};

const scriptMonaco = 
{
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs/editor/editor.main.js",
  async: true,
  ssr: false
};

const scriptMonaco2 = 
{
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs/loader.min.js",
  async: true,
  ssr: false
};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "jacare-dev",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      stylingMonaco,
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/show-hint.min.css"
      },
      ...themesSourcesList,
      scriptMonaco,
      scriptMonaco2
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/codemirror.min.js",
        async: true,
        ssr: false
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/mode/javascript/javascript.min.js",
        async: true,
        ssr: false
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/addon/hint/javascript-hint.min.js",
        async: true,
        ssr: false
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/addon/hint/show-hint.js",
        async: true,
        ssr: false
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/hello.js", mode: "client" }, // only on client side
    { src: "~/plugins/monaco.js", mode: "client" },
    { src: "~/plugins/teste1.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
