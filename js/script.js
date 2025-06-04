fetch('Data/data.json')
  .then(res => res.json())
  .then(jsonData => {
    // Get the div with the id 'data'
    const output = document.getElementById('data');
    // Define an array of colors for the cards
    const colors = [
  'hsla(0, 100%, 93%, 0.3)',
  'hsla(39, 100%, 90%, 0.3)',
  'hsla(166, 100%, 89%, 0.25)',
  'hsla(234, 85%, 88%, 0.2)'
];

    const h3Colors = ['hsl(0, 100%, 67%)', 'hsl(39, 100%, 56%)', 'hsl(166, 100%, 37%)', 'hsl(234, 85%, 45%)'];
    // Loop through the JSON data and create a card for each item
    jsonData.forEach((item, index) => {
      
      const card = document.createElement('div');
      card.classList.add('card');
      // Assigning a different background to each card 
        card.style.backgroundColor = colors[index % colors.length];
        // Set the inner HTML of the card
      card.innerHTML = `
        
        <img class='icon_img' src="${item.icon}" alt="img">
        <h3 class='card-h3' style="color: ${h3Colors[index % colors.length]}">${item.category}</h3>
        <p class='score'>${item.score}/100</p>
      `;
      output.appendChild(card);
    });
  })
  .catch(err => console.error('Fetch error:', err));
