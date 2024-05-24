const body = document.querySelector("body");
const list = document.createElement("ul");

const itemlist1 = document.createElement("li");
const pFacebook = document.createElement("p");
pFacebook.innerHTML = "Facebook";
itemlist1.appendChild(pFacebook);

const itemlist2 = document.createElement("li");
const pNetflix = document.createElement("p");
pNetflix.innerHTML = "Netflix";
itemlist2.appendChild(pNetflix);

const itemlist3 = document.createElement("li");
const pInstagram = document.createElement("p");
pInstagram.innerHTML = "Instagram";
itemlist3.appendChild(pInstagram);

const itemlist4 = document.createElement("li");
const pSnapchat = document.createElement("p");
pSnapchat.innerHTML = "Snapchat";
itemlist4.appendChild(pSnapchat);

const itemlist5 = document.createElement("li");
const pTwitter = document.createElement("p");
pTwitter.innerHTML = "Twitter";
itemlist5.appendChild(pTwitter);

list.appendChild(itemlist1);

list.appendChild(itemlist2);

list.appendChild(itemlist3);

list.appendChild(itemlist4);

list.appendChild(itemlist5);

body.appendChild(list);
