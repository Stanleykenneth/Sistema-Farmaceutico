
document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de Status dos Pedidos (Doughnut)
    const orderStatusCtx = document.getElementById('orderStatusChart').getContext('2d');
    new Chart(orderStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completos', 'Pendentes', 'Cancelados', 'Em Processamento'],
            datasets: [{
                data: [65, 15, 5, 15],
                backgroundColor: [
                    '#10B981',
                    '#3B82F6',
                    '#EF4444',
                    '#F59E0B'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            },
            cutout: '70%'
        }
    });

    // Gráfico de Níveis de Estoque (Barra)
    const stockLevelsCtx = document.getElementById('stockLevelsChart').getContext('2d');
    new Chart(stockLevelsCtx, {
        type: 'bar',
        data: {
            labels: ['Paracetamol', 'Ibuprofeno', 'Dipirona', 'Omeprazol', 'Seringas', 'Algodão'],
            datasets: [
                {
                    label: 'Estoque Atual',
                    data: [12, 18, 45, 32, 25, 80],
                    backgroundColor: '#4F46E5',
                    borderWidth: 0
                },
                {
                    label: 'Estoque Mínimo',
                    data: [50, 30, 20, 25, 100, 50],
                    backgroundColor: '#F59E0B',
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                }
            }
        }
    });
});


output_path = Path("/mnt/data/dashboard.js")
output_path.write_text(dashboard_js)
output_path
