const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
  
    if (sidebar.classList.contains('sidebar-expanded')) {
      sidebar.classList.remove('sidebar-expanded');
      sidebar.classList.add('sidebar-collapsed');
      mainContent.classList.add('ml-16');
    } else {
      sidebar.classList.remove('sidebar-collapsed');
      sidebar.classList.add('sidebar-expanded');
      mainContent.classList.remove('ml-16');
    }
  };
  
  document.getElementById('toggleSidebar')?.addEventListener('click', toggleSidebar);
  
  // Order Management with Alpine.js
  function orderManagement() {
    return {
      showForm: false,
      editingOrder: false,
      currentOrder: {
        id: null,
        patient: '',
        doctor: '',
        formula: '',
        items: [],
        subtotal: 0,
        taxes: 0,
        discount: 0,
        total: 0,
        status: 'preparo'
      },
      productPrices: {
        '1': 0.50,
        '2': 0.75,
        '3': 0.45,
        '4': 1.20
      },
  
      init() {},
  
      newOrder() {
        this.currentOrder = {
          id: null,
          patient: '',
          doctor: '',
          formula: '',
          items: [],
          subtotal: 0,
          taxes: 0,
          discount: 0,
          total: 0,
          status: 'preparo'
        };
        this.editingOrder = false;
        this.showForm = true;
      },
  
      editOrder(id) {
        const order = this.getSampleOrder(id);
        this.currentOrder = { ...order };
        this.editingOrder = true;
        this.showForm = true;
      },
  
      getSampleOrder(id) {
        const orders = {
          1: {
            id: 1,
            patient: '1',
            doctor: '1',
            formula: 'Paracetamol 500mg - 1 comprimido de 8/8 horas por 5 dias\nIbuprofeno 400mg - 1 comprimido de 12/12 horas por 3 dias',
            items: [
              { product: '1', quantity: 10, price: 0.50, total: 5.00 },
              { product: '2', quantity: 6, price: 0.75, total: 4.50 }
            ],
            subtotal: 9.50,
            taxes: 1.90,
            discount: 0,
            total: 11.40,
            status: 'entregue'
          },
          2: {
            id: 2,
            patient: '2',
            doctor: '2',
            formula: 'Dipirona 500mg - 1 comprimido de 6/6 horas por 2 dias\nOmeprazol 20mg - 1 comprimido ao dia por 15 dias',
            items: [
              { product: '3', quantity: 8, price: 0.45, total: 3.60 },
              { product: '4', quantity: 15, price: 1.20, total: 18.00 }
            ],
            subtotal: 21.60,
            taxes: 4.32,
            discount: 2.00,
            total: 23.92,
            status: 'finalizado'
          },
          3: {
            id: 3,
            patient: '3',
            doctor: '3',
            formula: 'Paracetamol 500mg - 1 comprimido de 8/8 horas por 3 dias\nDipirona 500mg - 1 comprimido de 6/6 horas por 2 dias',
            items: [
              { product: '1', quantity: 9, price: 0.50, total: 4.50 },
              { product: '3', quantity: 8, price: 0.45, total: 3.60 }
            ],
            subtotal: 8.10,
            taxes: 1.62,
            discount: 0,
            total: 9.72,
            status: 'preparo'
          }
        };
        return orders[id] || orders[1];
      },
  
      addItem() {
        this.currentOrder.items.push({ product: '', quantity: 1, price: 0, total: 0 });
      },
  
      removeItem(index) {
        this.currentOrder.items.splice(index, 1);
        this.calculateTotals();
      },
  
      updateItem(index) {
        const item = this.currentOrder.items[index];
        item.price = this.productPrices[item.product] || 0;
        item.total = item.price * item.quantity;
        this.calculateTotals();
      },
  
      calculateTotals() {
        this.currentOrder.subtotal = this.currentOrder.items.reduce((sum, item) => sum + item.total, 0);
        this.currentOrder.taxes = this.currentOrder.subtotal * 0.2;
        this.currentOrder.total = this.currentOrder.subtotal + this.currentOrder.taxes - this.currentOrder.discount;
      },
  
      saveOrder() {
        alert('Pedido salvo com sucesso!');
        this.showForm = false;
      },
  
      cancelOrder() {
        this.showForm = false;
      },
  
      printBudget() {
        alert('Orçamento impresso com sucesso!');
      },
  
      issueInvoice() {
        alert('Nota fiscal emitida com sucesso!');
      },
  
      formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
      }
    };
  }
  