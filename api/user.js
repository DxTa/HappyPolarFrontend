/**
 * Mocking client-server processing
 */
// const TIMEOUT = 100

export default {
  login(...props) {
    console.log("AAA", props);
    return props;
    // return
  }
  // getProducts(cb, timeout) {
    // setTimeout(() => cb(_products), timeout || TIMEOUT)
  // },

  // buyProducts(payload, cb, timeout) {
    // setTimeout(() => cb(), timeout || TIMEOUT)
  // }
}
