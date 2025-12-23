// Test Cases for Hand Evaluator
// Use these to verify your hand evaluation functions

// ============================================
// ALL TEST HANDS
// ============================================

const testHands = {
    
    // Test 1: Royal Flush
    royalFlush: {
        hand: [
            { rank: 'A', suit: 'hearts', value: 14 },
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: 'Q', suit: 'hearts', value: 12 },
            { rank: 'J', suit: 'hearts', value: 11 },
            { rank: '10', suit: 'hearts', value: 10 }
        ],
        expected: {
            name: 'Royal Flush',
            value: 9
        }
    },
    
    // Test 2: Straight Flush
    straightFlush: {
        hand: [
            { rank: '9', suit: 'clubs', value: 9 },
            { rank: '8', suit: 'clubs', value: 8 },
            { rank: '7', suit: 'clubs', value: 7 },
            { rank: '6', suit: 'clubs', value: 6 },
            { rank: '5', suit: 'clubs', value: 5 }
        ],
        expected: {
            name: 'Straight Flush',
            value: 8,
            highCard: 9
        }
    },
    
    // Test 3: Four of a Kind
    fourOfAKind: {
        hand: [
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: 'K', suit: 'clubs', value: 13 },
            { rank: 'K', suit: 'spades', value: 13 },
            { rank: '2', suit: 'hearts', value: 2 }
        ],
        expected: {
            name: 'Four of a Kind',
            rank: 'K',
            value: 7
        }
    },
    
    // Test 4: Full House
    fullHouse: {
        hand: [
            { rank: 'Q', suit: 'hearts', value: 12 },
            { rank: 'Q', suit: 'diamonds', value: 12 },
            { rank: 'Q', suit: 'clubs', value: 12 },
            { rank: '7', suit: 'spades', value: 7 },
            { rank: '7', suit: 'hearts', value: 7 }
        ],
        expected: {
            name: 'Full House',
            rank: 'Qs over 7s',
            value: 6
        }
    },
    
    // Test 5: Flush
    flush: {
        hand: [
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: '10', suit: 'diamonds', value: 10 },
            { rank: '7', suit: 'diamonds', value: 7 },
            { rank: '5', suit: 'diamonds', value: 5 },
            { rank: '2', suit: 'diamonds', value: 2 }
        ],
        expected: {
            name: 'Flush',
            value: 5
        }
    },
    
    // Test 6: Straight
    straight: {
        hand: [
            { rank: '10', suit: 'hearts', value: 10 },
            { rank: '9', suit: 'diamonds', value: 9 },
            { rank: '8', suit: 'clubs', value: 8 },
            { rank: '7', suit: 'spades', value: 7 },
            { rank: '6', suit: 'hearts', value: 6 }
        ],
        expected: {
            name: 'Straight',
            rank: '10 high',
            value: 4,
            highCard: 10
        }
    },
    
    // Test 7: Wheel Straight (A-2-3-4-5)
    wheelStraight: {
        hand: [
            { rank: 'A', suit: 'hearts', value: 14 },
            { rank: '5', suit: 'diamonds', value: 5 },
            { rank: '4', suit: 'clubs', value: 4 },
            { rank: '3', suit: 'spades', value: 3 },
            { rank: '2', suit: 'hearts', value: 2 }
        ],
        expected: {
            name: 'Straight',
            rank: '5 high (wheel)',
            value: 4,
            highCard: 5  // Important: Ace is LOW in wheel!
        }
    },
    
    // Test 8: Three of a Kind
    threeOfAKind: {
        hand: [
            { rank: 'J', suit: 'hearts', value: 11 },
            { rank: 'J', suit: 'diamonds', value: 11 },
            { rank: 'J', suit: 'clubs', value: 11 },
            { rank: '9', suit: 'spades', value: 9 },
            { rank: '3', suit: 'hearts', value: 3 }
        ],
        expected: {
            name: 'Three of a Kind',
            rank: 'J',
            value: 3
        }
    },
    
    // Test 9: Two Pair
    twoPair: {
        hand: [
            { rank: 'A', suit: 'hearts', value: 14 },
            { rank: 'A', suit: 'diamonds', value: 14 },
            { rank: '8', suit: 'clubs', value: 8 },
            { rank: '8', suit: 'spades', value: 8 },
            { rank: '4', suit: 'hearts', value: 4 }
        ],
        expected: {
            name: 'Two Pair',
            rank: 'As and 8s',
            value: 2,
            kickers: ['4']
        }
    },
    
    // Test 10: Pair
    pair: {
        hand: [
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: '10', suit: 'clubs', value: 10 },
            { rank: '7', suit: 'spades', value: 7 },
            { rank: '3', suit: 'hearts', value: 3 }
        ],
        expected: {
            name: 'Pair',
            rank: 'K',
            value: 1,
            kickers: ['10', '7', '3']
        }
    },
    
    // Test 11: High Card
    highCard: {
        hand: [
            { rank: 'A', suit: 'hearts', value: 14 },
            { rank: 'J', suit: 'diamonds', value: 11 },
            { rank: '9', suit: 'clubs', value: 9 },
            { rank: '6', suit: 'spades', value: 6 },
            { rank: '2', suit: 'hearts', value: 2 }
        ],
        expected: {
            name: 'High Card',
            rank: 'A',
            value: 0,
            kickers: ['J', '9', '6', '2']
        }
    },
    
    // EDGE CASES
    
    // Edge Case 1: Unsorted Pair
    unsortedPair: {
        hand: [
            { rank: '3', suit: 'spades', value: 3 },
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: '7', suit: 'clubs', value: 7 },
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: '2', suit: 'hearts', value: 2 }
        ],
        expected: {
            name: 'Pair',
            rank: 'K',
            value: 1
        }
    },
    
    // Edge Case 2: Not a Straight (gap)
    almostStraight: {
        hand: [
            { rank: '9', suit: 'hearts', value: 9 },
            { rank: '8', suit: 'diamonds', value: 8 },
            { rank: '7', suit: 'clubs', value: 7 },
            { rank: '6', suit: 'spades', value: 6 },
            { rank: '4', suit: 'hearts', value: 4 }  // Gap at 5!
        ],
        expected: {
            name: 'High Card',
            rank: '9',
            value: 0
        }
    },
    
    // Edge Case 3: Not a Flush (mixed suits)
    notFlush: {
        hand: [
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: '9', suit: 'diamonds', value: 9 },
            { rank: '7', suit: 'clubs', value: 7 },
            { rank: '5', suit: 'spades', value: 5 },
            { rank: '2', suit: 'hearts', value: 2 }
        ],
        expected: {
            name: 'High Card',
            rank: 'K',
            value: 0
        }
    },
    
    // Edge Case 4: Full House (NOT just three of a kind)
    fullHouseNotThree: {
        hand: [
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: 'K', suit: 'clubs', value: 13 },
            { rank: '7', suit: 'spades', value: 7 },
            { rank: '7', suit: 'hearts', value: 7 }
        ],
        expected: {
            name: 'Full House',  // NOT Three of a Kind!
            value: 6
        }
    },
    
    // Edge Case 5: Three of a Kind (NOT full house)
    threeNotFull: {
        hand: [
            { rank: 'K', suit: 'hearts', value: 13 },
            { rank: 'K', suit: 'diamonds', value: 13 },
            { rank: 'K', suit: 'clubs', value: 13 },
            { rank: '9', suit: 'spades', value: 9 },
            { rank: '7', suit: 'hearts', value: 7 }
        ],
        expected: {
            name: 'Three of a Kind',  // NOT Full House!
            value: 3
        }
    }
};

