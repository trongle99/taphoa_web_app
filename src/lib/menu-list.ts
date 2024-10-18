import { MenuItemType } from "@/components/layout/MenuItem";
import {
    ArchiveIcon,
    BackpackIcon,
    BarChartIcon,
    BoxIcon,
    ChatBubbleIcon,
    DashboardIcon,
    GearIcon,
    PersonIcon,
    ReaderIcon,
} from "@radix-ui/react-icons";

type MenuList = {
    group: string;
    items: MenuItemType[];
};

export function getMenuList(): MenuList[] {
    return [
        {
            group: "Overview",
            items: [
                { label: "Dashboard", icon: DashboardIcon, href: "/" },
                { label: "Analytics", icon: BarChartIcon, href: "/analytics" },
            ],
        },
        {
            group: "Store Management",
            items: [
                {
                    label: "Products",
                    icon: BoxIcon,
                    href: "/products",
                    subItems: [
                        { label: "All Products", href: "/products" },
                        { label: "Add Product", href: "/products/add" },
                        { label: "Categories", href: "/products/categories" },
                    ],
                },
                {
                    label: "Orders",
                    icon: BackpackIcon,
                    href: "/orders",
                    subItems: [
                        { label: "All Orders", href: "/orders" },
                        { label: "Pending", href: "/orders/pending" },
                        { label: "Shipped", href: "/orders/shipped" },
                    ],
                },
                {
                    label: "Inventory",
                    icon: ArchiveIcon,
                    href: "/inventory",
                },
            ],
        },
        {
            group: "Customer",
            items: [
                {
                    label: "Customers",
                    icon: PersonIcon,
                    href: "/customers",
                },
                {
                    label: "Messages",
                    icon: ChatBubbleIcon,
                    href: "/messages",
                },
            ],
        },
        {
            group: "System",
            items: [
                {
                    label: "Settings",
                    icon: GearIcon,
                    href: "/settings",
                },
                {
                    label: "Documentation",
                    icon: ReaderIcon,
                    href: "/docs",
                },
            ],
        },
    ];
}
