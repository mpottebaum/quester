import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import questions from '~/mock-data/questions.json'

import Question from './Question.svelte'

describe('Question', () => {
  const mockQuestion = questions[0]
  it('should render yo', () => {
    render(Question, { question: mockQuestion })
    const questionText = screen.getByText(mockQuestion.question)
    expect(questionText).toBeTruthy()
  })
})
