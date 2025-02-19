let productos = new Map();

        function mostrarMensaje(texto, tipo) {
            let mensaje = document.getElementById('mensaje');
            mensaje.textContent = texto;
            mensaje.className = `mensaje ${tipo}`;
            mensaje.style.display = 'block';
            
            setTimeout(() => {
                mensaje.style.display = 'none';
            }, 3000);
        }

        function agregarProducto(event) {
            event.preventDefault();
            let codigo = document.getElementById('codigo').value.trim();
            let nombre = document.getElementById('nombre').value.trim();
            let descripcion = document.getElementById('descripcion').value.trim();
            let precio = document.getElementById('precio').value.trim();
            let cantidad = document.getElementById('cantidad').value.trim();

            if (!codigo || !nombre || !descripcion || !precio || !cantidad) {
                mostrarMensaje('Todos los campos son obligatorios', 'error');
                return;
            }
            
            if (productos.has(codigo)) {
                mostrarMensaje('El código del producto ya existe', 'error');
                return;
            }
            
            productos.set(codigo, { nombre, descripcion, precio, cantidad });
            mostrarMensaje('Producto agregado correctamente', 'listo');
        }

        document.getElementById('btnAgregar').addEventListener('click', agregarProducto);