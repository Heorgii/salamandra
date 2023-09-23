import React, { useEffect, useState } from 'react';
import {
  Nav,
  NavBox,
  NavList,
  NavListItem,
  NavListItemLink,
} from './Navigation.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';

export const Navigation = () => {
  const [, setScrollX] = useState(0); //scrollX
  const [isFixed, setIsFixed] = useState(false);

  const handleSliderScroll = e => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    setScrollX(scrollLeft);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;

      const navPosition = nav.getBoundingClientRect().top;
      setIsFixed(navPosition <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBox id="nav">
      <SwitchTheme />

      <Nav onScroll={handleSliderScroll} isFixed={isFixed}>
        <NavList>
          <NavListItem>
            <NavListItemLink href="">Коктейлі</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Алкогольні напої</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Горячі вина та Гроги</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Фреска, Фрапе, Шейки</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Лимонади та Холодний чай</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Кава</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Чай</NavListItemLink>
          </NavListItem>
        </NavList>
      </Nav>
    </NavBox>
  );
};