// ============================================
// AUTOMATED TEST RUNNER
// ============================================

/**
 * Run all test cases and report results
 * @param {Function} evaluateHand - Your evaluateHand function
 */
function runAllTests(evaluateHand) {
    console.log('=== HAND EVALUATOR TEST SUITE ===\n');
    
    let passed = 0;
    let failed = 0;
    let failures = [];
    
    for (let testName in testHands) {
        let test = testHands[testName];
        let result = evaluateHand(test.hand);
        
        // Check if hand name matches
        let nameMatch = result.name === test.expected.name;
        
        // Check if value matches
        let valueMatch = result.value === test.expected.value;
        
        // Check optional fields
        let rankMatch = !test.expected.rank || result.rank === test.expected.rank;
        let highCardMatch = !test.expected.highCard || result.highCard === test.expected.highCard;
        
        let success = nameMatch && valueMatch && rankMatch && highCardMatch;
        
        if (success) {
            console.log(`✅ ${testName}`);
            console.log(`   Result: ${result.name} (value: ${result.value})`);
            passed++;
        } else {
            console.log(`❌ ${testName}`);
            console.log(`   Expected: ${test.expected.name} (value: ${test.expected.value})`);
            console.log(`   Got: ${result.name} (value: ${result.value})`);
            
            if (!nameMatch) console.log(`   ❌ Name mismatch`);
            if (!valueMatch) console.log(`   ❌ Value mismatch`);
            if (!rankMatch) console.log(`   ❌ Rank mismatch`);
            if (!highCardMatch) console.log(`   ❌ High card mismatch`);
            
            failed++;
            failures.push({
                test: testName,
                expected: test.expected,
                got: result
            });
        }
        console.log('');
    }
    
    // Summary
    let total = passed + failed;
    let percentage = Math.round((passed / total) * 100);
    
    console.log('='.repeat(50));
    console.log(`📊 RESULTS: ${passed}/${total} tests passed (${percentage}%)`);
    console.log('='.repeat(50));
    
    if (failed === 0) {
        console.log('🎉 PERFECT SCORE! All tests passed!');
    } else {
        console.log(`\n⚠️  ${failed} test(s) failed:\n`);
        failures.forEach(failure => {
            console.log(`   - ${failure.test}`);
        });
        console.log('\n💡 Review the failed tests and debug your code.');
    }
    
    return {
        passed: passed,
        failed: failed,
        total: total,
        percentage: percentage,
        failures: failures
    };
}

