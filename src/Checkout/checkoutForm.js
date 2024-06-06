import "./checkout.scss"

export const CheckoutForm = (props) => {
    const {values, handleSubmit, handleInputChange} = props
    return ( 
        <div className="container my-5 checkout">
            <h2>Por favor ingrese sus datos para terminar con la compra</h2>
            <form onSubmit={handleSubmit} className="my-5">
                <input
                    value={values.nombre}
                    type="text"
                    className="form-control my-2 input"
                    placeholder="Nombre y Apellido"
                    onChange={handleInputChange}
                    name="nombre"
                    required
                />
                <input
                    value={values.direccion}
                    type="text"
                    className="form-control my-2 input"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    name="direccion"
                    required
                />
                <input
                    value={values.email}
                    type="text"
                    className="form-control my-2 input"
                    placeholder="example@gmail.com"
                    onChange={handleInputChange}
                    name="email"
                    required
                />

                <button className="btn boton"> terminar </button>
            </form>
        </div>
    )
}