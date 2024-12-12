document.addEventListener('DOMContentLoaded', () => {
    const branches = document.querySelector('.branches');
    const ornamentStyles = [
        { primary: '#ff4d4d', secondary: '#ff0000', border: '#ffd700' },
        { primary: '#ffd700', secondary: '#ffb700', border: '#cc0000' },
        { primary: '#ff0000', secondary: '#cc0000', border: '#ffd700' },
        { primary: '#ffffff', secondary: '#f0f0f0', border: '#ffd700' },
        { primary: '#4CAF50', secondary: '#45a049', border: '#ffd700' }
    ];

    // Création des branches avec plus de détails
    for (let i = 0; i < 12; i++) {
        const width = 95 - i * 8;
        const branch = document.createElement('div');
        branch.className = 'branch';
        branch.style.width = `${width}%`;
        branch.style.height = '45px';
        branch.style.bottom = `${i * 9}%`;
        branch.style.left = `${(100 - width) / 2}%`;
        branches.appendChild(branch);

        // Ajout des ornements avec plus de variété
        const ornamentsCount = Math.floor(width / 15);
        for (let j = 0; j < ornamentsCount; j++) {
            if (Math.random() > 0.4) {
                const ornament = document.createElement('div');
                const isLantern = Math.random() > 0.8;
                
                if (isLantern) {
                    ornament.className = 'lantern';
                    ornament.style.width = '20px';
                    ornament.style.height = '30px';
                } else {
                    const style = ornamentStyles[Math.floor(Math.random() * ornamentStyles.length)];
                    ornament.className = 'ornament';
                    ornament.style.width = `${10 + Math.random() * 8}px`;
                    ornament.style.height = ornament.style.width;
                    ornament.style.setProperty('--color-primary', style.primary);
                    ornament.style.setProperty('--color-secondary', style.secondary);
                    ornament.style.setProperty('--border-color', style.border);
                }

                ornament.style.left = `${j * (100 / ornamentsCount) + (Math.random() * 10 - 5)}%`;
                ornament.style.bottom = `${i * 9 + (Math.random() * 15)}%`;
                branches.appendChild(ornament);
            }
        }
    }

    // Ajout de neige
    function createSnow() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snow';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.width = snowflake.style.height = Math.random() * 4 + 2 + 'px';
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Création continue de flocons de neige
    setInterval(createSnow, 100);

    // Animation au survol améliorée
    document.querySelectorAll('.branch').forEach(branch => {
        branch.addEventListener('mouseover', () => {
            branch.style.transform = 'scale(1.05) rotate(1deg)';
            branch.style.filter = 'brightness(1.2)';
        });
        
        branch.addEventListener('mouseout', () => {
            branch.style.transform = 'scale(1) rotate(0deg)';
            branch.style.filter = 'brightness(1)';
        });
    });
}); 