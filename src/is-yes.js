export const isYes = (userAnswer) => {
    if (userAnswer === 'yes'){
        return true;
    } else if (userAnswer === 'y'){
        return true;
    }
    return false;
};