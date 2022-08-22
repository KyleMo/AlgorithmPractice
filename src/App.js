import logo from './logo.svg';
import './App.css';
import Problem from './components/Problem.js'
import maxProfit from './algorithms/bestTimeToBuySell.js'
import isAnagram from './algorithms/validAnagram.js'
import mergeTwoLists from './algorithms/mergeTwoSortList';
import twoSums from './algorithms/twoSums.js'
import validParentheses from './algorithms/validParen.js'
import {isPalendrome, removePalindromeSub} from './algorithms/isPalendrome.js'
import countOfCharInString from './algorithms/stringCount.js'
import isValid from './algorithms/validParen.js';
import isValidParen from './algorithms/isValidParen';

import ListNode from './algorithms/ListNode.js'
import LinkedList from './algorithms/LinkedList.js'

/*
const head1 = new ListNode(1)
const head2 = new ListNode(2)
const nums1 = [2,4,5]
const nums2 = [3,4]

let curr1 = head1
let curr2 = head2

nums1.map((num) => {
  curr1.next = new ListNode(num)
  curr1 = curr1.next
})

nums2.map((num) => {
  curr2.next = new ListNode(num)
  curr2 = curr2.next
})

let list = mergeTwoLists(head1, head2)

while (list !== null){
  console.log(list.val)
  list = list.next
}

*/


console.log(isValidParen('{()[]}'))



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Structures and Algorithms</h1>
        <div className="problems">
          <ol>
            <Problem
              title="Two Sums"
              details="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order."
              input="Input: nums = [2,7,11,15], target = 9"
              expectedOutput="Output: [0,1]"
              inputPlaceholder="Enter an array without brackets. Ex: 1,9,5,6"
              ></Problem>
          </ol>


        </div>

      </header>
    </div>
  );
}

export default App;
