import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

// 選択されたフォルダIDを保持するためのコンテキスト（数値型）
const TestSelectedIdContext = createContext<number | null>(null);
const SetTestSelectedIdContext = createContext<Dispatch<SetStateAction<number | null>>>(() => undefined);

interface TestSelectedIdProviderProps {
  children: ReactNode;
}

export const TestSelectedFolderIdProvider: FC<TestSelectedIdProviderProps> = ({ children }) => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  return (
    <TestSelectedIdContext.Provider value={selectedFolderId}>
      <SetTestSelectedIdContext.Provider value={setSelectedFolderId}>
        {children}
      </SetTestSelectedIdContext.Provider>
    </TestSelectedIdContext.Provider>
  );
};

// 選択されたフォルダIDを取得するカスタムフック
export const useTestSelectedId = () => useContext(TestSelectedIdContext);

// 選択されたフォルダIDを設定するためのカスタムフック
export const useSetTestSelectedId = () => useContext(SetTestSelectedIdContext);
