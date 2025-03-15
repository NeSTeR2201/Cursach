import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../context/OrderContext';
import './CreateOrder.css';

const CreateOrder = () => {
  const navigate = useNavigate();
  const { addOrder } = useOrders();

  const availableItems = [
    { id: 1, name: 'Лопата' },
    { id: 2, name: 'Метла' },
    { id: 3, name: 'Молоток' },
    { id: 4, name: 'Монтировка' },
    { id: 5, name: 'Грабли' },
    { id: 6, name: 'Топор' }
  ];

  const [orderData, setOrderData] = useState({
    login: '',
    title: '',
    description: '',
    selectedItems: {},
    contactPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemSelect = (itemId) => {
    setOrderData(prev => {
      const currentQuantity = prev.selectedItems[itemId] || 0;
      return {
        ...prev,
        selectedItems: {
          ...prev.selectedItems,
          [itemId]: currentQuantity + 1
        }
      };
    });
  };

  const handleQuantityChange = (itemId, change) => {
    setOrderData(prev => {
      const currentQuantity = prev.selectedItems[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      return {
        ...prev,
        selectedItems: {
          ...prev.selectedItems,
          [itemId]: newQuantity
        }
      };
    });
  };

  const handleRemoveItem = (itemId) => {
    setOrderData(prev => {
      const newSelectedItems = { ...prev.selectedItems };
      delete newSelectedItems[itemId];
      return {
        ...prev,
        selectedItems: newSelectedItems
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderWithItemDetails = {
      ...orderData,
      items: Object.entries(orderData.selectedItems).map(([itemId, quantity]) => ({
        name: availableItems.find(item => item.id === parseInt(itemId)).name,
        quantity
      })).filter(item => item.quantity > 0)
    };
    addOrder(orderWithItemDetails);
    navigate('/orders');
  };

  return (
    <div className="create-order-container">
      <div className="create-order-wrapper">
        <h2>Создание новой заявки</h2>
        <form className="create-order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login">Логин:</label>
            <input
              type="text"
              id="login"
              name="login"
              value={orderData.login}
              onChange={handleChange}
              required
              placeholder="Введите логин"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Вид операции:</label>
            <select
              id="title"
              name="title"
              value={orderData.title}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Выберите операцию</option>
              <option value="списание">Списание</option>
              <option value="прием">Прием</option>
              <option value="ремонт">Ремонт</option>
              <option value="выдача">Выдача</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Описание:</label>
            <textarea
              id="description"
              name="description"
              value={orderData.description}
              onChange={handleChange}
              required
              placeholder="Опишите вашу заявку"
              rows="4"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">Контактный телефон:</label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              value={orderData.contactPhone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <button type="submit" className="submit-button">
            Создать заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;
