/**
 * Merges three sorted collections into one sorted collection.
 * 
 * @param collection_1 The first sorted collection (sorted from min to max).
 * @param collection_2 The second sorted collection (sorted from max to min).
 * @param collection3 The third sorted collection (sorted from min to max).
 * @param collection_merge The array to store the merged result.
 * @returns The merged sorted collection.
 */
function merge(collection_1: number[], collection_2: number[], collection_merge: number[], collection3: number[]): number[] {
    // Initialize pointers
    let pointer_3 = 0;
    let pointer_1 = 0;
    let pointer_2 = collection_2.length - 1;
    let pointer_4 = 0;
  
    // Loop until all collections are processed
    while (pointer_1 < collection_1.length || pointer_2 >= 0 || pointer_4 < collection3.length) {
        // Find the minimum value among the current pointers
        let min = Infinity;
        if (pointer_1 < collection_1.length) min = Math.min(min, collection_1[pointer_1]);
        if (pointer_2 >= 0) min = Math.min(min, collection_2[pointer_2]);
        if (pointer_4 < collection3.length) min = Math.min(min, collection3[pointer_4]);
  
        // Place the minimum value into the merge collection and move the pointer accordingly
        if (min === collection_1[pointer_1]) {
            collection_merge[pointer_3++] = collection_1[pointer_1++];
        } else if (min === collection_2[pointer_2]) {
            collection_merge[pointer_3++] = collection_2[pointer_2--];
        } else {
            collection_merge[pointer_3++] = collection3[pointer_4++];
        }
    }
  
    return collection_merge;
}

export default merge;
