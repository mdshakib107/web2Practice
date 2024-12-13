{

    //type assertion 
    let anything: any;
    anything = "Hello I am Dedicated to programming Today";
    //anything . দিলে কিছুই ধরা পড়ছে না কারন টাইপ বুঝে উঠত পারছে না কারন এনি টাইপ দেওয়া। 
    (anything as string)//এখানে ডট দিলে স্ট্রিং এর সব মেথড সাজেস্ট করছে কারন আমি টাইপ বলে দিয়েছি। 


    const KgToGm = (value: number | string): number | string | undefined => {
        if (typeof value === "number") {
            return value * 1000;
        }
        else if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;//parseFloat vs parseInt:https://medium.com/@roy.elaawar/parsefloat-vs-parstint-in-javascript-4f3d345f205f
            return `The value of gm${convertedValue}`;
        }
    }
    const result1 = KgToGm(1000) as number;
    const result2 = KgToGm('1000') as string;

    try {

    }
    catch (error) {

    }
}