let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');


function calculateCount(){
    total.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}

calculateCount();

// function toggleStyle(id){
//     console.log("click", id);
// }

mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const location = parentNode.querySelector('.location').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    
})