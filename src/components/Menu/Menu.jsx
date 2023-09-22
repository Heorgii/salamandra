import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Img,
  MenuListItem,
  MenuList,
  // MenuTitle,
  // MenuSection,
  MenuBox,
  InfoBox,
  TitleItem,
  AlcogolItem,
  InfoItem,
  PriceItem,
  DetailsItem,
  DetailsText,
  DetailsTitle,
  Details,
} from './Menu.styled';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import nophoto from '../../images/other/no_photo.jpg';
import { Container, Subtitle } from 'components/baseStyles/CommonStyle.styled';

export const Menu = () => {
  const [catalog, setCatalog] = useState([]);
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL_IMG = 'http://localhost:3030/uploads/';

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/menu`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setMenu(data);
        const listOfCategory = data.map(item => item.productua);
        let unique = [...new Set(listOfCategory)];
        setCatalog(unique);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      {/* <MenuSection> */}
      {catalog.map(it => (
        <div key={uuidv4()}>
          <Subtitle>{it}</Subtitle>
          <MenuList>
            {menu.map(
              item =>
                item.productua === it && (
                  <MenuListItem key={uuidv4()}>
                    {item.images !== 'none' && item.images && (
                      <Img src={BASE_URL_IMG + item.images} alt={item.name} />
                    )}
                    {item.images === 'none' && (
                      <Img src={nophoto} alt={item.name} />
                    )}
                    <InfoBox>
                      <TitleItem>{item.name}</TitleItem>
                      {item?.alcohol &&
                        item.alcohol.map(alc => (
                          <AlcogolItem key={uuidv4()}>{alc}</AlcogolItem>
                        ))}
                      <InfoItem>
                        <PriceItem>
                          <DetailsTitle>
                            {item?.price} {item?.currency}
                          </DetailsTitle>
                        </PriceItem>
                        <DetailsItem>
                          {item.details[0] !== '' &&
                            item.details[0] !== undefined && (
                              <DetailsTitle>Детальіше</DetailsTitle>
                            )}
                        </DetailsItem>
                      </InfoItem>
                      <Details>
                        {item?.details &&
                          item.details.map(det => (
                            <DetailsText key={uuidv4()}>{det}</DetailsText>
                          ))}
                      </Details>
                    </InfoBox>
                  </MenuListItem>
                )
            )}
          </MenuList>
        </div>
      ))}
      {isLoading ? onLoading() : onLoaded()}
      {error && <h1>{error}</h1>}
      {/* </MenuSection> */}
    </Container>
  );
};
