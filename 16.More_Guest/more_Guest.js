"use strict";
let Guest_list = ['madiha', 'rumi', 'azka'];
// for (let i = 0; i < Guest_list.length; i++) {
// console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
// }
let absent_Guest = 'madiha';
let new_Guest = 'diya';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
}
console.log(`Miss. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! we find a big table so we are inviting 3 more guests.');
Guest_list.unshift('Miss Maryam khan');
Guest_list.slice(2, 0, 'Miss Ayesha');
Guest_list.push('Miss Farhana');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
}
