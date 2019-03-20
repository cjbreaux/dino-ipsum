// class DinoLegacy {
//
//   getBy(searchTerm) {
//     return function(qty) {
//       return new Promise(function(resolveFunction, rejectFunction) {
//         let request = new XMLHttpRequest();
//         let url = `http://dinoipsum.herokuapp.com/api/?format=json&${searchTerm}=${qty}`;
//
//         request.onload = function() {
//           if (this.status === 200) {
//             resolveFunction(request.response);
//           } else {
//             rejectFunction(Error(request.statusText));
//           }
//         }
//
//         request.open("GET", url, true);
//         request.send();
//       });
//     }
//   }
//
//   getByWords(words) {
//     return new Promise(function(resolveFunction, rejectFunction) {
//       let request = new XMLHttpRequest();
//       let url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${words}`;
//
//       request.onload = function() {
//         if (this.status === 200) {
//           resolveFunction(request.response);
//         } else {
//           rejectFunction(Error(request.statusText));
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
//
//   getByParagraph(paragraphs) {
//     return new Promise(function(resolveFunction, rejectFunction) {
//       let request = new XMLHttpRequest();
//       let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}`;
//
//       request.onload = function() {
//         if (this.status === 200) {
//           resolveFunction(request.response);
//         } else {
//           rejectFunction(Error(request.statusText));
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
