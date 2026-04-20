function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    backtrack(result, [], nums, 0);
    return result;
}

function backtrack(result, tempList, nums, start) {
    result.push([...tempList]);
    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        tempList.push(nums[i]);
        backtrack(result, tempList, nums, i + 1);
        tempList.pop();
    }
}

let nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
```

Kodni ishlatish uchun quyidagilarni amalga oshiring:

1. Kodni yozib, `subsetsWithDup` funksiyasini chaqiring.
2. `nums` massiviga takroriy elementlar qo'shing.
3. `console.log` funksiyasidan foydalanib, `subsetsWithDup` funksiyasining natijasini konsolga chiqaring.

Natijada, konsolga takroriy elementlar bo'lgan ro'yxatning noyob subsetlari chiqadi.
