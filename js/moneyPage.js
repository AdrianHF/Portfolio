(function() {
    const months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE',
                     'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    
    function pad(num) { return num.toString().padStart(2, '0'); }
    
    function updateClock() {
        const d = new Date();
        
        // Fecha: yyyy/mm/dd
        document.getElementById('currentDate').textContent = 
            `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
        
        // Mes en español
        document.getElementById('currentMonth').textContent = months[d.getMonth()];
        
        // Hora: HH:MM:SS
        document.getElementById('currentTime').textContent = 
            `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
    
    updateClock(); // Inmediato
    setInterval(updateClock, 1000); // Cada segundo
})();