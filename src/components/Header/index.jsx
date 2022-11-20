import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            legacyBehavior
          >
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
