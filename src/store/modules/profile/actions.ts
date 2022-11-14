/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import axios from "axios";
import { ProfileState, IUser } from "./types";
import { RootState } from "../../types";

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }, { payload }): any {
    axios({
      url: "https://jsonplaceholder.typicode.com/users/" + payload.id,
    }).then(
      (response) => {
        const payload: IUser = response && response.data;
        commit("profileLoaded", payload);
      },
      (error) => {
        console.log(error);
        commit("profileError");
      }
    );
  },
};
