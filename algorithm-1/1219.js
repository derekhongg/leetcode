/* Flood Fill */


function floodFill (image, sr, sc, newColor, firstColor = image[sr][sc]) {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor) {
        return image;
    }

    image[sr][sc] = newColor;

    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);

    return image;
}