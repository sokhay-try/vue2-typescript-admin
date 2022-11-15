import BaseHttpService from "@/core/base-http.service";

export default class AuthService extends BaseHttpService {
  async login(username: string, password: string) {
    await this.post(`auth/login`, {
      username,
      password,
    });
  }
}
