import type { User } from '../../domain/entities/User';
import type { UserRepository } from '../../domain/repositories/UserRepository';

export class ApiUserRepository implements UserRepository {
  async getUser(id: string): Promise<User> {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: 'John Doe',
          email: 'john.doe@example.com',
          isActive: true,
        });
      }, 500);
    });
  }
}
