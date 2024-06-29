import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import  SocialSites  from '../../utils/SocialSites';
const Footer = () => {
    return (
        <>
            <div className='flex  w-full bg-[#f2f9fc]  paramain justify-around flex-wrap gap-8 p-8 lg:p-16'>

                <div className=' leading-10'>
                    <h1 className=' text-3xl para'>Expense Tracker</h1>
                    <p className=' text-xl font-semibold pt-2'>Simplify Your Finance, Supercharge Your Life!</p>
                    <p className=" font-semibold"><AddIcCallIcon className='mr-2' /> 6398928159</p>
                    <p className=" font-semibold"><EmailIcon className="mr-2" /> rawatpraveen477@gmail.com</p>
                   <SocialSites/>
                </div>

                <div className='flex lg:gap-52 gap-24'>

                    <div className='leading-8'>
                        <h2 className='text-2xl font-bold'>Product</h2>
                        <ul className='font-semibold cursor-pointer'>
                            <li>Features</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className='leading-8'>
                        <h2 className='text-2xl font-bold'>Usefull Links</h2>
                        <ul className='font-semibold'>
                            <li>About</li>
                            <li>Contact</li>
                            <li> Privacy Policy</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className='paramain text-center  font-semibold p-5 bg-[#8c79d3] w-full'>2024 © Expense Traker Created by praveen singh</div>
        </>
    )
}

export default Footer;
