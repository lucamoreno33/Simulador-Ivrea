export const PMform = (props) => {
    const { handleInputChange, handleSubmit, values } = props;
    return(
        <form onSubmit={handleSubmit} className="my-5, container">
                <h2>Nombre del producto</h2>
                <input
                    value={values.nombre}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="nombre"
                    required
                />
                <h2>descripcion</h2>
                <input
                    value={values.descripcion}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="descripcion"
                    required
                />
                <h2>imagen del producto</h2>
                <input
                    value={values.imagen}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="imagen"
                    required
                />
                <h2>Numero de tomo</h2>
                <input
                    value={values.NumeroTomo}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="NumeroTomo"
                    required
                />
                <h2>Precio</h2>
                <input
                    value={values.precio}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="precio"
                    required
                />
                <h2>Stock</h2>
                <input
                    value={values.stock}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="stock"
                    required
                />
                <h2>tipo del libro</h2>
                <input
                    value={values.tipo}
                    type="text"
                    className=""
                    onChange={handleInputChange}
                    name="tipo"
                    required
                />

                <button className="">  agregar producto </button>
            </form>
    )
}