"use client";

import { Link as IntlLink, usePathname } from "@/i18n/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function SmartLink({
  href,
  children,
  className,
  onClick,
}: Props) {
  const currentPath = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = href.replace(/^\/?#/, ""); // remove "/" or "#"
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href.startsWith("#") || href.startsWith(`/${currentPath}#`)) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <IntlLink href={href} className={className} onClick={onClick}>
      {children}
    </IntlLink>
  );
}
