export class UserInfo {
  constructor(userName, userOccupation, AvatarImage) {
    this._userName = userName;
    this._userOccupation = userOccupation;
    this.AvatarImage = AvatarImage;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userOccupation.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.userName
    this._userOccupation.textContent = data.userOccupation
  }
  setUserAvatar(data) {
    this.AvatarImage.src = data.avatar
  }
}
