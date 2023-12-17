import { describe, expect, it } from 'vitest'
import questions from '~/mock-data/questions.json'
import { spawnRounds } from './spawn-rounds'

describe('spawnRounds', () => {
  it('should create rounds w/ correct structure', () => {
    const expectedNumRounds = 5
    const expectedNumQsPerRound = [2, 3, 2, 3, 2]
    const result = spawnRounds(questions, expectedNumRounds)

    expect(result.length).toBe(expectedNumRounds)
    expectedNumQsPerRound.forEach((numQs, i) => {
      expect(result[i].length).toBe(numQs)
    })
  })
})
