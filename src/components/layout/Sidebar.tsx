import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getMenuList } from "@/lib/menu-list";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";
import MenuItem from "./MenuItem";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const menuList = getMenuList();

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 border-r",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between px-6">
                    <h2 className="text-lg font-semibold">Store Admin</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={onClose}
                    >
                        <Cross1Icon className="h-4 w-4" />
                    </Button>
                </div>

                <ScrollArea className="flex-1 px-3">
                    <div className="space-y-6 py-4">
                        {menuList.map((group) => (
                            <div key={group.group} className="space-y-2">
                                <h3 className="px-4 text-sm font-medium text-gray-400">
                                    {group.group}
                                </h3>
                                <div className="space-y-1">
                                    {group.items.map((item) => (
                                        <MenuItem
                                            key={item.label}
                                            item={item}
                                            onClose={onClose}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </aside>
        </>
    );
};

export default Sidebar;
