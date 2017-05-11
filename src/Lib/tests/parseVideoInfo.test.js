import { parseVideoInfo } from '../videos'
import { lastScriptContent, expectedOutput } from './fixtures/parseVideoInfo'

describe('Parse video information from last script in codeschool page', () => {
    it('should parse video info properly', () => {
        expect(parseVideoInfo()).toEqual([])
        expect(parseVideoInfo(lastScriptContent)).toBeInstanceOf(Array)
        expect(parseVideoInfo(lastScriptContent)).toEqual(expectedOutput)
    })
})
