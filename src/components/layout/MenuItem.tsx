import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemType {
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    href: string;
    subItems?: MenuItemType[];
}

interface MenuItemProps {
    item: MenuItemType;
    isSubItem?: boolean;
    onClose?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    item,
    isSubItem = false,
    onClose,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = item.icon;
    const navigate = useNavigate();
    const isActive = window.location.pathname === item.href;

    const handleClick = () => {
        if (item.subItems) {
            setIsOpen(!isOpen);
        } else {
            navigate(item.href);
            onClose?.();
        }
    };

    return (
        <div>
            <Button
                variant="ghost"
                className={cn(
                    "w-full justify-start gap-2 font-normal hover:bg-gray-100/80 text-left",
                    isSubItem && "pl-10 text-sm",
                    item.subItems && isOpen && "bg-gray-100/80",
                    isActive && "bg-blue-100"
                )}
                onClick={handleClick}
            >
                {!isSubItem && Icon && <Icon className="h-4 w-4" />}
                <span className="flex-1 truncate">{item.label}</span>
                {item.subItems && (
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isOpen && "rotate-90"
                        )}
                    />
                )}
            </Button>

            {item.subItems && isOpen && (
                <div className="mt-1">
                    {item.subItems.map((subItem) => (
                        <MenuItem
                            key={subItem.label}
                            item={subItem}
                            isSubItem={true}
                            onClose={onClose}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export type { MenuItemType };
export default MenuItem;
