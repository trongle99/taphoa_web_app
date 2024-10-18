import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import { UserNav } from "./UserNav";

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center border-b bg-white px-6">
                    <div className="flex flex-1 items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <HamburgerMenuIcon className="h-5 w-5" />
                        </Button>
                    </div>
                    {/* <ModeToggle /> */}
                    <UserNav />
                </header>

                <main className="flex-1 overflow-y-auto p-6">{children}</main>

                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;
