{

    //Declearing the Object type with Type alius 
    type User1 = {
        name: string;
        age: number
    }

    type SecondUser = User1 & { role: string }
    const userWithIntersection: SecondUser = {
        name: 'Makib',
        role: 'student',
        age: 44
    }
    const userWithAlisu: User1 = {
        name: 'shakib',
        age: 22
    }
    //interface 
    interface User2 {
        name: string,
        age: number
    }
    interface ExtendUser extends User2 {
        role: string,
    }

    const userWithInterface: User2 = {
        name: 'shakib',
        age: 45
    }
    const extendsUserObjext: ExtendUser = {
        role: 'student',
        name: 'rakib',
        age: 88
    }
    // interface with array 

    type RoleArrayType = number[];

    const role: RoleArrayType = [1, 2, 3, 43];

    interface RoleArrayTypeWithInterface {
        [index: number]: number
    }

    const role2: RoleArrayTypeWithInterface = [3, 4, 5, 6, 33];


    // function
    type AddFunctionType = (num1: number, num2: number) => number


    const AddWithType: AddFunctionType = (num1, num2) => num1 + num2

    interface AddWithInterfaceType {
        (num1: string, num2: number): string
    }

    const AddWithInterface: AddWithInterfaceType = (num1, num2) => num1 + num2;

}