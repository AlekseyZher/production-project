import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { t } from "i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        { t ("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita mollitia exercitationem fugit animi minus sunt illo, 
                officia repellat, totam odit eligendi eius fugiat quibusdam magnam quo incidunt ipsum perspiciatis?
      </Modal>
    </div>
  );
};




