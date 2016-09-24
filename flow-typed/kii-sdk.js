//@flow
declare module "kii-sdk" {
  declare export class Kii {
    static initializeWithSite(app_id: string, app_key: string, site: string): void;
  }
  
  declare export class KiiUser {
    _uuid: string;
    register(): Promise<KiiUser | Error>;
    static userWithUsername(username: string, password: string): KiiUser;
    static authenticateWithToken(access_token: string): Promise<KiiUser | Error>;
    getAccessToken(): string;
    getUsername(): string;
  }
}
