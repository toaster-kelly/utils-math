/*
    Lerp (Linear Interpolate) between 2 values
    ---

    a       num       First value
    b       num       Second value

    p       num       Normalised progress value (from 0-1)

*/

export default function (a, b, p) {

    return a + p * ( b - a );
}