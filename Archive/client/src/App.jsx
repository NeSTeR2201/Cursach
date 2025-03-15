import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Auth/Login';
import CreateOrder from './components/Orders/CreateOrder';
import OrdersList from './components/Orders/OrdersList';
import { OrderProvider } from './context/OrderContext';                                                  
import FeaturesSection from './context/FeaturesSection';
import FeaturesData from './context/FeaturesData'; 
import './App.css';

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home features={FeaturesData} />} />
              <Route path="/about" element={<About />} />
              <Route path="/warehouse" element={<Warehouse />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-order" element={<CreateOrder />} />
              <Route path="/orders" element={<OrdersList />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </OrderProvider>
  );
}

const Home = ({ features }) => ( // Принимаем props
  <div className="home-container">
    <section className="hero-section">
      <h1>Добро пожаловать в систему управления складом</h1>
      <p className="hero-text">Эффективное решение для управления вашими складскими операциями</p>
    </section>
    <FeaturesSection features={features} />
  </div>
);

const About = () => (
  <div className="about-container">
    <section className="about-hero">
      <h1>О нашей компании</h1>
      <p className="about-intro">
        Мы - современная компания, специализирующаяся на предоставлении комплексных складских решений
        для бизнеса любого масштаба.
      </p>
    </section>

    <section className="company-info">
      <h2>История компании</h2>
      <p>
        Основанная в 2015 году, наша компания прошла путь от небольшого складского помещения
        до современного логистического центра. За это время мы накопили богатый опыт в управлении
        складскими операциями и логистике.
      </p>
    </section>

    <section className="mission-section">
      <h2>Наша миссия</h2>
      <p>
        Обеспечивать клиентов качественными складскими услугами, используя современные технологии
        и профессиональный подход к работе.
      </p>
    </section>

    <section className="team-section">
      <h2>Наша команда</h2>
      <div className="team-info">
        <p>
          В нашей компании работают более 50 квалифицированных специалистов, включая:
        </p>
        <ul>
          <li>Опытных логистов</li>
          <li>Специалистов по складскому учету</li>
          <li>Координаторов отгрузок</li>
          <li>Специалистов по контролю качества</li>
        </ul>
      </div>
    </section>

    <section className="achievements-section">
      <h2>Наши достижения</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <h3>1000+</h3>
          <p>Успешно выполненных заказов</p>
        </div>
        <div className="achievement-card">
          <h3>200+</h3>
          <p>Постоянных клиентов</p>
        </div>
        <div className="achievement-card">
          <h3>98%</h3>
          <p>Уровень удовлетворенности клиентов</p>
        </div>
      </div>
    </section>
  </div>
);

// Временные компоненты для страниц
const Contacts = () => {
  return (
    <>
  
    </>
    // <div className='warehouse_contacts'>
    //   <select name="contacts" id="contacts">
        
    //   </select>
    // </div>
  );
}

const Warehouse = () => {
  return (
    <div className="warehouse">
      <h1>Склад</h1>
      <div className="warehouse-info">
        <h2>Информация о складе:</h2>
        <ul>
          <li>Общая площадь: 1500 м<sup>2</sup></li>
          <li>Температурный режим: +18°C</li>
          <li>Режим работы: Пн-Пт 8:00-20:00</li>
          <li>Система хранения: Стеллажная</li>
          <li>Погрузочно-разгрузочные доки: 4 шт</li>
        </ul>
      </div>
    </div>
  );
};

export default App;