//Fetching my data from my mock API
fetch('phase1.json')
  .then(response => response.json())
  .then(data => {
    const gyms = data.gyms;
    const parlors = data.parlors;

    // making function to display gyms
    function displayGyms(gyms) {
      const gymsContainer = document.getElementById('gymsContainer');
      gymsContainer.innerHTML = '<h2>Gyms</h2>';

      gyms.forEach(gym => {
        const gymElement = document.createElement('div');
        gymElement.classList.add('gym');

        const gymImage = document.createElement('img');
        gymImage.src = gym.image;
        gymImage.alt = 'Gym Image';
        gymElement.appendChild(gymImage);

        const gymDetails = document.createElement('div');
        gymDetails.classList.add('gym-details');
        gymElement.appendChild(gymDetails);

        const gymName = document.createElement('h3');
        gymName.textContent = gym.name;
        gymDetails.appendChild(gymName);

        const gymLocation = document.createElement('p');
        gymLocation.textContent = 'Location: ' + gym.location;
        gymDetails.appendChild(gymLocation);

        const gymPrice = document.createElement('p');
        gymPrice.textContent = 'Price: ' + gym.price;
        gymDetails.appendChild(gymPrice);

        const gymCoach = document.createElement('p');
        gymCoach.textContent = 'Coach: ' + gym.coach;
        gymDetails.appendChild(gymCoach);

        const gymOpenTimes = document.createElement('p');
        gymOpenTimes.textContent = 'Open Times: ' + gym.openTimes;
        gymDetails.appendChild(gymOpenTimes);

        const enrollButton = document.createElement('button');
        enrollButton.textContent = 'Enroll';
        enrollButton.setAttribute('id', 'enrollButton')
        gymElement.appendChild(enrollButton);

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');
        commentSection.innerHTML = '<h4>Leave a Review</h4><textarea></textarea><button class="submit-button">Submit</button>';
        gymElement.appendChild(commentSection);

        gymsContainer.appendChild(gymElement);
      });
    }

    // making function to display parlors
    function displayParlors(parlors) {
      const parlorsContainer = document.getElementById('parlorsContainer');
      parlorsContainer.innerHTML = '<h2>Massage Parlors</h2>';

      parlors.forEach(parlor => {
        const parlorElement = document.createElement('div');
        parlorElement.classList.add('parlor');

        const parlorImage = document.createElement('img');
        parlorImage.src = parlor.image;
        parlorImage.alt = 'Parlor Image';
        parlorElement.appendChild(parlorImage);

        const parlorDetails = document.createElement('div');
        parlorDetails.classList.add('parlor-details');
        parlorElement.appendChild(parlorDetails);

        const parlorName = document.createElement('h3');
        parlorName.textContent = parlor.name;
        parlorDetails.appendChild(parlorName);

        const parlorLocation = document.createElement('p');
        parlorLocation.textContent = 'Location: ' + parlor.location;
        parlorDetails.appendChild(parlorLocation);

        const parlorPrice = document.createElement('p');
        parlorPrice.textContent = 'Price: ' + parlor.price;
        parlorDetails.appendChild(parlorPrice);

        const parlorOpenTimes = document.createElement('p');
        parlorOpenTimes.textContent = 'Open Times: ' + parlor.openTimes;
        parlorDetails.appendChild(parlorOpenTimes);

        const bookButton = document.createElement('button');
        bookButton.textContent = 'Book a Space';
        parlorElement.appendChild(bookButton);

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');
        commentSection.innerHTML = '<h4>Leave a Review</h4><textarea></textarea><button class="submit-button">Submit</button>';
        parlorElement.appendChild(commentSection);

        parlorsContainer.appendChild(parlorElement);
      });
    }

    // call the functions to display gyms and parlors on page load
    displayGyms(gyms);
    displayParlors(parlors);

    // adding event listeners for submit buttons
    const submitButtons = document.querySelectorAll('.submit-button');
    submitButtons.forEach(button => {
      button.addEventListener('click', () => {
        const reviewTextarea = button.previousElementSibling;
        const review = reviewTextarea.value;
        return console.log('Review:', review);
        e.preventDefault
        format.reset
        
      });
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
  
    const enrollButton = document.getElementById('enrollButton')
    
    enrollButton.addEventListener('click', function() {
      const age = parseInt(prompt('Enter your age:'));
      
      if (isNaN(age) || age < 0) {
        alert('Enter a valid age');
      } else if (age <= 17) {
        alert('Sorry, you cannot apply');
      } else {
        alert('Congratulations, you are eligible to apply');
      }
    });
  
  
      
 