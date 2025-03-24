fetch(Url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
