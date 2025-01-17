import React from 'react';
import { View } from 'react-native';
import FolderSelectContainer from '../molecules/folderSelectContainer';
import { useFolders } from '../../context/folderContext';


const SwipeableListOrganism: React.FC = () => {
  const { folders } = useFolders()

  return (
    <View>
      {folders.map((item) => (
        <FolderSelectContainer
          key={item.id}
          id={item.id}
          name={item.name}
          checked={item.checked}
        />
      ))}
    </View>
  );
};

export default SwipeableListOrganism;
