$(document).ready(function () {

  const quoteBody = $("#quote-body");
  const quoteFooter = $("#quote-footer");
  const twitterBtn = $("#twitter");
  const newQuoteBtn = $("#newQuote");

  newQuoteBtn.click(function() {
    getQuote();
  });

  function getQuote() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function (json) {
      quoteBody.html(json[0].content);
      quoteFooter.html(json[0].title);
    })
  };

  getQuote();
});