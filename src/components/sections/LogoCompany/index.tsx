import { IconsAll } from "../../../assets/icons"

type LogoCompanyProps = {
    id:number,
    name:string,
    icon:string
}

const LogoCompany = () => {

    const data: LogoCompanyProps[] = [
        {
            id: 1,
            name: "Logoipsum",
            icon: IconsAll.vector.vector1
        },{
            id: 2,
            name: "Logoipsum",
            icon: IconsAll.vector.vector2
        },{
            id: 3,
            name: "Logoipsum",
            icon: IconsAll.vector.vector3
        },{
            id: 4,
            name: "Logoipsum",
            icon: IconsAll.vector.vector1
        },{
            id: 5,
            name: "Logoipsum",
            icon: IconsAll.vector.vector2
        }
    ]

    return(
        <section className="container pb-[100px]">
            <div className="flex flex-row items-center justify-center gap-14">
                {data.map((items) => {
                    return (
                        <div
                            key={items.id}
                            className="flex flex-row items-center gap-2 group"
                        >
                            <img
                                src={items.icon}
                                alt={items.name}
                                className="w-8 h-8 filter group-hover:saturate-200 transition-colors duration-300"
                            />
                            <h1 className="text-lg font-Poppins font-bold group-hover:text-secondary transition-color duration-500">
                                {items.name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default LogoCompany