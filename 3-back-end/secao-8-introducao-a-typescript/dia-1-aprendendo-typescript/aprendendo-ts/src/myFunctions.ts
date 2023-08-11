import { User } from './types/User';

export const returnName = (data: User[]): string[] => {
  return data.map((user) => user.name);
};

export const checkRepositories = (data: User[], repos: number): string[] => {
  return data.filter((user: User): boolean => user.repositories >= repos)
    .map((user: User): string => user.name);
};

export const isMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};