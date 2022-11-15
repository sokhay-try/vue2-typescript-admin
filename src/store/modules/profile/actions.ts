/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import { ProfileState, IUser } from "./types";
import { RootState } from "../../types";
import ProfileService from "@/services/profile";

const profileSV = new ProfileService();

export const actions: ActionTree<ProfileState, RootState> = {
  async getUserById({ commit }, { payload }): Promise<any> {
    const response = await profileSV.getUserById(payload.id);
    const data: IUser = response && response.data;
    commit("profileLoaded", data);
  },
};
