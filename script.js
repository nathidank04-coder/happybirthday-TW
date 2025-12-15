function blow() {
  const flame = document.getElementById("flame");
  const text = document.getElementById("text");

  if (flame.style.display !== "none") {
    flame.style.display = "none";
    text.innerText = "🎉 Happy birthdayy tooo youu 🎉";
  }
}
