const juguetes = {
    Monopolio: 70.99,
    Ajedrez: 78.99,
    Lego: 100.99,
    Dama: 58.50,
    Laberinto: 35.00,
  };
  function actualizarRecibo(cantidad) {
    const jugueteSeleccionado = document.getElementById('producto').textContent;
    const precio = juguetes[jugueteSeleccionado];
    const subtotal = cantidad * precio;
    const descuento = subtotal * 0.2;
    const total = subtotal - descuento;

    document.getElementById('precio').textContent = precio.toFixed(2);
    document.getElementById('cantidad').textContent = cantidad;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('descuento').textContent = `-${descuento.toFixed(2)}`;
    document.getElementById('total').textContent = total.toFixed(2);
  }

  const productoIngresado = prompt('Ingresa el nombre del producto:');
  const cantidadIngresada = prompt('Ingresa la cantidad de productos que deseas comprar:');

  if (juguetes.hasOwnProperty(productoIngresado)) {

    document.getElementById('producto').textContent = productoIngresado;
    document.getElementById('cantidad').textContent = cantidadIngresada;


    actualizarRecibo(parseInt(cantidadIngresada));
  } else {
    alert('El producto ingresado no está en el catálogo. El recibo no se actualizará.');
  }