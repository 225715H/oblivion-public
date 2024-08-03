import React from 'react';
import { ListItem, Button } from '@rneui/themed';
import { useListContext } from '../../context/folderListContext';

type SwipeableCheckboxItemProps = {
  id: number;
  title: string;
  checked: boolean;
};

const SwipeableCheckboxItemMolecule: React.FC<SwipeableCheckboxItemProps> = ({ id, title, checked }) => {
  const { toggleChecked, deleteItem } = useListContext();

  return (
    <ListItem.Swipeable
      rightContent={
        <Button
          title="Delete"
          onPress={() => deleteItem(id)}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        />
      }
    >
      <ListItem.CheckBox
        checked={checked}
        onPress={() => toggleChecked(id)}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default SwipeableCheckboxItemMolecule;
