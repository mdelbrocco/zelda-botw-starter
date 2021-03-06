import React from 'react';
import { Item } from './Item';
import { ItemType } from '../data/items.type';

interface ItemGridProps {
  items: ItemType[];
}

export const ItemGrid = (props: ItemGridProps) => {
  const { items } = props;
  const emptyItemSlots: ItemType[] = []; // ?
  let i = 0;
  return <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
    {items.map(item => {
      i++;
      return <Item key={item.name} index={i.toString()} name={item.name} icon={item.icon} value={item.value} />;
    })}
    { /* TODO: what about the empty cells? We always want 20 cells I think? */ }
  </div>
}