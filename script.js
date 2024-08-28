document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cpu-select').addEventListener('change', updatePrice);
    document.getElementById('gpu-select').addEventListener('change', updatePrice);
    document.getElementById('mae-select').addEventListener('change', updatePrice);

    function updatePrice() {
        const cpuPrice = parseFloat(document.getElementById('cpu-select').value) || 0;
        const gpuPrice = parseFloat(document.getElementById('gpu-select').value) || 0;
        const maePrice = parseFloat(document.getElementById('mae-select').value) || 0;
        
        const totalPrice = cpuPrice + gpuPrice + maePrice;
        
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    }
});
/* WebSite criado por Lukz1n */
/* https://github.com/Lukz1n */