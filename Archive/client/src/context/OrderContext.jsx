import { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, {
      ...newOrder,
      id: Date.now(), // Генерируем уникальный ID
      status: 'Непроверено',
      createdAt: new Date().toISOString()
    }]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}; 