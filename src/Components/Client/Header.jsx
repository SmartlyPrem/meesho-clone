import React from 'react';
import { CiSearch, CiMobile3 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline, IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <header className='px-2 flex items-center border-b'>
                <div className='py-3 flex items-center me-[30px]'>
                    <div className='w-[156px] h-[36px] me-[30px]'>
                        <img src="./img/meeshoLogo.svg" alt="" />
                    </div>
                    <div className='relative'>
                        <CiSearch className='absolute top-2.5 left-2.5 text-[28px]' color='#78716c' />
                        <input className='menu-search-box outline-none font-semibold' placeholder='Try, Saree, Kurti or Search by Product Code' type="search" />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='menu-items-app flex items-center h-[72px]'>
                        <div className='mx-5 relative pe-5 border-r-2 border-r-slate-300 w-[175px]'>
                            <div className='flex items-center gap-2 h-[40px] '>
                                <span className=' flex items-center text-[22px] font-semibold'><CiMobile3 /></span>
                                <div className='text-[18px]'>Download App</div>
                            </div>
                            <div className='menu-line-block absolute left-0 bottom-[-15px] w-[160px] font-bold border-b-4 border-fuchsia-600 hidden'></div>
                            <div className='hidden submenu-apps-dow absolute rounded-b-lg top-[57px] left-[-40px] w-[240px] z-50 bg-white'>
                                <div>
                                    <span className='text-lg font-semibold'>Download From</span>
                                </div>
                                <div className='my-[1.5rem]'>
                                    <a href="" >
                                        <img className='w-[200px] h-[50px]' src="./img/playstore-icon-big.png" alt="" />
                                    </a>
                                </div>
                                <div className='mt-4'>
                                    <a href="">
                                        <img className='w-[200px] h-[50px]' src="./img/appstore-icon-big.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-5 relative pe-5 border-r-2 border-r-slate-300 w-fit'>
                        <div className='flex items-center gap-2 h-[40px] '>
                            <div className='text-[18px]'><a href="">Become a Suplier</a></div>
                        </div>
                    </div>
                    <div className='mx-5 relative pe-5 border-r-2 border-r-slate-300 w-fit'>
                        <div className='flex items-center gap-2 h-[40px] '>
                            <div className='text-[18px]'><a href="">Newsroom</a></div>
                        </div>
                    </div>
                    <div className='menu-items-app flex items-center h-[72px]'>
                        <div className='mx-5 relative pe-5'>
                            <div className='h-[40px] flex flex-col justify-center items-center'>
                                <span className='text-[22px] font-semibold'><CgProfile /></span>
                                <div className='text-[18px]'>Profile</div>
                            </div>
                            <div className='menu-line-block absolute left-0 bottom-[-15px] w-[70px] font-bold border-b-4 border-fuchsia-600 hidden'></div>
                            <div className='hidden bg-white submenu-apps-dow absolute z-50 rounded-b-lg top-[57px] left-[-85px] w-[240px]'>
                                <div className='border-b pb-2'>
                                    <span className='text-lg font-semibold'>Hello User</span>
                                    <p className='text-sm'>To access you Meesho Account</p>
                                    <button className='py-3 text-white font-semibold rounded-md bg-fuchsia-800 w-full my-2'>Sign Up</button>
                                </div>
                                <div className='border-b flex items-center gap-2 py-4'>
                                    <IoBagHandleOutline /> <span><a href="">My Orders</a></span>
                                </div>
                                <div className='flex items-center py-4'>
                                    <a href="">Delete Account</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='h-[40px] flex flex-col justify-center items-center'>
                            <span className='text-[22px] font-semibold'><IoCartOutline /></span>
                            <div className='text-[18px]'><a href="">Profile</a></div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='border-b relative z-40 flex justify-between mx-4 h-[52px] bg-white'>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Women Ethnic</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Women Wastern</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Men</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Kids</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Home & Kitchen</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Beauty & Health</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Jawellary & Accessories</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Bags & footwear</div>
                <div className='nav-menu-hover-cl mx-2 flex items-center justify-center cursor-pointer w-fit min-w-[90px]'>Electronics</div>
                <div className='sub-nav-ab-cl absolute top-[53px] left-1/2 transform -translate-x-1/2 bg-white w-[99%] border-x border-b font-normal text-slate-500'>
                    <div className='rounded py-4 px-4'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>All Women Ethnic</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">View All</a></p>
                        </div>
                    </div>
                    <div className='bg-slate-100 rounded py-4 px-5'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>Sarees</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">All Sarees</a></p>
                            <p className='my-2'><a href="">Silk Sarees</a></p>
                            <p className='my-2'><a href="">Cotton Slik Sarees</a></p>
                            <p className='my-2'><a href="">Chiffon Sarees</a></p>
                            <p className='my-2'><a href="">Satin Sarees</a></p>
                            <p className='my-2'><a href="">Cotton Sarees</a></p>
                            <p className='my-2'><a href="">Georgette Sarees</a></p>
                            <p className='my-2'><a href="">Embroidered Sarees</a></p>
                        </div>
                    </div>
                    <div className='rounded py-4 px-4'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>Kurties</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">All Kurtis</a></p>
                            <p className='my-2'><a href="">Anarkali Kurtis</a></p>
                            <p className='my-2'><a href="">Rayon Kurtis</a></p>
                            <p className='my-2'><a href="">Cotton Kurtis</a></p>
                            <p className='my-2'><a href="">Embroidered Kurtis</a></p>
                        </div>
                    </div>
                    <div className='bg-slate-100 rounded py-4 px-5'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>Kurta Set</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">All Kurta Sets</a></p>
                        </div>
                    </div>
                    <div className='rounded py-4 px-4'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>Suits & Dress Material</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">All Suits & Dress Material</a></p>
                            <p className='my-2'><a href="">Cotton Suits</a></p>
                            <p className='my-2'><a href="">Embroidered Suits</a></p>
                            <p className='my-2'><a href="">Chanderi Suits</a></p>
                        </div>
                    </div>
                    <div className='bg-slate-100 rounded py-4 px-5'>
                        <span className='font-bold' style={{ color: "rgb(174, 29, 197)" }}>Sarees</span>
                        <div className='mt-3'>
                            <p className='my-2'><a href="">OBlouses</a></p>
                            <p className='my-2'><a href="">Dupattas</a></p>
                            <p className='my-2'><a href="">Lehanga</a></p>
                            <p className='my-2'><a href="">Gown</a></p>
                            <p className='my-2'><a href="">Ethnic Bottomwear</a></p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
