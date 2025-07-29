//React
import React from 'react';

//React Router
import { Outlet } from 'react-router';

//Component
import { Footer, Navbar } from '@/components';

// Layout Component
const LayoutDefault : React.FC = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen w-full justify-between'>
                <Navbar />
                <main className="flex-grow w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )

}

export default LayoutDefault;