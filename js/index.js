//  pagination algoritimi

let pagination__buttons = document.querySelector('.pagination__buttons');

// bu saytdagi kinolari soni
const movie_count = 300;

// har bir pagination bosilganda qo'shilishi kerak bo'lganlari soni
const perPage = 30;

// umumiy pagination tugmasi soni
const pageCount = movie_count / perPage;
let currentPageDetection = 0;

function paginationFunc(currentPage = 1) {
  currentPageDetection = currentPage;
  // agar tanlangan pagedan 2 ni ayrganda  1 chiqarish kerak
  let start_page = currentPage - 2 <= 0 ? 1 : currentPage - 2;

  if (currentPage + 2 > pageCount) {
    start_page -= currentPage + 2 - pageCount;
  }

  let pagination_btn = '';

  for (let index = start_page; index <= pageCount; index++) {
    if (index == start_page + 5) {
      break;
    }
    pagination_btn += `
  <button onclick='paginationFunc(${index})' class="btn btn-light">${index}</button>
  `;
    console.log(index);
  }

  pagination__buttons.innerHTML = pagination_btn;
}

paginationFunc();

// dastlabki sahifaga qaytish
function pre() {
  if (currentPageDetection - 1 !== 0) {
    currentPageDetection -= 1;
    console.log(currentPageDetection);
    paginationFunc(currentPageDetection);
  }
}
function next() {
  if (currentPageDetection + 1 !== 10) {
    currentPageDetection += 1;
    console.log(currentPageDetection);
    paginationFunc(currentPageDetection);
  }
}
