/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { updateCreator } from "../reducer/phone.actions.creator";
import * as ac from "../reducer/phone.actions.creator";

export function usePhone() {
  const phones = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const addNumber = async (phone: any) => {
    try {
      const finalPhone: any = await updateCreator(phone);
      dispatch(ac.updateCreator(finalPhone));
    } catch (error) {
      console.log((error as Error).message); // Try catch no necesario porque no depende de una api
    }

    return {
      phones,
      addNumber,
    };
  };
}
