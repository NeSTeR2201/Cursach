import { NavLink } from 'react-router-dom';
import './Styles/Header.css';

const Header = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Главная
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">Информация</button>
          <div className="dropdown-content">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              О нас
            </NavLink>
            <NavLink to="/warehouse" className="nav-link" activeClassName="active">
              Информация о складе
            </NavLink>
          </div>
        </div>
        {isAuthenticated ? (
          <>
            <NavLink to="/create-order" className="nav-link" activeClassName="active">
              Создать заявку
            </NavLink>
            <NavLink to="/orders" className="nav-link" activeClassName="active">
              Заявки
            </NavLink>
          </>
        ) : null}
        <NavLink to="/contacts" className="nav-link" activeClassName="active">
          Контакты
        </NavLink>
        {!isAuthenticated && (
          <NavLink to="/login" className="nav-link login-link" activeClassName="active">
            Войти
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;