define( function () {

    'use strict';

    /*
        Simple mathematical 2D point rotation in cartesian coordinate space
        ---
        Source: http://stackoverflow.com/a/17411276/6512315

        cX            num         X origin coordinate to rotate around
        cY            num         Y origin coordinate to rotate around
        x             num         X coordinate to be rotated
        y             num         Y coordinate to be rotated
        a             rad/deg     Angle to rotate by, positive for clockwise, negative for A.C.

        inDegrees     bool        optional - Flag whether angle is passed in as degrees

        --
        Returns       obj         new x and y coordinates

    */

    return function (cX, cY, x, y, a, inDegrees) {

        // Convert to radians if flagged as degrees
        a = inDegrees === true ? a * ( Math.PI / 180 ) : a;

        var nX = ( Math.cos( a ) * ( x - cX ) ) + ( Math.sin( a ) * ( y - cY ) ) + cX;
        var nY = ( Math.cos( a ) * ( y - cY ) ) - ( Math.sin( a ) * ( x - cX ) ) + cY;

        return { x: nX, y: nY };
    };

});
