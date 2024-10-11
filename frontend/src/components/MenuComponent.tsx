import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

// Define the type for a menu item
interface MenuItem {
  title: string;
  icon: React.ReactNode;
  dropdown: string[];
}


interface MenuComponentProps {
  menuData: MenuItem[];
}

const MenuComponent: React.FC<MenuComponentProps> = ({ menuData }) => {
  const menuItems = [];

  for (let i = 0; i < menuData.length; i++) {
    const item = menuData[i];
    const dropdownItems = [];

    for (let j = 0; j < item.dropdown.length; j++) {
      dropdownItems.push(
        <MenubarItem className=""  key={j}>
          <span>{item.dropdown[j]}</span>
        </MenubarItem>
      );
    }

    menuItems.push(
      <MenubarMenu   key={i}>
        <MenubarTrigger className="text-white hover:bg-white/10 focus:bg-white/20 data-[state=open]:bg-white/20 cursor-pointer border-r-2 border-dotted h-full ">
          <div className="flex flex-wrap items-center gap-1 text-base font-normal">
            {item.icon && <span className="ml-2">{item.icon}</span>}
            <span>{item.title}</span>
          </div>
        </MenubarTrigger>
        <MenubarContent className="bg-blue-800 backdrop-blur-sm">
          {dropdownItems}
        </MenubarContent>
      </MenubarMenu>
    );
  }

  return (
    <div className="flex flex-wrap w-fit h-full overflow-x-auto ">
      <Menubar className="bg-transparent border-none cursor-pointer h-full p-0">{menuItems}</Menubar>
    </div>
  );
};

export default MenuComponent;
