/**
 A music player allows users to choose songs to play but it has some rules. The songs must be chosen in pairs and the pair's durations must add up to a multiple of 60 seconds (e.g., 60, 120, 180). Given a list of song durations, calculate the total number of different song pairs that can be chosen.

 Example:
 n = 3
 songs = [40, 20, 60]

 Only one pair of songs has a combined duration that is a multiple of a whole minute (10 + 20 = 60), so return 1. While the third song is a single minute long, songs must be chosen in pairs.

 Function description:
 Complete the function `playlist` in the editor.
 `playlist` has the following parameter(s):
    int songs[n]: the song durations in seconds

    Returns int:  the number of valid pairs


Constraints:
    1 <= n <= 10^5
    1 <= songs[i] <= 1000, where 0 <= i < n
 */


function playlist(songs) {
    let pairsCount = 0;
    for (let i = 0; i < songs.length; i++) {
        for (let j = i +1; j < songs.length; j++) {
            if ((songs[i] + songs[j]) % 60 === 0) {
                pairsCount++
            }
        }
    }
    return pairsCount
}
