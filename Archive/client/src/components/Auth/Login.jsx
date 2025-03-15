import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Проверка логина и пароля
    const { login, password } = data;

    if (login === 'major397' && password === 'major321') {
      console.log('Данные для входа:', data);
      // Перенаправление на главную страницу после успешной авторизации
      navigate('/');
    } else {
      setError('Неверный логин или пароль');
      console.log('Ошибка авторизации');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Авторизация</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Логин обязателен' })}
              placeholder="Введите логин"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Пароль обязателен' })}
              placeholder="Введите пароль"
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
