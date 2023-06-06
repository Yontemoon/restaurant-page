
function homeTab() {
    const content = document.getElementById('content');
    const menu = document.getElementById('menu-ctn');
    const home = document.getElementById('home-ctn');
    const contact = document.getElementById('contact-ctn');

    
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'home-ctn');
    mainContent.setAttribute('class', 'mainContent')
    
    
    // mainContent.classList.add('current');    
    // mainContent.setAttribute('data-tab-content', '');
    //THE REVIEW SECTION
    const reviewCtn = document.createElement('div');
    reviewCtn.id = "reviewCtn";
        const review = document.createElement('p');
        review.textContent = "Lorem ipsum dolor sit amet, per no dolor tantas, udus iuvaret antiopam mel id. Alii nulla ius an, sit cu mollis ocurreret. Mea eu convenire assueverit sadipscing, quodsi malorum ne eam, in meliore ancillae sapientem pri. Et has case eripuit, eum minimum sensibus cu. Duo case dictas impedit an, nusquam mediocrem et per, ea fabellas recusabo eum"
        reviewCtn.appendChild(review);
        const reviewer = document.createElement('p');
        reviewer.textContent = "Monte Yoon";
        reviewCtn.appendChild(reviewer);
    mainContent.appendChild(reviewCtn);


    //THE HOURS SECTION
    const hoursCtn = document.createElement('div');
    hoursCtn.id = 'hoursCtn';
    const hoursTitle = document.createElement('h3');
    hoursTitle.id = 'hoursTitle';
    hoursTitle.textContent = 'Hours';
    hoursCtn.appendChild(hoursTitle);
        const hourMonday = document.createElement('p');
        hourMonday.classList.add = 'hours';
        hourMonday.textContent = 'Monday 7am - 10pm';
        hoursCtn.appendChild(hourMonday);

        const hourTuesday = document.createElement('p');
        hourTuesday.classList.add = 'hours';
        hourTuesday.textContent = 'Tuesday 7am - 10pm';
        hoursCtn.appendChild(hourTuesday);

        const hourWednesday = document.createElement('p');
        hourWednesday.classList.add = 'hours';
        hourWednesday.textContent = 'Wednesday 7am - 10pm';
        hoursCtn.appendChild(hourWednesday);

        const hourThursday = document.createElement('p');
        hourThursday.classList.add = 'hours';
        hourThursday.textContent = 'Thursday 7am - 10pm';
        hoursCtn.appendChild(hourThursday);

        const hourFriday = document.createElement('p');
        hourFriday.classList.add = 'hours';
        hourFriday.textContent = 'Friday 7am - 10pm';
        hoursCtn.appendChild(hourFriday);

        const hourSaturday = document.createElement('p');
        hourSaturday.classList.add = 'hours';
        hourSaturday.textContent = 'Saturday CLOSED';
        hoursCtn.appendChild(hourSaturday);

        const hourSunday = document.createElement('p');
        hourSunday.classList.add = 'hours';
        hourSunday.textContent = 'Sunday CLOSED';
        hoursCtn.appendChild(hourSunday);

    mainContent.appendChild(hoursCtn);

    
    //THE LOCATION SECTION
    const locationCtn = document.createElement('div');
    locationCtn.id = "locationCtn";
        const locationTitle = document.createElement('h3');
        locationTitle.id ='LocationTitle'
        locationTitle.textContent = "Location";
        locationCtn.appendChild(locationTitle);
        const address = document.createElement('p');
        address.textContent = '10532 Fremont Ave N Seattle, WA';
        address.id = 'address';
        locationCtn.appendChild(address);
   mainContent.appendChild(locationCtn);
 
   content.appendChild(mainContent);

   if (content.children.length > 2) {
    const secondChild = content.children[1];
    secondChild.remove();
    }

};   


export { homeTab };
