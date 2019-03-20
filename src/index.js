import $ from 'jquery';
import './scss/styles.scss';
import {DinoApi} from './js/classes/dino.js';
import {Results} from './js/classes/results.js'

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    const inputs = {};
    $('input').each(function() {

      if ($(this).val()) {
        const property = $(this).attr('id')
        inputs[property] = $(this).val();
      }
    });


    $('#words').val("");
    $('#paragraphs').val("");




    const dino = new DinoApi();
    const promise = dino.get(inputs);


    promise.then(function(responseFromApi) {
      const results = new Results();
      const text = "hello message";

      const response = JSON.parse(responseFromApi);

      let html = "";
      response.forEach(function(paragraph) {
        html += results.createHtml("li", results.toLorem(paragraph));
      });
      $('#results').html(html);
    }, function(errorFromApi){

    });




  })

});
