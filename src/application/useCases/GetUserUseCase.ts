import type { User } from '../../domain/entities/User';
import type { UserRepository } from '../../domain/repositories/UserRepository';

export class GetUserUseCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<User> {
    if (!id) throw new Error('User ID is required');
    const user = await this.userRepository.getUser(id);
    return user;
  }
}
