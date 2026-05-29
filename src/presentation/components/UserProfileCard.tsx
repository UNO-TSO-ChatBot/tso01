import React from 'react';
import type { User } from '../../domain/entities/User';

interface Props {
  user: User;
  onEdit: () => void;
}

export const UserProfileCard: React.FC<Props> = React.memo(({ user, onEdit }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
});

UserProfileCard.displayName = 'UserProfileCard';
