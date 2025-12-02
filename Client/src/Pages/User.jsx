import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Pratiksha Surwade",
    email: "pratiksha@gmail.com",
    phone: "9876543210",
  });

  return (
    <>
      <div className='w-full h-full bg-green-200 '>
        <h1>User : </h1>
        <div className='w-full bg-red-200 flex justify-between'>
          <p>Username</p>
          <p>Profile</p>
        </div>
      </div>
    </>
  );
}
