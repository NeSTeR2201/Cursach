import { useOrders } from '../../context/OrderContext';
import './OrdersList.css';

const OrdersList = () => {
  const { orders } = useOrders();

  const getStatusClass = (status) => {
    switch (status) {
      case 'Непроверено':
        return 'status-pending';
      case 'В обработке':
        return 'status-processing';
      case 'Выполнено':
        return 'status-completed';
      case 'Отменено':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="orders-list-container">
      <h1>Список заявок</h1>
      
      {orders.length === 0 ? (
        <p className="no-orders">Заявок пока нет</p>
      ) : (
        <div className="orders-grid">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>{order.title}</h3>
                <span className={`status-badge ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="order-info">
                <p><strong>ФИО:</strong> {order.fullName}</p>
                <p><strong>Описание:</strong> {order.description}</p>
                <p><strong>Телефон:</strong> {order.contactPhone}</p>
                <p><strong>Дата создания:</strong> {formatDate(order.createdAt)}</p>
              </div>
              
              <div className="order-actions">
                <button className="btn-details">Подробнее</button>
                {order.status === 'Непроверено' && (
                  <button className="btn-edit">Редактировать</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList; 