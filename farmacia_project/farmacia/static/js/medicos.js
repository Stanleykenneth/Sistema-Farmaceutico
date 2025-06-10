document.addEventListener('DOMContentLoaded', function () {
    // Toggle sidebar
    const toggleSidebar = document.getElementById('toggleSidebar');
    if (toggleSidebar) {
      toggleSidebar.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
  
        if (sidebar.classList.contains('sidebar-expanded')) {
          sidebar.classList.replace('sidebar-expanded', 'sidebar-collapsed');
          mainContent.classList.add('ml-16');
        } else {
          sidebar.classList.replace('sidebar-collapsed', 'sidebar-expanded');
          mainContent.classList.remove('ml-16');
        }
      });
    }
  
    // Modal
    const doctorModal = document.getElementById('doctorModal');
    const newDoctorBtn = document.getElementById('newDoctorBtn');
    const cancelModal = document.getElementById('cancelModal');
  
    newDoctorBtn?.addEventListener('click', () => {
      doctorModal.classList.remove('hidden');
    });
  
    cancelModal?.addEventListener('click', () => {
      doctorModal.classList.add('hidden');
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === doctorModal) {
        doctorModal.classList.add('hidden');
      }
    });
  
    // Gráfico
    const ctx = document.getElementById('prescriptionsChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Dr. Carlos Silva', 'Dra. Ana Oliveira', 'Dr. Marcos Souza', 'Dra. Juliana Costa', 'Dr. Roberto Almeida'],
          datasets: [{
            label: 'Prescrições',
            data: [42, 38, 27, 19, 15],
            backgroundColor: [
              'rgba(59, 130, 246, 0.7)',
              'rgba(167, 139, 250, 0.7)',
              'rgba(252, 211, 77, 0.7)',
              'rgba(99, 102, 241, 0.7)',
              'rgba(239, 68, 68, 0.7)'
            ],
            borderColor: [
              'rgba(59, 130, 246, 1)',
              'rgba(167, 139, 250, 1)',
              'rgba(252, 211, 77, 1)',
              'rgba(99, 102, 241, 1)',
              'rgba(239, 68, 68, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5
              }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: context => `${context.parsed.y} prescrições`
              }
            }
          }
        }
      });
    }
  });
  