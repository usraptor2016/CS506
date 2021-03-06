function URLs() {
    this.root = "http://localhost:3000/";
    this.loginURL = this.root + "login";
    this.hasUserURL = this.root + "hasUser";
    this.signUpURL = this.root + "signup";
    this.buildHasUserURL = (username) => {
        return this.hasUserURL + "?username=" + username;
    };
}
export default new URLs();