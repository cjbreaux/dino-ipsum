export class DinoApi {
  get(object) {
    return new Promise(function(resolveFunction, rejectFunction) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json`;

      for (const property in object) {
        url += '&' + property + '=' + object[property];
      }

      console.log(url);

      request.onload = function() {
        if (this.status === 200) {
          resolveFunction(request.response);
        } else {
          rejectFunction(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });
  }
}
