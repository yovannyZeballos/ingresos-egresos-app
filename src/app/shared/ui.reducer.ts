import * as fromUI from "./ui.actions";

export interface State{
    isLoading: boolean;
}

const iniState: State = {
    isLoading: false
}

export function uiReducer(state = iniState, action:fromUI.acciones): State{
    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return {
                isLoading:true
            }
        case fromUI.DESACTIVAR_LOADING:
                return {
                    isLoading:false
                }
        default:
            return state;
    }
}

