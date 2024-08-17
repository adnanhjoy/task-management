import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? <p></p> : (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
export default App;