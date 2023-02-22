import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions.types";

export const updateCreator = createAction(phoneActions.numbersToDisplay);
export const deleteCreator = createAction(phoneActions.numberDelete);
