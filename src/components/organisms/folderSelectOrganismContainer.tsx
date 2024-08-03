import React from 'react';
import { View } from 'react-native';
import SwipeableCheckboxItemMolecule from '../molecules/folderSelectContainer';
import { useListContext } from '../../context/folderListContext';


const SwipeableListOrganism: React.FC = () => {
  const { items } = useListContext();

  return (
    <View>
      {items.map((item) => (
        <SwipeableCheckboxItemMolecule
          key={item.id}
          id={item.id}
          title={item.title}
          checked={item.checked}
        />
      ))}
    </View>
  );
};

export default SwipeableListOrganism;
