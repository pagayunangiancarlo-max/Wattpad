
const savedStory = sessionStorage.getItem("selectedStory");

if (!savedStory) {
  window.location.href = "index.html";
} else {
  const story = JSON.parse(savedStory);

  document.getElementById("title").textContent = story.title;
  document.getElementById("author").textContent = "By " + story.author;
  document.getElementById("genre").textContent = story.genre;
  document.getElementById("synopsis").textContent = story.synopsis;
  document.getElementById("chapterTitle").textContent = story.chapter;
  document.getElementById("content").textContent = story.content;
}

document.getElementById("synopsisBtn").addEventListener("click", () => {
  const synopsis = document.getElementById("synopsis");
  synopsis.hidden = !synopsis.hidden;
});

function updateProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const percent = maxScroll <= 0
    ? 100
    : Math.round(window.scrollY / maxScroll * 100);

  document.getElementById("progress").value = percent;
  document.getElementById("progressText").textContent =
    "Reading progress: " + percent + "%";
}

window.addEventListener("scroll", updateProgress);
window.addEventListener("resize", updateProgress);
updateProgress();
