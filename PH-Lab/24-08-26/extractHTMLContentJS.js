function extractBodyContent(htmlString) {
    const cutBefore = htmlString.split("<body>").pop().toString();
    const cutAfter = cutBefore.split("</body>").shift().toString();
    return cutAfter;
}

console.log(extractBodyContent(`<html>
  <head>
    <title>My Page</title>
  </head>
  <body> 
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body> 
</html>`))