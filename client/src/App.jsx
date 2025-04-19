import { useEffect, useState } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout';
import VerticalRightLayout from './layouts/VerticalRightLayout';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/user/1', {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  
  

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">

      <header className="flex justify-between items-center p-4 bg-gray-800 border border-4 border-black/[0.1]">
        <h1 className="text-xl font-bold">RPGME</h1>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">User</button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
          Logout
        </button>
      </header>

      {/* Main content area */}
      {/* <VerticalRightLayout /> */}
      <DefaultLayout />
    </div>
  )
}

export default App;
