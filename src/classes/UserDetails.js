export default class UserDetails {
  constructor(data) {
    this.id = data ? data.id : null;
    this.username = data ? data.username : null;
    this.email = data ? data.email : null;
    this.password = data ? data.password : null;
    this.isLoggedIn = data ? data.isLoggedIn : false;
  }
}
