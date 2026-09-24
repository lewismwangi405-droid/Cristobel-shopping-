const authScreen = document.getElementById("authScreen");
const shopScreen = document.getElementById("shopScreen");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const welcomeMsg = document.getElementById("welcomeMsg");

loginTab.addEventListener("click", function () {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});

signupTab.addEventListener("click", function () {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
});

document.getElementById("toSignup").addEventListener("click", function (e) {
  e.preventDefault();
  signupTab.click();
});
document.getElementById("toLogin").addEventListener("click", function (e) {
  e.preventDefault();
  loginTab.click();
});

function enterShop(name) {
  authScreen.classList.add("hidden");
  shopScreen.classList.remove("hidden");
  welcomeMsg.textContent = name ? `Welcome, ${name}!` : "Welcome back!";
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  enterShop();
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = signupForm.querySelector("input[type='text']").value;
  enterShop(name);
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  shopScreen.classList.add("hidden");
  authScreen.classList.remove("hidden");
});

// Shop data
const cards = [
  { name: "Sneakers", color: "#888", price: 4500 },
  { name: "Handbags", color: "#7a5230", price: 6200 },
  { name: "Accessories", color: "#333", price: 1800 },
  { name: "Outerwear", color: "#555", price: 8900 }
];

const features = [
  { name: "Top Picks", sub: "Up to 60% Off", color: "#111", price: 3200 },
  { name: "New Arrivals", sub: "Shop the set", color: "#3a3a5c", price: 5500 }
];

function formatKES(amount) {
  return "KSh " + amount.toLocaleString("en-KE");
}

const cardRow = document.getElementById("cardRow");
cards.forEach(function (c) {
  const div = document.createElement("div");
  div.className = "card";
  div.style.background = c.color;
  div.innerHTML = `<span>${c.name}<br>${formatKES(c.price)}</span>`;
  cardRow.appendChild(div);
});

const featureRow = document.getElementById("featureRow");
features.forEach(function (f) {
  const div = document.createElement("div");
  div.className = "feature";
  div.style.background = f.color;
  div.innerHTML = `<b>${f.name}</b><span>${f.sub} — ${formatKES(f.price)}</span>`;
  featureRow.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  alert("Thanks for signing up!");
});

const navRow = document.getElementById("navRow");
const navItems = navRow.querySelectorAll("span");
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navItems.forEach(function (i) { i.classList.remove("active"); });
    item.classList.add("active");
  });
});
