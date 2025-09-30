import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Outlet } from 'react-router'

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
