function Sidebar() {

    const menu = [
        { nombre: "Velocidad", ruta: "/velocidad" },
        { nombre: "Distancia", ruta: "/distancia" },
        { nombre: "Tiempo", ruta: "/tiempo" },
        { nombre: "Fuerza", ruta: "/fuerza" },
        { nombre: "Peso", ruta: "/peso" },
        { nombre: "Energía Cinética", ruta: "/energiaCinetica" }
    ]

    return(
        <>
        <div className="w-64 h-screen bg-sky-900 text-white p-6">
            <h2 className="text-2xl font-bold pb-7">Cálculos Físicos</h2>
            <ul>
                {menu.map((item, index) => (
                    <SidebarItem
                        key={index}
                        nombre={item.nombre}
                        ruta={item.ruta}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

function SidebarItem({nombre, ruta}) {
    return(
    <li className="mb-5 ">
        <a className="hover:text-sky-300" href={ruta}>{nombre}</a>
    </li>
    )
}

export default Sidebar