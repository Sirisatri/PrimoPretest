import merge from '../src/merge';
import { expect } from 'chai';

describe('merge function', () => {
    it('should merge sorted arrays properly', () => {
        const collection_1 = [1, 3, 5, 7, 9];
        const collection_2 = [10, 8, 6, 4, 2];
        const collection_3 = [0, 11, 12, 13, 14];

        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });

      
    it('should handle arrays with different lengths', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [10, 8, 6, 4, 2];
        const collection_3 = [15];

        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput = [1, 2, 3, 4, 5, 6, 8, 10, 15];

        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });

    it('should handle ALL empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput: number[] = [];

        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });

    it('should handle 1 empty array', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [10, 8, 6, 4, 2];
        const collection_3: number[] = [];
    
        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput = [1, 2, 3, 4, 5, 6, 8, 10];
        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });

    it('should handle 2 empty arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
    
        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput = [1, 3, 5];
        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });

    it('should handle arrays with same element', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [5, 3, 3];
        const collection_3 = [1, 3, 5];;
    
        const totalLength = collection_1.length + collection_2.length + collection_3.length;
        const collection_merge: number[] = new Array(totalLength);
        const expectedOutput = [1, 1, 3, 3, 3, 3, 5, 5, 5];;
        expect(merge(collection_1, collection_2, collection_merge, collection_3)).to.deep.equal(expectedOutput);
    });
    

});
