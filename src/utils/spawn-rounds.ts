import type { Question } from '~/types'

export function spawnRounds(questions: Question[], numRounds: number) {
  const rounds: Question[][] = []
  let iQs = 0
  for (let i = 0; i < numRounds; i++) {
    const isEven = i % 2 === 0
    const numQs = isEven ? 2 : 3
    const stopIndex = iQs + numQs
    const roundQs = []
    for (; iQs < stopIndex; iQs++) {
      const q = questions[iQs]
      roundQs.push(q)
    }
    rounds.push(roundQs)
  }
  return rounds
}
