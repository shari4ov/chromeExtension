let myLeads = [];
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const saveTab = document.getElementById('save-tab');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if(leadsFromLocalStorage){
       myLeads = leadsFromLocalStorage;
       rider(myLeads);
};

function rider(leads){
       let textLi='';
       leads.forEach(each=>{
              textLi += `<li>
              <a href="${each}" target="_blank">${each}</a>
              </li>`;
       });
       ulEl.innerHTML = textLi;

}

saveBtn.addEventListener('click',function(){
       myLeads.push(inputEl.value);
       localStorage.setItem('myLeads',JSON.stringify(myLeads));
       inputEl.value='';
       rider(myLeads);
})
deleteBtn.addEventListener('dblclick',function(){
       localStorage.clear();
       myLeads=[];
       rider(myLeads);
})
saveTab.addEventListener('click',function(){
       chrome.tabs.query({currentWindow: true,active:true},function(tabs){
              myLeads.push(tabs[0].url);
              localStorage.setItem('myLeads',JSON.stringify(myLeads));
              rider(myLeads);
       })
})