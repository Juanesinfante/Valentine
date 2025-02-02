document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.querySelector('.btnSi');
    const btnNo = document.querySelector('.btnNo');
    const title = document.querySelector('h1');
    const proposal = document.querySelector('.proposal');

    btnSi.addEventListener('click', function() {
        // Create an envelope element
        const envelope = document.createElement('div');
        envelope.className = 'envelope';
        document.body.appendChild(envelope);

        // Hide other elements
        title.classList.add('hidden');
        proposal.classList.add('hidden');
        btnSi.classList.add('hidden');
        btnNo.classList.add('hidden');

        // Animate the envelope opening
        setTimeout(() => {
            envelope.classList.add('open');
            // Create a card element
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = '<img src="https://pngimg.es/d/snoopy_PNG22.png" alt="Card Image" /><p>¡SABIA QUE IBAS A DECIR QUE SIII!, ahora, nos vemos a las 3:00 pm  el 14 de febrero para pintar tacitas, esperame ahi :) </br></p>';
            document.body.appendChild(card);

            // Show the card with a smooth animation
            setTimeout(() => {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'scale(1.2)';
            }, 100); // Delay for envelope animation
        }, 1000); // Delay for envelope opening
    });

    btnNo.addEventListener('click', function() {
        // Move the button around the screen
        const moveButton = () => {
            const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
            const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
            btnNo.style.position = 'absolute';
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;
        };

        setInterval(moveButton, 500); // Faster movement
    });
});
