import { ReactNode, createContext, useState } from "react";

export interface FullSizeImageContextType {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const FullSizeImageContext = createContext<FullSizeImageContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const FullSizeImageContextProvider = ({ children }: Props) => {
  const [image, setImage] = useState<string>('');


  return <FullSizeImageContext.Provider value={{image, setImage}}>{children}</FullSizeImageContext.Provider>;
};




