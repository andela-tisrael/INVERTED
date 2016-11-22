'use strict';
class InvertedIndex {

    constructor() {
        this.docCount = [];
        this.count = 0;
        this.indexMap = {};
    }
    createIndex(filePath) {
        for (var object in filePath){
            this.docCount.push(object);
        }
        for (let object in filePath) {
            this.count += 1;
            let bookTitleArray = filePath[object].title.toLowerCase().match(/\w+/g);
            let bookTextArray = filePath[object].text.toLowerCase().match(/\w+/g);
            let wordIndex = new Set(bookTitleArray.concat(bookTextArray));
            let it = Array.from(wordIndex.values());
            this.mapWords(it, this.count);
        }

    }
    mapWords(word, tag) {
        for (let i in word) {
            if (word[i] in this.indexMap) {
                this.indexMap[word[i]].push(tag);
            } else {

                this.indexMap[word[i]] = [tag];
            }
        }
    }
    getIndex() {
        return this.indexMap;

    }
    searchIndex(word){
        // const result = [];

        for (let values in this.indexMap){

           if (word.indexOf(values)){
            //result.push(value);

           }
        }
        //console.log(result);
    }

}
export default InvertedIndex;
