export interface IActiveContext{ 
    isActive: boolean; setIsactive: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IChildren{
    children:React.ReactNode[]|React.ReactNode
}