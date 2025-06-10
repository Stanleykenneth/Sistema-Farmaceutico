document.addEventListener('DOMContentLoaded', function() {
    // Modal controls
    const modal = document.getElementById('patient-modal');
    const newPatientBtn = document.getElementById('new-patient-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const cancelPatientBtn = document.getElementById('cancel-patient');
    const editPatientBtns = document.querySelectorAll('.edit-patient-btn');

    // File upload controls
    const fileUpload = document.getElementById('file-upload');
    const fileInput = document.getElementById('prescription-files');
    const fileList = document.getElementById('file-list');

    newPatientBtn.addEventListener('click', function() {
        document.getElementById('modal-title').textContent = 'Novo Paciente';
        modal.classList.remove('hidden');
    });

    editPatientBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('modal-title').textContent = 'Editar Paciente';
            document.getElementById('patient-name').value = 'João da Silva';
            document.getElementById('patient-cpf').value = '123.456.789-00';
            document.getElementById('patient-birth').value = '1985-05-15';
            document.getElementById('patient-address').value = 'Rua das Flores, 123 - Centro, São Paulo/SP';
            document.getElementById('patient-phone').value = '(11) 98765-4321';
            document.getElementById('patient-email').value = 'joao@email.com';
            modal.classList.remove('hidden');
        });
    });

    function closeModal() {
        modal.classList.add('hidden');
        document.getElementById('patient-form').reset();
        fileList.innerHTML = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    cancelPatientBtn.addEventListener('click', closeModal);

    document.getElementById('save-patient').addEventListener('click', function() {
        alert('Paciente salvo com sucesso!');
        closeModal();
    });

    fileUpload.addEventListener('click', function() {
        fileInput.click();
    });

    fileUpload.addEventListener('dragover', function(e) {
        e.preventDefault();
        fileUpload.classList.add('active');
    });

    fileUpload.addEventListener('dragleave', function() {
        fileUpload.classList.remove('active');
    });

    fileUpload.addEventListener('drop', function(e) {
        e.preventDefault();
        fileUpload.classList.remove('active');
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            handleFiles(fileInput.files);
        }
    });

    function handleFiles(files) {
        fileList.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!file.type.match('application/pdf') && !file.type.match('image.*')) {
                alert('Por favor, envie apenas arquivos PDF, JPG ou PNG.');
                continue;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert('O arquivo ' + file.name + ' excede o tamanho máximo de 5MB.');
                continue;
            }
            const fileItem = document.createElement('div');
            fileItem.className = 'flex items-center justify-between p-2 bg-gray-50 rounded text-sm';
            fileItem.innerHTML = `
                <div class="flex items-center space-x-2">
                    <i class="fas ${file.type.match('application/pdf') ? 'fa-file-pdf text-red-500' : 'fa-file-image text-blue-500'}"></i>
                    <span>${file.name}</span>
                    <span class="text-xs text-gray-500">(${(file.size / 1024 / 1024).toFixed(2)}MB)</span>
                </div>
                <button class="text-red-500 hover:text-red-700 remove-file" data-index="${i}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            fileList.appendChild(fileItem);
        }
        document.querySelectorAll('.remove-file').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeFile(index);
            });
        });
    }

    function removeFile(index) {
        const files = Array.from(fileList.children);
        if (index >= 0 && index < files.length) {
            files[index].remove();
        }
    }

    const sidebarToggle = document.querySelector('.lg\\:hidden');
    const sidebar = document.querySelector('.sidebar');
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('-translate-x-full');
    });
});
