
fetch("data.json")
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  
  document.querySelector(".card-title").textContent = data.title;
  document.querySelector(".card-subtitle").textContent = data.subtitle;
  document.querySelector(".card-description").textContent = data.description;
  document.querySelector(".author-name").textContent = data.author.name;
  document.querySelector(".author-image").src = data.author.image;
})
.catch(error => {
  console.error("Error fetching data:", error);
});


fetch("https://api.unsplash.com/photos/random?client_id=DUCxEZjJiWyCQZSp5GyIsG6Mcybt-QPcNezGWhb4Zng")
.then(response => {
  if (!response.ok) {
    throw new Error("Error fetching image from Unsplash");
  }
  return response.json();
})
.then(data => {
  document.querySelector(".card-image").src = data.urls.regular;
})
.catch(error => {
  console.error("Error fetching image:", error);
});
