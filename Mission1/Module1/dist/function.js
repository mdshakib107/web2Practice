"use strict";
{
    // function add(a: number, b: number): number {
    //     return a + b
    // }
    // const result = add(3, 3)
    // console.log(result)
    // const run = (fast: string, slow: string): string => slow;
    // const addArrow = (num1: number, num2: number): number => num1 + num2;
    // const resultArrow = addArrow(2, 7);
    // // method writing 
    // const student = {
    //     name: 'shakib',
    //     dept: 'CSE',
    //     id: 183107,
    //     cgpa(value: number) {
    //         if (value > 3) {
    //             console.log('Good');
    //         } else {
    //             console.log('BAD')
    //         }
    //     },
    //     tutionFee(value: number): string {
    //         return `You Add ${value} TK as your tution Fee`
    //     }
    // }
    // const arr: number[] = [1, 2, 3, 4];
    // const newArr: number[] = arr.map((root: number):number => root * root)
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [, , bestFriend, ...rest] = myFriends;
    console.log(rest);
}
