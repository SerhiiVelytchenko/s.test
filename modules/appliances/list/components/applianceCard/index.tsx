import React, { useCallback } from 'react';
import { Appliance } from '@md-modules/shared/mock';
import { PersonLink } from '@md-appliances/list/components/applianceCard/person-link/index';
import {
  Actions,
  Card,
  ContentWrapper,
  Currency,
  ImageWrapper, Title, ViewButton, WrapperCount
} from '@md-appliances/list/components/applianceCard/views';

interface ApplianceCardProps {
  data: Appliance
  onAddToBasket: (item: Appliance) => void
  items: Array<{
    count: number,
    appliance: Appliance
  }> | undefined
}

const ApplianceCard: React.FC<ApplianceCardProps> = ({
  data,
  onAddToBasket,
  items
}) => {
  const handleAddToCard = useCallback(() => {
    onAddToBasket(data);
  }, [data, onAddToBasket]);
  const item = items.find((el: { appliance: { id: string; }; }) => data.id === el.appliance.id);

  return <Card>
    <ImageWrapper><img src={data.image} alt={`${data.name} image`}/></ImageWrapper>
    <ContentWrapper>
      <Title>
        {data.name}
      </Title>
      <Actions>
        <Currency>${data.price}</Currency>
        <ViewButton onClick={handleAddToCard}>Add to card</ViewButton>
        <WrapperCount count={item?.count > 0 ? 'green300' : undefined}>{item?.count}</WrapperCount>
        <PersonLink pId={data.id}>
          <ViewButton>Details</ViewButton>
        </PersonLink>
      </Actions>
    </ContentWrapper>
  </Card>;
};

export { ApplianceCard };
