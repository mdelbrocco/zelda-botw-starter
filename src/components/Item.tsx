import React, { useContext } from 'react';
import { SelectedItemContext } from '../App';
var classNames = require('classnames');

interface ItemProps {
  name: string;
  icon: string;
  value: string;
  index: string;
}

export const Item = (props: ItemProps) => {
  const { selectedItemIndex, setSelectedItemIndex } = useContext(SelectedItemContext);

  const isSelected = props.index === selectedItemIndex;
  
  return <div onClick={() => setSelectedItemIndex(props.index)}
              className={classNames("relative w-20 h-20 bg-black border border-zelda-darkGray", {"shadow-yellow border-zelda-softYellow": isSelected })}>
    <img alt={props.name} src={props.icon} />
    <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
      {props.value}
    </div>
</div>
}