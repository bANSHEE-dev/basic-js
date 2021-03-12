module.exports = function createDreamTeam(dreamTeamMembers) {
  if (!(dreamTeamMembers instanceof Array)) return false;
  const resUnsorted = [];
  const length = dreamTeamMembers.length;
  for (let i = 0; i < length; i++) {
    if (typeof dreamTeamMembers[i] === 'string') {
      const trimmedMember = dreamTeamMembers[i].trim();
      resUnsorted.push(trimmedMember[0].toUpperCase());
    }
  }
  return resUnsorted.sort().join('');
};
