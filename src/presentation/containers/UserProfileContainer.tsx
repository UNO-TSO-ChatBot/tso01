import React, { useEffect, useState, useCallback } from 'react';
import { GetUserUseCase } from '../../application/useCases/GetUserUseCase';
import { ApiUserRepository } from '../../infrastructure/repositories/ApiUserRepository';
import { UserProfileCard } from '../components/UserProfileCard';
import type { User } from '../../domain/entities/User';

// Typically this would be injected via Context or a DI container
const userRepository = new ApiUserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);

export const UserProfileContainer: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserUseCase.execute(userId)
      .then(setUser)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [userId]);

  const handleEdit = useCallback(() => {
    console.log('Edit clicked for user', user?.id);
  }, [user?.id]);

  if (loading) return <p>Loading user profile...</p>;
  if (!user) return <p>User not found</p>;

  return <UserProfileCard user={user} onEdit={handleEdit} />;
};
