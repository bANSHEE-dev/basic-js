module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const movePerSecond = turnsSpeed / 3600;
    const moves = (2 ** disksNumber) - 1;
    const sec = moves / movePerSecond;

    return {
        moves,
        sec
    };
}
