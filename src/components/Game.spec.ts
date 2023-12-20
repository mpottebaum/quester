import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import questions from '~/mock-data/questions.json'
import type { Question } from '~/types'

import Game from './Game.svelte'

describe('Game', () => {
  const mockRounds: Question[][] = [questions.slice(0, 4)]
  it('should render yo', () => {
    render(Game, {
      rounds: mockRounds,
    })
    const categoryText = screen.getByText(mockRounds[0][0].category)
    expect(categoryText).toBeTruthy()
  })
})
