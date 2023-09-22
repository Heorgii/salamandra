import React, { useState } from 'react';
import {
  Nav,
  NavBox,
  NavList,
  NavListItem,
  NavListItemLink,
} from './Navigation.styled';

export const Navigation = () => {
  const [, setScrollX] = useState(0);//scrollX

  const handleSliderScroll = e => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    setScrollX(scrollLeft);
  };

  return (
    <NavBox>
      <Nav onScroll={handleSliderScroll}>
        <NavList>
          <NavListItem>
            <NavListItemLink href="">Коктейлі</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Кава</NavListItemLink>
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
            <NavListItemLink href="">Чай</NavListItemLink>
          </NavListItem>

          <NavListItem>
            <NavListItemLink href="">Лимонади та Холодний чай</NavListItemLink>
          </NavListItem>
        </NavList>
      </Nav>
    </NavBox>
  );
};
