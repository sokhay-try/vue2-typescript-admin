import BaseHttpService from "@/core/base-http.service";

export default class ProfileService extends BaseHttpService {
  async getUserById(id: number) {
    const result = await this.get(`users/${id}`);
    return result;
  }
}
