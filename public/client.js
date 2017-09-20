// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
});

$('.submit').on('click', function() {
//   $.post('/get-file-size', { field1: "hello", field2 : "hello2"}, 
//     function(returnedData){
//          console.log(returnedData);
// });
  var size = $("#FileInput")[0].files[0].size;
  console.log(size)
  $.ajax({
  type: "POST",
  url: '/get-file-size',
  data: {'file_size': Math.ceil(size/1000)}
}).done(function(data) {
    console.log(data)
    $(".dreams").html('<h1>File size is ' + data.file_size + 'kb')
  });
})