// ============================================
// SPECIFIC TEST FUNCTIONS
// ============================================

/**
 * Test only basic hands (pair, two pair, three of a kind)
 */
function testBasicHands(evaluateHand) {
    console.log('=== BASIC HANDS TEST ===\n');
    
    let basicTests = ['pair', 'twoPair', 'threeOfAKind', 'highCard'];
    
    basicTests.forEach(testName => {
        let test = testHands[testName];
        let result = evaluateHand(test.hand);
        
        console.log(`${testName}:`, result.name === test.expected.name ? '✅' : '❌');
        console.log(`   Expected: ${test.expected.name}`);
        console.log(`   Got: ${result.name}\n`);
    });
}

/**
 * Test only straights and flushes
 */
function testStraightsAndFlushes(evaluateHand) {
    console.log('=== STRAIGHTS & FLUSHES TEST ===\n');
    
    let tests = ['straight', 'wheelStraight', 'flush', 'straightFlush', 'royalFlush'];
    
    tests.forEach(testName => {
        let test = testHands[testName];
        let result = evaluateHand(test.hand);
        
        console.log(`${testName}:`, result.name === test.expected.name ? '✅' : '❌');
        console.log(`   Expected: ${test.expected.name}`);
        console.log(`   Got: ${result.name}\n`);
    });
}

/**
 * Test only edge cases
 */
function testEdgeCases(evaluateHand) {
    console.log('=== EDGE CASES TEST ===\n');
    
    let tests = [
        'wheelStraight',
        'unsortedPair',
        'almostStraight',
        'notFlush',
        'fullHouseNotThree',
        'threeNotFull'
    ];
    
    tests.forEach(testName => {
        let test = testHands[testName];
        let result = evaluateHand(test.hand);
        
        console.log(`${testName}:`, result.name === test.expected.name ? '✅' : '❌');
        console.log(`   Expected: ${test.expected.name}`);
        console.log(`   Got: ${result.name}\n`);
    });
}

/**
 * Test one specific hand
 */
function testSingleHand(evaluateHand, testName) {
    if (!testHands[testName]) {
        console.log(`❌ Test "${testName}" not found!`);
        console.log(`Available tests: ${Object.keys(testHands).join(', ')}`);
        return;
    }
    
    console.log(`=== TESTING: ${testName} ===\n`);
    
    let test = testHands[testName];
    console.log('Input hand:');
    test.hand.forEach(card => {
        console.log(`   ${card.rank} of ${card.suit}`);
    });
    
    console.log('\nExpected result:');
    console.log('   ', JSON.stringify(test.expected, null, 2));
    
    console.log('\nActual result:');
    let result = evaluateHand(test.hand);
    console.log('   ', JSON.stringify(result, null, 2));
    
    let success = result.name === test.expected.name && result.value === test.expected.value;
    console.log('\n' + (success ? '✅ PASS' : '❌ FAIL'));
}

// ============================================
// EXPORT FOR USE IN YOUR CODE
// ============================================

// If using Node.js modules:
// module.exports = { testHands, runAllTests, testBasicHands, testStraightsAndFlushes, testEdgeCases, testSingleHand };

// To use in your code:
// const { runAllTests } = require('./test-cases.js');
// runAllTests(evaluateHand);
