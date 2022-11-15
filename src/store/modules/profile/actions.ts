/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import { ProfileState, IUser } from "./types";
import { RootState } from "../../types";
import { ProfileSV } from "@/services/profile";

export const actions: ActionTree<ProfileState, RootState> = {
  async getUserById({ commit }, { payload }): Promise<any> {
    const response = await ProfileSV.getUserById(payload.id);
    const data: IUser = response && response.data;
    commit("profileLoaded", data);
  },
};
