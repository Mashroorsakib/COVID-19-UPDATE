const btn=document.getElementById('btnid');
const parent=document.getElementById('country-name');
const div1=document.getElementById('first-div');
const div2=document.getElementById('second-div');
const div3=document.getElementById('third-div');
btn.addEventListener('click',function(){
  const inputText=document.getElementById('search-input').value;
  console.log(inputText)
  fetchdata(inputText)
})

const fetchdata=async(countryname)=>{
    const res= await fetch (`https://coronavirus-19-api.herokuapp.com/countries/${countryname}`)
    const data= await res.json();
    displaydata(data)
}

const displaydata = (data)=>{
  parent.innerHTML=null
  console.log(data.cases)
  const p=document.createElement('h1')
  p.innerHTML=data.country;
  parent.appendChild(p);
  div1.innerHTML=null;
  div3.innerHTML=null;
  div2.innerHTML=null;
  const first=document.createElement('div');
  first.className="card-style card text-dark bg-light mb-3"
  first.innerHTML=`
  <div class="card-header">Cases</div>
  <div class="card-body">
    <p class="card-title">Total Cases: ${data.cases}<p>
    <p class="card-text">Today Case :${data.todayCases}</p>
  </div>
  `
   div1.appendChild(first);
   const second=document.createElement('div')
   second.className="card-style card text-dark bg-light mb-3"
   second.innerHTML=`
  <div class="card-header">Deaths</div>
  <div class="card-body">
    <p class="card-title">Total Death:${data.deaths}</p>
    <p class="card-text">New Death: ${data.todayDeaths}</p>
  </div>
  `
  div2.appendChild(second)
  
  const third=document.createElement('div') 
  third.className=" card-style card text-dark bg-light mb-3"
  third.innerHTML=`
  <div class="card-header">ACTIVE/Recoverd Cases</div>
  <div class="card-body">
    <p class="card-title">Active Case: ${data.active}</p>
    <p class="card-text">Recovered:${data.recovered}</p>
  </div>
  `
  div3.appendChild(third);
 
}