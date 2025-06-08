import React from 'react';
import type { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md p-4 shadow bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
