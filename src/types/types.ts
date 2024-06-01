export interface IActiveContext {
  isActive: boolean;
  setIsactive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IChildren {
  children: React.ReactNode[] | React.ReactNode;
}
export interface IAuthContext {
  isAuth: User;
  signin: (auth: User, callBack: () => void) => void;
  signout: (callBack: () => void) => void;
}
export interface TodoItemTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ICard {
  authors: string;
  image: string;
  desc: string;
}
export interface User {
  username: string;
  email: string;
  password: string;
  course_group: number;
}
export interface ActivateUser {
  uid: string;
  token: string;
}
export interface PostCreate {
  image: null | File | undefined;
  title: string;
  lesson_num: string;
  text: string;
  description: string;
}
export interface FetchPost {
  limit: string;
  offset: string;
  search: string;
  ordering: string;
}
export interface initalPost{
    post: never[];
    currentPage: number;
    itemsPerPage: number;
    totalCount: number;
    status: string;
    error: null;
    searchQuery: string;
    ordering: string;
}
