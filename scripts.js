document.addEventListener('DOMContentLoaded', () => { 
  const quoteBody = document.getElementById('quote-body');
  const quoteFooter = document.getElementById('quote-footer');
  const twitterBtn = document.getElementById('twitter');
  const newQuoteBtn = document.getElementById('new-quote');
 
  newQuoteBtn.addEventListener("click", getQuote);

  function getQuote() {
    let spinner = newQuoteBtn.childNodes[1];
    spinner.classList.toggle('fa-spin');    
    newQuoteBtn.disabled = true;
    fetch("https://talaikis.com/api/quotes/random/")
      .then((json) => json.json())
      .then((data) => {

        let quote = data.quote;
        let author = data.author;
        quoteBody.innerHTML = quote;
        quoteFooter.innerHTML = author;
        spinner.classList.toggle('fa-spin');
        newQuoteBtn.disabled = false;
        twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text="' + quote  + '" -- ' + author);
      })
      .catch(err => {
        quoteBody.innerHTML = "There was an error, please try again!";
      });
  }

  getQuote();
}, false);