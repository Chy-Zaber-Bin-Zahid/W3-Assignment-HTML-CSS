"use strict"
//----- Modal Region ----//
const currencyMap = {
    'United States': { currency: 'USD', symbol: '$' },
    'Portugal': { currency: 'EUR', symbol: '€' },
    'United Kingdom': { currency: 'GBP', symbol: '£' },
    'France': { currency: 'EUR', symbol: '€' },
    'Germany': { currency: 'EUR', symbol: '€' },
    'Spain': { currency: 'EUR', symbol: '€' }
};

// Get DOM elements
const modal = document.getElementById('regionModal');
const closeBtn = document.getElementById('closeModal');
const regionSelect = document.getElementById('region');
const currencySelect = document.getElementById('currency');
const saveBtn = document.getElementById('saveSettings');
const regionLink = document.querySelector('.nav-link');
const modalMain = document.querySelector('.modal-main');

// Open modal when clicking on United States link
regionLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    regionSelect.value = regionLink.textContent.trim().replace(/^🌐\s*/, '');
    currencySelect.value = currencyMap[regionLink.textContent.trim().replace(/^🌐\s*/, '')].currency;
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modalMain) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        regionSelect.value = regionLink.textContent.trim().replace(/^🌐\s*/, '');
        currencySelect.value = currencyMap[regionLink.textContent.trim().replace(/^🌐\s*/, '')].currency;
    }
});

// Update currency when region changes
regionSelect.addEventListener('change', (e) => {
    const selectedRegion = e.target.value;
    const { currency, symbol } = currencyMap[selectedRegion];
    // Update currency select options
    currencySelect.value = currency;
});

// Save settings
saveBtn.addEventListener('click', () => {
    const selectedRegion = regionSelect.value;
    const selectedCurrency = currencySelect.value;
    
    // Here you could add API calls or localStorage updates
    console.log(`Settings saved: Region - ${selectedRegion}, Currency - ${selectedCurrency}`);
    
    // Close the modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
        // Update the region link text
    regionLink.innerHTML = `🌐 ${selectedRegion}`;
});

//---- Save Heart ----//
document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.querySelector('.btn-save');
    const heartIcon = document.querySelector('.heart-icon');
    
    // Check localStorage on page load
    const isActive = localStorage.getItem('heartActive') === 'true';
    if (isActive) {
        heartIcon.classList.add('active');
    }
    
    // Toggle heart state and update localStorage
    heartBtn.addEventListener('click', () => {
        heartIcon.classList.toggle('active');
        
        // Store the current state
        const currentState = heartIcon.classList.contains('active');
        localStorage.setItem('heartActive', currentState);
        
        // Optional: Add a subtle animation
        heartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            heartIcon.style.transform = 'scale(1)';
        }, 200);
    });
});