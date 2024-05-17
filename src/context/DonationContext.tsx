// // context/DonationContext.tsx

// import React, {createContext, useContext, useState} from 'react';

// // Definindo o tipo do contexto
// interface DonationContextType {
//   totalDonations: number;
//   increaseDonations: (amount: number) => void;
// }

// // Criando o contexto
// const DonationContext = createContext<DonationContextType>({
//   totalDonations: 0,
//   increaseDonations: () => {},
// });

// // Hook personalizado para usar o contexto de doações
// export const useDonation = () => useContext(DonationContext);

// // Componente de provedor do contexto de doações
// export const DonationProvider: React.FC = ({children}) => {
//   const [totalDonations, setTotalDonations] = useState(0);

//   const increaseDonations = (amount: number) => {
//     setTotalDonations(prevTotal => prevTotal + amount);
//   };

//   return (
//     <DonationContext.Provider value={{totalDonations, increaseDonations}}>
//       {children}
//     </DonationContext.Provider>
//   );
// };
