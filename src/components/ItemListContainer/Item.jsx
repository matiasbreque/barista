import {Link} from 'react-router-dom'

function Item ({producto}){
    return(
        <><><>
        <div className="card col-md-4" style={{ height : "700px", backgroundColor : "brown", justifyContent: "space-evenly" }}>
            <img src={producto.img} className="card-img-top " alt="..." style={{ width: ".." }} /><div class="card-body">
                    <h5 className="card-title" key={producto.id}>
                        {producto.title}
                    </h5>
                    <p className="card-text">
                        {producto.category}
                    </p>
                    <p className="card-text">
                        ${producto.price}
                    </p>
                    <Link to={`/detalle/${producto.id}`}>
                        <button className="btn btn-primary">
                            Detalle del Producto
                        </button>
                    </Link>
                </div>
        </div>        
        </></></>
    )
}

export default Item