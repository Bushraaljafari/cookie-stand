/* eslint-disable no-undef */

'use strict';
//horus= [6am,7am.....,7pm]

// name seattle
// min cust
// max cust
// avg cookies
// random customers per hour=[];
// avgCookies=[];

// method for random cust each hour
// [23,60,55,]

// avg cookies per hour

// [23*1.2,250,300,105]


// unordered list


// tokyo

// dubai

let parent=document.getElementById('parent');
let imgElement=document.createElement('img');
parent.appendChild(imgElement);
imgElement.setAttribute('src','https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png');




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hoursOfOperation=['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

const Seattle={
  name:'Seattle',
  customersPerHour:[],
  minCustomers:23,
  maxCustomers:65,
  avgCookie:6.3,
  cookiesPerHour:[],
  total:0,


  getCustomersPerHour:function(){
    for (let i=0; i<hoursOfOperation.length;i++){
      this.customersPerHour.push(randomNumber(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total} cookies`;

  },};

Seattle.getCustomersPerHour();
Seattle.getCookiesPerHour();
Seattle.render();
console.log(Seattle);




const tokyo={
  name:'Tokyo',
  customersPerHour:[],
  minCustomers:3,
  maxCustomers:24,
  avgCookie:1.2,
  cookiesPerHour:[],
  total:0,


  getCustomersPerHour:function(){
    for (let i=0; i<hoursOfOperation.length;i++){
      this.customersPerHour.push(randomNumber(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total} cookies`;

  },};

tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.render();
console.log(tokyo);







const dubai={
  name:'Dubai',
  customersPerHour:[],
  minCustomers:11,
  maxCustomers:38,
  avgCookie:3.7,
  cookiesPerHour:[],
  total:0,


  getCustomersPerHour:function(){
    for (let i=0; i<hoursOfOperation.length;i++){
      this.customersPerHour.push(randomNumber(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total} cookies`;

  },};

dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.render();
console.log(dubai);






const paris={
  name:'Paris',
  customersPerHour:[],
  minCustomers:20,
  maxCustomers:38,
  avgCookie:2.3,
  cookiesPerHour:[],
  total:0,


  getCustomersPerHour:function(){
    for (let i=0; i<hoursOfOperation.length;i++){
      this.customersPerHour.push(randomNumber(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total} cookies`;

  },};

paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.render();
console.log(paris);





const lima={
  name:'Lima',
  customersPerHour:[],
  minCustomers:2,
  maxCustomers:16,
  avgCookie:4.6,
  cookiesPerHour:[],
  total:0,


  getCustomersPerHour:function(){
    for (let i=0; i<hoursOfOperation.length;i++){
      this.customersPerHour.push(randomNumber(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total} cookies`;

  },};

lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.render();
console.log(lima);











/*
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


let Shopes=[];
function Shop(name,minCustomers,maxCustomers,avgCookie){
  this.name=name;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookie=avgCookie;
  this.total=0;


  Shopes.push(this);

}
//---------------------------------------
let Seattle =new Shop('Seattle',23,65,6.3);
//---------------------------------------

Shop.prototype.render=function(){
  // make a row for the shop
  let parent=document.getElementById('parent');
  let nameElement=document.createElement('h3');
  parent.appendChild(nameElement);
  nameElement.textContent=this.name;
  let ulElement=document.createElement('ul');
  parent.appendChild(ulElement);

  for (let i=0; i<hoursOfOperation.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
  }
  let totalLi=document.createElement('li');
  ulElement.appendChild(totalLi);
  totalLi.textContent=`total : ${this.total} cookies`;

};*/


















/*Shope.prototype.rander=function(){
  let parent = document.getElementById('parent');
  console.log(parent);

};*/


