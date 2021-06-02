'use strict';


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let hourOperation=['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];


let Shopes=[];

function Shope(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.customerPerHour=[];
  this.avgCookiePerHour=[];
  this.total = 0;

  Shopes.push(this);
}


//---------calulate cusstomer per hour

Shope.prototype.calculationCustomerPerHour=function(){
  for(let i=0;i<hourOperation.length; i++){
    this.customerPerHour.push( randomNumber(this.minCustomers,this.maxCustomers));
  }};




//-------------calculate cookie per hour

Shope.prototype.calculationAvgCookiePerHour=function(){
  for(let i=0;i<hourOperation.length; i++){
    this.avgCookiePerHour.push( Math.floor(this.customerPerHour[i]*this.avgCookie));
    this.total+=this.avgCookiePerHour[i];
  }};
//------------function for header
// ------------ make atable




let parentE=document.getElementById('parent');
let tableElement=document.createElement('table');
parentE.appendChild(tableElement);


function headRow(){

  /*let parent=document.getElementById('parent');
  let tableElement=document.createElement('table');
  parent.appendChild(tableElement);*/

  let trFirst=document.createElement('tr');
  tableElement.appendChild(trFirst);


  let thName=document.createElement('th');
  trFirst.appendChild(thName);
  thName.textContent='Location Name';

  for(let i=0;i<hourOperation.length; i++){

    let thHour=document.createElement('th');
    trFirst.appendChild(thHour);
    thHour.textContent=hourOperation[i];
  }

  let thDailylocationTotal=document.createElement('th');
  trFirst.appendChild(thDailylocationTotal);
  thDailylocationTotal.textContent='DailylocationTotal';

}

headRow();



Shope.prototype.render=function(){
  let infoRow=document.createElement('tr');
  tableElement.appendChild(infoRow);
  let nameTd=document.createElement('td');
  infoRow.appendChild(nameTd);
  nameTd.textContent=this.name;

  for(let i=0;i<hourOperation.length; i++){

    let cookieTd=document.createElement('td');
    infoRow.appendChild(cookieTd);
    cookieTd.textContent=this.avgCookiePerHour[i];

  }

  let totalTd=document.createElement('td');
  infoRow.appendChild(totalTd);
  totalTd.textContent=this.total;




};

function creatAfooterRow(){
  let footerRow=document.createElement('tr');
  tableElement.appendChild(footerRow);
  let finishTh=document.createElement('th');
  footerRow.appendChild(finishTh);
  finishTh.textContent='Totals';

  let megaTotal=0;

  for(let i=0;i<hourOperation.length; i++){
    let totalForPerHour=0;
    for (let j=0; j<Shopes.length;j++){
      totalForPerHour+=Shopes[j].avgCookiePerHour[i];
      megaTotal+=Shopes[j].avgCookiePerHour[i];
    }
    let infoTh=document.createElement('th');
    footerRow.appendChild(infoTh);
    infoTh.textContent=totalForPerHour;

  }
  let finalTh=document.createElement('th');
  footerRow.appendChild(finalTh);
  finalTh.textContent=megaTotal;

}






new Shope('Seattle',23,65,6.3);
new Shope('tokyo',3,24,1.2);
new Shope('dubai',11,38,3.7);
new Shope('paris',20,38,2.3);
new Shope('lami',2,16,4.6);


console.log(Shopes);


for (let i = 0; i < Shopes.length; i++) {
  Shopes[i].calculationCustomerPerHour();
  Shopes[i].calculationAvgCookiePerHour();
  Shopes[i].render();

}
creatAfooterRow();





