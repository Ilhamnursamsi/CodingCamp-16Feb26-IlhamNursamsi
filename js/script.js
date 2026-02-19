// ambil element
const todoInput = document.getElementById("todoInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterAll = document.getElementById("filterAll");
const filterToday = document.getElementById("filterToday");

// =======================
// ADD TASK
// =======================
addBtn.addEventListener("click", function () {
  const task = todoInput.value;
  const date = dateInput.value;

  // validasi
  if (task === "" || date === "") {
    alert("Input tidak boleh kosong!");
    return;
  }

  // buat elemen list
  const li = document.createElement("li");

  // simpan tanggal sebagai attribute untuk filter
  li.setAttribute("data-date", date);

  li.textContent = task + " - " + date;

  // tombol delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // reset input
  todoInput.value = "";
  dateInput.value = "";
});

// =======================
// FUNCTION ACTIVE BUTTON
// =======================
function setActiveButton(activeBtn) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

// =======================
// FILTER ALL
// =======================
filterAll.addEventListener("click", function () {
  const items = document.querySelectorAll("#todoList li");

  items.forEach(function (item) {
    item.style.display = "flex";
  });

  setActiveButton(filterAll);
});

// =======================
// FILTER TODAY
// =======================
filterToday.addEventListener("click", function () {
  const today = new Date().toISOString().split("T")[0];
  const items = document.querySelectorAll("#todoList li");

  items.forEach(function (item) {
    const itemDate = item.getAttribute("data-date");

    if (itemDate === today) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  setActiveButton(filterToday);
});
