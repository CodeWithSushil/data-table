function printWindow() {
  var printButton = document.getElementById("Button1");
  printButton.style.visibility = 'hidden';
  window.print()
  printButton.style.visibility = 'visible';
}