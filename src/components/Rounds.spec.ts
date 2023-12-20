import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import questions from '~/mock-data/questions.json'

import Rounds from './Rounds.svelte'
import type { Question } from '~/types'

describe('Rounds', () => {
  const mockRounds: Question[][] = [questions.slice(0, 4)]
  it('should render yo', () => {
    render(Rounds, {
      rounds: mockRounds,
      currentRound: 1,
      onCategoryClick: vi.fn(),
    })
    const categoryText = screen.getByText(mockRounds[0][0].category)
    expect(categoryText).toBeTruthy()
  })
})
