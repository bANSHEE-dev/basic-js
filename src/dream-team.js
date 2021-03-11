module.exports = function createDreamTeam(dreamTeamMembers) {

  for (let i = 0; i < dreamTeamMembers.length; i++) {

    if (dreamTeamMembers === dreamTeamMembers[0]) {
      return true;
    } else if (dreamTeamMembers === ' ') {
      return true;
    } else {
      return false;
    }

  }

};
