document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments

  const res = await fetch("http://localhost:8000/");
  const json = await res.json();

  const searchTerm = e.target.value.toLowerCase();
  if (searchTerm == "") {
    document.getElementById("results").innerHTML = "";
    return;
  }

  const filteredSuggestions = json.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(searchTerm)
  );

  const html = filteredSuggestions
    .map((suggestion) => `<li>${suggestion.name}</li>`)
    .join("");

  document.getElementById("results").innerHTML = html;
});
