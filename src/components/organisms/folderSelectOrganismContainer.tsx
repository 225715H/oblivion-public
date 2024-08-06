import React from 'react';
import { View } from 'react-native';
import FolderSelectContainer from '../molecules/folderSelectContainer';
import { useFolderListContext } from '../../context/folderListContext';
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
          
        />
      ))}
    </View>
  );
};

export default SwipeableListOrganism;
