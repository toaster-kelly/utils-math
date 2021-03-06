define( function () {

    'use strict';

    /*

        Mix RGB colour 2 into RGB colour 1 based on normalised mix amount

        value         num          normalised amount of mix bias

        r1            num          Red value of first colour (0-255)
        g1            num          Green value of first colour (0-255)
        b1            num          Blue value of first colour (0-255)

        r2            num          Red value of second colour (0-255)
        g2            num          Green value of second colour (0-255)
        b2            num          Blue value of second colour (0-255)

        --
        Returns       arr          Array containing new 0-255 R, G and B colour values

    */

    return function (value, r1, g1, b1, r2, g2, b2) {

        var r = parseInt( r2 * value + r1 * ( 1 - value ), 10 );
        var g = parseInt( g2 * value + g1 * ( 1 - value ), 10 );
        var b = parseInt( b2 * value + b1 * ( 1 - value ), 10 );

        return [ r, g, b ];
    };

});