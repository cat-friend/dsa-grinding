// even number of students, % 2 involved?
// students wearing red shirts must be in the same row; same with blue
// each student in the back must be taller than the student directly in front
// example input:
/**
 * redShirtHeights = [5, 8, 1, 3, 4]
 * blueShirtHeights = [6, 9, 2, 4, 5]
 */

function classPhotos(redShirtHeights, blueShirtHeights) {
    // taller must go in the back, so look at Math.max(...redShirtHeights) and ...blueShirtHeights, compare; the one with bigger max goes in the back
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
    let redTaller = true;
    let blueTaller = true;
    const tallestBlueShirt = blueShirtHeights[0]
    const tallestRedShirt = redShirtHeights[0]
    if (tallestBlueShirt === tallestRedShirt) {
        return false;
    }
    // redshirttaller
    for (let i = 0; i < redShirtHeights.length; i++) {
        if (blueShirtHeights[i] >= redShirtHeights[i]) redTaller = false; // need to include `>=` because the back row must be STRICTLY TALLER
    }
    // bluetaller
    for (let i = 0; i < blueShirtHeights.length; i++) {
        if (redShirtHeights[i] >= blueShirtHeights[i]) blueTaller = false;
    }
    return Boolean(redTaller || blueTaller);
  }

  // Do not edit the line below.
  exports.classPhotos = classPhotos;
