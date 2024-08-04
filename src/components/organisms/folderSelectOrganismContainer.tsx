import React from 'react';
import { View } from 'react-native';
import FolderSelectContainer from '../molecules/folderSelectContainer';
import { useFolderListContext } from '../../context/folderListContext';


const SwipeableListOrganism: React.FC = () => {
  const { folders } = useFolderListContext();

  return (
    <View>
      {folders.map((item) => (
        <FolderSelectContainer
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
