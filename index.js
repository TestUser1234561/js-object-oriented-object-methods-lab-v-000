function BoardMember(a, b, c) {
  this.name = a;
  this.homeState = b;
  this.training = c;

  this.veto = () => {
    return "No, I must disagree";
  }
}
