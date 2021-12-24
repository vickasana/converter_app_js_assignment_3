document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("lbsOutput").innerHTML = kgs * 2.2046;
});

document.getElementById("feetInput").addEventListener("input", (e) => {
  let feet = e.target.value;
  document.getElementById("cmsOutput").innerHTML = feet * 30.48;
});

document.getElementById("literInput").addEventListener("input", (e) => {
  let lit = e.target.value;
  document.getElementById("mililiterOutput").innerHTML = lit * 1000;
});

document.getElementById("ounceInput").addEventListener("input", (e) => {
  let ounce = e.target.value;
  document.getElementById("gramOutput").innerHTML = ounce * 28.3495;
});

document.getElementById("hourInput").addEventListener("input", (e) => {
  let hour = e.target.value;
  document.getElementById("secOutput").innerHTML = hour * 60 * 60;
});
