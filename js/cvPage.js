const canvas = document.getElementById("svgWallpaper");
        const ctx = canvas.getContext("2d");

        // Resize canvas to fit the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Load the SVG and draw with spacing
        const svgURL = '../assets/svgIcons/banana.svg'; // Replace with your SVG file path
        const img = new Image();
        img.src = svgURL;

        img.onload = function () {
            const spacing = 30; // Space between each SVG
            const imgWidth = 60; // Width of the SVG
            const imgHeight = 60; // Height of the SVG

            // Draw the SVG pattern with spacing
            for (let x = 0; x < canvas.width; x += imgWidth + spacing) {
                for (let y = 0; y < canvas.height; y += imgHeight + spacing) {
                    ctx.drawImage(img, x, y, imgWidth, imgHeight);
                }
            }
        };

        // Redraw the pattern on window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (img.complete) {
                const spacing = 50; // Space between each SVG
                const imgWidth = 50; // Width of the SVG
                const imgHeight = 50; // Height of the SVG

                for (let x = 0; x < canvas.width; x += imgWidth + spacing) {
                    for (let y = 0; y < canvas.height; y += imgHeight + spacing) {
                        ctx.drawImage(img, x, y, imgWidth, imgHeight);
                    }
                }
            }
        });