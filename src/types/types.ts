export interface IActiveContext{ 
    isActive: boolean; setIsactive: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IChildren{
    children:React.ReactNode[]|React.ReactNode
}
export interface IAuthContext {
    isAuth: string;
    signin: (auth: string, callBack: () => void) => void;
    signout: (callBack: () => void) => void;
  }
  export interface TodoItemTypes{
    id:string,
    text:string,
    checked:boolean
}