const URL = 'https://fakestoreapi.com/products';
const cards = document.getElementById("cards")



fetch(URL).then((data) => {
  // console.log(data);
  return data.json();
}).then((completedata) => {
  // console.log(completedata[2].title);
  let data1 = "";
  completedata.map((val) => {
    data1 +=`<div class="card">
    <h1 class="title">${val.title}</h1>
    <img src=${val.image} alt="images" class="images">
    <p class="desc">${val.description}</p>
    <p class="category">${val.category}</p>
    <p class="price">$ ${val.price}</p>
    <p class="rate"> ${val.rating.rate} </p>
    <p class="rate"> ${val.rating.count} </p>
  </div>`
  })
  cards.innerHTML = data1;

}).catch((error) => {
  console.log(error);
})



























// fetch(URL).then((data) => {
//   // console.log(data);
//   return data.json();
// }).then((completedata) => {
//   console.log(completedata[2].title);

//   document.getElementById('root')
//   .innerHTML = completedata[4].title;
// })