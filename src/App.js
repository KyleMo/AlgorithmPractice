import logo from './logo.svg';
import './App.css';
import Problem from './components/Problem.js'
import twoSums from './algorithms/twoSums.js'
import {isPalendrome, removePalindromeSub} from './algorithms/isPalendrome.js'
import countOfCharInString from './algorithms/stringCount.js'


console.log(countOfCharInString('s','snakes'))
console.log(countOfCharInString('i','mississippi'))




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
