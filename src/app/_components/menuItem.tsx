import Link from "next/link";

export type MenuItemType = {
  target: string;
  currentTarget: string;
  label: string;
  href: string;
};

const MenuItem = ({ target, currentTarget, label, href }: MenuItemType) => {
  const isActive = currentTarget === target;

  return (
    <li
      className={`${isActive ? "text-primary" : ""} group flex items-center py-3 hover:text-foreground`}
    >
      <span
        className={`nav-indicator group mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none 
        ${isActive ? "!w-16 bg-primary text-primary" : "w-8"}`}
      ></span>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default MenuItem;
