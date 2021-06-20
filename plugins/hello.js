export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', msg => {
    return {msg}
  } /* console.log(`Hello ${msg}!`) */)
}