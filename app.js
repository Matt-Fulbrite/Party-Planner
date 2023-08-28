const plan = document.querySelector('#plan');

let planner = [];
async function fetchPlanner () {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    planner = json.data;
    renderPlanner();
    
}


function renderPlanner() {
    const output = planner.map(function(plans) {
        return `<h2>${plans.name}<h2> \n <h2>${plans.date}<h2> \n <h2>${plans.location}<h2> \n <h2>${plans.description}<h2>`
    }).join('');
    plan.innerHTML = output;
}

fetchPlanner();