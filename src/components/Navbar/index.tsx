import { IconsAll } from "../../assets/icons"
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {

    return(
        <nav className="container max-h-[104px] py-[20px] px-16 backdrop-blur-3xl flex flex-row justify-between items-center sticky top-0 z-20">
            <div className="flex flex-row justify-center items-center gap-1.5 ">
                <img src={IconsAll.logo} alt="Logo Company" className="w-9 h-9" />
                <h1 className="text-[28px] font-Poppins font-bold">weserve.</h1>
            </div>
            <div className="flex flex-row gap-8 text-base font-Poppins font-medium" >
                <h3>Product</h3>
                <h3 className="flex items-center gap-1">Service <AiOutlineDown /></h3>
                <h3>Pricing</h3>
                <h3>Testimonials</h3>
                <h3>Blog</h3>
            </div>
            <div className="flex flex-row gap-3">
                <img src={IconsAll.cart} alt="Cart Icon" className="p-[10px] bg-third rounded-full" />
                <button className="px-8 py-[10px] bg-primary text-third font-Poppins font-semibold rounded-full" >Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar