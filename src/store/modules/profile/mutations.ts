import { MutationTree } from "vuex";
import { ProfileState, IUser } from "./types";

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload: IUser) {
    state.error = false;
    state.user = payload;
  },
  profileError(state) {
    state.error = true;
    state.user = undefined;
  },
};
