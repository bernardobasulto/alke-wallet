document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.credit-card');
    const indicators = document.querySelectorAll('.card-indicator');
    const cardCounter = document.getElementById('cardCounter');
    const limiteDisponible = document.getElementById('limiteDisponible');
    const deudaActual = document.getElementById('deudaActual');
    
    limiteDisponible.textContent = '$5.000.000';
    deudaActual.textContent = '-$500.000';
    
    
    if (!cards.length || !indicators.length) return;
    
    // Cambiar tarjeta activa
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const cardIndex = parseInt(this.getAttribute('data-card-index'));
            
            // Actualizar indicadores
            indicators.forEach(ind => ind.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar tarjeta correspondiente
            cards.forEach(card => card.classList.remove('active'));
            if (cards[cardIndex]) {
                cards[cardIndex].classList.add('active');
            }
            if (cardIndex === 0) { // Tarjeta 1
                limiteDisponible.textContent = '$5.000.000';
                deudaActual.textContent = '-$500.000';
            } else if (cardIndex === 1) { // Tarjeta 2
                limiteDisponible.textContent = '$8.500.000';
                deudaActual.textContent = '-$654.684';
            } else if (cardIndex === 2) { // Tarjeta 3
                limiteDisponible.textContent = '$350.000';
                deudaActual.textContent = '-$185.000';
            }
            
            // Actualizar contador
            updateCardCounter(cardIndex);
        });
    });
    
    function updateCardCounter(activeIndex) {
        if (cardCounter) {
            const totalCards = cards.length;
            cardCounter.textContent = `${activeIndex + 1} de ${totalCards} tarjetas`;
        }
    }
    
    // Inicializar contador
    updateCardCounter(0);
    
    // Modal y otras funciones
    const saveCardBtn = document.getElementById('saveCardBtn');
    if (saveCardBtn) {
        saveCardBtn.addEventListener('click', function() {
            alert('Funcionalidad para agregar tarjeta - Conectar con backend');
            const modal = bootstrap.Modal.getInstance(document.getElementById('addCardModal'));
            modal.hide();
        });
    }
    
    const editCardBtn = document.getElementById('editCardBtn');
    if (editCardBtn) {
        editCardBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const activeCard = document.querySelector('.credit-card.active');
            if (activeCard) {
                const cardId = activeCard.getAttribute('data-card-id');
                alert(`Editar tarjeta ID: ${cardId}`);
            }
        });
    }
});


