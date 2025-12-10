/**
 * Anchor - User Profile Script
 * * This file contains JavaScript for interactive elements.
 * Currently, it's a placeholder, but future features could include:
 * * 1. Handling "Edit" and "Notifications" button clicks.
 * 2. Dynamic fetching and rendering of Loan Requests and Funding Posts.
 * 3. Logic for the "Send Money" button (e.g., triggering a modal or navigation).
 * 4. User authentication and session management (Log Out).
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("User Profile Page Loaded.");

    // Example of adding a simple event listener
    const logOutBtn = document.querySelector('.log-out-btn');
    if (logOutBtn) {
        logOutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Logging out...');
            // In a real application, you would perform a server-side logout here
            // window.location.href = '/login'; 
        });
    }

    // Example: Highlight the accepted loan card on hover
    const acceptedCard = document.querySelector('.loan-card:nth-child(2)');
    if (acceptedCard) {
        acceptedCard.addEventListener('mouseover', () => {
            acceptedCard.style.boxShadow = '0 0 15px rgba(41, 178, 77, 0.7)'; // Glow for Accepted status
        });
        acceptedCard.addEventListener('mouseout', () => {
            acceptedCard.style.boxShadow = 'none';
        });
    }
});