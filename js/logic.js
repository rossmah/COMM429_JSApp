window.addEventListener('load', () => {
    showQuote();
    let counter = document.getElementById('count');
    counter.innerText = data.length;
  });

function showQuote() {
  let parentNode = document.getElementById('main');
  parentNode.insertAdjacentHTML('beforeend', quoteFactory(getQuote()));
}
  

function getQuote() {
  const seed = Math.random();
  let selected = document.getElementById('select').value;
  const filteredData = data.filter(quote => quote.genre === selected);
  if (selected != 'All') {
    const i = (Math.floor(seed * filteredData.length));
    return filteredData[i];
  } else {
    const i = (Math.floor(seed * data.length));
    return data[i];
  }
};
const quoteFactory = (obj) => {
  const makeQuote = 
    `<div class="container">
      <div class="book-info">
        <img src="${obj.cover}" alt="Book Cover">
        <div class="book-details">
          <h1>${obj.title}</h1>
          <h2>${obj.series}</h2>
          <h2>(${obj.genre})</h2>
          <p>"${obj.text}"</p>
          <span class="author"> ${obj.author}</span> 
        </div>
      </div>
      <div id="goodreads"><a href="${obj.link}">GoodReads</a></div>
      <a class="close" onClick="this.parentElement.remove();">Remove</a>
    </div>`;
    return makeQuote;
};

  
 