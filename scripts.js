function comboCrack() {

    //--------------Number 1--------------------
    var resistLocation = parseInt(document.getElementById('resistLocation').value);
    var combo1 = resistLocation + 5;
    if (combo1 > 39) {
        combo1 = combo1 - 40;
    }
    //document.getElementById('combo1').value = combo1;

    //------------End Number 1------------------


    //------------Number 3----------------------
    var nums1 = [0, 8, 16, 24, 32];
    var nums2 = [1, 9, 17, 25, 33];
    var nums3 = [2, 10, 18, 26, 34];
    var nums4 = [3, 11, 19, 27, 35];
    var nums5 = [4, 12, 20, 28, 36];
    var nums6 = [5, 13, 21, 29, 37];
    var nums7 = [6, 14, 22, 30, 38];
    var nums8 = [7, 15, 23, 31, 39];

    var correctArray1 = [];
    var correctArray2 = [];

    var lock1 = parseInt(document.getElementById('lockLoc1').value);
    var lock2 = parseInt(document.getElementById('lockLoc2').value);
    var lock3 = parseInt(document.getElementById('lockLoc3').value);
    var lock4 = parseInt(document.getElementById('lockLoc4').value);
    var lock5 = parseInt(document.getElementById('lockLoc5').value);
    var lock6 = parseInt(document.getElementById('lockLoc6').value);
    var lock7 = parseInt(document.getElementById('lockLoc7').value);
    var lock8 = parseInt(document.getElementById('lockLoc8').value);



    for (var col = 0; col < nums1.length; col++) {
        if (nums1[col] == combo1) {
            correctArray1 = nums1;
            correctArray2 = nums5;

        }

    }

    for (var col = 0; col < nums2.length; col++) {
        if (nums2[col] == combo1) {
            correctArray1 = nums2;
            correctArray2 = nums6;

        }

    }
    for (var col = 0; col < nums3.length; col++) {
        if (nums3[col] == combo1) {
            correctArray1 = nums3;
            correctArray2 = nums7;

        }

    }
    for (var col = 0; col < nums4.length; col++) {
        if (nums4[col] == combo1) {
            correctArray1 = nums4;
            correctArray2 = nums8;

        }

    }
    for (var col = 0; col < nums5.length; col++) {
        if (nums5[col] == combo1) {
            correctArray1 = nums5;
            correctArray2 = nums1;

        }

    }
    for (var col = 0; col < nums6.length; col++) {
        if (nums6[col] == combo1) {
            correctArray1 = nums6;
            correctArray2 = nums2;

        }

    }
    for (var col = 0; col < nums7.length; col++) {
        if (nums7[col] == combo1) {
            correctArray1 = nums7;
            correctArray2 = nums3;

        }

    }
    for (var col = 0; col < nums8.length; col++) {
        if (nums8[col] == combo1) {
            correctArray1 = nums8;
            correctArray2 = nums4;


        }
    }


    var combo3 = [];

    for (var col = 0; col < correctArray1.length; col++) {
        if ((correctArray1[col] || correctArray2[col]) == lock1) {
            combo3.push(lock1);
        }
        if ((correctArray1[col] || correctArray2[col]) == lock2) {
            combo3.push(lock2);
        } if ((correctArray1[col] || correctArray2[col]) == lock3) {
            combo3.push(lock3);
        } if ((correctArray1[col] || correctArray2[col]) == lock4) {
            combo3.push(lock4);
        } if ((correctArray1[col] || correctArray2[col]) == lock5) {
            combo3.push(lock5);
        } if ((correctArray1[col] || correctArray2[col]) == lock6) {
            combo3.push(lock6);
        } if ((correctArray1[col] || correctArray2[col]) == lock7) {
            combo3.push(lock7);
        } if ((correctArray1[col] || correctArray2[col]) == lock8) {
            combo3.push(lock8);
        }

    }
    //------------End Number 3------------------



    //------------Number 2----------------------

    var finalArray1 = [];
    var finalArray2 = [];
    var combo2 = [];

    for (var col = 0; col < nums1.length; col++) {
        if (nums1[col] == (combo3 - 2)) {
            finalArray1 = nums1;
            finalArray2 = nums5;

        }

    }

    for (var col = 0; col < nums2.length; col++) {
        if (nums2[col] == (combo3 - 2)) {
            finalArray1 = nums2;
            finalArray2 = nums6;

        }

    }
    for (var col = 0; col < nums3.length; col++) {
        if (nums3[col] == (combo3 - 2)) {
            finalArray1 = nums3;
            finalArray2 = nums7;

        }

    }
    for (var col = 0; col < nums4.length; col++) {
        if (nums4[col] == (combo3 - 2)) {
            finalArray1 = nums4;
            finalArray2 = nums8;

        }

    }
    for (var col = 0; col < nums5.length; col++) {
        if (nums5[col] == (combo3 - 2)) {
            finalArray1 = nums5;
            finalArray2 = nums1;

        }

    }
    for (var col = 0; col < nums6.length; col++) {
        if (nums6[col] == (combo3 - 2)) {
            finalArray1 = nums6;
            finalArray2 = nums2;

        }

    }
    for (var col = 0; col < nums7.length; col++) {
        if (nums7[col] == (combo3 - 2)) {
            finalArray1 = nums7;
            finalArray2 = nums3;

        }

    }
    for (var col = 0; col < nums8.length; col++) {
        if (nums8[col] == (combo3 - 2)) {
            finalArray1 = nums8;
            finalArray2 = nums4;


        }
    }

    var plus2Index = 0;
    var minus2Index = 0;



    for (var col = 0; col < finalArray2.length; col++) {
        if (finalArray2[col] == (combo3 + 2)) {
            plus2Index = col;
        }
    }
    for (var col = 0; col < finalArray1.length; col++) {
        if (finalArray1[col] == (combo3 - 2)) {
            minus2Index = col;
        }
    }

    finalArray1.splice(minus2Index, 1);
    finalArray2.splice(plus2Index, 1);

    combo2.push(finalArray1);
    combo2.push(finalArray2);

    //------------End Number 2------------------	
    // document.getElementById('combo1').value = combo1;
    // document.getElementById('combo2').value = combo2;
    // document.getElementById('combo3').value = combo3;
    alert("The combination is: " + combo1 + ", (" + combo2 + "), (" + combo3 + ").");

}