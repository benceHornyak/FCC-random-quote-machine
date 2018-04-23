$(document).ready(function () {

  const quoteBody = $("#quote-body");
  const quoteFooter = $("#quote-footer");
  const twitterBtn = $("#twitter");
  const newQuoteBtn = $("#newQuote");
 
  newQuoteBtn.click(function() {
    getQuote();
  });


 // https://twitter.com/intent/tweet?text=TEXT
  function getQuote() {
    newQuoteBtn.children().toggleClass('fa-spin');
    newQuoteBtn.prop('disabled', true);
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function (json) {

      let quote = json[0].content;
      let author = json[0].title;
      quoteBody.html(quote);
      quoteFooter.html(author);
      newQuoteBtn.children().toggleClass('fa-spin');
      newQuoteBtn.prop('disabled', false);
      
      quote = quote.replace(/(<([^>]+)>)/ig , "");
      quote = quote.replace(/&#8217;/ig, "'");

      twitterBtn.attr("href", 'https://twitter.com/intent/tweet?text="' + quote  + '" -- "' + author);

    });
  }

  getQuote();
});