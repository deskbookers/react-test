export const ADD_BUG = 'ADD_BUG'
export const REMOVE_BUG = 'REMOVE_BUG'
export const CLOSE_BUG = 'CLOSE_BUG'

export function addBug(bugData) {
  return { type: ADD_BUG, bugData: bugData }
}

export function removeBug(bugId) {
  return { type: REMOVE_BUG, bugId: bugId}
}

export function closeBug(bugId) {
  return { type: CLOSE_BUG, bugId: bugId }
}