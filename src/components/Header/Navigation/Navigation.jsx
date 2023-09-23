import React, { useEffect, useState } from 'react';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import {
  Nav,
  NavBox,
  NavList,
  NavListItem,
  NavListItemLink,
} from './Navigation.styled';

export const Navigation = () => {
  const [, setScrollX] = useState(0); //scrollX
  const [isFixed, setIsFixed] = useState(false);

  const [group, setGroup] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const currentUrl = window.location.href.split('#')[0];

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

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/menu`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        const listOfGroup = data.map(item => item.product);
        let uniqueGroup = [...new Set(listOfGroup)];
        setGroup(uniqueGroup);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <NavBox id="nav">
      <SwitchTheme />

      <Nav onScroll={handleSliderScroll} isFixed={isFixed}>
        <NavList>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {group.map((item, i) => (
            <NavListItem key={i}>
              <NavListItemLink href={`${currentUrl}#${item}`} aria-label={item}>
                {item}
              </NavListItemLink>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
    </NavBox>
  );
};
