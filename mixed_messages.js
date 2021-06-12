words = {
    'subject'   :['The cat','Jacob','The car','Kelly','Aaron','I'],
    'verb'      :['stretched','stood','turned','twirled','opened','made','\'m'],
    'other'      :['on his tiptoes','the corner','in circles','the door','a picture','sorry']
}

function getRandomNum(array){
    return Math.floor(Math.random()*array.length);
}

function main(object){

    const letter = [];
    for(let word in object){
       let index = getRandomNum(words[word]);
       letter.push(words[word][index]);
    }
    return letter.join(' ');
    
}

console.log(main(words));