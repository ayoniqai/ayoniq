"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Datasets", href: "/datasets" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 md:flex"
    >
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href ||
            pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`
              relative rounded-md px-3 py-2
              text-sm font-medium
              transition-colors duration-200
              ${isActive
                ? "text-foreground"
                : "text-foreground/60 hover:text-foreground"
              }
            `}
          >
            {link.name}

            {/* Active indicator */}
            <span
              aria-hidden="true"
              className={`
                absolute inset-x-3 -bottom-0.5 h-px
                origin-center
                bg-foreground
                transition-transform duration-200
                ${isActive
                  ? "scale-x-100"
                  : "scale-x-0"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}