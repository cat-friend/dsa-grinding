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

// convert song lengths to songLength % 60
// create songs obj
    // key: value
    // song % 60: [indices]
// key into obj - does obj have property 60 - songs[i]?
    // if yes:
        // is songsObj[songs[i]].length > 1?
            // if no -> continue
            // if yes -> iterate through indices
                // if song index === i continue
                // else paircount++


function playlist(songs) {
    let pairsCount = 0;
    songs = songLengthConverter(songs);
    const songsObj = playlistObj(songs);
    for (let i = 0; i < songs.length; i++) {
        const lengthDiff = 60 - songs[i];
        if (!songsObj.hasOwnProperty(lengthDiff)) continue;
        else {
            if (lengthDiff === songs[i] && !songsObj[songs[i]].length > 1) continue;
            else {
                for (let j = 0; j < songsObj[songs[i]].length; j++) {
                    console.log("songsObj[songs[i]][j] === i", songsObj[songs[i]][j] === i)
                    if (songsObj[songs[i]][j] === i) continue;
                    else pairsCount++
                }
            }
        }
    }
    return pairsCount
}


function playlistObj(songs) {
    const obj = {};
    for (let i = 0; i < songs.length; i++) {
        if (obj.hasOwnProperty(songs[i])) {
            obj[songs[i]].push(i);
        }
        else obj[songs[i]] = [i]
    }
    console.log("obj", obj)
    return obj;
}

function songLengthConverter(songs) {
    for (let i = 0; i < songs.length; i++) {
        songs[i] = songs[i] % 60;
    }
    return songs;
}
