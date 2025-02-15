import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyCard from './Card/MyCard';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to the 404 page if not logged in
      router.replace('/404');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // While verifying, render nothing
  if (isAuthorized === null) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
       <MyCard/>
      </div>
    </div>
  );
};

export default Dashboard;
