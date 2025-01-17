if (window.location.pathname === "/index.html") {
  document.getElementById("searchToggle").addEventListener("click", function () {
    const searchForm = document.getElementById("searchForm");
    if (searchForm.classList.contains("d-none")) {
      searchForm.classList.remove("d-none");
      searchForm.classList.add("d-flex");
    } else {
      searchForm.classList.remove("d-flex");
      searchForm.classList.add("d-none");
    }
  });
}
