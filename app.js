
//API Key: AIzaSyC3OdAsJNJMjiPI8wnnt4zycydn4bTMCSY

//Standard format: https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

//max results: https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=40





console.log('the javascript file is connected!')


$(()=>{
  $('.search').on('click', (event) => {
    event.preventDefault()
    $('.display').empty()

    const userInput = $('.inputbox').val()
    console.log('wow')


  $.ajax({
  url: `https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=40`
  // type: "GET"
  }).then(
  (data) => {
    alert("Retrieved the book " + data.items.length + " records from the dataset!");
    for (let i=0; i<data.items.length-1; i++){
    console.log(data.items[i].volumeInfo.title)

    const $containereach = $('<div>').addClass('Cards')
    $containereach.appendTo($('.display')) //each card container for the Books
    //below is the code for the book covers adding to the card containers
    if (data.items[i].volumeInfo.imageLinks!=undefined){
      const $cover = $('<img>').attr('src',data.items[i].volumeInfo.imageLinks.thumbnail)
      $cover.attr('id', `cover${i}`)
      $cover.appendTo($containereach)
    } else {
      const $cover = $('<h3>').text(data.items[i].volumeInfo.title)
      $cover.attr('id', `cover${i}`)
      $cover.appendTo($containereach)
    }

    const $modalbutton = $('<button>').text('Info')
    $modalbutton.appendTo($containereach) //creating modal button
    const $modal = $('<div>').addClass('modal')
    $modal.appendTo($containereach)
    const $modaltextbox = $('<div>').addClass('modal-textbox')
    $modaltextbox.appendTo($containereach)
    const $closetag = $('<div>').attr('id', 'close').text('Close').appendTo($modaltextbox)


    //Adding the book info below
    const $books =$('<div>').text(data.items[i].volumeInfo.title).addClass('title');
    $books.appendTo($modaltextbox);
    $books.css({'margin-bottom':'15px'})
    const $author = $('<a>').text(data.items[i].volumeInfo.authors)
    $author.appendTo($books)
    const $date = $('<a>').text(data.items[i].volumeInfo.publishedDate)
    $date.appendTo($books);
    const $description = $('<a>').text(data.items[i].volumeInfo.description)
    $description.appendTo($books);
    // const $break = $('<br>').appendTo($books)
    }

  // const $globooks = $('.title')
  // $globooks.css('display', 'none')
  // $globooks:first-of-type.css('display','block')


    // $('#title').html(data.Title)
    // $('#year').html(data.Year)
    // $('#rated').html(data.Rated)
  },
  ()=> {
    console.log('bad request')
  }

    );

  })

})

//intersting
///
//
// let x=null
//
// setTimeout(() => {
//   x ="retrieved"
// }, 500)
//
// console.log(x)
