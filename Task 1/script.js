var paginationContainer = document.getElementById("pagination");
var totalPages = 6;
var visiblePages = 5;
var currentPage = 1;


function createPagination() {

  paginationContainer.innerHTML = "";

  var startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  var endPage = Math.min(startPage + visiblePages - 1, totalPages);

  var previousLink = document.createElement("a");
  previousLink.textContent = "Previous";
  previousLink.href = "#";
  previousLink.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      createPagination();
    }
  });
  paginationContainer.appendChild(previousLink);

  for (var i = startPage; i <= endPage; i++) {
    var pageLink = document.createElement("a");
    pageLink.textContent = i;
    pageLink.href = "#";
    pageLink.classList.add("page-link");
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageLink.addEventListener("click", () => {
      currentPage = parseInt(this.textContent);
      createPagination();
    });
    paginationContainer.appendChild(pageLink);
  }


  var nextLink = document.createElement("a");
  nextLink.textContent = "Next";
  nextLink.href = "#";
  nextLink.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      createPagination();
    }
  });
  paginationContainer.appendChild(nextLink);
}

createPagination();
