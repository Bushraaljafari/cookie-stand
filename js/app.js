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
/*function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hoursOfOperation=['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

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
      this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  getCookiesPerHour:function(){
    for( let i=0; i<hoursOfOperation.length;i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookie));
      this.total=this.total+this.cookiesPerHour[i];

    }

  },


  render:function(){
    let parent=document.getElementsById('parent');
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for (let i=0; i<hoursOfOperation.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hoursOfOperation[i]}:${this.cookiesPerHour[i]}cookies`;
    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`total : ${this.total}cookies`;

  }};

Seattle.getCustomersPerHour();
Seattle.getCookiesPerHour();
Seattle.rander();
console.log(Seattle);*/


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



//----creating constactor

function Shop(name, minCustomers,maxCustomers,avgCookie){
  this.name=name;
  this.minCustomers=maxCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookie=avgCookie;
  total=0;
  customersPerHour=[];
  cookiesPerHour=[];
}


//----make prototypy for rander function

Shop.prototype.render=function(){

  total=0;

  let parent=document.getElementsById('parent');
  let nameElement=document.createElement('h3');
  parent.appendChild(nameElement);
  nameElement.textContent=this.name;
  let ulElement=document.createElement('ul');
  parent.appendChild(ulElement);

  for (let i=0; i<hoursOfOperation.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hoursOfOperation[i]}:${this.cookiesPerHour[i]}cookies`;
  }
  let totalLi=document.createElement('li');
  ulElement.appendChild(totalLi);
  totalLi.textContent=`total : ${this.total}cookies`;


};

let seattle=new Shop('Seattle',23,65,6.3);

seattle.render();
console.log(seattle);















/* let Shopes=[];


   function shope(name, minCustomers, maxCustomers, avgCookie) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookie = avgCookie;
    this.total = 0;
    Shopes.push(this);
  }
  //---------------------------------------
  render() {
    // make a row for the shop
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursOfOperation[i]} :${this.cookiesPerHour[i]} cookies`;
    }
    let totalLi = document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent = `total : ${this.total} cookies`;
  }
}
//---------------------------------------
let Seattle =new Shop('Seattle',23,65,6.3);
*/
