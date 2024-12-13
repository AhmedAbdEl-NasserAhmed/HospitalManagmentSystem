import { createContext, useContext, useState } from "react";
import styles from "./CustomizedContextMenu.module.scss";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";
import { HiDotsVertical } from "react-icons/hi";

interface MenusButton {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactElement;
}

interface MenusContext {
  openId?: string;
  openMenus?: (id: string) => void;
  closeMenus?: () => void;
  position?: {
    x: number;
    y: number;
  };
  setPosition?: (object: { x: number; y: number }) => void;
}

interface Props {
  children: React.ReactNode;
}

const MenusContext = createContext<MenusContext>({});

function Menus({ children }: Props) {
  const [openId, setOpenId] = useState("");

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const closeMenus = () => setOpenId("");

  const openMenus = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, closeMenus, openMenus, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className={styles["menus__menu"]}>{children}</div>;
}

function Toggle({ id }) {
  const { openId, openMenus, closeMenus, setPosition } =
    useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x + 20,
      y: rect.y + rect.height - 8
    });

    id === "" || openId !== id ? openMenus(id) : closeMenus();

    console.log("openId", openId);
  }

  return (
    <button className={styles["menus__toggle"]} onClick={handleClick}>
      <HiDotsVertical />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, closeMenus } = useContext(MenusContext);

  const ref = useClickOutside<HTMLUListElement>({
    closeFn: () => closeMenus(),
    stopBubbling: false
  });

  if (openId !== id) return null;

  window.addEventListener("scroll", closeMenus);

  return createPortal(
    <ul
      ref={ref}
      style={{ top: position.y, right: position.x }}
      className={styles["menus__list"]}
    >
      {children}
    </ul>,

    document.body
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
