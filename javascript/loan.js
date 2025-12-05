
        // Category filter buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Button interactions
        document.querySelectorAll('.btn-offer').forEach(btn => {
            btn.addEventListener('click', () => alert('Make an offer'));
        });

        document.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', () => alert('View image'));
        });

        document.querySelectorAll('.btn-rating').forEach(btn => {
            btn.addEventListener('click', () => alert('Submit rating'));
        });
