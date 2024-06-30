import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import SocialSites from '../../utils/SocialSites';

const Footer = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row w-full bg-[#f2f9fc] justify-between flex-wrap gap-8 p-8 lg:px-28 lg:py-12'>
                <div className='flex flex-col gap-4 w-full md:w-1/3 lg:w-auto text-[#5b666d]'>
                    <h1 className='text-2xl md:text-3xl para text-[#7dc8e3]'>Expense Tracker</h1>
                    <p className='text-lg md:text-xl font-semibold pt-2'>Simplify Your Finance, Supercharge Your Life!</p>
                    <p className="font-semibold flex items-center"><AddIcCallIcon className='mr-2' /> 6398928159</p>
                    <p className="font-semibold flex items-center"><EmailIcon className="mr-2" /> rawatpraveen477@gmail.com</p>
                    <SocialSites />
                </div>

                <div className='flex flex-col md:flex-row gap-8 md:gap-32 lg:gap-24 w-full md:w-2/4 lg:w-auto'>
                    <div className=''>
                        <h2 className='text-xl md:text-2xl font-bold text-[#35383a]'>Product</h2>
                        <ul className='font-semibold cursor-pointer text-[#717579] pt-6 flex flex-col gap-4'>
                            <li className='hover:font-bold hover:text-blue-500'>Features</li>
                            <li className='hover:font-bold hover:text-blue-500'>FAQ</li>
                            <li className='hover:font-bold hover:text-blue-500'>Blog</li>
                        </ul>
                    </div>

                    <div className=''>
                        <h2 className='text-xl md:text-2xl font-bold text-[#35383a]'>Useful Links</h2>
                        <ul className='font-semibold cursor-pointer text-[#717579] pt-6 flex flex-col gap-4'>
                            <li className='hover:font-bold hover:text-blue-500'><a href="/About"> About</a></li>
                            <li className='hover:font-bold hover:text-blue-500'><a href="/GetinTouch"> Contact</a></li>
                            <li className='hover:font-bold hover:text-blue-500'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='paramain text-center font-semibold p-5 bg-[#7dc8e3] w-full text-white'>
                2024 © Expense Tracker Created by Praveen Singh
            </div>
        </>
    )
}

export default Footer;
