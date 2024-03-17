import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Preloader from './components/Preloader/Preloader';
import ErrorComponent from './components/Error/ErrorComponent';
import './sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        if (!res.ok) {
          throw new Error("Something went very wrong. Please try again later.")
        }
        const resData = await res.json()
        setData(resData.user)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setErrorMessage(error.message)
      }
    }
    getData()
  }, [])

  if (isError) return <ErrorComponent message={errorMessage} />;

  if (isLoading) return <Preloader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={data} />}>
          <Route index element={<Home user={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;