export default class UserDetails {
  constructor(data) {
    this.username = data ? data.username : null;
    this.email = data ? data.email : null;
    this.password = data ? data.password : null;
  }
}
