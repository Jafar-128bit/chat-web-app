import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PopUpState} from "../../types/types";

const initialState: PopUpState = {
    // State Dependent pop-ups
    // followerListMenu: {actionArgument: false, actionState: undefined},

    // State Independent pop-ups
    addNewGroup: {actionArgument: false},
    popUpContainer: {actionArgument: false},
}

const popUpSlice = createSlice({
    name: "popUpSlices",
    initialState: initialState,
    reducers: {
        togglePopUp: (state, action: PayloadAction<{ actionName: string, actionArgument: boolean, actionState?: any }>) => {
            const {actionName, actionArgument, actionState} = action.payload;
            const popUp = state[actionName];

            if (popUp) {
                popUp.actionArgument = actionArgument;
                if (actionState !== undefined) {
                    popUp.actionState = actionState;
                }
            }
        },
        toggleCloseAll: (state) => {
            Object.values(state).forEach((popUp) => {
                popUp.actionArgument = false;
                if (popUp.actionState !== undefined) {
                    popUp.actionState = undefined;
                }
            });
        }
    }
});

export const {togglePopUp, toggleCloseAll} = popUpSlice.actions;
export default popUpSlice.reducer;