let numberOfBook1 = 0;
let numberOfBook2 = 0;
let numberOfBook3 = 0;
let totalsum = 0; 

function openMenu() {
  updateBookOneInvaentory()
  document.getElementById("dropdown").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("dropdown").classList.remove("show");
}

function toggleBook1() {
  if (numberOfBook1 >= 1) {
    document.getElementById("showBook1").style.display = "block";
  } else {
    document.getElementById("showBook1").style.display = "none";
  }
}

function calculateSumBook1(x) {
  return x * 59 + "kr";
}

function updateTotalPriceForBook1() {
  document.getElementById("result-book-1").innerHTML = calculateSumBook1(
    numberOfBook1
  );
}

function changeSumBook1() {
  numberOfBook1 = document.getElementById("number-of-book1").valueAsNumber;
  updateTotalPriceForBook1();
  updateAllResult();
}

function updateBookOneInvaentory() {
  document.getElementById("number-of-book1").value = numberOfBook1;
}

function addBookOneToCart() {
  numberOfBook1 += 1;
  updateBookOneInvaentory();
  updateTotalPriceForBook1();
  updateAllResult();
}

function calculateSumBook2(y) {
  return y * 59 + "kr";
}

function toggleBook2() {
  if (numberOfBook2 >= 1) {
    document.getElementById("showBook2").style.display = "block";
  } else {
    document.getElementById("showBook2").style.display = "none";
  }
}

function updateTotalPriceForBook2() {
  document.getElementById("result-book-2").innerHTML = calculateSumBook2(
    numberOfBook2
  );
}

function changeSumBook2() {
  numberOfBook2 = document.getElementById("number-of-book-2").valueAsNumber;
  updateTotalPriceForBook2();
  updateAllResult();
}

function addBookTwoToCart() {
  numberOfBook2 += 1;
  document.getElementById("number-of-book-2").value = numberOfBook2;
  updateTotalPriceForBook2();
  updateAllResult();
}


function toggleBook3() {
  if (numberOfBook3 >= 1) {
    document.getElementById("ShowBook3").style.display = "block";
  } else {
    document.getElementById("ShowBook3").style.display = "none";
  }
}


function calculateSumBook3(z) {
  return z * 49 + "kr";
}

function updateTotalPriceForBook3() {
  document.getElementById("result-book-3").innerHTML = calculateSumBook3(
    numberOfBook3
);
}

function changeSumBook3() {
  numberOfBook3 = document.getElementById("number-of-book-3").valueAsNumber;
  updateTotalPriceForBook3();
  updateAllResult();
}

function addBookThreeToCart() {
  numberOfBook3 += 1;
  document.getElementById("number-of-book-3").value = numberOfBook3;
  updateTotalPriceForBook3();
  updateAllResult();
}

function totaltAllBooks() {
  let sumAllBooks = numberOfBook1 + numberOfBook2 + numberOfBook3;
  //console.log(sumAllBooks)
  //console.log(typeof(sumAllBooks))
  document.getElementById("total-all-books").innerText = sumAllBooks
}



function handleFreeFrieght() {
 if (totalsum < 159 ) {
  let x = 159 - totalsum
  document.getElementById("free-frieght").innerText = x +  " kvar till free frakt"
 } else {
  document.getElementById("free-frieght").innerText = "free frakt"
 }
  
}

handleFreeFrieght()

function totalPriceOfAllBooks(x, y, z) {
  return x * 59 + y * 59 + z * 49

}


function sumOfAllBooks() {
  let numberOfBook1 = document.getElementById("number-of-book1").valueAsNumber
  let numberOfBook2 = document.getElementById("number-of-book-2").valueAsNumber
  let numberOfBook3 = document.getElementById("number-of-book-3").valueAsNumber

  let sum = document.getElementById("sum-of-all-books")
  totalsum = totalPriceOfAllBooks(numberOfBook1, numberOfBook2, numberOfBook3 )

  sum.innerHTML = totalsum + (" kr")
}

function updateAllResult() {
  //checkout()
  toggleBook1()
  updateTotalPriceForBook2()
  toggleBook2()
  totaltAllBooks()
  toggleBook3()
  sumOfAllBooks()
  handleFreeFrieght()
}

updateAllResult();

