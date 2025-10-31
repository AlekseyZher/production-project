import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { t } from "i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUserName";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        { t ("Войти")}
      </Button>
      <LoginModal 
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};




