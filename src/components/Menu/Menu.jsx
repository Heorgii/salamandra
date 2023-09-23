import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Img,
  MenuListItem,
  MenuList,
  MenuTitle,
  MenuSection,
  MenuSubTitle,
  InfoBox,
  DivForName,
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
import { Container } from 'components/baseStyles/CommonStyle.styled';

export const Menu = () => {
  const [catalog, setCatalog] = useState([]);
  const [group, setGroup] = useState([]);
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
        const listOfGroup = data.map(item => item.product);
        let uniqueGroup = [...new Set(listOfGroup)];
        setGroup(uniqueGroup);
        let uniqueCategory = {};
        for (const key of uniqueGroup) {
          uniqueCategory[key] = [];
          data.forEach(item => {if(item.product === key){uniqueCategory[key].push(item.category)}})
        };
        for (const key in uniqueCategory){
          uniqueCategory[`${key}`] = [...new Set(uniqueCategory[`${key}`])]
        }
        setCatalog(uniqueCategory);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log("catalog", catalog);
  console.log("group", group);

  return (
    <Container>
      <MenuSection>
      {group.map(it => (
        <div style={{width:"100%"}} key={uuidv4()}>
          <MenuTitle>{it}</MenuTitle>
          {catalog[`${it}`].map(cat => (
          <div key={uuidv4()}>
          {it !== cat && <MenuSubTitle>{cat}</MenuSubTitle>}
          <MenuList>
            {menu.map(
              item =>
                item.category === cat && (
                  <MenuListItem key={uuidv4()}>
                    {item.images !== 'none' && item.images && (
                      <Img src={BASE_URL_IMG + item.images} alt={item.name} />
                    )}
                    {item.images === 'none' && (
                      <Img src={nophoto} alt={item.name} />
                    )}
                    <InfoBox>
                      <DivForName>
                        <TitleItem>{item.name}</TitleItem>
                        {item?.alcohol &&
                          item.alcohol.map(alc => (
                            <AlcogolItem key={uuidv4()}>{alc}</AlcogolItem>
                          ))}
                      </DivForName>
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
          </div>))}
        </div>
      ))}
      {isLoading ? onLoading() : onLoaded()}
      {error && <h1>{error}</h1>}
      </MenuSection>
    </Container>
  );
};
