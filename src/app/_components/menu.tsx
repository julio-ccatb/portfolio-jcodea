import MenuItem, { type MenuItemType } from "./menuItem";

const Menu = ({ target }: { target: string }) => {
  const navItems: MenuItemType[] = [
    {
      target: "about",
      label: "About me",
      href: "#about",
      currentTarget: target,
    },
    {
      target: "experience",
      label: "Experience",
      href: "#experience",
      currentTarget: target,
    },
    {
      target: "project",
      label: "Projects",
      href: "#project",
      currentTarget: target,
    },
  ];

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max text-xs font-extrabold uppercase text-muted-foreground">
        {navItems.map((item) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
