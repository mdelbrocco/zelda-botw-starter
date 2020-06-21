import React from 'react';

interface ItemProps {
  name: string;
  icon: string;
  value: string;
}

export const Item = (props: ItemProps) => {
  return <div className="relative w-20 h-20 bg-black border border-zelda-darkGray">
    <img alt={props.name} src={props.icon} />
    <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
      {props.value}
    </div>
</div>
}