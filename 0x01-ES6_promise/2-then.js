export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const obj = {
        status: 200,
        body: 'success',
      };
      console.log('Got a response from the API');
      return obj;
    });
  //  .catch(() => { Error(); });
}
