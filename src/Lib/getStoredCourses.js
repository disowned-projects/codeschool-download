import Fs from 'fs-extra'

import { coursesJsonPath, saveFile } from './file'

export default async () => {
    // get storedCourses object from previous extraction saved in
    // `courses.json` in cwd and load it.
    // if this is the first time or there is no `courses.json` file, then
    // create a new empty object and save it in `courses.json`.
    let storedCourses = {}
    if (Fs.existsSync(coursesJsonPath)) {
        try {
            storedCourses = require(coursesJsonPath)
            return storedCourses
        } catch (err) {
            storedCourses = {}
            await saveFile(storedCourses)
            return storedCourses
        }
    } else {
        await saveFile(storedCourses)
        return storedCourses
    }
}
