import { useTypedSelector } from "./redux"

export function useAuth() {
    
    const { id, email } = useTypedSelector((state) => state.user);
    
    //로그인이 되어있는지 안되어있는지, 되어있으면 email과 id출력
    return {
        isAuth: !!email,
        email,
        id
    }
}